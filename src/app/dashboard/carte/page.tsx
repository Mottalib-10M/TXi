import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { BusinessCardPreview } from "@/components/driver/BusinessCardPreview";
import type { Vehicle } from "@/types/vehicle";

export default async function CartePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
  });

  if (!driver) redirect("/connexion");

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
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Carte de visite</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          Générez votre carte avec QR code pour recevoir des réservations directes
        </p>
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
