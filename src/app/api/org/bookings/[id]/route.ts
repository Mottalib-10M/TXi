import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createNotification } from "@/lib/notifications";
import { sendEmail, buildCancelledByClientDriverEmail } from "@/lib/email";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { status } = body;

    if (status !== "CANCELLED") {
      return NextResponse.json({ error: "Action non autorisée" }, { status: 400 });
    }

    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
      include: {
        driver: { select: { firstName: true, lastName: true, email: true, notifyEmail: true } },
        organization: { select: { name: true, contactName: true } },
      },
    });

    if (!booking || booking.organizationId !== session.user.id) {
      return NextResponse.json({ error: "Course non trouvée" }, { status: 404 });
    }

    if (!["PENDING", "ACCEPTED"].includes(booking.status)) {
      return NextResponse.json(
        { error: "Seules les courses en attente ou acceptées peuvent être annulées" },
        { status: 400 }
      );
    }

    const wasAccepted = booking.status === "ACCEPTED";

    await prisma.booking.update({
      where: { id: params.id },
      data: { status: "CANCELLED", cancelledBy: "CLIENT" },
    });

    createNotification({
      type: "BOOKING_CANCELLED",
      title: `Annulation #${booking.reference}`,
      body: `${booking.clientName} — annulée par l'organisation`,
      metadata: { bookingId: booking.id, reference: booking.reference },
    });

    // If the booking was ACCEPTED and there's a driver, notify them
    if (wasAccepted && booking.driver && booking.driver.notifyEmail) {
      try {
        const dateStr = format(booking.requestedDate, "dd MMM yyyy 'à' HH:mm", { locale: fr });
        const clientDisplayName = booking.organization
          ? `${booking.clientName} (${booking.organization.name})`
          : booking.clientName;

        const mail = buildCancelledByClientDriverEmail({
          driverName: booking.driver.firstName,
          clientName: clientDisplayName,
          departure: booking.departureName,
          arrival: booking.arrivalName,
          date: dateStr,
          reference: booking.reference,
          price: booking.lockedPrice,
        });
        await sendEmail({ to: booking.driver.email, ...mail });
      } catch (error) {
        console.error("Failed to send cancellation email to driver:", error);
      }
    }

    return NextResponse.json({ message: "Course annulée" });
  } catch (error) {
    console.error("Booking cancel error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
