import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notifyBookingClient, notifyDriver } from "@/lib/push";
import { haversineDistance } from "@/lib/geo";
import {
  sendEmail,
  buildDriverNotificationEmail,
  buildCancelledByDriverClientEmail,
} from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { createNotification } from "@/lib/notifications";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { driverPool, isDemoEmail } from "@/lib/demo";
import { excludedDriversFor } from "@/lib/moderation";
import { generalPlace } from "@/lib/p2p";
import { ACCEPTED_BOOKING_INCLUDE, sendAcceptedNotices } from "@/lib/booking-accepted";
import { serverTrack } from "@/lib/usage-server";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { status, locale: reqLocale } = body;
    const locale: "fr" | "en" = reqLocale === "en" ? "en" : "fr";

    if (!["ACCEPTED", "REJECTED", "COMPLETED", "CANCELLED"].includes(status)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    // Verify the booking belongs to this driver OR the driver is invited
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: ACCEPTED_BOOKING_INCLUDE,
    });

    if (!booking) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
    }

    const isOriginalDriver = booking.driverId === session.user.id;
    const isInvitedDriver = booking.invitedDriverIds.includes(session.user.id);

    if (!isOriginalDriver && !isInvitedDriver) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
    }

    // Mesure d'usage : la réponse du chauffeur, une fois enregistrée (booking_accepted, booking_rejected…).
    const answered = (extra: Record<string, string | number | boolean | null> = {}) =>
      serverTrack(session.user!.id, `booking_${String(status).toLowerCase()}`, {
        source: booking.source,
        invited: isInvitedDriver && !isOriginalDriver,
        escalation_phase: booking.escalationPhase,
        minutes_since_request: Math.round((Date.now() - booking.createdAt.getTime()) / 60_000),
        price: booking.lockedPrice ?? booking.estimatedPrice ?? null,
        ...extra,
      });

    // --- CANCELLED (by driver) ---
    if (status === "CANCELLED") {
      if (!isOriginalDriver) {
        return NextResponse.json({ error: "Seul le chauffeur assigné peut annuler la course" }, { status: 403 });
      }
      if (booking.status !== "ACCEPTED") {
        return NextResponse.json({ error: "Seules les courses acceptées peuvent être annulées" }, { status: 400 });
      }

      await prisma.booking.update({
        where: { id: params.id },
        data: { status: "CANCELLED", cancelledBy: "DRIVER" },
      });

      createNotification({
        type: "BOOKING_CANCELLED",
        title: `Course annulée #${booking.reference}`,
        body: `${booking.clientName} — annulée par le chauffeur`,
        metadata: { bookingId: booking.id, reference: booking.reference, driverId: session.user.id },
      });

      // Send email to client/org
      try {
        const driver = await prisma.driver.findUnique({
          where: { id: session.user.id },
          select: { firstName: true, lastName: true, companyName: true },
        });

        const dateLocale = locale === "en" ? "en-US" : "fr-FR";
        const dateFormatted = new Date(booking.requestedDate).toLocaleDateString(dateLocale, {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        const clientEmailTo = booking.organization ? booking.organization.email : booking.clientEmail;
        const clientDisplayName = booking.organization ? booking.organization.contactName : booking.clientName;
        const driverDisplayName = driver
          ? (driver.companyName || `${driver.firstName} ${driver.lastName}`)
          : "le chauffeur";

        const cancelMail = buildCancelledByDriverClientEmail({
          clientName: clientDisplayName,
          driverName: driverDisplayName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateFormatted,
          reference: booking.reference,
          price: booking.lockedPrice,
          locale,
        });
        if (clientEmailTo) await sendEmail({ to: clientEmailTo, ...cancelMail });
        await notifyBookingClient(booking, "cancelledByDriver", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate });
        // Course transmise : le chauffeur qui l'a transmise apprend l'annulation.
        if (booking.source === "P2P" && booking.referrerDriverId) {
          await notifyDriver(booking.referrerDriverId, "cancelledByDriver", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate }, "/dashboard/p2p");
        }
      } catch (error) {
        console.error("Failed to send cancellation email:", error);
      }

      answered();
      return NextResponse.json({ message: "Course annulée" });
    }

    // --- COMPLETED ---
    if (status === "COMPLETED") {
      if (!isOriginalDriver) {
        return NextResponse.json({ error: "Seul le chauffeur assigné peut terminer la course" }, { status: 403 });
      }

      // Credit cagnotte for org bookings (skip for INDIVIDUAL accounts)
      if (booking.organizationId && booking.lockedPrice) {
        const org = await prisma.organization.findUnique({
          where: { id: booking.organizationId },
          select: { type: true },
        });

        if (org && org.type !== "INDIVIDUAL") {
          const cagnotteAmount = booking.lockedPrice * 0.05;

          await prisma.$transaction([
            prisma.booking.update({
              where: { id: params.id },
              data: { status },
            }),
            prisma.cagnotteTransaction.create({
              data: {
                organizationId: booking.organizationId,
                bookingId: booking.id,
                amount: cagnotteAmount,
              },
            }),
            prisma.organization.update({
              where: { id: booking.organizationId },
              data: {
                cagnotteBalance: { increment: cagnotteAmount },
              },
            }),
          ]);

          createNotification({
            type: "BOOKING_COMPLETED",
            title: `Course terminée #${booking.reference}`,
            body: `${booking.clientName} — ${booking.departureName} → ${booking.arrivalName}`,
            metadata: { bookingId: booking.id, reference: booking.reference },
          });
          answered();
          return NextResponse.json({ message: "Statut mis à jour, cagnotte créditée" });
        }
      }

      await prisma.booking.update({
        where: { id: params.id },
        data: { status },
      });

      createNotification({
        type: "BOOKING_COMPLETED",
        title: `Course terminée #${booking.reference}`,
        body: `${booking.clientName} — ${booking.departureName} → ${booking.arrivalName}`,
        metadata: { bookingId: booking.id, reference: booking.reference },
      });

      answered();
      return NextResponse.json({ message: "Statut mis à jour" });
    }

    // --- ACCEPTED ---
    if (status === "ACCEPTED") {
      // Race condition protection: only update if still PENDING
      const updated = await prisma.booking.updateMany({
        where: { id: params.id, status: "PENDING" },
        data: {
          status: "ACCEPTED",
          driverId: session.user.id,
        },
      });

      if (updated.count === 0) {
        return NextResponse.json(
          { error: "Cette course a déjà été acceptée" },
          { status: 409 }
        );
      }

      createNotification({
        type: "BOOKING_ACCEPTED",
        title: `Course acceptée #${booking.reference}`,
        body: `${booking.clientName} — ${booking.departureName} → ${booking.arrivalName}`,
        metadata: { bookingId: booking.id, reference: booking.reference, driverId: session.user.id },
      });

      await sendAcceptedNotices(booking, session.user.id, locale);

      answered();
      return NextResponse.json({ message: "Statut mis à jour" });
    }

    // --- REJECTED ---
    if (status === "REJECTED") {
      // « Passer à un collègue » : la course garde un lien à partager (sans les coordonnées du client).
      const share = body.share === true && booking.status === "PENDING" ? await shareRide(booking, session.user.id) : null;

      // Case 1: Invited driver rejects -> just remove from invitedDriverIds
      if (isInvitedDriver && !isOriginalDriver) {
        await prisma.booking.update({
          where: { id: params.id },
          data: {
            invitedDriverIds: booking.invitedDriverIds.filter((id) => id !== session.user.id),
          },
        });
        answered({ shared: Boolean(share) });
        return NextResponse.json({ message: "Statut mis à jour", share });
      }

      // Case 2: Original driver rejects (phase 0) -> escalate immediately
      if (isOriginalDriver && booking.escalationPhase === 0) {
        // Find up to 3 nearby drivers excluding original
        const allDrivers = await prisma.driver.findMany({
          where: {
            ...driverPool(isDemoEmail(booking.clientEmail)),
            isActive: true,
            zoneLat: { not: null },
            zoneLng: { not: null },
            id: { notIn: [session.user.id, ...(await excludedDriversFor(booking))] },
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
          // No drivers -> alert admin directly
          await prisma.booking.update({
            where: { id: params.id },
            data: {
              driverId: null,
              escalationPhase: 2,
            },
          });

          // Send admin alert
          await notifyAdmin(booking);
        } else {
          const invitedIds = nearbyDrivers.map((d) => d.id);
          await prisma.booking.update({
            where: { id: params.id },
            data: {
              driverId: null,
              escalationPhase: 1,
              escalatedAt: new Date(),
              invitedDriverIds: invitedIds,
            },
          });

          // Notify invited drivers
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
            await notifyDriver(driver.id, "newRide", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate });

            if (driver.notifySms && driver.phone) {
              const smsText = `TaxiNeo - Course disponible #${booking.reference}. ${booking.departureName} → ${booking.arrivalName}. Connectez-vous pour accepter.`;
              await sendSms(driver.phone, smsText);
            }
          }
        }

        // Do NOT send rejection email to client
        answered({ shared: Boolean(share) });
        return NextResponse.json({ message: "Statut mis à jour", share });
      }

      // Case 3 passée à un collègue : elle reste ouverte, le client n'est pas prévenu d'un refus.
      if (share) {
        await prisma.booking.update({ where: { id: params.id }, data: { driverId: null } });
        answered({ shared: Boolean(share) });
        return NextResponse.json({ message: "Statut mis à jour", share });
      }

      // Case 3: Original driver rejects in later phases -> just set status
      await prisma.booking.update({
        where: { id: params.id },
        data: { status: "REJECTED" },
      });

      createNotification({
        type: "BOOKING_REJECTED",
        title: `Course refusée #${booking.reference}`,
        body: `${booking.clientName} — ${booking.departureName} → ${booking.arrivalName}`,
        metadata: { bookingId: booking.id, reference: booking.reference, driverId: session.user.id },
      });

      // Send rejection email to client
      if (booking.clientEmail && booking.clientEmail !== "noemail@taxineo.fr") {
        try {
          const rejectDriver = await prisma.driver.findUnique({
            where: { id: session.user.id },
            select: { firstName: true, lastName: true, companyName: true },
          });

          const dateLocale = locale === "en" ? "en-US" : "fr-FR";
          const dateFormatted = new Date(booking.requestedDate).toLocaleDateString(dateLocale, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          const clientEmailTo = booking.organization ? booking.organization.email : booking.clientEmail;
          const clientDisplayName = booking.organization ? booking.organization.contactName : booking.clientName;
          const { buildBookingRejectedClientEmail } = await import("@/lib/email");
          const driverDisplayName = rejectDriver
            ? (rejectDriver.companyName || `${rejectDriver.firstName} ${rejectDriver.lastName}`)
            : "le chauffeur";

          const rejectionMail = buildBookingRejectedClientEmail({
            clientName: clientDisplayName,
            driverName: driverDisplayName,
            departure: booking.departureName,
            arrival: booking.arrivalName,
            date: dateFormatted,
            reference: booking.reference,
            price: booking.lockedPrice,
            locale,
          });
          await sendEmail({ to: clientEmailTo, ...rejectionMail });
          await notifyBookingClient(booking, "rejected", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate });
        } catch (error) {
          console.error("Failed to send rejection email:", error);
        }
      }

      answered();
      return NextResponse.json({ message: "Statut mis à jour" });
    }

    return NextResponse.json({ message: "Statut mis à jour" });
  } catch (error) {
    console.error("Booking update error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

/** Lien de la course à partager ; adresses ramenées à la ville tant que personne ne l'a acceptée. */
async function shareRide(
  booking: { id: string; source: string; p2pToken: string | null; sharedByDriverId: string | null; departureName: string; arrivalName: string; requestedDate: Date; lockedPrice: number | null; estimatedPrice: number | null },
  driverId: string
) {
  const p2pToken = booking.p2pToken ?? randomUUID();
  await prisma.booking.update({
    where: { id: booking.id },
    // Course transmise (P2P) : elle a déjà son chauffeur d'origine (referrerDriverId).
    data: booking.source === "P2P" ? { p2pToken } : { p2pToken, sharedByDriverId: booking.sharedByDriverId ?? driverId, sharedAt: new Date() },
  });
  const driver = await prisma.driver.findUnique({ where: { id: driverId }, select: { firstName: true } });
  return {
    p2pToken,
    departureName: generalPlace(booking.departureName),
    arrivalName: generalPlace(booking.arrivalName),
    requestedDate: booking.requestedDate.toISOString(),
    lockedPrice: booking.lockedPrice ?? booking.estimatedPrice,
    sharerFirstName: driver?.firstName ?? "",
  };
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
  for (const adminEmail of adminEmails) {
    await sendEmail({
      to: adminEmail,
      subject: `[ALERTE] Course #${booking.reference} sans chauffeur`,
      html,
    });
  }
}
