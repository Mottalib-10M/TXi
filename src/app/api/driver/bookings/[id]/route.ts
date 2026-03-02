import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    });

    if (!booking || booking.driverId !== session.user.id) {
      return NextResponse.json({ error: "Réservation non trouvée" }, { status: 404 });
    }

    // If completing an org booking, credit the cagnotte
    if (status === "COMPLETED" && booking.organizationId && booking.lockedPrice) {
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

    await prisma.booking.update({
      where: { id: params.id },
      data: { status },
    });

    return NextResponse.json({ message: "Statut mis à jour" });
  } catch (error) {
    console.error("Booking update error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}
