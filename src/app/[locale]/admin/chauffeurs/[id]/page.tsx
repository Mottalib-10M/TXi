import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { DriverDetailView } from "@/components/admin/DriverDetailView";

export const dynamic = "force-dynamic";

export default async function AdminDriverDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const driver = await prisma.driver.findUnique({
    where: { id },
    include: {
      bookings: {
        take: 20,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          reference: true,
          clientName: true,
          departureName: true,
          arrivalName: true,
          status: true,
          lockedPrice: true,
          requestedDate: true,
          createdAt: true,
          organization: { select: { name: true } },
        },
      },
    },
  });

  if (!driver) notFound();

  const [statusCounts, revenueAgg] = await Promise.all([
    prisma.booking.groupBy({
      by: ["status"],
      where: { driverId: id },
      _count: true,
    }),
    prisma.booking.aggregate({
      where: { driverId: id, status: "COMPLETED" },
      _sum: { lockedPrice: true },
    }),
  ]);

  const bookingsByStatus: Record<string, number> = {};
  for (const s of statusCounts) {
    bookingsByStatus[s.status] = s._count;
  }

  const totalBookings = Object.values(bookingsByStatus).reduce((a, b) => a + b, 0);
  const accepted = bookingsByStatus["ACCEPTED"] || 0;
  const completed = bookingsByStatus["COMPLETED"] || 0;
  const rejected = bookingsByStatus["REJECTED"] || 0;
  const pending = bookingsByStatus["PENDING"] || 0;
  const acceptanceRate =
    accepted + rejected + completed > 0
      ? ((accepted + completed) / (accepted + rejected + completed)) * 100
      : 0;

  const vehicles = Array.isArray(driver.vehicles)
    ? (driver.vehicles as Array<{ brand?: string; model?: string; color?: string; plate?: string; capacity?: number }>)
    : [];
  const v0 = vehicles[0];
  const vehicleDisplay = v0?.brand
    ? `${v0.brand} ${v0.model || ""}`.trim()
    : driver.vehicleBrand
      ? `${driver.vehicleBrand} ${driver.vehicleModel || ""}`.trim()
      : null;

  const data = {
    id: driver.id,
    firstName: driver.firstName,
    lastName: driver.lastName,
    email: driver.email,
    phone: driver.phone,
    slug: driver.slug,
    photoUrl: driver.photoUrl,
    bio: driver.bio,
    companyName: driver.companyName,
    vehicle: vehicleDisplay,
    vehicleColor: v0?.color || driver.vehicleColor || null,
    vehiclePlate: v0?.plate || driver.vehiclePlate || null,
    vehicleCapacity: v0?.capacity || driver.vehicleCapacity,
    zoneAddress: driver.zoneAddress,
    zoneRadius: driver.zoneRadius,
    baseFare: driver.baseFare,
    pricePerKm: driver.pricePerKm,
    minimumFare: driver.minimumFare,
    isActive: driver.isActive,
    isVerified: driver.isVerified,
    emailVerified: driver.emailVerified,
    lastLoginAt: driver.lastLoginAt?.toISOString() || null,
    loginCount: driver.loginCount,
    createdAt: driver.createdAt.toISOString(),
    totalBookings,
    completedBookings: completed,
    totalRevenue: Number(revenueAgg._sum.lockedPrice) || 0,
    acceptanceRate: Math.round(acceptanceRate),
    pendingBookings: pending,
    bookingsByStatus,
    recentBookings: driver.bookings.map((b) => ({
      id: b.id,
      reference: b.reference,
      clientName: b.clientName,
      departureName: b.departureName,
      arrivalName: b.arrivalName,
      status: b.status,
      lockedPrice: b.lockedPrice ? Number(b.lockedPrice) : null,
      requestedDate: b.requestedDate.toISOString(),
      createdAt: b.createdAt.toISOString(),
      orgName: b.organization?.name || null,
    })),
  };

  return <DriverDetailView driver={data} />;
}
