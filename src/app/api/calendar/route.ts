import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactForDriver } from "@/lib/p2p";
import { auth } from "@/lib/auth";
import { bookingLinkExpired, calendarToken, sameToken } from "@/lib/booking-link";

function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export async function GET(request: NextRequest) {
  const bookingId = request.nextUrl.searchParams.get("id");

  if (!bookingId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const session = await auth();

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      driver: { select: { firstName: true, lastName: true, phone: true, email: true } },
      organization: { select: { name: true, phone: true, email: true } },
      referrerDriver: { select: { firstName: true, lastName: true, phone: true, email: true } },
    },
  });

  // Lien du mail : vaut pour le chauffeur de la course, même non connecté dans ce navigateur.
  const linkOpensAsDriver =
    booking?.driverId &&
    !bookingLinkExpired(booking.requestedDate) &&
    sameToken(request.nextUrl.searchParams.get("t"), calendarToken(booking.id, booking.driverId));
  const userId = linkOpensAsDriver ? booking.driverId! : session?.user?.id;

  if (!userId) {
    const target = `/dashboard/reservations?id=${bookingId}`;
    return NextResponse.redirect(new URL(`/connexion?redirect=${encodeURIComponent(target)}`, request.url));
  }

  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Ownership check: user must be the assigned driver, the org, or the referrer
  const isAssignedDriver = booking.driverId === userId;
  const isOrg = booking.organizationId === userId;
  const isReferrer = booking.referrerDriverId === userId;
  const isInvited = booking.invitedDriverIds.includes(userId);

  if (!isAssignedDriver && !isOrg && !isReferrer && !isInvited) {
    return NextResponse.json({ error: "Accès interdit" }, { status: 403 });
  }

  const startDate = booking.requestedDate;
  const endDate = new Date(startDate.getTime() + (booking.estimatedDuration || 60) * 60 * 1000);

  const isOrgBooking = Boolean(booking.organization);
  // Course transmise ouverte aux chauffeurs proches : le contact est le chauffeur qui l'a transmise.
  const contact = contactForDriver(booking, userId, booking.referrerDriver);
  const contactName = isOrgBooking
    ? `${booking.clientName} (${booking.organization!.name})`
    : contact.clientName;
  const contactPhone = isOrgBooking
    ? booking.organization!.phone
    : contact.clientPhone;
  const contactEmail = isOrgBooking
    ? booking.organization!.email
    : contact.clientEmail;

  const descriptionLines = [
    `Référence: #${booking.reference}`,
    ``,
    `CLIENT`,
    `Nom: ${contactName}`,
    `Tél: ${contactPhone}`,
    `Email: ${contactEmail}`,
    ``,
    `TRAJET`,
    `Départ: ${booking.departureName}`,
    `Arrivée: ${booking.arrivalName}`,
    `Passagers: ${booking.passengerCount}`,
  ];

  if (booking.lockedPrice || booking.estimatedPrice) {
    descriptionLines.push(`Prix: ${(booking.lockedPrice || booking.estimatedPrice)!.toFixed(2).replace(".", ",")} €`);
  }

  if (booking.clientComments) {
    descriptionLines.push(``, `Commentaires: ${booking.clientComments}`);
  }

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TaxiNeo//Booking//FR",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${booking.id}@taxineo.fr`,
    `DTSTART:${toICSDate(startDate)}`,
    `DTEND:${toICSDate(endDate)}`,
    `SUMMARY:Course #${booking.reference} — ${contactName}`,
    `LOCATION:${booking.departureName}`,
    `DESCRIPTION:${descriptionLines.join("\\n")}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="course-${booking.reference}.ics"`,
    },
  });
}
