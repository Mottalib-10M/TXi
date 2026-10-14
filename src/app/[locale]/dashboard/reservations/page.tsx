import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ReservationsTable } from "@/components/driver/ReservationsTable";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import { getTranslations } from "next-intl/server";
import { contactForDriver } from "@/lib/p2p";
import { escalateIfDue } from "@/lib/escalation";

export default async function ReservationsPage() {
  const session = await auth();
  // Course sans réponse (transmise : 30 min) : proposée aux chauffeurs proches, au plus une fois par minute.
  await escalateIfDue();
  if (!session?.user?.id) redirect("/connexion");

  // Track dashboard visit as activity
  prisma.driver.update({
    where: { id: session.user.id },
    data: { lastLoginAt: new Date() },
  }).catch(() => {});

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: { slug: true, firstName: true, lastName: true, companyName: true, vehicleBrand: true, vehicleModel: true, vehicles: true },
  });

  if (!driver) redirect("/connexion");

  const t = await getTranslations("dashboard");

  const bookings = await prisma.booking.findMany({
    where: {
      OR: [
        { driverId: session.user.id },
        { invitedDriverIds: { has: session.user.id } },
      ],
    },
    orderBy: { createdAt: "desc" },
    include: {
      referrerDriver: { select: { firstName: true, lastName: true, slug: true, phone: true, email: true } },
      organization: { select: { name: true } },
    },
  });

  const serialized = bookings.map(({ referrerDriver, ...b }) => ({
    ...b,
    // Course transmise ouverte aux chauffeurs proches : le contact est le chauffeur qui l'a transmise.
    ...contactForDriver(b, session.user!.id!, referrerDriver),
    createdAt: b.createdAt.toISOString(),
    updatedAt: b.updatedAt.toISOString(),
    requestedDate: b.requestedDate.toISOString(),
    cancelledBy: b.cancelledBy || null,
    referrerDriverSlug: referrerDriver?.slug ?? null,
    referrerDriverName: referrerDriver
      ? `${referrerDriver.firstName} ${referrerDriver.lastName}`
      : null,
    organizationName: b.organization?.name || null,
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t("reservationsTitle")}</h1>
          <p className="text-sm text-neutral-500 font-light mt-1">
            {t("reservationsSubtitle")}
          </p>
        </div>
        <QRCodeButton
          slug={driver.slug}
          driverName={`${driver.firstName} ${driver.lastName}`}
          companyName={driver.companyName || ""}
          vehicleModel={(() => {
            const v = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; model?: string }>)[0] : null;
            return v ? `${v.brand || ""} ${v.model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim();
          })()}
        />
      </div>
      <ReservationsTable bookings={serialized} driverName={`${driver.firstName} ${driver.lastName}`} />
    </div>
  );
}
