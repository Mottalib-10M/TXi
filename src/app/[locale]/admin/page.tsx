import { prisma } from "@/lib/prisma";
import { AdminOverview } from "@/components/admin/AdminOverview";

export default async function AdminOverviewPage() {
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

  const activeDrivers = drivers.filter((d) => d.isActive).length;

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
    totalRevenue: revenue._sum.lockedPrice || 0,
    recentDrivers: drivers.slice(0, 5).map((d) => ({
      id: d.id,
      firstName: d.firstName,
      lastName: d.lastName,
      email: d.email,
      isActive: d.isActive,
      createdAt: d.createdAt.toISOString(),
    })),
    recentOrgs: organizations.slice(0, 5).map((o) => ({
      id: o.id,
      name: o.name,
      email: o.email,
      type: o.type,
      createdAt: o.createdAt.toISOString(),
    })),
    recentBookings: bookings.slice(0, 10).map((b) => ({
      id: b.id,
      reference: b.reference,
      clientName: b.clientName,
      departureName: b.departureName,
      arrivalName: b.arrivalName,
      status: b.status,
      lockedPrice: b.lockedPrice,
      createdAt: b.createdAt.toISOString(),
      driverName: b.driver ? `${b.driver.firstName} ${b.driver.lastName}` : null,
      orgName: b.organization?.name || null,
    })),
  };

  return <AdminOverview data={data} />;
}
