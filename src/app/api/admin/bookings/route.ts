import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminEmail } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { runEscalation } from "@/lib/escalation";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.email || !isAdminEmail(session.user.email)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    const where: Prisma.BookingWhereInput = {};

    if (status && ["PENDING", "ACCEPTED", "REJECTED", "CANCELLED", "COMPLETED"].includes(status)) {
      where.status = status as Prisma.EnumBookingStatusFilter;
    }

    if (search) {
      where.OR = [
        { reference: { contains: search, mode: "insensitive" } },
        { clientName: { contains: search, mode: "insensitive" } },
      ];
    }

    // Escalate pending bookings before fetching
    await runEscalation().catch((e) => console.error("Escalation error:", e));

    const bookings = await prisma.booking.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: Math.min(limit, 100),
      include: {
        driver: { select: { firstName: true, lastName: true, slug: true } },
        organization: { select: { name: true, type: true } },
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Admin bookings fetch error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}
