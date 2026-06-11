"use client";

import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

type Period = "week" | "month" | "year";

interface StatsBooking {
  id: string;
  reference: string;
  clientName: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  lockedPrice: number | null;
  status: string;
  p2pCommissionAmount: number | null;
  createdAt: string;
}

interface DriverStats {
  driverId: string;
  driverName: string;
  driverPhone: string;
  rideCount: number;
  totalCommission: number;
  bookings: StatsBooking[];
}

interface StatsData {
  totalRides: number;
  totalCommission: number;
  uniqueDrivers: number;
  drivers: DriverStats[];
}

export function P2PStats() {
  const t = useTranslations("dashboard.p2p");
  const [period, setPeriod] = useState<Period>("month");
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedDriver, setExpandedDriver] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/driver/p2p/stats?period=${period}`);
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch {
      // Ignore errors
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const periods: { key: Period; label: string }[] = [
    { key: "week", label: t("statsWeek") },
    { key: "month", label: t("statsMonth") },
    { key: "year", label: t("statsYear") },
  ];

  return (
    <div className="mb-6">
      {/* Period pills */}
      <div className="flex items-center gap-2 mb-4">
        <Icon icon="solar:chart-2-linear" className="text-violet-600 text-lg" />
        <h2 className="font-semibold text-sm">{t("statsTitle")}</h2>
        <div className="flex gap-1 ml-auto">
          {periods.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                period === p.key
                  ? "bg-violet-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Icon icon="solar:refresh-circle-linear" className="animate-spin text-2xl text-neutral-300" />
        </div>
      ) : !stats || stats.totalRides === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
          <Icon icon="solar:chart-2-linear" className="text-3xl text-neutral-300 mx-auto mb-2" />
          <p className="text-sm text-neutral-500">{t("statsNoData")}</p>
        </div>
      ) : (
        <>
          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white border border-neutral-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-neutral-900">{stats.totalRides}</p>
              <p className="text-xs text-neutral-500">{t("statsTotalRides")}</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-green-700">{stats.totalCommission} €</p>
              <p className="text-xs text-neutral-500">{t("statsTotalCommission")}</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-violet-700">{stats.uniqueDrivers}</p>
              <p className="text-xs text-neutral-500">{t("statsUniqueDrivers")}</p>
            </div>
          </div>

          {/* Driver list */}
          <div className="space-y-2">
            {stats.drivers.map((driver) => (
              <div key={driver.driverId} className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedDriver(expandedDriver === driver.driverId ? null : driver.driverId)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-neutral-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon icon="solar:user-linear" className="text-violet-600 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{driver.driverName}</p>
                    <p className="text-xs text-neutral-500">{driver.rideCount} {t("statsRides")} — {driver.totalCommission} €</p>
                  </div>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-neutral-400 transition-transform ${expandedDriver === driver.driverId ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedDriver === driver.driverId && (
                  <div className="border-t border-neutral-100 px-3 pb-3">
                    {driver.bookings.map((b) => (
                      <div key={b.id} className="flex items-center gap-2 py-2 border-b border-neutral-50 last:border-b-0 text-xs">
                        <div className="flex-1 min-w-0">
                          <p className="text-neutral-700 truncate">{b.departureName} → {b.arrivalName}</p>
                          <p className="text-neutral-400">{formatDate(b.requestedDate)} — {b.clientName}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-medium">{b.lockedPrice} €</p>
                          {b.p2pCommissionAmount != null && (
                            <p className="text-green-600">+{b.p2pCommissionAmount} €</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
