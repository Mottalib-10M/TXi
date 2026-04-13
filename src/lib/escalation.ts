import { prisma } from "@/lib/prisma";
import { haversineDistance } from "@/lib/geo";
import { sendEmail, buildDriverNotificationEmail } from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const ESCALATION_DELAY_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Run escalation checks for pending bookings.
 * Called inline from API routes — no cron needed.
 * Safe to call multiple times (idempotent via escalationPhase).
 */
export async function runEscalation(): Promise<{ phase1: number; phase2: number }> {
  const now = new Date();
  const fiveMinAgo = new Date(now.getTime() - ESCALATION_DELAY_MS);

  // --- Phase 1: Bookings pending > 5 min, not yet escalated ---
  const phase1Bookings = await prisma.booking.findMany({
    where: {
      status: "PENDING",
      escalationPhase: 0,
      createdAt: { lt: fiveMinAgo },
    },
    include: {
      driver: { select: { id: true, firstName: true, lastName: true } },
    },
  });

  for (const booking of phase1Bookings) {
    const allDrivers = await prisma.driver.findMany({
      where: {
        isActive: true,
        zoneLat: { not: null },
        zoneLng: { not: null },
        id: { not: booking.driverId ?? undefined },
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
      await notifyAdmin(booking);
      await prisma.booking.update({
        where: { id: booking.id },
        data: { escalationPhase: 2 },
      });
      continue;
    }

    const invitedIds = nearbyDrivers.map((d) => d.id);
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        escalationPhase: 1,
        escalatedAt: now,
        invitedDriverIds: invitedIds,
      },
    });

    const dateFormatted = format(new Date(booking.requestedDate), "dd MMMM yyyy 'à' HH:mm", { locale: fr });

    for (const driver of nearbyDrivers) {
      if (driver.notifyEmail) {
        const emailData = buildDriverNotificationEmail({
          driverName: driver.firstName,
          clientName: booking.clientName,
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

      if (driver.notifySms && driver.phone) {
        const smsText = `TaxiNeo - Course disponible #${booking.reference}. ${booking.departureName} → ${booking.arrivalName}. Connectez-vous pour accepter.`;
        await sendSms(driver.phone, smsText);
      }
    }
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

  for (const booking of phase2Bookings) {
    await notifyAdmin(booking);
    await prisma.booking.update({
      where: { id: booking.id },
      data: { escalationPhase: 2 },
    });
  }

  return { phase1: phase1Bookings.length, phase2: phase2Bookings.length };
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
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Prix</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${booking.lockedPrice ? `${booking.lockedPrice.toFixed(2).replace(".", ",")} €` : "—"}</td></tr>
        <tr><td style="padding: 8px; color: #737373;">Référence</td><td style="padding: 8px; font-weight: 500;">#${booking.reference}</td></tr>
      </table>
      <h3 style="color: #171717; font-size: 15px;">Chauffeurs contactés</h3>
      <ul style="margin: 8px 0 20px; padding-left: 20px;">${driversListHtml}</ul>
      <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo (alerte automatique)</p>
    </div>
  `;

  await sendEmail({
    to: "amradif@gmail.com",
    subject: `[ALERTE] Course #${booking.reference} sans chauffeur`,
    html,
  });
}
