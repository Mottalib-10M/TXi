import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { haversineDistance, getRoutingDistance, estimatePrice } from "@/lib/geo";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get("q");
  const departureLat = parseFloat(searchParams.get("departureLat") || "0");
  const departureLng = parseFloat(searchParams.get("departureLng") || "0");
  const arrivalLat = parseFloat(searchParams.get("arrivalLat") || "0");
  const arrivalLng = parseFloat(searchParams.get("arrivalLng") || "0");
  const requestedTimeParam = searchParams.get("requestedTime");
  const bookingTime = requestedTimeParam ? new Date(requestedTimeParam) : new Date();

  try {
    // Text search mode (for favorites search)
    if (q) {
      const drivers = await prisma.driver.findMany({
        where: {
          isActive: true,
          OR: [
            { firstName: { contains: q, mode: "insensitive" } },
            { lastName: { contains: q, mode: "insensitive" } },
            { zoneAddress: { contains: q, mode: "insensitive" } },
          ],
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          companyName: true,
          slug: true,
          vehicleBrand: true,
          vehicleModel: true,
          zoneAddress: true,
        },
        take: 10,
      });
      return NextResponse.json({ drivers });
    }

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
        companyName: true,
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
        pricePerKmNight: true,
        pricePerMinute: true,
        minimumFare: true,
      },
    });

    // Calculate trip distance (real driving distance via OSRM)
    let tripDistance = 0;
    if (departureLat && departureLng && arrivalLat && arrivalLng) {
      const routing = await getRoutingDistance(departureLat, departureLng, arrivalLat, arrivalLng);
      tripDistance = routing.distanceKm;
    }

    // Filter drivers by coverage zone (haversine is fine for approximate zone check)
    // and calculate estimated price using real driving distance
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
              ? estimatePrice(tripDistance, driver.baseFare, driver.pricePerKm, driver.minimumFare, driver.pricePerKmNight, bookingTime)
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
