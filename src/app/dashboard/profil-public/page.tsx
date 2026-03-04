import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { DriverHeader } from "@/components/public-profile/DriverHeader";
import { VehicleInfo } from "@/components/public-profile/VehicleInfo";
import { FareEstimator } from "@/components/public-profile/FareEstimator";
import type { Vehicle } from "@/types/vehicle";

export default async function ProfilPublicPage() {
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

  const publicUrl = `/taxi/${driver.slug}`;

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Profil public
            </h1>
            <p className="text-sm text-neutral-500 font-light mt-1">
              Aperçu de votre page vue par les clients qui scannent votre QR code
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/dashboard/profil"
              className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 border border-neutral-200 bg-white rounded-xl px-3 sm:px-4 py-2.5 hover:border-neutral-300 transition-colors"
            >
              <Icon icon="solar:pen-linear" className="text-base" />
              <span className="hidden sm:inline">Modifier</span>
            </Link>
            <Link
              href={publicUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-950 rounded-xl px-3 sm:px-4 py-2.5 hover:bg-neutral-800 transition-colors"
            >
              <Icon icon="solar:eye-linear" className="text-base" />
              Ouvrir la page
            </Link>
          </div>
        </div>
      </div>

      {/* URL banner */}
      <div className="bg-neutral-950 rounded-2xl p-4 sm:p-5 mb-8 flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:link-linear" className="text-neutral-400 text-xl" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-neutral-500 font-light">
              Lien de votre profil public
            </p>
            <p className="text-sm text-white font-medium truncate">
              taxinoir.fr/taxi/{driver.slug}
            </p>
          </div>
        </div>
        <Link
          href="/dashboard/carte"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white bg-neutral-800 rounded-lg px-3 py-2 hover:bg-neutral-700 transition-colors shrink-0"
        >
          <Icon icon="solar:qr-code-linear" className="text-sm" />
          QR Code
        </Link>
      </div>

      {/* Preview frame */}
      <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
        {/* Browser bar mockup */}
        <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
          </div>
          <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-neutral-500 font-light border border-neutral-200">
            taxinoir.fr/taxi/{driver.slug}
          </div>
        </div>

        {/* Preview content */}
        <div className="p-6 lg:p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <DriverHeader
              firstName={driver.firstName}
              lastName={driver.lastName}
              bio={driver.bio}
              photoUrl={driver.photoUrl}
              zoneAddress={driver.zoneAddress}
              isVerified={driver.isVerified}
              email={driver.email}
              phone={driver.phone}
              companyName={driver.companyName}
            />

            {vehicles.length > 0 && <VehicleInfo vehicles={vehicles} />}

            <FareEstimator
              baseFare={driver.baseFare}
              pricePerKm={driver.pricePerKm}
              pricePerKmNight={driver.pricePerKmNight}
              pricePerMinute={driver.pricePerMinute}
              minimumFare={driver.minimumFare}
            />

            {/* Booking form placeholder */}
            <div className="bg-neutral-50 border border-dashed border-neutral-300 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-neutral-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon icon="solar:document-add-linear" className="text-neutral-400 text-2xl" />
              </div>
              <p className="text-sm font-medium text-neutral-600 mb-1">
                Formulaire de réservation
              </p>
              <p className="text-xs text-neutral-400 font-light">
                Les clients verront ici le formulaire pour réserver directement avec vous
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
            <Icon icon="solar:camera-linear" className="text-blue-600 text-lg" />
          </div>
          <h3 className="text-sm font-medium mb-1">Ajoutez une photo</h3>
          <p className="text-xs text-neutral-500 font-light leading-relaxed">
            Les profils avec photo reçoivent 3x plus de réservations
          </p>
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center mb-3">
            <Icon icon="solar:document-text-linear" className="text-amber-600 text-lg" />
          </div>
          <h3 className="text-sm font-medium mb-1">Rédigez votre bio</h3>
          <p className="text-xs text-neutral-500 font-light leading-relaxed">
            Une description personnalisée rassure les clients
          </p>
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center mb-3">
            <Icon icon="solar:clock-circle-linear" className="text-green-600 text-lg" />
          </div>
          <h3 className="text-sm font-medium mb-1">Horaires précis</h3>
          <p className="text-xs text-neutral-500 font-light leading-relaxed">
            Indiquez vos disponibilités pour éviter les réservations hors horaires
          </p>
        </div>
      </div>
    </div>
  );
}
