import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { organizationId: session.user.id },
      select: {
        status: true,
        lockedPrice: true,
        estimatedPrice: true,
        requestedDate: true,
        cagnotteTransaction: {
          select: { amount: true },
        },
      },
    });

    // Aggregate by month (last 12 months)
    const now = new Date();
    const monthsMap = new Map<
      string,
      { month: string; count: number; amount: number; completed: number; completedAmount: number; inProgress: number; inProgressAmount: number; cagnotte: number }
    >();

    // Initialize last 12 months
    for (let i = 0; i < 12; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      monthsMap.set(key, { month: key, count: 0, amount: 0, completed: 0, completedAmount: 0, inProgress: 0, inProgressAmount: 0, cagnotte: 0 });
    }

    for (const b of bookings) {
      const d = new Date(b.requestedDate);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const entry = monthsMap.get(key);
      if (!entry) continue;

      const price = b.lockedPrice ?? b.estimatedPrice ?? 0;
      entry.count++;
      entry.amount += price;
      if (b.status === "COMPLETED") {
        entry.completed++;
        entry.completedAmount += price;
      } else if (b.status === "PENDING" || b.status === "ACCEPTED") {
        entry.inProgress++;
        entry.inProgressAmount += price;
      }
      if (b.cagnotteTransaction) entry.cagnotte += b.cagnotteTransaction.amount;
    }

    // Sort by month DESC
    const stats = Array.from(monthsMap.values()).sort((a, b) => b.month.localeCompare(a.month));

    return NextResponse.json({ stats });
  } catch (error) {
    console.error("Org stats error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
