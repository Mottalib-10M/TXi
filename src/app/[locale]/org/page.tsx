"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

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

export default function OrgDashboard() {
  const t = useTranslations("org");
  const tc = useTranslations("common");
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, completed: 0, cagnotte: 0 });
  const [recent, setRecent] = useState<RecentBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [orgType, setOrgType] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const [profileRes, bookingsRes] = await Promise.all([
          fetch("/api/org/profile"),
          fetch("/api/org/bookings?limit=5"),
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
        setRecent(bookings.slice(0, 5));
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const isIndividual = orgType === "INDIVIDUAL";

  const allStatCards = [
    { label: t("totalRides"), value: stats.total, icon: "solar:calendar-linear", color: "bg-neutral-100 text-neutral-700" },
    { label: t("pending"), value: stats.pending, icon: "solar:clock-circle-linear", color: "bg-amber-50 text-amber-700" },
    { label: t("completed"), value: stats.completed, icon: "solar:check-circle-linear", color: "bg-green-50 text-green-700" },
    ...(!isIndividual ? [{ label: t("walletTitle"), value: `${stats.cagnotte.toFixed(2)} €`, icon: "solar:wallet-linear", color: "bg-blue-50 text-blue-700" }] : []),
  ];

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

      {/* Stats */}
      <div className={`grid grid-cols-2 ${isIndividual ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-4 mb-8`}>
        {allStatCards.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-neutral-200 p-5">
            <div className={`inline-flex p-2 rounded-xl ${s.color} mb-3`}>
              <Icon icon={s.icon} className="text-lg" />
            </div>
            <p className="text-2xl font-semibold">{s.value}</p>
            <p className="text-xs text-neutral-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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

      {/* Recent bookings */}
      <div className="bg-white rounded-2xl border border-neutral-200">
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <h2 className="font-semibold">{t("recentRides")}</h2>
          <Link href="/org/courses" className="text-sm text-neutral-500 hover:text-neutral-900">
            {tc("seeAll")}
          </Link>
        </div>
        {recent.length === 0 ? (
          <div className="p-8 text-center text-sm text-neutral-500">
            {t("noRidesYet")}
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {recent.map((b) => (
              <div key={b.id} className="flex items-center justify-between p-4 px-5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">
                    {b.beneficiaryName || "—"} · {b.reference}
                  </p>
                  <p className="text-xs text-neutral-500 truncate mt-0.5">
                    {b.departureName} → {b.arrivalName}
                  </p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  {b.lockedPrice && (
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
