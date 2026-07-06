import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

function toICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const bookingId = request.nextUrl.searchParams.get("id");

  if (!bookingId) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      driver: { select: { firstName: true, lastName: true, phone: true, email: true } },
      organization: { select: { name: true, phone: true, email: true } },
    },
  });

  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Ownership check: user must be the assigned driver, the org, or the referrer
  const userId = session.user.id;
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
  const contactName = isOrgBooking
    ? `${booking.clientName} (${booking.organization!.name})`
    : booking.clientName;
  const contactPhone = isOrgBooking
    ? booking.organization!.phone
    : booking.clientPhone;
  const contactEmail = isOrgBooking
    ? booking.organization!.email
    : booking.clientEmail;

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
