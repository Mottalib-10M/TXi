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
      companyName: true,
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
      lastLoginAt: true,
      loginCount: true,
      createdAt: true,
      _count: { select: { bookings: true } },
    },
  });

  const serialized = drivers.map((d: typeof drivers[number]) => {
    const vehicles = Array.isArray(d.vehicles) ? (d.vehicles as Array<{ brand?: string; model?: string }>) : [];
    const v0 = vehicles[0];
    return {
      id: d.id,
      firstName: d.firstName,
      lastName: d.lastName,
      companyName: d.companyName || null,
      email: d.email,
      phone: d.phone,
      slug: d.slug,
      vehicle: v0?.brand
        ? `${v0.brand} ${v0.model || ""}`.trim()
        : d.vehicleBrand
          ? `${d.vehicleBrand} ${d.vehicleModel || ""}`.trim()
          : null,
      vehicleBrand: v0?.brand || d.vehicleBrand || null,
      vehicleModel: v0?.model || d.vehicleModel || null,
      zone: d.zoneAddress || null,
      isActive: d.isActive,
      isVerified: d.isVerified,
      emailVerified: d.emailVerified,
      lastLoginAt: d.lastLoginAt?.toISOString() || null,
      loginCount: d.loginCount,
      bookingsCount: d._count.bookings,
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
