import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminEmail } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { sendEmail, buildDriverReminderEmail, buildClientApologyEmail } from "@/lib/email";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.email || !isAdminEmail(session.user.email)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const { action } = body as { action: string };

  if (!["remind-driver", "apologize-refuse"].includes(action)) {
    return NextResponse.json({ error: "Action invalide" }, { status: 400 });
  }

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: {
      driver: { select: { firstName: true, lastName: true, email: true, phone: true } },
    },
  });

  if (!booking) {
    return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 });
  }

  if (booking.status !== "PENDING") {
    return NextResponse.json({ error: "La réservation n'est pas en attente" }, { status: 400 });
  }

  try {
    if (action === "remind-driver") {
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
  } catch (error) {
    console.error("Admin action error:", error);
    return NextResponse.json({ error: "Erreur lors de l'action" }, { status: 500 });
  }
}
