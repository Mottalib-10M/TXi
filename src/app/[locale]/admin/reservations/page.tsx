import { prisma } from "@/lib/prisma";
import { AdminBookingsTable } from "@/components/admin/AdminBookingsTable";
import { getTranslations } from "next-intl/server";

export default async function AdminReservationsPage() {
  const t = await getTranslations("admin");

  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      driver: { select: { firstName: true, lastName: true, slug: true } },
      organization: { select: { name: true, type: true } },
    },
  });

  const serialized = bookings.map((b) => ({
    id: b.id,
    reference: b.reference,
    clientName: b.clientName,
    clientEmail: b.clientEmail,
    clientPhone: b.clientPhone,
    clientComments: b.clientComments,
    beneficiaryName: b.beneficiaryName,
    departureName: b.departureName,
    arrivalName: b.arrivalName,
    requestedDate: b.requestedDate.toISOString(),
    passengerCount: b.passengerCount,
    estimatedPrice: b.estimatedPrice,
    lockedPrice: b.lockedPrice,
    status: b.status,
    source: b.source,
    driver: b.driver
      ? { name: `${b.driver.firstName} ${b.driver.lastName}`, slug: b.driver.slug }
      : null,
    organization: b.organization
      ? { name: b.organization.name, type: b.organization.type }
      : null,
    createdAt: b.createdAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("reservationsTitle")}</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {t("reservationsCount", { count: bookings.length })}
        </p>
      </div>
      <AdminBookingsTable bookings={serialized} />
    </div>
  );
}
