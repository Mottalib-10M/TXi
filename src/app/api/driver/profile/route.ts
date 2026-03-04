import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Sync flat vehicle fields from vehicles[0] for backward compat
    const vehicles = Array.isArray(body.vehicles) ? body.vehicles.slice(0, 2) : [];
    const v0 = vehicles[0];

    const toInt = (v: unknown, fallback: number) => {
      const n = Number(v);
      return Number.isFinite(n) ? Math.round(n) : fallback;
    };
    const toFloat = (v: unknown, fallback: number) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    await prisma.driver.update({
      where: { id: session.user.id },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        bio: body.bio || null,
        companyName: body.companyName || null,
        photoUrl: body.photoUrl || null,
        vehicleBrand: v0?.brand || null,
        vehicleModel: v0?.model || null,
        vehicleYear: v0?.year != null ? toInt(v0.year, 0) || null : null,
        vehicleColor: v0?.color || null,
        vehiclePlate: v0?.plate || null,
        vehicleCapacity: toInt(v0?.capacity, 4),
        vehicleFeatures: v0?.features ?? [],
        vehicles: vehicles.length > 0 ? vehicles : null,
        zoneLat: body.zoneLat != null ? toFloat(body.zoneLat, 0) : null,
        zoneLng: body.zoneLng != null ? toFloat(body.zoneLng, 0) : null,
        zoneRadius: toFloat(body.zoneRadius, 15),
        zoneAddress: body.zoneAddress || null,
        baseFare: toFloat(body.baseFare, 2.0),
        pricePerKm: toFloat(body.pricePerKm, 1.5),
        pricePerKmNight: toFloat(body.pricePerKmNight, 2.0),
        pricePerMinute: toFloat(body.pricePerMinute, 0.5),
        minimumFare: toFloat(body.minimumFare, 7.0),
        airportSupplement: toFloat(body.airportSupplement, 4.0),
        nightSupplement: toFloat(body.nightSupplement, 0.0),
        availability: body.availability ?? null,
        notifyEmail: body.notifyEmail ?? true,
        notifySms: body.notifySms ?? false,
      },
    });

    return NextResponse.json({ message: "Profil mis à jour" });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}
