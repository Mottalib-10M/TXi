import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import { getTranslations, getLocale } from "next-intl/server";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    include: {
      _count: {
        select: { bookings: true },
      },
      bookings: {
        where: { status: { in: ["PENDING", "ACCEPTED"] } },
        orderBy: { requestedDate: "asc" },
      },
    },
  });

  if (!driver) return null;

  const td = await getTranslations("dashboard");
  const locale = await getLocale();

  const totalBookings = driver._count.bookings;
  const pendingBookings = driver.bookings.filter((b) => b.status === "PENDING");
  const acceptedBookings = driver.bookings.filter((b) => b.status === "ACCEPTED");

  // Profile completeness
  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; plate?: string }>) : [];
  const v0 = vehicles[0];

  const profileChecks = [
    { label: td("phone"), icon: "solar:phone-linear", section: "personal", done: Boolean(driver.phone) },
    { label: td("bio"), icon: "solar:document-text-linear", section: "personal", done: Boolean(driver.bio) },
    { label: td("vehicle"), icon: "mdi:car-outline", section: "vehicle", done: Boolean(v0?.brand || driver.vehicleBrand) },
    { label: td("plate"), icon: "solar:license-linear", section: "vehicle", done: Boolean(v0?.plate || driver.vehiclePlate) },
    { label: td("zone"), icon: "solar:map-point-linear", section: "zone", done: Boolean(driver.zoneLat) },
  ];

  const completedFields = profileChecks.filter((c) => c.done).length;
  const completeness = Math.round((completedFields / profileChecks.length) * 100);
  const missingChecks = profileChecks.filter((c) => !c.done);

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          {td("hello", { name: driver.firstName })}
        </h1>
        <QRCodeButton
          slug={driver.slug}
          driverName={`${driver.firstName} ${driver.lastName}`}
          companyName={driver.companyName || ""}
          vehicleModel={v0?.brand ? `${(v0 as { brand?: string; model?: string }).brand || ""} ${(v0 as { brand?: string; model?: string }).model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim()}
        />
      </div>

      {/* Stats bar - compact */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto">
        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 hover:border-neutral-300 transition-colors shrink-0"
        >
          <Icon icon="solar:calendar-linear" className="text-neutral-500 text-lg" />
          <span className="text-sm text-neutral-500">{td("total")}</span>
          <span className="text-sm font-semibold">{totalBookings}</span>
        </Link>

        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 hover:border-neutral-300 transition-colors shrink-0"
        >
          <Icon icon="solar:clock-circle-linear" className="text-amber-500 text-lg" />
          <span className="text-sm text-neutral-500">{td("pending")}</span>
          <span className="text-sm font-semibold">{pendingBookings.length}</span>
        </Link>

        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 hover:border-neutral-300 transition-colors shrink-0"
        >
          <Icon icon="solar:check-circle-linear" className="text-green-500 text-lg" />
          <span className="text-sm text-neutral-500">{td("acceptedPlural")}</span>
          <span className="text-sm font-semibold">{acceptedBookings.length}</span>
        </Link>

        <Link
          href="/dashboard/profil"
          className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 hover:border-neutral-300 transition-colors shrink-0"
        >
          <Icon
            icon={completeness === 100 ? "solar:check-circle-bold" : "solar:user-check-linear"}
            className={`text-lg ${completeness === 100 ? "text-green-500" : "text-blue-500"}`}
          />
          <span className="text-sm text-neutral-500">{td("fromProfile")}</span>
          <span className="text-sm font-semibold">{completeness}%</span>
        </Link>
      </div>

      {/* Pending bookings - priority */}
      {pendingBookings.length > 0 && (
        <div className="bg-white border border-amber-200 rounded-2xl p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <h2 className="font-semibold text-sm">{td("pendingResponse")}</h2>
            </div>
            <Link
              href="/dashboard/reservations"
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {td("seeAll")}
            </Link>
          </div>
          <div className="space-y-1">
            {pendingBookings.map((booking) => (
              <Link
                key={booking.id}
                href={`/dashboard/reservations?id=${booking.id}`}
                className="flex items-center justify-between py-3 px-3 -mx-3 rounded-xl border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors group"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{booking.clientName}</p>
                  <p className="text-xs text-neutral-500 font-light truncate">
                    {booking.departureName} → {booking.arrivalName}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {booking.lockedPrice != null && (
                    <span className="text-xs font-semibold">{booking.lockedPrice.toFixed(0)} €</span>
                  )}
                  <span className="text-xs text-neutral-400 font-light">{formatDate(booking.requestedDate)}</span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-neutral-300 group-hover:text-neutral-600 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Accepted bookings - upcoming rides */}
      {acceptedBookings.length > 0 && (
        <div className="bg-white border border-green-200 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <h2 className="font-semibold text-sm">{td("upcomingRides")}</h2>
            </div>
            <Link
              href="/dashboard/reservations"
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {td("seeAll")}
            </Link>
          </div>
          <div className="space-y-1">
            {acceptedBookings.map((booking) => (
              <Link
                key={booking.id}
                href={`/dashboard/reservations?id=${booking.id}`}
                className="flex items-center justify-between py-3 px-3 -mx-3 rounded-xl border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors group"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{booking.clientName}</p>
                  <p className="text-xs text-neutral-500 font-light truncate">
                    {booking.departureName} → {booking.arrivalName}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {booking.lockedPrice != null && (
                    <span className="text-xs font-semibold text-green-700">{booking.lockedPrice.toFixed(0)} €</span>
                  )}
                  <span className="text-xs text-green-600 font-medium">{formatDate(booking.requestedDate)}</span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    className="text-neutral-300 group-hover:text-neutral-600 transition-colors"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Missing profile items */}
      {missingChecks.length > 0 && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="solar:info-circle-linear" className="text-amber-500 text-lg" />
            <h2 className="text-sm font-semibold">
              {missingChecks.length === 1
                ? td("missingInfo", { count: missingChecks.length })
                : td("missingInfoPlural", { count: missingChecks.length })}
            </h2>
          </div>
          <div className="space-y-1">
            {missingChecks.map((check) => (
              <Link
                key={check.label}
                href={`/dashboard/profil?section=${check.section}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-amber-50/50 border border-amber-200 hover:bg-amber-50 hover:border-amber-300 transition-colors group"
              >
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon={check.icon} className="text-amber-600 text-base" />
                </div>
                <span className="text-sm text-neutral-700 flex-1 font-medium">{check.label}</span>
                <span className="text-xs text-amber-600 font-medium hidden sm:inline">{td("complete")}</span>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-amber-400 group-hover:text-amber-600 transition-colors shrink-0 text-sm"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/dashboard/profil-public"
          className="bg-white border border-neutral-200 rounded-2xl p-4 hover:border-neutral-300 transition-colors"
        >
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-2.5">
            <Icon icon="solar:eye-linear" className="text-blue-600 text-lg" />
          </div>
          <h3 className="font-medium text-sm">{td("publicPage")}</h3>
          <p className="text-xs text-neutral-500 font-light mt-0.5">{td("viewPublicProfile")}</p>
        </Link>

        <Link
          href="/dashboard/carte"
          className="bg-white border border-neutral-200 rounded-2xl p-4 hover:border-neutral-300 transition-colors"
        >
          <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center mb-2.5">
            <Icon icon="solar:qr-code-linear" className="text-amber-600 text-lg" />
          </div>
          <h3 className="font-medium text-sm">{td("businessCard")}</h3>
          <p className="text-xs text-neutral-500 font-light mt-0.5">{td("generateQR")}</p>
        </Link>
      </div>
    </div>
  );
}
