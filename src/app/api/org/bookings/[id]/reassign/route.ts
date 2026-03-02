import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const reassignSchema = z.object({
  driverId: z.string().min(1),
});

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { driverId } = reassignSchema.parse(body);

    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
    });

    if (!booking || booking.organizationId !== session.user.id) {
      return NextResponse.json({ error: "Course non trouvée" }, { status: 404 });
    }

    if (booking.status !== "REJECTED") {
      return NextResponse.json({ error: "Seule une course refusée peut être réassignée" }, { status: 400 });
    }

    // Verify driver exists
    const driver = await prisma.driver.findUnique({ where: { id: driverId } });
    if (!driver) {
      return NextResponse.json({ error: "Chauffeur non trouvé" }, { status: 404 });
    }

    await prisma.booking.update({
      where: { id: params.id },
      data: {
        driverId,
        status: "PENDING",
      },
    });

    return NextResponse.json({ message: "Course réassignée" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("Reassign error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
