"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";

interface Stats {
  total: number;
  pending: number;
  completed: number;
  cagnotte: number;
}

interface RecentBooking {
  id: string;
  reference: string;
  beneficiaryName: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  status: string;
  lockedPrice: number | null;
}

function isBookingSoon(requestedDate: string): boolean {
  const requested = new Date(requestedDate).getTime();
  const now = Date.now();
  return requested - now < 2 * 60 * 60 * 1000; // less than 2 hours
}

export default function OrgDashboard() {
  const t = useTranslations("org");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, completed: 0, cagnotte: 0 });
  const [recent, setRecent] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [orgType, setOrgType] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const [profileRes, bookingsRes] = await Promise.all([
          fetch("/api/org/profile"),
          fetch("/api/org/bookings?limit=10"),
        ]);
        const profile = await profileRes.json();
        const bookingsData = await bookingsRes.json();

        setOrgType(profile.type || "");
        const bookings = bookingsData.bookings || [];
        setStats({
          total: bookingsData.total || 0,
          pending: bookings.filter((b: RecentBooking) => b.status === "PENDING").length,
          completed: bookings.filter((b: RecentBooking) => b.status === "COMPLETED").length,
          cagnotte: profile.cagnotteBalance || 0,
        });
        setRecent(bookings);
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isIndividual = orgType === "INDIVIDUAL";

  // Separate active booking (most recent PENDING or ACCEPTED) from rest
  const activeBooking = recent.find((b) => b.status === "PENDING" || b.status === "ACCEPTED");
  const otherBookings = recent.filter((b) => b !== activeBooking).slice(0, 4);

  const statusColors: Record<string, string> = {
    PENDING: "bg-amber-50 text-amber-700",
    ACCEPTED: "bg-blue-50 text-blue-700",
    COMPLETED: "bg-green-50 text-green-700",
    REJECTED: "bg-red-50 text-red-700",
    CANCELLED: "bg-neutral-100 text-neutral-500",
  };

  const statusLabels: Record<string, string> = {
    PENDING: t("pending"),
    ACCEPTED: t("accepted"),
    COMPLETED: t("completed"),
    REJECTED: t("rejected"),
    CANCELLED: t("cancelled"),
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Icon icon="solar:refresh-linear" className="text-2xl animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-sm text-neutral-500 mt-1">{t("subtitle")}</p>
      </div>

      {/* Active booking - highlighted at top */}
      {activeBooking && (
        <div className="mb-8 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="solar:route-linear" className="text-lg" />
            <span className="text-sm font-semibold">{activeBooking.status === "PENDING" ? t("pending") : t("accepted")}</span>
          </div>
          <p className="font-medium mb-1">
            {activeBooking.departureName} → {activeBooking.arrivalName}
          </p>
          <p className="text-sm text-neutral-300">
            {format(new Date(activeBooking.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
            {activeBooking.lockedPrice != null && ` · ${activeBooking.lockedPrice.toFixed(0)} €`}
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Icon icon="solar:phone-calling-linear" className="text-base" />
            <span className="text-neutral-200">
              {isBookingSoon(activeBooking.requestedDate)
                ? t("driverWillContactSoon")
                : t("driverWillContactHour")}
            </span>
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <Link
          href="/org/nouvelle-course"
          className="flex items-center gap-4 bg-neutral-900 text-white rounded-2xl p-5 hover:bg-neutral-800 transition-colors"
        >
          <Icon icon="solar:add-circle-bold" className="text-2xl" />
          <div>
            <p className="font-medium">{t("newRideTitle")}</p>
            <p className="text-xs text-neutral-400">{isIndividual ? t("bookTaxi") : t("bookTaxiNow")}</p>
          </div>
        </Link>
        <Link
          href="/org/favoris"
          className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-5 hover:bg-neutral-50 transition-colors"
        >
          <Icon icon="solar:star-bold" className="text-2xl text-amber-500" />
          <div>
            <p className="font-medium">{t("favoriteDrivers")}</p>
            <p className="text-xs text-neutral-500">{t("manageFavorites")}</p>
          </div>
        </Link>
      </div>

      {/* Mini stats row */}
      <div className="flex items-center gap-3 mb-8 flex-wrap">
        <Link
          href="/org/courses"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2 hover:border-neutral-300 transition-colors text-xs"
        >
          <Icon icon="solar:calendar-linear" className="text-neutral-500" />
          <span className="text-neutral-500">{t("totalRides")}</span>
          <span className="font-semibold">{stats.total}</span>
        </Link>
        <Link
          href="/org/courses"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2 hover:border-neutral-300 transition-colors text-xs"
        >
          <Icon icon="solar:clock-circle-linear" className="text-amber-500" />
          <span className="text-neutral-500">{t("pending")}</span>
          <span className="font-semibold">{stats.pending}</span>
        </Link>
        <Link
          href="/org/courses"
          className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2 hover:border-neutral-300 transition-colors text-xs"
        >
          <Icon icon="solar:check-circle-linear" className="text-green-500" />
          <span className="text-neutral-500">{t("completed")}</span>
          <span className="font-semibold">{stats.completed}</span>
        </Link>
        {!isIndividual && (
          <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2 text-xs">
            <Icon icon="solar:wallet-linear" className="text-blue-500" />
            <span className="text-neutral-500">{t("walletTitle")}</span>
            <span className="font-semibold">{stats.cagnotte.toFixed(2)} €</span>
          </div>
        )}
      </div>

      {/* Recent bookings */}
      <div className="bg-white rounded-2xl border border-neutral-200">
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <h2 className="font-semibold">{t("recentRides")}</h2>
          <Link href="/org/courses" className="text-sm text-neutral-500 hover:text-neutral-900">
            {tc("seeAll")}
          </Link>
        </div>
        {otherBookings.length === 0 && !activeBooking ? (
          <div className="p-8 text-center text-sm text-neutral-500">
            {t("noRidesYet")}
          </div>
        ) : otherBookings.length === 0 ? (
          <div className="p-8 text-center text-sm text-neutral-500">
            {t("noRidesYet")}
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {otherBookings.map((b) => (
              <div key={b.id} className="flex items-center justify-between p-4 px-5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">
                    {b.departureName} → {b.arrivalName}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {format(new Date(b.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
                  </p>
                  {(b.status === "PENDING" || b.status === "ACCEPTED") && (
                    <p className="text-xs text-blue-600 font-medium mt-0.5 flex items-center gap-1">
                      <Icon icon="solar:phone-calling-linear" className="text-xs" />
                      {isBookingSoon(b.requestedDate)
                        ? t("driverWillContactSoon")
                        : t("driverWillContactHour")}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 ml-4">
                  {b.lockedPrice != null && (
                    <span className="text-sm font-medium">{b.lockedPrice.toFixed(0)} €</span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[b.status] || ""}`}>
                    {statusLabels[b.status] || b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
