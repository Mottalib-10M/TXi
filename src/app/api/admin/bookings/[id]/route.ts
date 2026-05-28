import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { getRoutingDistance, estimatePrice, estimateDefaultPrice, isValidCoords, geocodeAddress } from "@/lib/geo";

/**
 * PATCH /api/admin/bookings/[id]
 * Recalculate distance & price for an existing booking (geocode if needed).
 */
export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { id } = await params;

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { driver: true },
  });

  if (!booking) {
    return NextResponse.json({ error: "Réservation introuvable" }, { status: 404 });
  }

  // Resolve coordinates — geocode if invalid
  let depLat = booking.departureLat;
  let depLng = booking.departureLng;
  let arrLat = booking.arrivalLat;
  let arrLng = booking.arrivalLng;

  if (!isValidCoords(depLat, depLng)) {
    const geo = await geocodeAddress(booking.departureName);
    if (geo) { depLat = geo.lat; depLng = geo.lng; }
  }
  if (!isValidCoords(arrLat, arrLng)) {
    const geo = await geocodeAddress(booking.arrivalName);
    if (geo) { arrLat = geo.lat; arrLng = geo.lng; }
  }

  if (!isValidCoords(depLat, depLng) || !isValidCoords(arrLat, arrLng)) {
    return NextResponse.json(
      { error: "Impossible de résoudre les coordonnées de départ ou d'arrivée" },
      { status: 422 }
    );
  }

  // Calculate driving distance via OSRM
  const routing = await getRoutingDistance(depLat!, depLng!, arrLat!, arrLng!);
  const estimatedDistance = routing.distanceKm;

  // Calculate price: use driver rates if assigned, otherwise national regulated tariffs
  let estimatedPrice: number | null = null;
  if (booking.driver) {
    estimatedPrice = estimatePrice(
      estimatedDistance,
      booking.driver.baseFare,
      booking.driver.pricePerKm,
      booking.driver.minimumFare,
      booking.driver.pricePerKmNight,
      booking.requestedDate,
    );
  } else {
    estimatedPrice = estimateDefaultPrice(estimatedDistance);
  }

  const updated = await prisma.booking.update({
    where: { id },
    data: {
      departureLat: depLat,
      departureLng: depLng,
      arrivalLat: arrLat,
      arrivalLng: arrLng,
      estimatedDistance,
      estimatedPrice,
      lockedPrice: estimatedPrice,
    },
  });

  return NextResponse.json({
    success: true,
    estimatedDistance: updated.estimatedDistance,
    estimatedPrice: updated.estimatedPrice,
  });
}
