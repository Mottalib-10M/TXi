import { prisma } from "@/lib/prisma";
import { AdminOverview } from "@/components/admin/AdminOverview";
import { getDepartmentCode, getDepartmentFromCoords } from "@/lib/department-lookup";
import { DEPARTMENT_NAMES } from "@/data/departmental-tariffs";

function extractCityFromAddress(address: string): string | null {
  if (!address) return null;
  // Match "postal_code City" pattern: "63000 Clermont-Ferrand" or "31700 Blagnac"
  const match = address.match(/\b\d{5}\s+([^,]+)/);
  if (match) return match[1].trim();
  // Fallback: second-to-last comma-separated part (before "France")
  const parts = address.split(",").map((s) => s.trim());
  if (parts.length >= 2) return parts[parts.length - 2];
  return null;
}

function extractCityWithDept(address: string | null): string | null {
  if (!address) return null;
  const deptCode = getDepartmentCode(address);
  // Try postal-code pattern first
  const city = extractCityFromAddress(address);
  // Fallback: first part before comma or dash (for driver zoneAddress like "Perpignan, France")
  const fallbackCity = !city ? address.split(/\s*[-,]\s*/)[0].trim() : null;
  const cityName = city || fallbackCity || null;
  if (!cityName) return null;
  if (deptCode) return `${cityName} (${deptCode})`;
  return cityName;
}

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  try {
    const now = new Date();
    const ago24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const ago7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const ago30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [
      drivers,
      organizations,
      bookings,
      revenue,
      driversActive24h,
      driversActive7d,
      driversActive30d,
      orgsActive24h,
      orgsActive7d,
      orgsActive30d,
    ] = await Promise.all([
      prisma.driver.findMany({
        select: { id: true, firstName: true, lastName: true, email: true, isActive: true, lastLoginAt: true, createdAt: true, zoneAddress: true, zoneLat: true, zoneLng: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.organization.findMany({
        select: { id: true, name: true, email: true, type: true, lastLoginAt: true, createdAt: true, address: true, bookings: { orderBy: { createdAt: "desc" }, take: 1, select: { departureName: true } } },
        orderBy: { createdAt: "desc" },
      }),
      prisma.booking.findMany({
        select: {
          id: true,
          reference: true,
          clientName: true,
          clientEmail: true,
          clientPhone: true,
          departureName: true,
          departureLat: true,
          departureLng: true,
          arrivalName: true,
          arrivalLat: true,
          arrivalLng: true,
          requestedDate: true,
          estimatedDistance: true,
          estimatedPrice: true,
          lockedPrice: true,
          status: true,
          cancelledBy: true,
          createdAt: true,
          driver: { select: { id: true, firstName: true, lastName: true, phone: true, slug: true } },
          organization: { select: { name: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.booking.aggregate({
        where: { status: "COMPLETED", lockedPrice: { not: null } },
        _sum: { lockedPrice: true },
      }),
      prisma.driver.count({ where: { lastLoginAt: { gte: ago24h } } }),
      prisma.driver.count({ where: { lastLoginAt: { gte: ago7d } } }),
      prisma.driver.count({ where: { lastLoginAt: { gte: ago30d } } }),
      prisma.organization.count({ where: { lastLoginAt: { gte: ago24h } } }),
      prisma.organization.count({ where: { lastLoginAt: { gte: ago7d } } }),
      prisma.organization.count({ where: { lastLoginAt: { gte: ago30d } } }),
    ]);

    const activeDrivers = drivers.filter((d: typeof drivers[number]) => d.isActive).length;

    const bookingsByStatus: Record<string, number> = {};
    for (const b of bookings) {
      bookingsByStatus[b.status] = (bookingsByStatus[b.status] || 0) + 1;
    }

    const data = {
      totalDrivers: drivers.length,
      activeDrivers,
      inactiveDrivers: drivers.length - activeDrivers,
      totalOrgs: organizations.length,
      totalBookings: bookings.length,
      bookingsByStatus,
      totalRevenue: Number(revenue._sum.lockedPrice) || 0,
      chartBookings: bookings.map((b: typeof bookings[number]) => {
        const regionCode = getDepartmentCode(b.departureName) || getDepartmentFromCoords(b.departureLat, b.departureLng);
        return {
          hasDriver: !!b.driver,
          status: b.status,
          regionCode,
          regionName: regionCode ? (DEPARTMENT_NAMES[regionCode] || "Inconnu") : null,
          cityName: extractCityFromAddress(b.departureName),
          createdAt: b.createdAt.toISOString(),
          price: b.lockedPrice ? Number(b.lockedPrice) : (b.estimatedPrice ? Number(b.estimatedPrice) : 0),
        };
      }),
      recentBookings: bookings.map((b: typeof bookings[number]) => {
        const regionCode = getDepartmentCode(b.departureName) || getDepartmentFromCoords(b.departureLat, b.departureLng);
        return {
          id: b.id,
          reference: b.reference,
          clientName: b.clientName,
          clientEmail: b.clientEmail,
          clientPhone: b.clientPhone,
          departureName: b.departureName,
          departureLat: b.departureLat,
          departureLng: b.departureLng,
          arrivalName: b.arrivalName,
          arrivalLat: b.arrivalLat,
          arrivalLng: b.arrivalLng,
          requestedDate: b.requestedDate.toISOString(),
          estimatedDistance: b.estimatedDistance,
          status: b.status,
          cancelledBy: b.cancelledBy,
          lockedPrice: b.lockedPrice ? Number(b.lockedPrice) : null,
          estimatedPrice: b.estimatedPrice ? Number(b.estimatedPrice) : null,
          createdAt: b.createdAt.toISOString(),
          driverId: b.driver?.id || null,
          driverName: b.driver ? `${b.driver.firstName} ${b.driver.lastName}` : null,
          driverPhone: b.driver?.phone || null,
          driverSlug: b.driver?.slug || null,
          orgName: b.organization?.name || null,
          cityName: extractCityFromAddress(b.departureName),
          regionName: regionCode ? (DEPARTMENT_NAMES[regionCode] || null) : null,
        };
      }),
      activeUsers: {
        drivers24h: driversActive24h,
        drivers7d: driversActive7d,
        drivers30d: driversActive30d,
        orgs24h: orgsActive24h,
        orgs7d: orgsActive7d,
        orgs30d: orgsActive30d,
      },
      recentActivity: [
        ...[...drivers]
          .sort((a, b) => (b.lastLoginAt || b.createdAt).getTime() - (a.lastLoginAt || a.createdAt).getTime())
          .slice(0, 10)
          .map((d: typeof drivers[number]) => ({
            type: "driver" as const,
            id: d.id,
            name: `${d.firstName} ${d.lastName}`,
            email: d.email,
            at: (d.lastLoginAt || d.createdAt).toISOString(),
            hasLoggedIn: !!d.lastLoginAt,
            isNew: d.createdAt.getTime() >= ago30d.getTime(),
            isActive: d.isActive,
            city: extractCityWithDept(d.zoneAddress) || (d.zoneLat && d.zoneLng ? (() => { const code = getDepartmentFromCoords(d.zoneLat!, d.zoneLng!); return code ? (DEPARTMENT_NAMES[code] || null) : null; })() : null),
          })),
        ...[...organizations]
          .sort((a, b) => (b.lastLoginAt || b.createdAt).getTime() - (a.lastLoginAt || a.createdAt).getTime())
          .slice(0, 10)
          .map((o: typeof organizations[number]) => ({
            type: "org" as const,
            id: o.id,
            name: o.name,
            email: o.email,
            at: (o.lastLoginAt || o.createdAt).toISOString(),
            hasLoggedIn: !!o.lastLoginAt,
            isNew: o.createdAt.getTime() >= ago30d.getTime(),
            orgType: o.type,
            city: extractCityWithDept(o.bookings?.[0]?.departureName ?? null) || extractCityWithDept(o.address ?? null),
          })),
      ],
    };

    return <AdminOverview data={data} />;
  } catch (error) {
    console.error("[ADMIN PAGE ERROR]", error);
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-xl">
          <h2 className="text-lg font-semibold text-red-800 mb-2">Erreur Admin</h2>
          <p className="text-sm text-red-600 mb-4">
            Impossible de charger les données du tableau de bord.
          </p>
          <pre className="text-xs bg-red-100 rounded-lg p-3 overflow-auto text-red-700">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      </div>
    );
  }
}
