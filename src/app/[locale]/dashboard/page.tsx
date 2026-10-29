import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";
import { MapsLink } from "@/components/ui/MapsLink";
import { BookingQuickActions } from "@/components/dashboard/BookingQuickActions";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { getTranslations, getLocale } from "next-intl/server";
import { contactForDriver } from "@/lib/p2p";
import { escalateIfDue } from "@/lib/escalation";
import { driverProfileChecks } from "@/lib/driver-profile";

export default async function DashboardPage() {
  const session = await auth();
  // Course sans réponse (transmise : 30 min) : proposée aux chauffeurs proches, au plus une fois par minute.
  await escalateIfDue();
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
  const rawActiveBookings = await prisma.booking.findMany({
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
    include: { referrerDriver: { select: { firstName: true, lastName: true, phone: true, email: true } } },
  });
  // Course transmise ouverte aux chauffeurs proches : le contact affiché est le chauffeur qui l'a transmise.
  const activeBookings = rawActiveBookings.map((b) => ({ ...b, ...contactForDriver(b, session.user.id!, b.referrerDriver) }));

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

  // Dernières courses (déjà passées ou closes), sous les demandes.
  const recentBookings = await prisma.booking.findMany({
    where: {
      driverId: session.user.id,
      id: { notIn: activeBookings.map((b) => b.id) },
      status: { not: "PENDING" },
    },
    orderBy: { requestedDate: "desc" },
    take: 6,
    select: { id: true, departureName: true, arrivalName: true, requestedDate: true, lockedPrice: true, status: true, clientName: true },
  });

  const td = await getTranslations("dashboard");
  const locale = await getLocale();

  const pendingBookings = activeBookings.filter((b) => b.status === "PENDING");
  const acceptedBookings = activeBookings.filter((b) => b.status === "ACCEPTED");

  // Profile completeness
  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; model?: string }>) : [];
  const v0 = vehicles[0];
  const { completeness, missing: missingChecks } = driverProfileChecks(driver);

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

    if (booking.contactIsReferrer) {
      const msg = locale === "en"
        ? `Hello ${booking.clientName}, I'm ${driverFullName} (Taxineo). I'm taking the ride you shared: ${booking.departureName} → ${booking.arrivalName}, ${dateStr}.`
        : `Bonjour ${booking.clientName}, c'est ${driverFullName} (Taxineo). Je prends la course que tu as transmise : ${booking.departureName} → ${booking.arrivalName}, ${dateStr}.`;
      return `https://wa.me/${normalizePhone(booking.clientPhone)}?text=${encodeURIComponent(msg)}`;
    }

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

  // Carte d'une course : ambre tant qu'elle attend une réponse, verte une fois acceptée.
  function bookingCard(booking: typeof activeBookings[number], tone: "pending" | "accepted") {
    const h = hoursUntil(booking.requestedDate);
    const urgent = h > 0 && h < 10;
    const pending = tone === "pending";
    return (
      <Link
        key={booking.id}
        href={`/dashboard/reservations?id=${booking.id}`}
        className={`block rounded-2xl p-4 transition-colors group ${
          pending
            ? "bg-amber-50/60 border-2 border-amber-300 hover:border-amber-400 hover:bg-amber-50"
            : "bg-white border border-neutral-200 hover:border-green-300"
        }`}
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
          <span className="flex items-center gap-2 shrink-0">
            <MapsLink origin={booking.departureName} destination={booking.arrivalName} />
            {booking.lockedPrice != null && (
              <span className={`text-lg font-bold ${pending ? "text-amber-700" : "text-green-700"}`}>
                {booking.lockedPrice.toFixed(0)}&nbsp;€
              </span>
            )}
          </span>
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
            <span className="text-sm text-neutral-500">
              {booking.clientName}
              {booking.contactIsReferrer && <span className="text-xs text-violet-600"> · {td("contactReferrer")}</span>}
            </span>
            {booking.clientPhone && (
              <>
                <PhoneLink
                  phone={booking.clientPhone}
                  label={td("callClient")}
                  className={pending ? "text-amber-600 hover:text-amber-800" : "text-green-600 hover:text-green-800"}
                />
                <WhatsAppLink href={buildWhatsAppUrl(booking)} context={pending ? "dashboard_pending" : "dashboard_accepted"} bookingId={booking.id} />
              </>
            )}
          </span>
          <Icon
            icon="solar:arrow-right-linear"
            className={`shrink-0 transition-colors ${pending ? "text-amber-400 group-hover:text-amber-600" : "text-neutral-300 group-hover:text-green-600"}`}
          />
        </span>
        {pending && <BookingQuickActions bookingId={booking.id} />}
      </Link>
    );
  }

  return (
    <div className="min-w-0">
      {/* En-tête : bonjour, puis l'onglet */}
      <div className="flex items-end justify-between gap-4 mb-6">
        <div className="min-w-0">
          <p className="text-sm text-neutral-500">{td("hello", { name: driver.firstName })}</p>
          <h1 className="text-3xl font-bold tracking-tight">{td("requestsTitle")}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Colonne principale : demandes en attente puis courses à venir */}
        <div className="lg:col-span-2 lg:row-start-1 space-y-6 min-w-0">
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {pendingBookings.length > 0 && <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />}
                <h2 className="font-semibold">{td("pendingResponse")}</h2>
                {pendingBookings.length > 0 && (
                  <span className="text-xs font-bold bg-amber-500 text-neutral-950 rounded-full px-2 py-0.5">{pendingBookings.length}</span>
                )}
              </div>
              <Link href="/dashboard/reservations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                {td("seeAll")}
              </Link>
            </div>
            {pendingBookings.length > 0 ? (
              <div className="space-y-3">{pendingBookings.map((b) => bookingCard(b, "pending"))}</div>
            ) : (
              <div className="bg-white border border-dashed border-neutral-300 rounded-2xl px-5 py-8 text-center">
                <Icon icon="solar:bell-off-linear" className="text-3xl text-neutral-300 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-800">{td("noPending")}</p>
                <p className="text-xs text-neutral-500 mt-1">{td("noPendingDesc")}</p>
              </div>
            )}
          </section>

          {acceptedBookings.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <h2 className="font-semibold">{td("upcomingRides")}</h2>
                </div>
                <Link href="/dashboard/reservations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                  {td("seeAll")}
                </Link>
              </div>
              <div className="space-y-3">{acceptedBookings.map((b) => bookingCard(b, "accepted"))}</div>
            </section>
          )}
        </div>

        {/* Colonne de droite (sous les demandes sur mobile) */}
        <aside className="space-y-4 min-w-0 lg:col-start-3 lg:row-start-1 lg:row-span-2">
          <Link href="/dashboard/reservations" className="block bg-neutral-950 text-white rounded-2xl p-5 hover:bg-neutral-900 transition-colors">
            <span className="flex items-center justify-between text-sm text-neutral-400">
              {td("summaryTitle")}
              <Icon icon="solar:alt-arrow-right-linear" />
            </span>
            <span className="grid grid-cols-3 gap-3 mt-3">
              <span>
                <span className="block text-2xl font-bold">{weeklyBookingsCount}</span>
                <span className="block text-xs text-neutral-400">{td("statsWeekRides")}</span>
              </span>
              <span>
                <span className="block text-2xl font-bold text-amber-400">{pendingBookings.length}</span>
                <span className="block text-xs text-neutral-400">{td("statsPending")}</span>
              </span>
              <span>
                <span className="block text-2xl font-bold">{acceptedBookings.length}</span>
                <span className="block text-xs text-neutral-400">{td("statsAccepted")}</span>
              </span>
            </span>
          </Link>

          {missingChecks.length > 0 && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-sm font-semibold">{td("profileFilled", { percent: completeness })}</h2>
                <span className="text-xs text-neutral-500">
                  {missingChecks.length === 1
                    ? td("missingInfo", { count: missingChecks.length })
                    : td("missingInfoPlural", { count: missingChecks.length })}
                </span>
              </div>
              <div className="w-full h-1.5 bg-neutral-100 rounded-full mb-3">
                <div className="h-1.5 bg-amber-400 rounded-full" style={{ width: `${completeness}%` }} />
              </div>
              <div className="space-y-1">
                {missingChecks.map((check) => (
                  <Link
                    key={check.key}
                    href={`/dashboard/profil?section=${check.section}`}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <Icon icon={check.icon} className="text-amber-600 text-base" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm text-neutral-800 font-medium">{td(check.key)}</span>
                      {check.hint && <span className="block text-xs text-neutral-500 font-light">{td(check.hint)}</span>}
                    </span>
                    <span className="text-xs text-amber-700 font-medium shrink-0">{td("complete")}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/dashboard/carte"
              className="bg-white border border-neutral-200 rounded-xl p-3 text-center hover:border-neutral-300 transition-colors"
            >
              <Icon icon="solar:card-2-linear" className="text-amber-600 text-xl mx-auto mb-1" />
              <span className="text-xs font-medium text-neutral-700">{td("quickLinkCard")}</span>
            </Link>
            <QRCodeButton
              slug={driver.slug}
              driverName={`${driver.firstName} ${driver.lastName}`}
              companyName={driver.companyName || ""}
              vehicleModel={v0?.brand ? `${v0.brand || ""} ${v0.model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim()}
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

          <Link
            href="/dashboard/p2p"
            className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-2xl px-4 py-3 hover:border-violet-300 transition-colors"
          >
            <Icon icon="solar:transfer-horizontal-linear" className="text-violet-500 text-xl shrink-0" />
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-semibold text-violet-800">{td("ctaTransferRide")}</span>
              <span className="block text-xs text-violet-700">
                {transmittedCount > 0
                  ? td("p2pBannerActive", { count: transmittedCount, total: totalCommission.toFixed(0) })
                  : td("ctaTransferHint")}
              </span>
            </span>
            <Icon icon="solar:alt-arrow-right-linear" className="text-violet-400 shrink-0" />
          </Link>
        </aside>

          {recentBookings.length > 0 && (
          <section className="lg:col-span-2 lg:row-start-2 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">{td("recentRides")}</h2>
              <Link href="/dashboard/reservations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                {td("seeAll")}
              </Link>
            </div>
            <ul className="bg-white border border-neutral-200 rounded-2xl divide-y divide-neutral-100 overflow-hidden">
              {recentBookings.map((b) => (
                <li key={b.id}>
                  <Link href={`/dashboard/reservations?id=${b.id}`} className="flex items-center gap-4 px-4 py-3 hover:bg-neutral-50 transition-colors">
                    <span className="w-20 sm:w-32 shrink-0 text-xs text-neutral-500">{formatDate(b.requestedDate)}</span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-medium text-neutral-900 truncate">{b.departureName} → {b.arrivalName}</span>
                      <span className="block text-xs text-neutral-500 truncate">{b.clientName}</span>
                    </span>
                    <span className={`hidden sm:inline text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                      b.status === "COMPLETED" || b.status === "ACCEPTED" ? "bg-green-50 text-green-700" : "bg-neutral-100 text-neutral-500"
                    }`}>
                      {td(b.status === "COMPLETED" ? "completed" : b.status === "ACCEPTED" ? "accepted" : b.status === "REJECTED" ? "rejected" : "cancelled")}
                    </span>
                    {b.lockedPrice != null && <span className="text-sm font-semibold shrink-0 w-14 text-right">{b.lockedPrice.toFixed(0)}&nbsp;€</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
