import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DriverHeader } from "@/components/public-profile/DriverHeader";
import { VehicleInfo } from "@/components/public-profile/VehicleInfo";
import { PricingDisplay } from "@/components/public-profile/PricingDisplay";
import { AvailabilityDisplay } from "@/components/public-profile/AvailabilityDisplay";
import { DirectBookingForm } from "@/components/public-profile/DirectBookingForm";
import { FareEstimator } from "@/components/public-profile/FareEstimator";
import type { Vehicle } from "@/types/vehicle";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const driver = await prisma.driver.findUnique({
    where: { slug: params.slug },
  });

  if (!driver) return { title: "Taxi non trouvé - TaxiNoir" };

  return {
    title: `${driver.firstName} ${driver.lastName} - Taxi ${driver.zoneAddress || ""} | TaxiNoir`,
    description: `Réservez directement avec ${driver.firstName} ${driver.lastName}, chauffeur de taxi ${driver.zoneAddress ? `à ${driver.zoneAddress}` : ""}. ${driver.bio || ""}`,
    openGraph: {
      title: `${driver.firstName} ${driver.lastName} - Chauffeur Taxi`,
      description: `Réservez directement avec ${driver.firstName}. ${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`,
    },
  };
}

export default async function TaxiProfilePage({ params }: Props) {
  const driver = await prisma.driver.findUnique({
    where: { slug: params.slug, isActive: true },
  });

  if (!driver) notFound();

  const availability = driver.availability as Array<{
    day: number;
    startTime: string;
    endTime: string;
  }> | null;

  // Build vehicles array from JSON field, falling back to flat fields
  let vehicles: Vehicle[] = [];
  if (Array.isArray(driver.vehicles)) {
    vehicles = (driver.vehicles as unknown as Vehicle[]).slice(0, 2);
  } else if (driver.vehicleBrand) {
    vehicles = [
      {
        brand: driver.vehicleBrand || "",
        model: driver.vehicleModel || "",
        year: driver.vehicleYear || 0,
        color: driver.vehicleColor || "",
        plate: driver.vehiclePlate || "",
        capacity: driver.vehicleCapacity,
        features: driver.vehicleFeatures,
        photos: [],
      },
    ];
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left column: Driver info */}
            <div className="lg:col-span-2 space-y-6">
              <DriverHeader
                firstName={driver.firstName}
                lastName={driver.lastName}
                bio={driver.bio}
                photoUrl={driver.photoUrl}
                zoneAddress={driver.zoneAddress}
                isVerified={driver.isVerified}
                email={driver.email}
                phone={driver.phone}
              />

              {vehicles.length > 0 && (
                <VehicleInfo vehicles={vehicles} />
              )}

              <PricingDisplay
                baseFare={driver.baseFare}
                pricePerKm={driver.pricePerKm}
                pricePerMinute={driver.pricePerMinute}
                minimumFare={driver.minimumFare}
                airportSupplement={driver.airportSupplement}
                nightSupplement={driver.nightSupplement}
              />

              <FareEstimator
                baseFare={driver.baseFare}
                pricePerKm={driver.pricePerKm}
                pricePerMinute={driver.pricePerMinute}
                minimumFare={driver.minimumFare}
              />

              {availability && availability.length > 0 && (
                <AvailabilityDisplay availability={availability} />
              )}
            </div>

            {/* Right column: Booking form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <DirectBookingForm
                  driverId={driver.id}
                  driverName={`${driver.firstName} ${driver.lastName}`}
                  minimumFare={driver.minimumFare}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
