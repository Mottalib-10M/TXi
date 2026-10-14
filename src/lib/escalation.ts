import { prisma } from "@/lib/prisma";
import { notifyDriver } from "@/lib/push";
import { haversineDistance } from "@/lib/geo";
import { sendEmail, buildDriverNotificationEmail, buildEscalationTimeoutEmail } from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { createNotification } from "@/lib/notifications";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { driverPool, isDemoEmail } from "@/lib/demo";
import { excludedDriversFor } from "@/lib/moderation";
import { P2P_OPEN_DELAY_MS } from "@/lib/p2p";

const ESCALATION_DELAY_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Run escalation checks for pending bookings.
 * Called inline from API routes and pages (escalateIfDue), and by the daily cron.
 * Safe to call multiple times (idempotent via escalationPhase).
 *
 * Course transmise (P2P) : sans réponse du collègue 30 minutes après sa création,
 * elle est ouverte aux 3 chauffeurs les plus proches (hors chauffeur qui l'a transmise) ;
 * ils ont pour contact le chauffeur qui l'a transmise, qui garde sa commission.
 */
export async function runEscalation(): Promise<{ phase1: number; phase2: number }> {
  const now = new Date();
  const fiveMinAgo = new Date(now.getTime() - ESCALATION_DELAY_MS);
  const p2pAgo = new Date(now.getTime() - P2P_OPEN_DELAY_MS);

  console.log(`[Escalation] Running at ${now.toISOString()}, checking bookings before ${fiveMinAgo.toISOString()}`);

  // --- Phase 1: Bookings pending > 15 min (course transmise : > 30 min), not yet escalated ---
  const phase1Bookings = await prisma.booking.findMany({
    where: {
      status: "PENDING",
      escalationPhase: 0,
      OR: [
        { source: { not: "P2P" }, createdAt: { lt: fiveMinAgo } },
        { source: "P2P", createdAt: { lt: p2pAgo }, requestedDate: { gt: now } },
      ],
    },
    include: {
      driver: { select: { id: true, firstName: true, lastName: true } },
      referrerDriver: { select: { id: true, firstName: true, lastName: true, phone: true, email: true } },
    },
  });

  console.log(`[Escalation] Phase 1: found ${phase1Bookings.length} booking(s) to escalate`);

  for (const booking of phase1Bookings) {
    if (isDemoEmail(booking.clientEmail)) continue;
    const isP2P = booking.source === "P2P";
    // Course transmise par un chauffeur de démo : jamais ouverte aux vrais chauffeurs.
    if (isP2P && isDemoEmail(booking.referrerDriver?.email)) continue;
    const excluded = [booking.driverId, isP2P ? booking.referrerDriverId : null].filter((id): id is string => Boolean(id));
    excluded.push(...(await excludedDriversFor(booking)));
    const allDrivers = await prisma.driver.findMany({
      where: {
        ...driverPool(),
        isActive: true,
        zoneLat: { not: null },
        zoneLng: { not: null },
        id: { notIn: excluded },
      },
    });

    const nearbyDrivers = allDrivers
      .filter((d) => {
        if (!d.zoneLat || !d.zoneLng) return false;
        const distance = haversineDistance(
          booking.departureLat,
          booking.departureLng,
          d.zoneLat,
          d.zoneLng
        );
        return distance <= d.zoneRadius;
      })
      .sort((a, b) => {
        const distA = haversineDistance(booking.departureLat, booking.departureLng, a.zoneLat!, a.zoneLng!);
        const distB = haversineDistance(booking.departureLat, booking.departureLng, b.zoneLat!, b.zoneLng!);
        return distA - distB;
      })
      .slice(0, 3);

    if (nearbyDrivers.length === 0) {
      // Réservée d'abord (escalationPhase 0 → 2) : deux passages simultanés n'alertent pas deux fois.
      const claimed = await prisma.booking.updateMany({
        where: { id: booking.id, escalationPhase: 0 },
        data: { escalationPhase: 2 },
      });
      if (claimed.count === 0) continue;
      console.log(`[Escalation] Booking #${booking.reference}: no nearby drivers found, notifying admin directly`);
      await notifyAdmin(booking);
      continue;
    }

    const invitedIds = nearbyDrivers.map((d) => d.id);
    const claimed = await prisma.booking.updateMany({
      where: { id: booking.id, escalationPhase: 0 },
      data: {
        escalationPhase: 1,
        escalatedAt: now,
        invitedDriverIds: invitedIds,
        ...(isP2P ? { p2pOpenedAt: now } : {}),
      },
    });
    if (claimed.count === 0) continue;
    console.log(`[Escalation] Booking #${booking.reference}: inviting ${nearbyDrivers.length} drivers → Phase 1`);

    const dateFormatted = format(new Date(booking.requestedDate), "dd MMMM yyyy 'à' HH:mm", { locale: fr });

    // Notify the original driver that the 15-min window has expired
    if (booking.driver) {
      const originalDriver = await prisma.driver.findUnique({
        where: { id: booking.driver.id },
        select: { email: true, notifyEmail: true, firstName: true },
      });
      if (originalDriver?.notifyEmail) {
        const timeoutEmail = buildEscalationTimeoutEmail({
          driverName: originalDriver.firstName,
          reference: booking.reference,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateFormatted,
          bookingId: booking.id,
          price: booking.lockedPrice,
          locale: "fr",
        });
        await sendEmail({ to: originalDriver.email, ...timeoutEmail });
        console.log(`[Escalation] Timeout email sent to original driver ${originalDriver.firstName} for #${booking.reference}`);
      }
      await notifyDriver(booking.driver.id, "timeout", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate });
    }

    // Course transmise : le chauffeur qui l'a transmise apprend qu'elle est proposée aux chauffeurs proches.
    if (isP2P && booking.referrerDriverId) {
      await notifyDriver(booking.referrerDriverId, "p2pOpened", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate }, "/dashboard/p2p");
    }

    // Course transmise : le contact donné aux chauffeurs proches est le chauffeur qui l'a transmise.
    const referrerName = booking.referrerDriver ? `${booking.referrerDriver.firstName} ${booking.referrerDriver.lastName}`.trim() : "";
    const contactName = isP2P && referrerName ? `${referrerName} (chauffeur Taxineo, course transmise)` : booking.clientName;

    for (const driver of nearbyDrivers) {
      if (driver.notifyEmail) {
        const emailData = buildDriverNotificationEmail({
          driverName: driver.firstName,
          clientName: contactName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateFormatted,
          reference: booking.reference,
          bookingId: booking.id,
          price: booking.lockedPrice,
          source: booking.source,
          locale: "fr",
        });
        await sendEmail({ to: driver.email, ...emailData });
      }
      await notifyDriver(driver.id, "newRide", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate });

      if (driver.notifySms && driver.phone) {
        const smsText = isP2P && referrerName
          ? `TaxiNeo - Course disponible #${booking.reference}, transmise par ${referrerName}. ${booking.departureName} → ${booking.arrivalName}. Connectez-vous pour accepter.`
          : `TaxiNeo - Course disponible #${booking.reference}. ${booking.departureName} → ${booking.arrivalName}. Connectez-vous pour accepter.`;
        await sendSms(driver.phone, smsText);
      }
    }

    createNotification({
      type: "ESCALATION_PHASE1",
      title: `Escalade phase 1 — #${booking.reference}`,
      body: `${isP2P ? `Course transmise par ${referrerName}` : booking.clientName} — ${nearbyDrivers.length} chauffeur(s) invité(s)`,
      metadata: { bookingId: booking.id, reference: booking.reference, invitedCount: nearbyDrivers.length },
    });
  }

  // --- Phase 2: Escalated bookings still pending after another 5 min ---
  const phase2Bookings = await prisma.booking.findMany({
    where: {
      status: "PENDING",
      escalationPhase: 1,
      escalatedAt: { lt: fiveMinAgo },
    },
    include: {
      driver: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
    },
  });

  console.log(`[Escalation] Phase 2: found ${phase2Bookings.length} booking(s) without response`);

  for (const booking of phase2Bookings) {
    if (isDemoEmail(booking.clientEmail)) continue;
    const claimed = await prisma.booking.updateMany({
      where: { id: booking.id, escalationPhase: 1 },
      data: { escalationPhase: 2 },
    });
    if (claimed.count === 0) continue;
    console.log(`[Escalation] Booking #${booking.reference}: no response after escalation, notifying admin`);
    await notifyAdmin(booking);

    createNotification({
      type: "ESCALATION_PHASE2",
      title: `Escalade phase 2 — #${booking.reference}`,
      body: `${booking.clientName} — aucun chauffeur n'a répondu, admin notifié`,
      metadata: { bookingId: booking.id, reference: booking.reference },
    });
  }

  console.log(`[Escalation] Done. Phase1=${phase1Bookings.length}, Phase2=${phase2Bookings.length}`);
  return { phase1: phase1Bookings.length, phase2: phase2Bookings.length };
}

let lastRun = 0;

/**
 * Déclenchement à la lecture : les pages et routes très consultées (espace chauffeur,
 * organisation, administration, accueil de l'app, lien d'une course transmise) appellent
 * cette fonction ; elle lance runEscalation au plus une fois par minute et par instance.
 * Le cron de Vercel (une fois par jour) et le passage planifié GitHub
 * (.github/workflows/escalade.yml, toutes les 10 minutes) complètent.
 */
export async function escalateIfDue(): Promise<void> {
  if (Date.now() - lastRun < 60_000) return;
  lastRun = Date.now();
  try {
    await runEscalation();
  } catch (e) {
    console.error("Escalation error:", e);
  }
}

async function notifyAdmin(booking: {
  id: string;
  reference: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  departureName: string;
  arrivalName: string;
  requestedDate: Date;
  lockedPrice: number | null;
  estimatedPrice: number | null;
  driverId: string | null;
  invitedDriverIds: string[];
}) {
  const allDriverIds = [
    ...(booking.driverId ? [booking.driverId] : []),
    ...booking.invitedDriverIds,
  ];

  const contactedDrivers = allDriverIds.length > 0
    ? await prisma.driver.findMany({
        where: { id: { in: allDriverIds } },
        select: { firstName: true, lastName: true, email: true, phone: true },
      })
    : [];

  const dateFormatted = format(new Date(booking.requestedDate), "dd MMMM yyyy 'à' HH:mm", { locale: fr });

  const driversListHtml = contactedDrivers.length > 0
    ? contactedDrivers
        .map((d) => `<li>${d.firstName} ${d.lastName} — ${d.email} — ${d.phone || "pas de tél."}</li>`)
        .join("")
    : "<li>Aucun chauffeur contacté</li>";

  const html = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626;">[ALERTE] Course #${booking.reference} sans chauffeur</h2>
      <p>Aucun chauffeur n'a accepté cette course après l'escalade automatique.</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Client</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.clientName}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.clientPhone || "—"}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.clientEmail}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.departureName}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.arrivalName}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${dateFormatted}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Prix</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500; color: #059669;">${(booking.lockedPrice || booking.estimatedPrice) ? `${(booking.lockedPrice || booking.estimatedPrice)!.toFixed(2).replace(".", ",")} €` : "—"}</td></tr>
        <tr><td style="padding: 8px; color: #737373;">Référence</td><td style="padding: 8px; font-weight: 500;">#${booking.reference}</td></tr>
      </table>
      <h3 style="color: #171717; font-size: 15px;">Chauffeurs contactés</h3>
      <ul style="margin: 8px 0 20px; padding-left: 20px;">${driversListHtml}</ul>
      <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo (alerte automatique)</p>
    </div>
  `;

  const adminEmails = (process.env.ADMIN_EMAILS || "support@taxineo.fr,sni.taxi@outlook.fr").split(",").map((e) => e.trim()).filter(Boolean);
  console.log(`[Escalation] Sending admin alert email for #${booking.reference} to ${adminEmails.join(", ")}`);
  for (const adminEmail of adminEmails) {
    await sendEmail({
      to: adminEmail,
      subject: `[ALERTE] Course #${booking.reference} sans chauffeur`,
      html,
    });
  }
  console.log(`[Escalation] Admin alert email sent for #${booking.reference}`);
}
