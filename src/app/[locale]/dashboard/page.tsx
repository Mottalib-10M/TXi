import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { getTranslations, getLocale } from "next-intl/server";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  // Auto-cancel expired PENDING bookings (assigned or invited)
  await prisma.booking.updateMany({
    where: {
      OR: [
        { driverId: session.user.id },
        { invitedDriverIds: { has: session.user.id } },
      ],
      status: "PENDING",
      requestedDate: { lt: new Date() },
    },
    data: { status: "CANCELLED" },
  });

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    include: {
      _count: {
        select: { bookings: true },
      },
    },
  });

  // Fetch active bookings including invited ones
  // Show PENDING (future only) + ACCEPTED (up to 24h after ride date)
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const activeBookings = await prisma.booking.findMany({
    where: {
      AND: [
        {
          OR: [
            { driverId: session.user.id },
            { invitedDriverIds: { has: session.user.id } },
          ],
        },
        {
          OR: [
            { status: "PENDING", requestedDate: { gte: now } },
            { status: "ACCEPTED", requestedDate: { gte: oneDayAgo } },
          ],
        },
      ],
    },
    orderBy: { requestedDate: "asc" },
  });

  if (!driver) return null;

  const td = await getTranslations("dashboard");
  const locale = await getLocale();

  const totalBookings = driver._count.bookings;
  const pendingBookings = activeBookings.filter((b) => b.status === "PENDING");
  const acceptedBookings = activeBookings.filter((b) => b.status === "ACCEPTED");

  // Profile completeness
  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; plate?: string; photos?: string[] }>) : [];
  const v0 = vehicles[0];
  const hasVehiclePhoto = vehicles.some((v) => v.photos && v.photos.length > 0);

  const profileChecks = [
    { label: td("phone"), icon: "solar:phone-linear", section: "personal", done: Boolean(driver.phone) },
    { label: td("bio"), icon: "solar:document-text-linear", section: "personal", done: Boolean(driver.bio), hint: td("bioHint") },
    { label: td("vehicle"), icon: "mdi:car-outline", section: "vehicle", done: Boolean(v0?.brand || driver.vehicleBrand) },
    { label: td("plate"), icon: "solar:license-linear", section: "vehicle", done: Boolean(v0?.plate || driver.vehiclePlate) },
    { label: td("zone"), icon: "solar:map-point-linear", section: "zone", done: Boolean(driver.zoneLat) },
    { label: td("vehiclePhoto"), icon: "solar:camera-linear", section: "vehicle", done: hasVehiclePhoto, hint: td("vehiclePhotoHint") },
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

  function hoursUntil(date: Date) {
    return Math.max(0, Math.round((new Date(date).getTime() - now.getTime()) / (1000 * 60 * 60)));
  }

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          {td("hello", { name: driver.firstName })}
        </h1>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/carte"
            className="inline-flex items-center gap-2 bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-amber-600 shadow-sm transition-colors whitespace-nowrap"
          >
            <Icon icon="solar:card-2-linear" className="text-base" />
            {td("freeCard")}
          </Link>
          <QRCodeButton
            slug={driver.slug}
            driverName={`${driver.firstName} ${driver.lastName}`}
            companyName={driver.companyName || ""}
            vehicleModel={v0?.brand ? `${(v0 as { brand?: string; model?: string }).brand || ""} ${(v0 as { brand?: string; model?: string }).model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim()}
          />
        </div>
      </div>

      {/* Stats bar - compact */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 hover:border-neutral-300 transition-colors min-w-0"
        >
          <Icon icon="solar:calendar-linear" className="text-neutral-500 text-lg shrink-0" />
          <span className="text-xs text-neutral-500 truncate">{td("total")}</span>
          <span className="text-sm font-semibold ml-auto">{totalBookings}</span>
        </Link>

        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 hover:border-neutral-300 transition-colors min-w-0"
        >
          <Icon icon="solar:clock-circle-linear" className="text-amber-500 text-lg shrink-0" />
          <span className="text-xs text-neutral-500 truncate">{td("pending")}</span>
          <span className="text-sm font-semibold ml-auto">{pendingBookings.length}</span>
        </Link>

        <Link
          href="/dashboard/reservations"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 hover:border-neutral-300 transition-colors min-w-0"
        >
          <Icon icon="solar:check-circle-linear" className="text-green-500 text-lg shrink-0" />
          <span className="text-xs text-neutral-500 truncate">{td("acceptedPlural")}</span>
          <span className="text-sm font-semibold ml-auto">{acceptedBookings.length}</span>
        </Link>

        <Link
          href="/dashboard/profil"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 hover:border-neutral-300 transition-colors min-w-0"
        >
          <Icon
            icon={completeness === 100 ? "solar:check-circle-bold" : "solar:user-check-linear"}
            className={`text-lg shrink-0 ${completeness === 100 ? "text-green-500" : "text-blue-500"}`}
          />
          <span className="text-xs text-neutral-500 truncate">{td("fromProfile")}</span>
          <span className="text-sm font-semibold ml-auto">{completeness}%</span>
        </Link>
      </div>

      {/* Pending bookings - priority */}
      {pendingBookings.length > 0 && (
        <div className="mb-4">
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
          <div className="space-y-3">
            {pendingBookings.map((booking) => {
              const h = hoursUntil(booking.requestedDate);
              const urgent = h > 0 && h < 10;
              return (
                <Link
                  key={booking.id}
                  href={`/dashboard/reservations?id=${booking.id}`}
                  className="block bg-amber-50/60 border-2 border-amber-300 rounded-2xl p-4 hover:border-amber-400 hover:bg-amber-50 transition-colors group"
                >
                  <span className="flex items-start justify-between gap-3 mb-2">
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-neutral-900 leading-snug">
                        {booking.departureName}
                      </span>
                      <span className="block text-sm font-semibold text-neutral-900 leading-snug">
                        → {booking.arrivalName}
                      </span>
                    </span>
                    {booking.lockedPrice != null && (
                      <span className="text-lg font-bold text-amber-700 shrink-0">
                        {booking.lockedPrice.toFixed(0)}&nbsp;€
                      </span>
                    )}
                  </span>
                  <span className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-sm text-neutral-600">
                      <Icon icon="solar:calendar-linear" className="text-sm" />
                      {formatDate(booking.requestedDate)}
                    </span>
                    {urgent && (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        <Icon icon="solar:alarm-bold" className="text-xs" />
                        {td("inXHours", { hours: h })}
                      </span>
                    )}
                  </span>
                  <span className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="text-sm text-neutral-500">{booking.clientName}</span>
                      {booking.clientPhone && (
                        <PhoneLink phone={booking.clientPhone} label={td("callClient")} className="text-amber-600 hover:text-amber-800" />
                      )}
                    </span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="text-amber-400 group-hover:text-amber-600 transition-colors shrink-0"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Accepted bookings - upcoming rides */}
      {acceptedBookings.length > 0 && (
        <div className="mb-6">
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
          <div className="space-y-3">
            {acceptedBookings.map((booking) => {
              const h = hoursUntil(booking.requestedDate);
              const urgent = h > 0 && h < 10;
              return (
                <Link
                  key={booking.id}
                  href={`/dashboard/reservations?id=${booking.id}`}
                  className="block bg-green-50/60 border border-green-200 rounded-2xl p-4 hover:border-green-300 hover:bg-green-50 transition-colors group"
                >
                  <span className="flex items-start justify-between gap-3 mb-2">
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-neutral-900 leading-snug">
                        {booking.departureName}
                      </span>
                      <span className="block text-sm font-semibold text-neutral-900 leading-snug">
                        → {booking.arrivalName}
                      </span>
                    </span>
                    {booking.lockedPrice != null && (
                      <span className="text-lg font-bold text-green-700 shrink-0">
                        {booking.lockedPrice.toFixed(0)}&nbsp;€
                      </span>
                    )}
                  </span>
                  <span className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-sm text-neutral-600">
                      <Icon icon="solar:calendar-linear" className="text-sm" />
                      {formatDate(booking.requestedDate)}
                    </span>
                    {urgent && (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        <Icon icon="solar:alarm-bold" className="text-xs" />
                        {td("inXHours", { hours: h })}
                      </span>
                    )}
                  </span>
                  <span className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="text-sm text-neutral-500">{booking.clientName}</span>
                      {booking.clientPhone && (
                        <PhoneLink phone={booking.clientPhone} label={td("callClient")} className="text-green-600 hover:text-green-800" />
                      )}
                    </span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="text-green-400 group-hover:text-green-600 transition-colors shrink-0"
                    />
                  </span>
                </Link>
              );
            })}
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
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon={check.icon} className="text-amber-600 text-base" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="text-sm text-neutral-700 font-medium">{check.label}</span>
                  {check.hint && (
                    <span className="block text-xs text-neutral-500 font-light">{check.hint}</span>
                  )}
                </span>
                <span className="text-xs text-amber-600 font-medium hidden sm:inline shrink-0">{td("complete")}</span>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-amber-400 group-hover:text-amber-600 transition-colors shrink-0 text-sm"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Card promo banner */}
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h2 className="font-semibold text-sm flex items-center gap-2">
              <Icon icon="solar:card-2-bold" className="text-amber-400 text-lg" />
              {td("cardPromoTitle")}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              {td("cardPromoDesc")}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-neutral-300">
            <Icon icon="solar:check-circle-bold" className="text-amber-400 text-sm" />
            {td("cardBenefit1")}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-neutral-300">
            <Icon icon="solar:check-circle-bold" className="text-amber-400 text-sm" />
            {td("cardBenefit2")}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-neutral-300">
            <Icon icon="solar:check-circle-bold" className="text-amber-400 text-sm" />
            {td("cardBenefit3")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/carte"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Icon icon="solar:card-2-linear" className="text-sm" />
            {td("cardPromoCta")}
          </Link>
          <Link
            href="/dashboard/profil-public"
            className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white px-3 py-2 rounded-lg transition-colors"
          >
            <Icon icon="solar:eye-linear" className="text-sm" />
            {td("viewPublicProfile")}
          </Link>
        </div>
      </div>
    </div>
  );
}
