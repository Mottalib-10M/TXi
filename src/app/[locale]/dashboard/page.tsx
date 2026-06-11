import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import { BookingQuickActions } from "@/components/dashboard/BookingQuickActions";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { getTranslations, getLocale } from "next-intl/server";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  // Track dashboard visit as activity
  prisma.driver.update({
    where: { id: session.user.id },
    data: { lastLoginAt: new Date() },
  }).catch(() => {});

  // Auto-cancel expired PENDING bookings ONLY if fully escalated (phase 2 = admin already notified)
  // and more than 48h past their requested date, to avoid cancelling recent bookings
  const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
  await prisma.booking.updateMany({
    where: {
      OR: [
        { driverId: session.user.id },
        { invitedDriverIds: { has: session.user.id } },
      ],
      status: "PENDING",
      requestedDate: { lt: twoDaysAgo },
      escalationPhase: 2,
    },
    data: { status: "CANCELLED", cancelledBy: "SYSTEM" },
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
            { status: "PENDING" },
            { status: "ACCEPTED", requestedDate: { gte: oneDayAgo } },
          ],
        },
      ],
    },
    orderBy: { requestedDate: "asc" },
  });

  if (!driver) return null;

  // P2P transmitted courses stats
  const transmittedBookings = await prisma.booking.findMany({
    where: { referrerDriverId: session.user.id },
    select: {
      status: true,
      p2pCommissionAmount: true,
      lockedPrice: true,
    },
  });
  const transmittedCount = transmittedBookings.length;
  const totalCommission = transmittedBookings
    .filter((b) => b.status === "ACCEPTED" || b.status === "COMPLETED")
    .reduce((sum, b) => sum + (b.p2pCommissionAmount || 0), 0);

  // Weekly bookings count
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)); // Monday
  startOfWeek.setHours(0, 0, 0, 0);
  const weeklyBookingsCount = await prisma.booking.count({
    where: {
      OR: [
        { driverId: session.user.id },
        { invitedDriverIds: { has: session.user.id } },
      ],
      createdAt: { gte: startOfWeek },
    },
  });

  const td = await getTranslations("dashboard");
  const locale = await getLocale();

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

  function normalizePhone(phone: string): string {
    let cleaned = phone.replace(/[\s\-().+]/g, "");
    if (cleaned.startsWith("0") && cleaned.length === 10) {
      cleaned = "33" + cleaned.slice(1);
    }
    return cleaned;
  }

  function buildWhatsAppUrl(booking: typeof activeBookings[number]): string {
    const clientLang = booking.clientLocale || "fr";
    const dateStr = new Date(booking.requestedDate).toLocaleDateString(
      clientLang === "en" ? "en-US" : "fr-FR",
      { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }
    );
    const price = booking.lockedPrice ? `${booking.lockedPrice.toFixed(0)} €` : "";
    const driverFullName = `${driver!.firstName} ${driver!.lastName}`;

    const message = clientLang === "en"
      ? [
          `Hello ${booking.clientName},`,
          ``,
          `I'm ${driverFullName}, your TaxiNeo driver.`,
          `I've just confirmed your booking:`,
          ``,
          `📍 ${booking.departureName} → ${booking.arrivalName}`,
          `📅 ${dateStr}`,
          price ? `💰 ${price}` : "",
          ``,
          `Don't hesitate to contact me here for any questions.`,
          ``,
          `See you soon!`,
        ].filter(Boolean).join("\n")
      : [
          `Bonjour ${booking.clientName},`,
          ``,
          `Je suis ${driverFullName}, votre chauffeur TaxiNeo.`,
          `Je viens de confirmer votre réservation :`,
          ``,
          `📍 ${booking.departureName} → ${booking.arrivalName}`,
          `📅 ${dateStr}`,
          price ? `💰 ${price}` : "",
          ``,
          `N'hésitez pas à me contacter ici pour toutes questions.`,
          ``,
          `À bientôt !`,
        ].filter(Boolean).join("\n");

    return `https://wa.me/${normalizePhone(booking.clientPhone)}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="min-w-0">
      {/* 1. Header simplifié */}
      <h1 className="text-2xl font-semibold tracking-tight mb-4">
        {td("hello", { name: driver.firstName })}
      </h1>

      {/* 2. Boutons d'action principaux */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Link
          href="/dashboard/reservations"
          className="relative flex flex-col items-center justify-center gap-1 bg-neutral-900 text-white rounded-2xl px-4 py-5 shadow-lg shadow-neutral-900/25 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
        >
          {pendingBookings.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-5 px-1 bg-red-500 text-white text-xs font-bold rounded-full shadow animate-pulse">
              {pendingBookings.length}
            </span>
          )}
          <Icon icon="solar:inbox-line-linear" className="text-2xl" />
          <span className="text-sm font-semibold">{td("ctaViewRides")}</span>
        </Link>
        <Link
          href="/dashboard/p2p"
          className="relative flex flex-col items-center justify-center gap-1 bg-violet-600 text-white rounded-2xl px-4 py-5 shadow-lg shadow-violet-600/25 hover:bg-violet-500 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
        >
          <Icon icon="solar:transfer-horizontal-linear" className="text-2xl" />
          <span className="text-sm font-semibold">{td("ctaTransferRide")}</span>
          <span className="text-[11px] font-light text-white/80 leading-tight text-center">{td("ctaTransferHint")}</span>
        </Link>
      </div>

      {/* 3. Barre de stats compacte */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Link
          href="/dashboard/reservations"
          className="bg-white border border-neutral-200 rounded-xl p-3 hover:border-neutral-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:clipboard-list-linear" className="text-neutral-500 text-base" />
            <span className="text-xs text-neutral-500">{td("statsWeekRides")}</span>
          </div>
          <p className="text-lg font-bold text-neutral-900">{weeklyBookingsCount}</p>
        </Link>
        <Link
          href="/dashboard/reservations"
          className="bg-white border border-neutral-200 rounded-xl p-3 hover:border-amber-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            {pendingBookings.length > 0 && (
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            )}
            <Icon icon="solar:hourglass-linear" className="text-amber-500 text-base" />
            <span className="text-xs text-neutral-500">{td("statsPending")}</span>
          </div>
          <p className="text-lg font-bold text-neutral-900">{pendingBookings.length}</p>
        </Link>
        <Link
          href="/dashboard/reservations"
          className="bg-white border border-neutral-200 rounded-xl p-3 hover:border-green-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:check-circle-linear" className="text-green-500 text-base" />
            <span className="text-xs text-neutral-500">{td("statsAccepted")}</span>
          </div>
          <p className="text-lg font-bold text-neutral-900">{acceptedBookings.length}</p>
        </Link>
        <Link
          href="/dashboard/profil"
          className="bg-white border border-neutral-200 rounded-xl p-3 hover:border-neutral-300 transition-colors"
        >
          <div className="flex items-center gap-2 mb-1">
            <Icon icon="solar:user-circle-linear" className="text-neutral-500 text-base" />
            <span className="text-xs text-neutral-500">{td("statsProfile")}</span>
          </div>
          <p className={`text-lg font-bold ${completeness < 100 ? "text-amber-600" : "text-neutral-900"}`}>
            {completeness}%
          </p>
        </Link>
      </div>

      {/* 3. Courses en attente */}
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
                    {booking.source === "P2P" && (
                      <span className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        <Icon icon="solar:transfer-horizontal-linear" className="text-xs" />
                        {td("transmittedBadge")}
                      </span>
                    )}
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
                        <>
                          <PhoneLink phone={booking.clientPhone} label={td("callClient")} className="text-amber-600 hover:text-amber-800" />
                          <WhatsAppLink href={buildWhatsAppUrl(booking)} context="dashboard_pending" bookingId={booking.id} />
                        </>
                      )}
                    </span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      className="text-amber-400 group-hover:text-amber-600 transition-colors shrink-0"
                    />
                  </span>
                  <BookingQuickActions bookingId={booking.id} />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Courses confirmées / à venir */}
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
                    {booking.source === "P2P" && (
                      <span className="inline-flex items-center gap-1 bg-violet-100 text-violet-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        <Icon icon="solar:transfer-horizontal-linear" className="text-xs" />
                        {td("transmittedBadge")}
                      </span>
                    )}
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
                        <>
                          <PhoneLink phone={booking.clientPhone} label={td("callClient")} className="text-green-600 hover:text-green-800" />
                          <WhatsAppLink href={buildWhatsAppUrl(booking)} context="dashboard_accepted" bookingId={booking.id} />
                        </>
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

      {/* 5. Infos profil manquantes avec barre de progression */}
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
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-neutral-100 rounded-full mb-3">
            <div
              className="h-1.5 bg-amber-400 rounded-full transition-all"
              style={{ width: `${completeness}%` }}
            />
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

      {/* 6. Liens rapides */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Link
          href="/dashboard/carte"
          className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 text-center shadow-md hover:shadow-lg hover:from-orange-400 hover:to-orange-500 transition-all"
        >
          <Icon icon="solar:card-2-bold" className="text-white text-xl mx-auto mb-1" />
          <span className="text-xs font-semibold text-white">{td("quickLinkCard")}</span>
        </Link>
        <QRCodeButton
          slug={driver.slug}
          driverName={`${driver.firstName} ${driver.lastName}`}
          companyName={driver.companyName || ""}
          vehicleModel={v0?.brand ? `${(v0 as { brand?: string; model?: string }).brand || ""} ${(v0 as { brand?: string; model?: string }).model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim()}
          variant="quickLink"
          label={td("quickLinkQR")}
        />
        <Link
          href="/dashboard/profil-public"
          className="bg-white border border-neutral-200 rounded-xl p-3 text-center hover:border-neutral-300 transition-colors"
        >
          <Icon icon="solar:eye-linear" className="text-neutral-500 text-xl mx-auto mb-1" />
          <span className="text-xs font-medium text-neutral-700">{td("quickLinkPublicProfile")}</span>
        </Link>
      </div>

      {/* 7. Bannière P2P subtile */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Icon icon="solar:transfer-horizontal-linear" className="text-violet-500 text-base shrink-0" />
          <span className="text-sm text-violet-700 truncate">
            {transmittedCount > 0
              ? td("p2pBannerActive", { count: transmittedCount, total: totalCommission.toFixed(0) })
              : td("p2pBannerNew")}
          </span>
        </div>
        <Link
          href="/dashboard/p2p"
          className="text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors whitespace-nowrap shrink-0"
        >
          {transmittedCount > 0 ? td("p2pBannerCtaActive") : td("p2pBannerCtaNew")}
        </Link>
      </div>
    </div>
  );
}
