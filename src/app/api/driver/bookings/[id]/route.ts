import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { haversineDistance } from "@/lib/geo";
import {
  sendEmail,
  buildBookingAcceptedClientEmail,
  buildBookingAcceptedDriverEmail,
  buildDriverNotificationEmail,
  buildEscalationResolvedEmail,
} from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

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

    if (!["ACCEPTED", "REJECTED", "COMPLETED"].includes(status)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    // Verify the booking belongs to this driver OR the driver is invited
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: { organization: { select: { email: true, phone: true, contactName: true, name: true } } },
    });

    if (!booking) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
    }

    const isOriginalDriver = booking.driverId === session.user.id;
    const isInvitedDriver = booking.invitedDriverIds.includes(session.user.id);

    if (!isOriginalDriver && !isInvitedDriver) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
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

          return NextResponse.json({ message: "Statut mis à jour, cagnotte créditée" });
        }
      }

      await prisma.booking.update({
        where: { id: params.id },
        data: { status },
      });

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

      // Notify other drivers that the ride is taken
      try {
        const otherDriverIds = [
          ...(booking.driverId && booking.driverId !== session.user.id ? [booking.driverId] : []),
          ...booking.invitedDriverIds.filter((id) => id !== session.user.id),
        ];

        if (otherDriverIds.length > 0) {
          const otherDrivers = await prisma.driver.findMany({
            where: { id: { in: otherDriverIds } },
            select: { firstName: true, email: true, notifyEmail: true },
          });

          for (const d of otherDrivers) {
            if (d.notifyEmail) {
              const mail = buildEscalationResolvedEmail({
                driverName: d.firstName,
                reference: booking.reference,
                locale,
              });
              await sendEmail({ to: d.email, ...mail });
            }
          }
        }
      } catch (error) {
        console.error("Failed to notify other drivers:", error);
      }

      // Send acceptance emails to client & driver
      try {
        const driver = await prisma.driver.findUnique({
          where: { id: session.user.id },
          select: { firstName: true, lastName: true, phone: true, email: true },
        });

        if (driver) {
          const dateLocale = locale === "en" ? "en-US" : "fr-FR";
          const dateFormatted = new Date(booking.requestedDate).toLocaleDateString(dateLocale, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const driverFullName = `${driver.firstName} ${driver.lastName}`;

          const isOrgBooking = Boolean(booking.organization);
          const clientEmailTo = isOrgBooking ? booking.organization!.email : booking.clientEmail;
          const clientDisplayName = isOrgBooking
            ? booking.organization!.contactName
            : booking.clientName;
          const contactPhone = isOrgBooking
            ? booking.organization!.phone
            : booking.clientPhone;
          const contactEmail = isOrgBooking
            ? booking.organization!.email
            : booking.clientEmail;

          // Email to client/org
          const clientMail = buildBookingAcceptedClientEmail({
            clientName: clientDisplayName,
            departure: booking.departureName,
            arrival: booking.arrivalName,
            date: dateFormatted,
            reference: booking.reference,
            driverName: driverFullName,
            driverPhone: driver.phone,
            driverEmail: driver.email,
            bookingId: booking.id,
            isOrgBooking,
            price: booking.lockedPrice,
            locale,
          });
          await sendEmail({ to: clientEmailTo, ...clientMail });

          // Email to driver
          const driverMail = buildBookingAcceptedDriverEmail({
            driverName: driver.firstName,
            clientName: isOrgBooking
              ? `${booking.clientName} (${booking.organization!.name})`
              : booking.clientName,
            clientPhone: contactPhone,
            clientEmail: contactEmail,
            departure: booking.departureName,
            arrival: booking.arrivalName,
            date: dateFormatted,
            reference: booking.reference,
            bookingId: booking.id,
            price: booking.lockedPrice,
            locale,
          });
          await sendEmail({ to: driver.email, ...driverMail });
        }
      } catch (error) {
        console.error("Failed to send acceptance emails:", error);
      }

      return NextResponse.json({ message: "Statut mis à jour" });
    }

    // --- REJECTED ---
    if (status === "REJECTED") {
      // Case 1: Invited driver rejects -> just remove from invitedDriverIds
      if (isInvitedDriver && !isOriginalDriver) {
        await prisma.booking.update({
          where: { id: params.id },
          data: {
            invitedDriverIds: booking.invitedDriverIds.filter((id) => id !== session.user.id),
          },
        });
        return NextResponse.json({ message: "Statut mis à jour" });
      }

      // Case 2: Original driver rejects (phase 0) -> escalate immediately
      if (isOriginalDriver && booking.escalationPhase === 0) {
        // Find up to 3 nearby drivers excluding original
        const allDrivers = await prisma.driver.findMany({
          where: {
            isActive: true,
            zoneLat: { not: null },
            zoneLng: { not: null },
            id: { not: session.user.id },
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

            if (driver.notifySms && driver.phone) {
              const smsText = `TaxiNeo - Course disponible #${booking.reference}. ${booking.departureName} → ${booking.arrivalName}. Connectez-vous pour accepter.`;
              await sendSms(driver.phone, smsText);
            }
          }
        }

        // Do NOT send rejection email to client
        return NextResponse.json({ message: "Statut mis à jour" });
      }

      // Case 3: Original driver rejects in later phases -> just set status
      await prisma.booking.update({
        where: { id: params.id },
        data: { status: "REJECTED" },
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
        } catch (error) {
          console.error("Failed to send rejection email:", error);
        }
      }

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
