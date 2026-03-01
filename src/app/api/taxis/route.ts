import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { haversineDistance, estimatePrice } from "@/lib/geo";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const departureLat = parseFloat(searchParams.get("departureLat") || "0");
  const departureLng = parseFloat(searchParams.get("departureLng") || "0");
  const arrivalLat = parseFloat(searchParams.get("arrivalLat") || "0");
  const arrivalLng = parseFloat(searchParams.get("arrivalLng") || "0");

  try {
    const drivers = await prisma.driver.findMany({
      where: {
        isActive: true,
        zoneLat: { not: null },
        zoneLng: { not: null },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        slug: true,
        photoUrl: true,
        vehicleBrand: true,
        vehicleModel: true,
        vehicleCapacity: true,
        vehicleFeatures: true,
        vehicles: true,
        zoneAddress: true,
        zoneLat: true,
        zoneLng: true,
        zoneRadius: true,
        baseFare: true,
        pricePerKm: true,
        pricePerMinute: true,
        minimumFare: true,
      },
    });

    // Calculate trip distance
    let tripDistance = 0;
    if (departureLat && departureLng && arrivalLat && arrivalLng) {
      tripDistance = haversineDistance(departureLat, departureLng, arrivalLat, arrivalLng);
    }

    // Filter drivers by coverage zone and calculate estimated price
    const results = drivers
      .map((driver) => {
        const distanceToDriver = haversineDistance(
          departureLat,
          departureLng,
          driver.zoneLat!,
          driver.zoneLng!
        );

        return {
          ...driver,
          distance: distanceToDriver,
          estimatedPrice:
            tripDistance > 0
              ? estimatePrice(tripDistance, driver.baseFare, driver.pricePerKm, driver.minimumFare)
              : undefined,
        };
      })
      .filter((d) => d.distance <= d.zoneRadius)
      .sort((a, b) => a.distance - b.distance);

    return NextResponse.json({ drivers: results, tripDistance });
  } catch (error) {
    console.error("Taxi search error:", error);
    return NextResponse.json({ drivers: [], tripDistance: 0 });
  }
}
