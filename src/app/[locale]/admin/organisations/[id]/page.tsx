import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { OrgDetailView } from "@/components/admin/OrgDetailView";

export const dynamic = "force-dynamic";

export default async function AdminOrgDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const org = await prisma.organization.findUnique({
    where: { id },
    include: {
      bookings: {
        take: 20,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          reference: true,
          clientName: true,
          beneficiaryName: true,
          departureName: true,
          arrivalName: true,
          status: true,
          lockedPrice: true,
          requestedDate: true,
          createdAt: true,
          driver: { select: { firstName: true, lastName: true, id: true } },
        },
      },
      favoriteDrivers: {
        include: {
          driver: {
            select: { id: true, firstName: true, lastName: true, slug: true, isActive: true },
          },
        },
      },
      cagnotteHistory: {
        take: 20,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          amount: true,
          createdAt: true,
          booking: { select: { reference: true } },
        },
      },
    },
  });

  if (!org) notFound();

  const statusCounts = await prisma.booking.groupBy({
    by: ["status"],
    where: { organizationId: id },
    _count: true,
  });

  const bookingsByStatus: Record<string, number> = {};
  for (const s of statusCounts) {
    bookingsByStatus[s.status] = s._count;
  }
  const totalBookings = Object.values(bookingsByStatus).reduce((a, b) => a + b, 0);

  const data = {
    id: org.id,
    name: org.name,
    type: org.type,
    contactName: org.contactName,
    email: org.email,
    phone: org.phone,
    address: org.address,
    cagnotteBalance: org.cagnotteBalance,
    emailVerified: org.emailVerified,
    lastLoginAt: org.lastLoginAt?.toISOString() || null,
    loginCount: org.loginCount,
    createdAt: org.createdAt.toISOString(),
    totalBookings,
    bookingsByStatus,
    recentBookings: org.bookings.map((b) => ({
      id: b.id,
      reference: b.reference,
      clientName: b.clientName,
      beneficiaryName: b.beneficiaryName,
      departureName: b.departureName,
      arrivalName: b.arrivalName,
      status: b.status,
      lockedPrice: b.lockedPrice ? Number(b.lockedPrice) : null,
      requestedDate: b.requestedDate.toISOString(),
      createdAt: b.createdAt.toISOString(),
      driverId: b.driver?.id || null,
      driverName: b.driver ? `${b.driver.firstName} ${b.driver.lastName}` : null,
    })),
    favoriteDrivers: org.favoriteDrivers.map((f) => ({
      id: f.driver.id,
      firstName: f.driver.firstName,
      lastName: f.driver.lastName,
      slug: f.driver.slug,
      isActive: f.driver.isActive,
    })),
    cagnotteHistory: org.cagnotteHistory.map((t) => ({
      id: t.id,
      amount: t.amount,
      bookingRef: t.booking.reference,
      createdAt: t.createdAt.toISOString(),
    })),
  };

  return <OrgDetailView org={data} />;
}
