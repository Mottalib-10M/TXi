"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface Booking {
  id: string;
  reference: string;
  beneficiaryName: string | null;
  departureName: string;
  departureLat: number;
  departureLng: number;
  arrivalName: string;
  requestedDate: string;
  status: string;
  lockedPrice: number | null;
  driver: {
    firstName: string;
    lastName: string;
    zoneLat: number | null;
    zoneLng: number | null;
  } | null;
}

interface Alternative {
  id: string;
  firstName: string;
  lastName: string;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  distance: number;
}

const filterKeys = ["all", "pending", "accepted", "completed", "rejected"] as const;
const filterStatusMap: Record<string, string | undefined> = {
  all: undefined,
  pending: "PENDING",
  accepted: "ACCEPTED",
  completed: "COMPLETED",
  rejected: "REJECTED",
};

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-50 text-amber-700",
  ACCEPTED: "bg-blue-50 text-blue-700",
  COMPLETED: "bg-green-50 text-green-700",
  REJECTED: "bg-red-50 text-red-700",
  CANCELLED: "bg-neutral-100 text-neutral-500",
};

function estimateEtaMinutes(
  driverLat: number,
  driverLng: number,
  departureLat: number,
  departureLng: number
): number {
  const R = 6371;
  const dLat = ((departureLat - driverLat) * Math.PI) / 180;
  const dLng = ((departureLng - driverLng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((driverLat * Math.PI) / 180) *
      Math.cos((departureLat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const distKm = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // Estimation : ~40 km/h en moyenne en ville
  return Math.max(Math.round((distKm / 40) * 60), 1);
}

function isAsapBooking(requestedDate: string): boolean {
  const requested = new Date(requestedDate).getTime();
  const now = Date.now();
  // Considéré "au plus vite" si réservé pour dans moins de 30 min
  return requested - now < 30 * 60 * 1000;
}

export default function CoursesPage() {
  const t = useTranslations("org");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [alternatives, setAlternatives] = useState<Record<string, Alternative[]>>({});
  const [loadingAlts, setLoadingAlts] = useState<string | null>(null);
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const statusLabels: Record<string, string> = {
    PENDING: t("pending"),
    ACCEPTED: t("accepted"),
    COMPLETED: t("completed"),
    REJECTED: t("rejected"),
    CANCELLED: t("cancelled"),
  };

  const filterLabels: Record<string, string> = {
    all: tc("all"),
    pending: t("pending"),
    accepted: t("accepted"),
    completed: t("completed"),
    rejected: t("rejected"),
  };

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  async function fetchBookings() {
    setLoading(true);
    try {
      const status = filterStatusMap[activeFilter];
      const url = `/api/org/bookings?limit=50${status ? `&status=${status}` : ""}`;
      const res = await fetch(url);
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }

  async function loadAlternatives(bookingId: string) {
    if (alternatives[bookingId]) {
      // Toggle off
      setAlternatives((prev) => {
        const copy = { ...prev };
        delete copy[bookingId];
        return copy;
      });
      return;
    }

    setLoadingAlts(bookingId);
    try {
      const res = await fetch(`/api/org/bookings/${bookingId}/alternatives`);
      const data = await res.json();
      setAlternatives((prev) => ({ ...prev, [bookingId]: data.alternatives || [] }));
    } catch {
      // Silently fail
    } finally {
      setLoadingAlts(null);
    }
  }

  async function reassign(bookingId: string, driverId: string) {
    try {
      const res = await fetch(`/api/org/bookings/${bookingId}/reassign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      if (res.ok) {
        // Remove alternatives and refresh
        setAlternatives((prev) => {
          const copy = { ...prev };
          delete copy[bookingId];
          return copy;
        });
        fetchBookings();
      }
    } catch {
      // Silently fail
    }
  }

  async function cancelBooking(bookingId: string) {
    setCancellingId(bookingId);
    try {
      const res = await fetch(`/api/org/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "CANCELLED" }),
      });
      if (res.ok) {
        fetchBookings();
      }
    } catch {
      // Silently fail
    } finally {
      setCancellingId(null);
    }
  }

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("ridesTitle")}</h1>
        <p className="text-sm text-neutral-500 mt-1">{t("ridesSubtitle")}</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {filterKeys.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              activeFilter === f
                ? "bg-neutral-900 text-white font-medium"
                : "bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Icon icon="solar:refresh-linear" className="text-2xl animate-spin text-neutral-400" />
        </div>
      ) : bookings.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-200 p-8 text-center text-sm text-neutral-500">
          {t("noRidesFound")}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 divide-y divide-neutral-100">
          {bookings.map((b) => (
            <div key={b.id}>
              <div className="p-4 px-5 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{b.beneficiaryName || "—"}</span>
                    <span className="text-xs text-neutral-400">{b.reference}</span>
                  </div>
                  <p className="text-xs text-neutral-500 truncate">
                    {b.departureName} → {b.arrivalName}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {format(new Date(b.requestedDate), locale === "en" ? "dd MMM yyyy 'at' HH:mm" : "dd MMM yyyy 'à' HH:mm", { locale: locale === "en" ? enUS : fr })}
                    {b.driver && ` · ${b.driver.firstName} ${b.driver.lastName}`}
                  </p>
                  {(b.status === "PENDING" || b.status === "ACCEPTED") &&
                    b.driver?.zoneLat && b.driver?.zoneLng &&
                    isAsapBooking(b.requestedDate) && (
                    <p className="text-xs text-blue-600 font-medium mt-0.5 flex items-center gap-1">
                      <Icon icon="solar:clock-circle-linear" className="text-xs" />
                      {t("estimatedArrival", { minutes: estimateEtaMinutes(b.driver.zoneLat, b.driver.zoneLng, b.departureLat, b.departureLng) })}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {b.lockedPrice != null && (
                    <span className="text-sm font-semibold">{b.lockedPrice.toFixed(0)} €</span>
                  )}
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[b.status] || ""}`}>
                    {statusLabels[b.status] || b.status}
                  </span>
                  {b.status === "PENDING" && (
                    <button
                      onClick={() => cancelBooking(b.id)}
                      disabled={cancellingId === b.id}
                      className="text-xs text-red-600 hover:text-red-700 hover:underline disabled:opacity-50"
                    >
                      {cancellingId === b.id ? "..." : tc("cancel")}
                    </button>
                  )}
                  {b.status === "REJECTED" && (
                    <button
                      onClick={() => loadAlternatives(b.id)}
                      disabled={loadingAlts === b.id}
                      className="text-xs text-blue-600 hover:underline"
                    >
                      {loadingAlts === b.id ? "..." : alternatives[b.id] ? t("hide") : t("alternatives")}
                    </button>
                  )}
                </div>
              </div>

              {/* Alternatives panel */}
              {alternatives[b.id] && (
                <div className="px-5 pb-4">
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <p className="text-xs font-medium text-neutral-500 mb-3">{t("alternativeDrivers")}</p>
                    {alternatives[b.id].length === 0 ? (
                      <p className="text-xs text-neutral-400">{t("noDriversAvailable")}</p>
                    ) : (
                      <div className="space-y-2">
                        {alternatives[b.id].map((alt) => (
                          <div key={alt.id} className="flex items-center justify-between bg-white rounded-lg p-3 border border-neutral-200">
                            <div>
                              <p className="text-sm font-medium">{alt.firstName} {alt.lastName}</p>
                              <p className="text-xs text-neutral-500">
                                {alt.vehicleBrand} {alt.vehicleModel} · {alt.distance.toFixed(1)} km
                              </p>
                            </div>
                            <button
                              onClick={() => reassign(b.id, alt.id)}
                              className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-lg hover:bg-neutral-700 transition-colors"
                            >
                              {t("assign")}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
