import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getLocationById } from "@/data/predefined-locations";
import { haversineDistance, calculateSharedRidePrice } from "@/lib/geo";

const createSchema = z.object({
  departureLocationId: z.string().min(1),
  destinationLocationId: z.string().min(1),
  departureTime: z.string(),
  totalSeats: z.number().min(1).max(8),
});

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id || session.user.role !== "driver") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();
    const data = createSchema.parse(body);

    const departure = getLocationById(data.departureLocationId);
    if (!departure) {
      return NextResponse.json({ error: "Lieu de départ invalide" }, { status: 400 });
    }

    const destination = getLocationById(data.destinationLocationId);
    if (!destination) {
      return NextResponse.json({ error: "Destination invalide" }, { status: 400 });
    }

    const route = await prisma.sharedRoute.create({
      data: {
        driverId: session.user.id,
        departureLocationId: data.departureLocationId,
        departureName: departure.name,
        departureLat: departure.lat,
        departureLng: departure.lng,
        destinationName: destination.name,
        destinationLat: destination.lat,
        destinationLng: destination.lng,
        departureTime: new Date(data.departureTime),
        totalSeats: data.totalSeats,
      },
    });

    return NextResponse.json(route, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("SharedRoute create error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const departureLocationId = searchParams.get("departureLocationId");
    const destinationLocationId = searchParams.get("destinationLocationId");
    const dateParam = searchParams.get("date");

    const now = new Date();
    const departureTimeFilter: Record<string, Date> = { gte: now };

    if (dateParam) {
      const dayStart = new Date(`${dateParam}T00:00:00`);
      const dayEnd = new Date(`${dateParam}T00:00:00`);
      dayEnd.setDate(dayEnd.getDate() + 1);

      if (dayStart > now) {
        departureTimeFilter.gte = dayStart;
      }
      departureTimeFilter.lt = dayEnd;
    }

    const where: Record<string, unknown> = {
      status: "ACTIVE",
      departureTime: departureTimeFilter,
    };

    if (departureLocationId) {
      where.departureLocationId = departureLocationId;
    }

    const routes = await prisma.sharedRoute.findMany({
      where,
      include: {
        passengers: { where: { status: "CONFIRMED" } },
        driver: {
          select: {
            firstName: true,
            lastName: true,
            phone: true,
            photoUrl: true,
          },
        },
      },
      orderBy: { departureTime: "asc" },
    });

    let filtered = routes;

    if (destinationLocationId) {
      const destLocation = getLocationById(destinationLocationId);
      if (destLocation) {
        filtered = routes.filter((r) => {
          const dist = haversineDistance(
            r.destinationLat,
            r.destinationLng,
            destLocation.lat,
            destLocation.lng
          );
          return dist <= 5;
        });
      }
    }

    const results = filtered.map((r) => {
      const occupiedSeats = r.passengers.reduce((sum, p) => sum + p.seatCount, 0);
      const pricing = calculateSharedRidePrice(
        r.departureLat,
        r.departureLng,
        r.destinationLat,
        r.destinationLng,
        r.departureTime
      );
      return {
        ...r,
        occupiedSeats,
        availableSeats: r.totalSeats - occupiedSeats,
        estimatedPrice: pricing.totalPrice,
        pricePerPassenger: pricing.pricePerPassenger,
        distanceKm: Math.round(pricing.distanceKm * 10) / 10,
        isNightRate: pricing.isNight,
      };
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error("SharedRoute search error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
