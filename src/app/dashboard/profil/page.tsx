import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
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
        photos: [],
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
    companyName: driver.companyName || "",
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

      {/* Actions rapides */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/dashboard/profil-public"
          className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-300 transition-colors group"
        >
          <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:eye-linear" className="text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="text-sm font-medium group-hover:text-neutral-900 transition-colors">
              Voir votre page publique
            </h3>
            <p className="text-xs text-neutral-500 font-light mt-0.5">
              Prévisualisez ce que voient vos clients via le QR code
            </p>
          </div>
        </Link>

        <Link
          href="/dashboard/carte"
          className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-300 transition-colors group"
        >
          <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:qr-code-linear" className="text-amber-600 text-xl" />
          </div>
          <div>
            <h3 className="text-sm font-medium group-hover:text-neutral-900 transition-colors">
              Générer votre carte de visite
            </h3>
            <p className="text-xs text-neutral-500 font-light mt-0.5">
              Créez un QR code pour recevoir des réservations directes
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
