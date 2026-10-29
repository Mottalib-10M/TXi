// Avis envoyés quand un chauffeur accepte une course : aux autres chauffeurs
// sollicités, au client (e-mail et téléphone), au chauffeur lui-même, et au
// chauffeur qui l'avait transmise. Utilisé par l'acceptation dans l'espace
// chauffeur et par le lien « Passer à un collègue » (src/app/api/p2p/accept).

import { prisma } from "@/lib/prisma";
import { notifyBookingClient, notifyDriver } from "@/lib/push";
import {
  sendEmail,
  buildBookingAcceptedClientEmail,
  buildBookingAcceptedDriverEmail,
  buildEscalationResolvedEmail,
} from "@/lib/email";
import { contactForDriver } from "@/lib/p2p";

export const ACCEPTED_BOOKING_INCLUDE = {
  organization: { select: { email: true, phone: true, contactName: true, name: true } },
  referrerDriver: { select: { firstName: true, lastName: true, phone: true, email: true } },
} as const;

type AcceptedBooking = NonNullable<
  Awaited<ReturnType<typeof prisma.booking.findUnique<{ where: { id: string }; include: typeof ACCEPTED_BOOKING_INCLUDE }>>>
>;

/** booking : la course telle qu'elle était avant l'acceptation (driverId, invitedDriverIds d'origine). */
export async function sendAcceptedNotices(booking: AcceptedBooking, driverId: string, locale: "fr" | "en") {
  // Notify other drivers that the ride is taken
  try {
    const otherDriverIds = [
      ...(booking.driverId && booking.driverId !== driverId ? [booking.driverId] : []),
      ...booking.invitedDriverIds.filter((id) => id !== driverId),
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
      where: { id: driverId },
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
      // Course transmise ouverte aux chauffeurs proches : le contact est le chauffeur qui l'a transmise.
      const p2pContact = contactForDriver(booking, driverId, booking.referrerDriver);
      const clientEmailTo = isOrgBooking ? booking.organization!.email : booking.clientEmail;
      const clientDisplayName = isOrgBooking
        ? booking.organization!.contactName
        : booking.clientName;
      const contactPhone = isOrgBooking
        ? booking.organization!.phone
        : p2pContact.clientPhone;
      const contactEmail = isOrgBooking
        ? booking.organization!.email
        : p2pContact.clientEmail;

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
      // Course transmise : pas d'e-mail client (le chauffeur qui l'a transmise est prévenu ci-dessous).
      if (clientEmailTo) await sendEmail({ to: clientEmailTo, ...clientMail });
      await notifyBookingClient(booking, "accepted", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate, driver: driverFullName });

      // Email to driver
      const driverMail = buildBookingAcceptedDriverEmail({
        driverName: driver.firstName,
        clientName: isOrgBooking
          ? `${booking.clientName} (${booking.organization!.name})`
          : p2pContact.clientName,
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

      // Course transmise prise par un chauffeur proche : celui qui l'a transmise est prévenu (il garde sa commission).
      if (booking.source === "P2P" && booking.referrerDriverId && booking.referrerDriverId !== driverId) {
        await notifyDriver(booking.referrerDriverId, "p2pAccepted", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate, driver: driverFullName }, "/dashboard/p2p");
      }
      // Course passée à un collègue : celui qui l'a passée apprend qu'elle est prise.
      if (booking.sharedByDriverId && booking.sharedByDriverId !== driverId) {
        await notifyDriver(booking.sharedByDriverId, "sharedTaken", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate, driver: driverFullName });
      }
    }
  } catch (error) {
    console.error("Failed to send acceptance emails:", error);
  }
}
