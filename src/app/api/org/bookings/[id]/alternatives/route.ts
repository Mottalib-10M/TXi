import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { haversineDistance } from "@/lib/geo";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const booking = await prisma.booking.findUnique({
      where: { id: params.id },
    });

    if (!booking || booking.organizationId !== session.user.id) {
      return NextResponse.json({ error: "Course non trouvée" }, { status: 404 });
    }

    if (booking.status !== "REJECTED") {
      return NextResponse.json({ error: "Course non refusée" }, { status: 400 });
    }

    // Find nearby drivers excluding the one who rejected
    const drivers = await prisma.driver.findMany({
      where: {
        isActive: true,
        zoneLat: { not: null },
        zoneLng: { not: null },
        id: { not: booking.driverId || undefined },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        vehicleBrand: true,
        vehicleModel: true,
        zoneLat: true,
        zoneLng: true,
        zoneRadius: true,
      },
    });

    const alternatives = drivers
      .map((d) => ({
        ...d,
        distance: haversineDistance(
          booking.departureLat,
          booking.departureLng,
          d.zoneLat!,
          d.zoneLng!
        ),
      }))
      .filter((d) => d.distance <= d.zoneRadius)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3)
      .map((d) => ({
        id: d.id,
        firstName: d.firstName,
        lastName: d.lastName,
        vehicleBrand: d.vehicleBrand,
        vehicleModel: d.vehicleModel,
        distance: d.distance,
      }));

    return NextResponse.json({ alternatives });
  } catch (error) {
    console.error("Alternatives error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
