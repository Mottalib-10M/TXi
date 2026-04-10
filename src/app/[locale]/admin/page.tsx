import { prisma } from "@/lib/prisma";
import { AdminOverview } from "@/components/admin/AdminOverview";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  try {
    const [drivers, organizations, bookings, revenue] = await Promise.all([
      prisma.driver.findMany({
        select: { id: true, firstName: true, lastName: true, email: true, isActive: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.organization.findMany({
        select: { id: true, name: true, email: true, type: true, createdAt: true },
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
