"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface Stats {
  total: number;
  pending: number;
  completed: number;
  cagnotte: number;
}

interface MonthlyStat {
  month: string;
  count: number;
  amount: number;
  completed: number;
  completedAmount: number;
  inProgress: number;
  inProgressAmount: number;
  cagnotte: number;
}

interface RecentBooking {
  id: string;
  reference: string;
  beneficiaryName: string | null;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  status: string;
  lockedPrice: number | null;
  driver: {
    firstName: string;
    lastName: string;
    phone: string | null;
  } | null;
}

function isBookingSoon(requestedDate: string): boolean {
  const requested = new Date(requestedDate).getTime();
  const now = Date.now();
  return requested - now < 2 * 60 * 60 * 1000;
}

function isDriverOnTheWay(requestedDate: string): boolean {
  const requested = new Date(requestedDate).getTime();
  const now = Date.now();
  return requested - now < 30 * 60 * 1000 && requested - now > -60 * 60 * 1000;
}


const MONTH_SHORT_FR: Record<string, string> = {
  "01": "Jan", "02": "Fév", "03": "Mar", "04": "Avr",
  "05": "Mai", "06": "Juin", "07": "Juil", "08": "Août",
  "09": "Sep", "10": "Oct", "11": "Nov", "12": "Déc",
};

const MONTH_SHORT_EN: Record<string, string> = {
  "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr",
  "05": "May", "06": "Jun", "07": "Jul", "08": "Aug",
  "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec",
};

function formatMonthShort(key: string, locale: string): string {
  const month = key.split("-")[1];
  const names = locale === "fr" ? MONTH_SHORT_FR : MONTH_SHORT_EN;
  return names[month] || month;
}

export default function OrgDashboard() {
  const t = useTranslations("org");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, completed: 0, cagnotte: 0 });
  const [monthlyStats, setMonthlyStats] = useState<MonthlyStat[]>([]);
  const [recent, setRecent] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [orgType, setOrgType] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const [profileRes, bookingsRes, statsRes] = await Promise.all([
          fetch("/api/org/profile"),
          fetch("/api/org/bookings?limit=10"),
          fetch("/api/org/stats"),
        ]);
        const profile = await profileRes.json();
        const bookingsData = await bookingsRes.json();
        const statsData = await statsRes.json();

        setOrgType(profile.type || "");
        const bookings = bookingsData.bookings || [];
        setStats({
          total: bookingsData.total || 0,
          pending: bookings.filter((b: RecentBooking) => b.status === "PENDING").length,
          completed: bookings.filter((b: RecentBooking) => b.status === "COMPLETED").length,
          cagnotte: profile.cagnotteBalance || 0,
        });
        setRecent(bookings);
        setMonthlyStats((statsData.stats || []).slice(0, 6));
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isIndividual = orgType === "INDIVIDUAL";

  const activeBookings = recent.filter((b) => b.status === "PENDING" || b.status === "ACCEPTED");
  const otherBookings = recent.filter((b) => b.status !== "PENDING" && b.status !== "ACCEPTED").slice(0, 4);

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

  // Monthly totals
  const monthlyTotals = monthlyStats.reduce(
    (acc, m) => ({
      count: acc.count + m.count,
      amount: acc.amount + m.amount,
      completed: acc.completed + m.completed,
      completedAmount: acc.completedAmount + m.completedAmount,
      inProgress: acc.inProgress + m.inProgress,
      inProgressAmount: acc.inProgressAmount + m.inProgressAmount,
      cagnotte: acc.cagnotte + m.cagnotte,
    }),
    { count: 0, amount: 0, completed: 0, completedAmount: 0, inProgress: 0, inProgressAmount: 0, cagnotte: 0 }
  );

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

      {/* Most recent active booking - highlighted at top */}
      {activeBookings.length > 0 && (() => {
        const activeBooking = activeBookings[0];
        return (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="solar:route-linear" className="text-lg" />
                <span className="text-sm font-semibold">{activeBooking.status === "PENDING" ? t("pending") : t("accepted")}</span>
              </div>
              <p className="font-medium mb-1">
                {activeBooking.departureName} → {activeBooking.arrivalName}
              </p>
              {activeBooking.beneficiaryName && (
                <p className="text-sm text-neutral-300 mb-1">
                  {t("beneficiary")} : {activeBooking.beneficiaryName}
                </p>
              )}
              {activeBooking.driver && (
                <p className="text-sm text-neutral-300 mb-1">
                  {t("driverAssigned")} : {activeBooking.driver.firstName} {activeBooking.driver.lastName}
                </p>
              )}
              <p className="text-sm text-neutral-300">
                {format(new Date(activeBooking.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
                {activeBooking.lockedPrice != null && ` · ${activeBooking.lockedPrice.toFixed(0)} €`}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm">
                {activeBooking.status === "ACCEPTED" ? (
                  <>
                    {isDriverOnTheWay(activeBooking.requestedDate) ? (
                      <>
                        <Icon icon="solar:map-arrow-right-bold" className="text-base text-green-400 animate-pulse" />
                        <span className="text-green-300 font-medium">{t("driverOnTheWay")}</span>
                      </>
                    ) : (
                      <>
                        <Icon icon="solar:check-circle-bold" className="text-base text-green-400" />
                        <span className="text-green-300 font-medium">{t("rideAccepted")}</span>
                      </>
                    )}
                    {activeBooking.driver?.phone && (
                      <a href={`tel:${activeBooking.driver.phone}`} className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors ml-1">
                        <Icon icon="solar:phone-bold" className="text-sm" />
                        <span>{activeBooking.driver.phone}</span>
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <Icon icon="solar:phone-calling-linear" className="text-base" />
                    <span className="text-neutral-200">
                      {isBookingSoon(activeBooking.requestedDate)
                        ? t("driverWillContactSoon")
                        : t("driverWillContactHour")}
                    </span>
                  </>
                )}
              </div>
            </div>
            {activeBookings.length > 1 && (
              <Link
                href="/org/courses"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-neutral-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl px-4 py-2.5 transition-colors mt-3"
              >
                <Icon icon="solar:clock-circle-bold" className="text-base text-amber-600" />
                {t("seeOtherRides", { count: activeBookings.length - 1 })}
                <Icon icon="solar:arrow-right-linear" className="text-base" />
              </Link>
            )}
          </div>
        );
      })()}

      {/* Zone 1: Quick actions + Cagnotte card */}
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
        {!isIndividual ? (
          <Link
            href="/org/cagnotte"
            className="flex items-center justify-between bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-5 hover:from-blue-500 hover:to-blue-600 transition-colors"
          >
            <div>
              <p className="text-xs text-blue-200">{t("yourCagnotte")}</p>
              <p className="text-2xl font-bold mt-1">{stats.cagnotte.toFixed(2)} €</p>
              <p className="text-xs text-blue-200 mt-1">{t("viewHistory")} →</p>
            </div>
            <Icon icon="solar:wallet-bold" className="text-4xl text-blue-300/50" />
          </Link>
        ) : (
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
        )}
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
          <Link
            href="/org/favoris"
            className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2 hover:border-neutral-300 transition-colors text-xs"
          >
            <Icon icon="solar:star-bold-duotone" className="text-amber-500" />
            <span className="text-neutral-500">{t("favoriteDrivers")}</span>
          </Link>
        )}
      </div>

      {/* Zone 2: Monthly chart (pro accounts only) */}
      {!isIndividual && <div className="bg-white rounded-2xl border border-neutral-200 mb-8">
        <div className="p-5 border-b border-neutral-100">
          <h2 className="font-semibold">{t("monthlyOverview")}</h2>
          <p className="text-xs text-neutral-500 mt-0.5">{t("monthlyOverviewDesc")}</p>
        </div>
        {monthlyStats.every((m) => m.completed === 0) ? (
          <div className="p-10 text-center">
            <Icon icon="solar:chart-2-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
            <p className="text-sm text-neutral-500">{t("noStatsYet")}</p>
            <p className="text-xs text-neutral-400 mt-1">{t("statsAfterFirstRide")}</p>
          </div>
        ) : (
          <div className="p-5">
            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-neutral-50 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold">{monthlyTotals.completed}</p>
                <p className="text-xs text-neutral-500">{t("completedCol")}</p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold">{monthlyTotals.completedAmount > 0 ? `${monthlyTotals.completedAmount.toFixed(0)} €` : "0 €"}</p>
                <p className="text-xs text-neutral-500">{t("amountCol")}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-blue-600">{monthlyTotals.cagnotte > 0 ? `${monthlyTotals.cagnotte.toFixed(2)} €` : "0 €"}</p>
                <p className="text-xs text-neutral-500">{t("cagnotteCol")}</p>
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={[...monthlyStats].reverse().map((m) => ({
                name: formatMonthShort(m.month, locale),
                [t("amountCol")]: m.completedAmount,
                [t("completedCol")]: m.completed,
              }))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="amount" orientation="left" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v} €`} />
                <YAxis yAxisId="count" orientation="right" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: "1px solid #e5e5e5", fontSize: 13 }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={((value: any, name: any) => [name === t("amountCol") ? `${Number(value).toFixed(0)} €` : value, name]) as any}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                <Bar yAxisId="amount" dataKey={t("amountCol")} fill="#171717" radius={[6, 6, 0, 0]} barSize={28} />
                <Bar yAxisId="count" dataKey={t("completedCol")} fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>}

      {/* Zone 3: Recent bookings */}
      <div className="bg-white rounded-2xl border border-neutral-200">
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <h2 className="font-semibold">{t("recentRides")}</h2>
          <Link href="/org/courses" className="text-sm text-neutral-500 hover:text-neutral-900">
            {tc("seeAll")}
          </Link>
        </div>
        {otherBookings.length === 0 && activeBookings.length === 0 ? (
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
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-neutral-500">
                    <span>
                      {format(new Date(b.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
                    </span>
                    {b.beneficiaryName && (
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:user-linear" className="text-xs" />
                        {b.beneficiaryName}
                      </span>
                    )}
                    {b.driver && (
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:wheel-linear" className="text-xs" />
                        {b.driver.firstName} {b.driver.lastName}
                      </span>
                    )}
                  </div>
                  {b.status === "ACCEPTED" && (
                    <p className="text-xs text-green-600 font-medium mt-0.5 flex items-center gap-1">
                      {isDriverOnTheWay(b.requestedDate) ? (
                        <>
                          <Icon icon="solar:map-arrow-right-bold" className="text-xs animate-pulse" />
                          {t("driverOnTheWay")}
                        </>
                      ) : (
                        <>
                          <Icon icon="solar:check-circle-bold" className="text-xs" />
                          {t("rideAccepted")}
                        </>
                      )}
                      {b.driver?.phone && (
                        <a href={`tel:${b.driver.phone}`} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 ml-1">
                          <Icon icon="solar:phone-bold" className="text-xs" />
                          {b.driver.phone}
                        </a>
                      )}
                    </p>
                  )}
                  {b.status === "PENDING" && (
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
