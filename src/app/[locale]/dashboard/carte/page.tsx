import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { BusinessCardPreview } from "@/components/driver/BusinessCardPreview";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import type { Vehicle } from "@/types/vehicle";
import { getTranslations } from "next-intl/server";

export default async function CartePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
  });

  if (!driver) redirect("/connexion");

  const t = await getTranslations("dashboard");

  // Build vehicles from JSON, falling back to flat fields
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

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t("mapSubtitle")}</h1>
          <p className="text-sm text-neutral-500 font-light mt-1">
            {t("mapCardDesc")}
          </p>
        </div>
        <QRCodeButton slug={driver.slug} />
      </div>
      <BusinessCardPreview
        driver={{
          firstName: driver.firstName,
          lastName: driver.lastName,
          phone: driver.phone,
          email: driver.email,
          slug: driver.slug,
          vehicleBrand: vehicles[0]?.brand || driver.vehicleBrand || "",
          vehicleModel: vehicles[0]?.model || driver.vehicleModel || "",
          zoneAddress: driver.zoneAddress || "",
          companyName: driver.companyName || "",
        }}
      />
    </div>
  );
}
