import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  sendEmail,
  buildBookingAcceptedClientEmail,
  buildBookingAcceptedDriverEmail,
  buildBookingRejectedClientEmail,
} from "@/lib/email";

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
    const { status } = body;

    if (!["ACCEPTED", "REJECTED", "COMPLETED"].includes(status)) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    // Verify the booking belongs to this driver
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: { organization: { select: { email: true, phone: true, contactName: true, name: true } } },
    });

    if (!booking || booking.driverId !== session.user.id) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
    }

    // If completing an org booking, credit the cagnotte (skip for INDIVIDUAL accounts)
    if (status === "COMPLETED" && booking.organizationId && booking.lockedPrice) {
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

    // Send notification emails when booking is accepted
    if (status === "ACCEPTED") {
      try {
        const driver = await prisma.driver.findUnique({
          where: { id: session.user.id },
          select: { firstName: true, lastName: true, phone: true, email: true },
        });

        if (driver) {
          const dateFormatted = new Date(booking.requestedDate).toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          const driverFullName = `${driver.firstName} ${driver.lastName}`;

          // Determine contact info based on booking type
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
          });
          await sendEmail({ to: clientEmailTo, ...clientMail });

          // Email to driver (with real client/org contact info)
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
          });
          await sendEmail({ to: driver.email, ...driverMail });
        }
      } catch (error) {
        console.error("Failed to send acceptance emails:", error);
      }
    }

    // Send rejection notification to client
    if (status === "REJECTED" && booking.clientEmail && booking.clientEmail !== "noemail@taxinoir.fr") {
      try {
        const dateFormatted = new Date(booking.requestedDate).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        const clientEmailTo = booking.organization ? booking.organization.email : booking.clientEmail;
        const clientDisplayName = booking.organization ? booking.organization.contactName : booking.clientName;

        const rejectionMail = buildBookingRejectedClientEmail({
          clientName: clientDisplayName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateFormatted,
          reference: booking.reference,
        });
        await sendEmail({ to: clientEmailTo, ...rejectionMail });
      } catch (error) {
        console.error("Failed to send rejection email:", error);
      }
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
