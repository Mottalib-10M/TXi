import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getRoutingDistance, estimatePrice } from "@/lib/geo";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const departureLat = parseFloat(searchParams.get("departureLat") || "");
    const departureLng = parseFloat(searchParams.get("departureLng") || "");
    const arrivalLat = parseFloat(searchParams.get("arrivalLat") || "");
    const arrivalLng = parseFloat(searchParams.get("arrivalLng") || "");
    const dateParam = searchParams.get("date");

    if ([departureLat, departureLng, arrivalLat, arrivalLng].some(isNaN)) {
      return NextResponse.json({ error: "Coordonnées invalides" }, { status: 400 });
    }

    const bookingTime = dateParam ? new Date(dateParam) : undefined;

    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { baseFare: true, pricePerKm: true, pricePerKmNight: true, minimumFare: true },
    });

    if (!driver) {
      return NextResponse.json({ error: "Chauffeur introuvable" }, { status: 404 });
    }

    const { distanceKm, durationMinutes } = await getRoutingDistance(
      departureLat, departureLng, arrivalLat, arrivalLng
    );

    const suggestedPrice = estimatePrice(
      distanceKm,
      driver.baseFare,
      driver.pricePerKm,
      driver.minimumFare,
      driver.pricePerKmNight,
      bookingTime && !isNaN(bookingTime.getTime()) ? bookingTime : undefined,
    );

    return NextResponse.json({
      distanceKm: Math.round(distanceKm * 10) / 10,
      durationMinutes: Math.round(durationMinutes),
      suggestedPrice: Math.round(suggestedPrice),
    });
  } catch (error) {
    console.error("P2P estimate error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
