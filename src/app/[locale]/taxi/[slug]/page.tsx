import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DriverHeader } from "@/components/public-profile/DriverHeader";
import { VehicleInfo } from "@/components/public-profile/VehicleInfo";
import { PublicProfileClient } from "@/components/public-profile/PublicProfileClient";
import type { Vehicle } from "@/types/vehicle";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "driverProfile" });

  const driver = await prisma.driver.findUnique({
    where: { slug },
  });

  if (!driver) return { title: t("metaNotFound") };

  const fullName = `${driver.firstName} ${driver.lastName}`;
  const zone = driver.zoneAddress ? ` ${locale === "en" ? "in" : "à"} ${driver.zoneAddress}` : "";
  const vehicle = `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim();

  const title = locale === "en"
    ? `${fullName} - Licensed taxi driver${zone} | Fixed fares`
    : `${fullName} - Chauffeur de taxi${zone} | Tarif fixe`;

  return {
    title,
    description: t("metaDescription", { name: fullName, zone }),
    openGraph: {
      title: t("metaOgTitle", { name: fullName }),
      description: t("metaOgDescription", { firstName: driver.firstName, vehicle }),
    },
  };
}

export default async function TaxiProfilePage({ params }: Props) {
  const { slug } = await params;

  const driver = await prisma.driver.findUnique({
    where: { slug, isActive: true },
  });

  if (!driver) notFound();

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
      <Navbar minimal />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
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

          {vehicles.length > 0 && (
            <VehicleInfo vehicles={vehicles} />
          )}

          <PublicProfileClient
            driverId={driver.id}
            driverName={`${driver.firstName} ${driver.lastName}`}
            baseFare={driver.baseFare}
            pricePerKm={driver.pricePerKm}
            pricePerKmNight={driver.pricePerKmNight}
            pricePerMinute={driver.pricePerMinute}
            minimumFare={driver.minimumFare}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
