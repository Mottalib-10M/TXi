import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  sendEmail,
  buildDriverReminderEmail,
  buildClientApologyEmail,
  buildCancelledByAdminDriverEmail,
  buildBookingAcceptedClientEmail,
  buildBookingAcceptedDriverEmail,
  buildDriverNotificationEmail,
} from "@/lib/email";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { action, newDriverId } = body as { action: string; newDriverId?: string };

  if (!["remind-driver", "apologize-refuse", "cancel-booking", "accept-booking", "complete-booking", "reassign-driver"].includes(action)) {
    return NextResponse.json({ error: "Action invalide" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: {
      driver: { select: { firstName: true, lastName: true, email: true, phone: true, notifyEmail: true } },
      organization: { select: { name: true, contactName: true, email: true, type: true } },
    },
  });

  if (!booking) {
    return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 });
  }

  try {
    if (action === "remind-driver") {
      if (booking.status !== "PENDING") {
        return NextResponse.json({ error: "La réservation n'est pas en attente" }, { status: 400 });
      }
      if (!booking.driver) {
        return NextResponse.json({ error: "Aucun chauffeur assigné" }, { status: 400 });
      }

      const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });
      const email = buildDriverReminderEmail({
        driverName: `${booking.driver.firstName} ${booking.driver.lastName}`,
        clientName: booking.clientName,
        departure: booking.departureName,
        arrival: booking.arrivalName,
        date: dateStr,
        reference: booking.reference,
        bookingId: booking.id,
      });

      await sendEmail({ to: booking.driver.email, ...email });

      await prisma.adminNotification.create({
        data: {
          type: "ESCALATION_PHASE1",
          title: `Relance chauffeur — #${booking.reference}`,
          body: `Rappel envoyé à ${booking.driver.firstName} ${booking.driver.lastName} pour la course #${booking.reference}.`,
          metadata: { bookingId: booking.id, action: "remind-driver" },
        },
      });

      return NextResponse.json({ success: true, message: "Rappel envoyé" });
    }

    if (action === "apologize-refuse") {
      if (booking.status !== "PENDING") {
        return NextResponse.json({ error: "La réservation n'est pas en attente" }, { status: 400 });
      }

      const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });
      const email = buildClientApologyEmail({
        clientName: booking.clientName,
        departure: booking.departureName,
        arrival: booking.arrivalName,
        date: dateStr,
        reference: booking.reference,
        price: booking.lockedPrice ?? booking.estimatedPrice,
      });

      await prisma.booking.update({
        where: { id },
        data: { status: "REJECTED", cancelledBy: "SYSTEM" },
      });

      await sendEmail({ to: booking.clientEmail, ...email });

      await prisma.adminNotification.create({
        data: {
          type: "BOOKING_REJECTED",
          title: `Refus admin — #${booking.reference}`,
          body: `Course #${booking.reference} refusée par l'admin. Email d'excuse envoyé à ${booking.clientName}.`,
          metadata: { bookingId: booking.id, action: "apologize-refuse" },
        },
      });

      return NextResponse.json({ success: true, message: "Réservation refusée et email envoyé" });
    }

    if (action === "cancel-booking") {
      if (!["PENDING", "ACCEPTED"].includes(booking.status)) {
        return NextResponse.json({ error: "Seules les courses en attente ou acceptées peuvent être annulées" }, { status: 400 });
      }

      const wasAccepted = booking.status === "ACCEPTED";

      await prisma.booking.update({
        where: { id },
        data: { status: "CANCELLED", cancelledBy: "SYSTEM" },
      });

      const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });

      // Send apology email to client
      const clientEmailTo = booking.organization ? booking.organization.email : booking.clientEmail;
      const clientDisplayName = booking.organization ? booking.organization.contactName : booking.clientName;
      const clientMail = buildClientApologyEmail({
        clientName: clientDisplayName,
        departure: booking.departureName,
        arrival: booking.arrivalName,
        date: dateStr,
        reference: booking.reference,
        price: booking.lockedPrice ?? booking.estimatedPrice,
      });
      await sendEmail({ to: clientEmailTo, ...clientMail });

      // If was ACCEPTED with a driver, notify the driver too
      if (wasAccepted && booking.driver && booking.driver.notifyEmail) {
        const driverMail = buildCancelledByAdminDriverEmail({
          driverName: booking.driver.firstName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateStr,
          reference: booking.reference,
          price: booking.lockedPrice ?? booking.estimatedPrice,
        });
        await sendEmail({ to: booking.driver.email, ...driverMail });
      }

      await prisma.adminNotification.create({
        data: {
          type: "BOOKING_CANCELLED",
          title: `Annulation admin — #${booking.reference}`,
          body: `Course #${booking.reference} annulée par l'admin. Email envoyé au client${wasAccepted && booking.driver ? " et au chauffeur" : ""}.`,
          metadata: { bookingId: booking.id, action: "cancel-booking" },
        },
      });

      return NextResponse.json({ success: true, message: "Course annulée" });
    }

    if (action === "accept-booking") {
      if (booking.status !== "PENDING") {
        return NextResponse.json({ error: "La réservation n'est pas en attente" }, { status: 400 });
      }
      if (!booking.driver) {
        return NextResponse.json({ error: "Aucun chauffeur assigné" }, { status: 400 });
      }

      await prisma.booking.update({
        where: { id },
        data: { status: "ACCEPTED" },
      });

      const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });

      const clientMail = buildBookingAcceptedClientEmail({
        clientName: booking.clientName,
        departure: booking.departureName,
        arrival: booking.arrivalName,
        date: dateStr,
        reference: booking.reference,
        driverName: `${booking.driver.firstName} ${booking.driver.lastName}`,
        driverPhone: booking.driver.phone,
        driverEmail: booking.driver.email,
        bookingId: booking.id,
        price: booking.lockedPrice ?? booking.estimatedPrice,
      });
      await sendEmail({ to: booking.clientEmail, ...clientMail });

      if (booking.driver.notifyEmail) {
        const driverMail = buildBookingAcceptedDriverEmail({
          driverName: booking.driver.firstName,
          clientName: booking.clientName,
          clientPhone: booking.clientPhone,
          clientEmail: booking.clientEmail,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateStr,
          reference: booking.reference,
          bookingId: booking.id,
          price: booking.lockedPrice ?? booking.estimatedPrice,
        });
        await sendEmail({ to: booking.driver.email, ...driverMail });
      }

      await prisma.adminNotification.create({
        data: {
          type: "BOOKING_ACCEPTED",
          title: `Confirmation admin — #${booking.reference}`,
          body: `Course #${booking.reference} confirmée par l'admin. Emails envoyés au client et au chauffeur.`,
          metadata: { bookingId: booking.id, action: "accept-booking" },
        },
      });

      return NextResponse.json({ success: true, message: "Course confirmée" });
    }

    if (action === "complete-booking") {
      if (booking.status !== "ACCEPTED") {
        return NextResponse.json({ error: "Seules les courses acceptées peuvent être terminées" }, { status: 400 });
      }

      // Credit cagnotte for org bookings (skip for INDIVIDUAL accounts)
      if (booking.organizationId && booking.lockedPrice && booking.organization) {
        if (booking.organization.type !== "INDIVIDUAL") {
          const cagnotteAmount = booking.lockedPrice * 0.05;

          await prisma.$transaction([
            prisma.booking.update({
              where: { id },
              data: { status: "COMPLETED" },
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

          await prisma.adminNotification.create({
            data: {
              type: "BOOKING_COMPLETED",
              title: `Course terminée — #${booking.reference}`,
              body: `Course #${booking.reference} terminée par l'admin. Cagnotte créditée de ${cagnotteAmount.toFixed(2)}€.`,
              metadata: { bookingId: booking.id, action: "complete-booking" },
            },
          });

          return NextResponse.json({ success: true, message: "Course terminée, cagnotte créditée" });
        }
      }

      await prisma.booking.update({
        where: { id },
        data: { status: "COMPLETED" },
      });

      await prisma.adminNotification.create({
        data: {
          type: "BOOKING_COMPLETED",
          title: `Course terminée — #${booking.reference}`,
          body: `Course #${booking.reference} terminée par l'admin.`,
          metadata: { bookingId: booking.id, action: "complete-booking" },
        },
      });

      return NextResponse.json({ success: true, message: "Course terminée" });
    }

    if (action === "reassign-driver") {
      if (!newDriverId) {
        return NextResponse.json({ error: "Nouveau chauffeur requis" }, { status: 400 });
      }
      if (!["PENDING", "ACCEPTED"].includes(booking.status)) {
        return NextResponse.json({ error: "Seules les courses en attente ou acceptées peuvent être réassignées" }, { status: 400 });
      }

      const newDriver = await prisma.driver.findUnique({
        where: { id: newDriverId },
        select: { id: true, firstName: true, lastName: true, email: true, phone: true, notifyEmail: true },
      });

      if (!newDriver) {
        return NextResponse.json({ error: "Nouveau chauffeur introuvable" }, { status: 404 });
      }

      const oldDriver = booking.driver;

      await prisma.booking.update({
        where: { id },
        data: {
          driverId: newDriverId,
          status: "PENDING",
          escalationPhase: 0,
        },
      });

      const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });

      // Notify old driver of cancellation
      if (oldDriver && oldDriver.notifyEmail) {
        const cancelMail = buildCancelledByAdminDriverEmail({
          driverName: oldDriver.firstName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateStr,
          reference: booking.reference,
          price: booking.lockedPrice ?? booking.estimatedPrice,
        });
        await sendEmail({ to: oldDriver.email, ...cancelMail });
      }

      // Notify new driver of the booking
      if (newDriver.notifyEmail) {
        const notifMail = buildDriverNotificationEmail({
          driverName: `${newDriver.firstName} ${newDriver.lastName}`,
          clientName: booking.clientName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateStr,
          reference: booking.reference,
          bookingId: booking.id,
          price: booking.lockedPrice ?? booking.estimatedPrice,
        });
        await sendEmail({ to: newDriver.email, ...notifMail });
      }

      await prisma.adminNotification.create({
        data: {
          type: "BOOKING_CREATED",
          title: `Réassignation — #${booking.reference}`,
          body: `Course #${booking.reference} réassignée${oldDriver ? ` de ${oldDriver.firstName} ${oldDriver.lastName}` : ""} à ${newDriver.firstName} ${newDriver.lastName}.`,
          metadata: { bookingId: booking.id, action: "reassign-driver", oldDriverId: oldDriver?.email, newDriverId: newDriver.id },
        },
      });

      return NextResponse.json({ success: true, message: "Chauffeur réassigné" });
    }
  } catch (error) {
    console.error("Admin action error:", error);
    return NextResponse.json({ error: "Erreur lors de l'action" }, { status: 500 });
  }
}
