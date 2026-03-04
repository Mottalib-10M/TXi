import { prisma } from "@/lib/prisma";
import { DriversTable } from "@/components/admin/DriversTable";
import { getTranslations } from "next-intl/server";

export default async function AdminDriversPage() {
  const t = await getTranslations("admin");

  const drivers = await prisma.driver.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      slug: true,
      vehicleBrand: true,
      vehicleModel: true,
      vehicles: true,
      zoneAddress: true,
      isActive: true,
      isVerified: true,
      emailVerified: true,
      createdAt: true,
    },
  });

  const serialized = drivers.map((d) => {
    const vehicles = Array.isArray(d.vehicles) ? (d.vehicles as Array<{ brand?: string; model?: string }>) : [];
    const v0 = vehicles[0];
    return {
      id: d.id,
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      phone: d.phone,
      slug: d.slug,
      vehicle: v0?.brand
        ? `${v0.brand} ${v0.model || ""}`.trim()
        : d.vehicleBrand
          ? `${d.vehicleBrand} ${d.vehicleModel || ""}`.trim()
          : null,
      zone: d.zoneAddress || null,
      isActive: d.isActive,
      isVerified: d.isVerified,
      emailVerified: d.emailVerified,
      createdAt: d.createdAt.toISOString(),
    };
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("driversTitle")}</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {t("driversCount", { count: drivers.length })}
        </p>
      </div>
      <DriversTable drivers={serialized} />
    </div>
  );
}
