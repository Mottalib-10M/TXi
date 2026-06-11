import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "month";

  const now = new Date();
  let since: Date;

  switch (period) {
    case "week": {
      const day = now.getDay();
      const diff = day === 0 ? 6 : day - 1; // Monday as start
      since = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diff);
      break;
    }
    case "year":
      since = new Date(now.getFullYear(), 0, 1);
      break;
    case "month":
    default:
      since = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        referrerDriverId: session.user.id,
        source: "P2P",
        status: { in: ["ACCEPTED", "COMPLETED"] },
        createdAt: { gte: since },
      },
      select: {
        id: true,
        reference: true,
        clientName: true,
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        status: true,
        p2pCommissionRate: true,
        p2pCommissionAmount: true,
        driverId: true,
        driver: {
          select: { firstName: true, lastName: true, phone: true },
        },
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    // Group by accepting driver
    const driverMap = new Map<string, {
      driverId: string;
      driverName: string;
      driverPhone: string;
      rideCount: number;
      totalCommission: number;
      bookings: typeof bookings;
    }>();

    for (const b of bookings) {
      if (!b.driverId || !b.driver) continue;
      const key = b.driverId;
      const existing = driverMap.get(key);
      if (existing) {
        existing.rideCount++;
        existing.totalCommission += b.p2pCommissionAmount || 0;
        existing.bookings.push(b);
      } else {
        driverMap.set(key, {
          driverId: b.driverId,
          driverName: `${b.driver.firstName} ${b.driver.lastName}`,
          driverPhone: b.driver.phone,
          rideCount: 1,
          totalCommission: b.p2pCommissionAmount || 0,
          bookings: [b],
        });
      }
    }

    const drivers = Array.from(driverMap.values())
      .sort((a, b) => b.rideCount - a.rideCount)
      .map((d) => ({
        ...d,
        totalCommission: Math.round(d.totalCommission * 100) / 100,
        bookings: d.bookings.map((b) => ({
          id: b.id,
          reference: b.reference,
          clientName: b.clientName,
          departureName: b.departureName,
          arrivalName: b.arrivalName,
          requestedDate: b.requestedDate,
          lockedPrice: b.lockedPrice,
          status: b.status,
          p2pCommissionAmount: b.p2pCommissionAmount,
          createdAt: b.createdAt,
        })),
      }));

    const totalRides = bookings.filter((b) => b.driverId).length;
    const totalCommission = Math.round(
      bookings.reduce((sum, b) => sum + (b.p2pCommissionAmount || 0), 0) * 100
    ) / 100;
    const uniqueDrivers = driverMap.size;

    return NextResponse.json({
      totalRides,
      totalCommission,
      uniqueDrivers,
      drivers,
    });
  } catch (error) {
    console.error("P2P stats error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
