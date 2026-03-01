import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ProfileForm } from "@/components/driver/ProfileForm";
import type { Vehicle } from "@/types/vehicle";

export default async function ProfilPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
  });

  if (!driver) redirect("/connexion");

  // Build vehicles array from JSON field, falling back to flat fields
  let vehicles: Vehicle[] = [];
  if (Array.isArray(driver.vehicles)) {
    vehicles = (driver.vehicles as unknown as Vehicle[]).slice(0, 2);
  } else if (driver.vehicleBrand) {
    vehicles = [
      {
        brand: driver.vehicleBrand || "",
        model: driver.vehicleModel || "",
        year: driver.vehicleYear || new Date().getFullYear(),
        color: driver.vehicleColor || "",
        plate: driver.vehiclePlate || "",
        capacity: driver.vehicleCapacity,
        features: driver.vehicleFeatures,
      },
    ];
  }

  const driverData = {
    id: driver.id,
    firstName: driver.firstName,
    lastName: driver.lastName,
    email: driver.email,
    phone: driver.phone,
    bio: driver.bio || "",
    photoUrl: driver.photoUrl || "",
    vehicles,
    zoneLat: driver.zoneLat,
    zoneLng: driver.zoneLng,
    zoneRadius: driver.zoneRadius,
    zoneAddress: driver.zoneAddress || "",
    baseFare: driver.baseFare,
    pricePerKm: driver.pricePerKm,
    pricePerMinute: driver.pricePerMinute,
    minimumFare: driver.minimumFare,
    airportSupplement: driver.airportSupplement,
    nightSupplement: driver.nightSupplement,
    availability: driver.availability as Array<{ day: number; startTime: string; endTime: string }> | null,
    notifyEmail: driver.notifyEmail,
    notifySms: driver.notifySms,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Mon profil</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          Gérez vos informations, votre véhicule et vos tarifs
        </p>
      </div>
      <ProfileForm driver={driverData} />
    </div>
  );
}
