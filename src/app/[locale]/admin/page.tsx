import { prisma } from "@/lib/prisma";
import { AdminOverview } from "@/components/admin/AdminOverview";

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
      recentlyActiveDrivers,
      recentlyActiveOrgs,
    ] = await Promise.all([
      prisma.driver.findMany({
        select: { id: true, firstName: true, lastName: true, email: true, isActive: true, lastLoginAt: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.organization.findMany({
        select: { id: true, name: true, email: true, type: true, lastLoginAt: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.booking.findMany({
        select: {
          id: true,
          reference: true,
          clientName: true,
          departureName: true,
          arrivalName: true,
          status: true,
          lockedPrice: true,
          createdAt: true,
          driver: { select: { firstName: true, lastName: true } },
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
      prisma.driver.findMany({
        where: { lastLoginAt: { not: null } },
        orderBy: { lastLoginAt: "desc" },
        take: 5,
        select: { id: true, firstName: true, lastName: true, lastLoginAt: true },
      }),
      prisma.organization.findMany({
        where: { lastLoginAt: { not: null } },
        orderBy: { lastLoginAt: "desc" },
        take: 5,
        select: { id: true, name: true, lastLoginAt: true },
      }),
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
      recentDrivers: drivers.slice(0, 5).map((d: typeof drivers[number]) => ({
        id: d.id,
        firstName: d.firstName,
        lastName: d.lastName,
        email: d.email,
        isActive: d.isActive,
        createdAt: d.createdAt.toISOString(),
      })),
      recentOrgs: organizations.slice(0, 5).map((o: typeof organizations[number]) => ({
        id: o.id,
        name: o.name,
        email: o.email,
        type: o.type,
        createdAt: o.createdAt.toISOString(),
      })),
      recentBookings: bookings.slice(0, 10).map((b: typeof bookings[number]) => ({
        id: b.id,
        reference: b.reference,
        clientName: b.clientName,
        departureName: b.departureName,
        arrivalName: b.arrivalName,
        status: b.status,
        lockedPrice: b.lockedPrice ? Number(b.lockedPrice) : null,
        createdAt: b.createdAt.toISOString(),
        driverName: b.driver ? `${b.driver.firstName} ${b.driver.lastName}` : null,
        orgName: b.organization?.name || null,
      })),
      activeUsers: {
        drivers24h: driversActive24h,
        drivers7d: driversActive7d,
        drivers30d: driversActive30d,
        orgs24h: orgsActive24h,
        orgs7d: orgsActive7d,
        orgs30d: orgsActive30d,
      },
      recentActivity: [
        ...recentlyActiveDrivers.map((d: typeof recentlyActiveDrivers[number]) => ({
          type: "driver" as const,
          id: d.id,
          name: `${d.firstName} ${d.lastName}`,
          at: d.lastLoginAt!.toISOString(),
        })),
        ...recentlyActiveOrgs.map((o: typeof recentlyActiveOrgs[number]) => ({
          type: "org" as const,
          id: o.id,
          name: o.name,
          at: o.lastLoginAt!.toISOString(),
        })),
      ].sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime()).slice(0, 8),
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
