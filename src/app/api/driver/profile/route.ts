import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { phone: true, firstName: true, lastName: true },
    });

    if (!driver) {
      return NextResponse.json({ error: "Chauffeur introuvable" }, { status: 404 });
    }

    return NextResponse.json(driver);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

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

    // Seuls les champs envoyés changent : un envoi partiel n'efface pas le reste du profil.
    const sent = (...keys: string[]) => keys.some((k) => k in body);

    await prisma.driver.update({
      where: { id: session.user.id },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        ...(sent("bio") && { bio: body.bio || null }),
        ...(sent("companyName") && { companyName: body.companyName || null }),
        ...(sent("photoUrl") && { photoUrl: body.photoUrl || null }),
        ...(sent("vehicles") && {
          vehicleBrand: v0?.brand || null,
          vehicleModel: v0?.model || null,
          vehicleYear: v0?.year != null ? toInt(v0.year, 0) || null : null,
          vehicleColor: v0?.color || null,
          vehiclePlate: v0?.plate || null,
          vehicleCapacity: toInt(v0?.capacity, 4),
          vehicleFeatures: v0?.features ?? [],
          vehicles: vehicles.length > 0 ? vehicles : null,
        }),
        ...(sent("zoneLat") && { zoneLat: body.zoneLat != null ? toFloat(body.zoneLat, 0) : null }),
        ...(sent("zoneLng") && { zoneLng: body.zoneLng != null ? toFloat(body.zoneLng, 0) : null }),
        ...(sent("zoneRadius") && { zoneRadius: toFloat(body.zoneRadius, 15) }),
        ...(sent("zoneAddress") && { zoneAddress: body.zoneAddress || null }),
        ...(sent("baseFare") && { baseFare: toFloat(body.baseFare, 2.0) }),
        ...(sent("pricePerKm") && { pricePerKm: toFloat(body.pricePerKm, 1.5) }),
        ...(sent("pricePerKmNight") && { pricePerKmNight: toFloat(body.pricePerKmNight, 2.0) }),
        ...(sent("pricePerMinute") && { pricePerMinute: toFloat(body.pricePerMinute, 0.5) }),
        ...(sent("minimumFare") && { minimumFare: toFloat(body.minimumFare, 7.0) }),
        ...(sent("airportSupplement") && { airportSupplement: toFloat(body.airportSupplement, 4.0) }),
        ...(sent("nightSupplement") && { nightSupplement: toFloat(body.nightSupplement, 0.0) }),
        ...(sent("availability") && { availability: body.availability ?? null }),
        notifyEmail: body.notifyEmail,
        notifySms: body.notifySms,
        notifyPush: body.notifyPush,
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
