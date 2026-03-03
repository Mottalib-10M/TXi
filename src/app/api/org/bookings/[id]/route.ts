import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    });

    if (!booking || booking.organizationId !== session.user.id) {
      return NextResponse.json({ error: "Course non trouvée" }, { status: 404 });
    }

    if (booking.status !== "PENDING") {
      return NextResponse.json(
        { error: "Seules les courses en attente peuvent être annulées" },
        { status: 400 }
      );
    }

    await prisma.booking.update({
      where: { id: params.id },
      data: { status: "CANCELLED" },
    });

    return NextResponse.json({ message: "Course annulée" });
  } catch (error) {
    console.error("Booking cancel error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
