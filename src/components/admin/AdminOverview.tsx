"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format, formatDistanceToNow } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface OverviewData {
  totalDrivers: number;
  activeDrivers: number;
  inactiveDrivers: number;
  totalOrgs: number;
  totalBookings: number;
  bookingsByStatus: Record<string, number>;
  totalRevenue: number;
  chartBookings: {
    hasDriver: boolean;
    status: string;
    regionCode: string | null;
    regionName: string | null;
    cityName: string | null;
    createdAt: string;
    price: number;
  }[];
  recentBookings: {
    id: string;
    reference: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    departureName: string;
    departureLat: number;
    departureLng: number;
    arrivalName: string;
    arrivalLat: number;
    arrivalLng: number;
    requestedDate: string;
    estimatedDistance: number | null;
    status: string;
    cancelledBy: string | null;
    lockedPrice: number | null;
    estimatedPrice: number | null;
    createdAt: string;
    driverId: string | null;
    driverName: string | null;
    driverPhone: string | null;
    driverSlug: string | null;
    orgName: string | null;
    cityName: string | null;
    regionName: string | null;
  }[];
  activeUsers: {
    drivers24h: number;
    drivers7d: number;
    drivers30d: number;
    orgs24h: number;
    orgs7d: number;
    orgs30d: number;
  };
  recentActivity: {
    type: "driver" | "org";
    id: string;
    name: string;
    email: string;
    at: string;
    hasLoggedIn: boolean;
    isNew: boolean;
    isActive?: boolean;
    orgType?: string;
    city: string | null;
  }[];
}

interface DriverOption {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string | null;
  zoneAddress: string | null;
}

export function AdminOverview({ data }: { data: OverviewData }) {
  const t = useTranslations("admin");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();

  const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    PENDING: { label: t("statusPending"), color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", dot: "bg-amber-400" },
    ACCEPTED: { label: t("statusAccepted"), color: "bg-green-50 text-green-700 ring-1 ring-green-200", dot: "bg-green-500" },
    REJECTED: { label: t("statusRejected"), color: "bg-red-50 text-red-700 ring-1 ring-red-200", dot: "bg-red-400" },
    CANCELLED: { label: t("statusCancelled"), color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200", dot: "bg-neutral-400" },
    COMPLETED: { label: t("statusCompleted"), color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", dot: "bg-blue-500" },
  };

  const [chartPeriod, setChartPeriod] = useState<"24h" | "7d" | "30d">("24h");
  const [chartGroupBy, setChartGroupBy] = useState<"city" | "department">("city");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const bookingsRef = useRef<HTMLDivElement>(null);
  const [bookingsVisible, setBookingsVisible] = useState(5);
  const [driversVisible, setDriversVisible] = useState(5);
  const [clientsVisible, setClientsVisible] = useState(5);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);
  const [reassignModal, setReassignModal] = useState<{
    bookingId: string;
    currentDriverName: string | null;
    currentDriverId: string | null;
    drivers: DriverOption[];
  } | null>(null);
  const [reassignSearch, setReassignSearch] = useState("");
  const [selectedNewDriver, setSelectedNewDriver] = useState<string | null>(null);

  const executeAction = useCallback(async (bookingId: string, action: string, extra?: Record<string, string>) => {
    setLoadingAction(`${bookingId}-${action}`);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}/actions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...extra }),
      });
      const d = await res.json();
      if (!res.ok) {
        toast.error(d.error || "Erreur");
        return;
      }
      if (action === "accept-booking") {
        toast.success(t("bookingConfirmed"));
      } else if (action === "complete-booking") {
        toast.success(t("bookingCompleted"));
      } else if (action === "reassign-driver") {
        toast.success(t("driverReassigned"));
      } else if (action === "cancel-booking") {
        toast.success(locale === "en" ? "Booking cancelled" : "Course annulée");
      }
      router.refresh();
    } catch {
      toast.error("Erreur réseau");
    } finally {
      setLoadingAction(null);
    }
  }, [locale, router, t]);

  const openReassignModal = useCallback(async (bookingId: string, currentDriverName: string | null, currentDriverId: string | null) => {
    try {
      const res = await fetch("/api/admin/drivers");
      const d = await res.json();
      if (!res.ok) {
        toast.error("Erreur lors du chargement des chauffeurs");
        return;
      }
      setReassignSearch("");
      setSelectedNewDriver(null);
      setReassignModal({
        bookingId,
        currentDriverName,
        currentDriverId,
        drivers: d.drivers,
      });
    } catch {
      toast.error("Erreur réseau");
    }
  }, []);

  const handleBookingAction = useCallback((bookingId: string, action: string) => {
    if (action === "cancel-booking") {
      setConfirmModal({
        title: locale === "en" ? "Cancel this booking?" : "Annuler cette course ?",
        message: locale === "en"
          ? "The booking will be cancelled and the client (and driver if applicable) will be notified by email."
          : "La course sera annulée et le client (et le chauffeur si applicable) seront notifiés par email.",
        onConfirm: () => {
          setConfirmModal(null);
          executeAction(bookingId, action);
        },
      });
      return;
    }
    if (action === "accept-booking") {
      setConfirmModal({
        title: locale === "en" ? "Confirm this booking?" : "Confirmer cette course ?",
        message: locale === "en"
          ? "The booking will be accepted and both the client and driver will be notified by email."
          : "La course sera acceptée et le client et le chauffeur seront notifiés par email.",
        onConfirm: () => {
          setConfirmModal(null);
          executeAction(bookingId, action);
        },
      });
      return;
    }
    executeAction(bookingId, action);
  }, [locale, executeAction]);

  const chartData = useMemo(() => {
    const now = new Date();
    const cutoff = new Date(
      chartPeriod === "24h" ? now.getTime() - 24 * 60 * 60 * 1000
        : chartPeriod === "7d" ? now.getTime() - 7 * 24 * 60 * 60 * 1000
        : now.getTime() - 30 * 24 * 60 * 60 * 1000
    );
    const periodBookings = data.chartBookings.filter((b) => new Date(b.createdAt) >= cutoff);
    const groupMap = new Map<string, { key: string; label: string; withDriver: number; noDriver: number; pending: number; accepted: number; rejected: number; cancelled: number; completed: number }>();
    for (const b of periodBookings) {
      const key = chartGroupBy === "city"
        ? (b.cityName || "Non localisé")
        : (b.regionName || "Non localisé");
      if (!groupMap.has(key)) {
        groupMap.set(key, {
          key,
          label: chartGroupBy === "city"
            ? (b.regionCode ? `${key} (${b.regionCode})` : key)
            : (b.regionCode ? `${b.regionName} (${b.regionCode})` : key),
          withDriver: 0, noDriver: 0,
          pending: 0, accepted: 0, rejected: 0, cancelled: 0, completed: 0,
        });
      }
      const entry = groupMap.get(key)!;
      if (b.hasDriver) entry.withDriver++; else entry.noDriver++;
      if (b.status === "PENDING") entry.pending++;
      else if (b.status === "ACCEPTED") entry.accepted++;
      else if (b.status === "REJECTED") entry.rejected++;
      else if (b.status === "CANCELLED") entry.cancelled++;
      else if (b.status === "COMPLETED") entry.completed++;
    }
    const entries = Array.from(groupMap.values()).sort((a, b) => (b.withDriver + b.noDriver) - (a.withDriver + a.noDriver));
    const maxTotal = Math.max(...entries.map((e) => e.withDriver + e.noDriver), 1);
    return { entries, maxTotal, total: periodBookings.length, periodBookings };
  }, [data.chartBookings, chartPeriod, chartGroupBy]);

  const periodKpis = useMemo(() => {
    const pb = chartData.periodBookings;
    const withDriver = pb.filter((b) => b.hasDriver);
    const noDriver = pb.filter((b) => !b.hasDriver);
    const driversConnected =
      chartPeriod === "24h" ? data.activeUsers.drivers24h
        : chartPeriod === "7d" ? data.activeUsers.drivers7d
        : data.activeUsers.drivers30d;
    return {
      driversConnected,
      withDriverCount: withDriver.length,
      withDriverRevenue: withDriver.reduce((sum, b) => sum + b.price, 0),
      noDriverCount: noDriver.length,
      noDriverRevenue: noDriver.reduce((sum, b) => sum + b.price, 0),
    };
  }, [chartData.periodBookings, chartPeriod, data.activeUsers]);

  const orgTypeConfig: Record<string, { label: string; color: string }> = {
    HOTEL: { label: t("typeHotel"), color: "bg-blue-50 text-blue-700" },
    HOSPITAL: { label: t("typeHospital"), color: "bg-red-50 text-red-700" },
    ENTERPRISE: { label: t("typeEnterprise"), color: "bg-neutral-800 text-white" },
    INDIVIDUAL: { label: t("typeIndividual"), color: "bg-neutral-100 text-neutral-600" },
  };

  return (
    <div>
      {/* Header + Period selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
            <Icon icon="solar:chart-square-bold" className="text-violet-600 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{t("overview")}</h1>
            <p className="text-sm text-neutral-500 font-light">{t("adminDashboard")}</p>
          </div>
        </div>
        <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl">
          {([["24h", "24h"], ["7d", "7j"], ["30d", "30j"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setChartPeriod(key); setSelectedLocation(null); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                chartPeriod === key
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {locale === "en" ? key : label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <Link href="/admin/chauffeurs" className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-blue-300 transition-colors">
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:user-hands-bold" className="text-blue-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">{periodKpis.driversConnected}</p>
            <p className="text-[11px] text-neutral-500">{locale === "en" ? "Drivers connected" : "Chauffeurs connectés"}</p>
          </div>
        </Link>

        <Link href="/admin/reservations" className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-emerald-300 transition-colors">
          <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:calendar-bold" className="text-emerald-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">{periodKpis.withDriverCount} <span className="text-sm font-normal text-neutral-400">· {periodKpis.withDriverRevenue.toFixed(0)} &euro;</span></p>
            <p className="text-[11px] text-neutral-500">{locale === "en" ? "With driver" : "Avec chauffeur"}</p>
          </div>
        </Link>

        <Link href="/admin/reservations" className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-orange-300 transition-colors">
          <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:map-point-wave-bold" className="text-orange-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">{periodKpis.noDriverCount} <span className="text-sm font-normal text-neutral-400">· {periodKpis.noDriverRevenue.toFixed(0)} &euro;</span></p>
            <p className="text-[11px] text-neutral-500">{locale === "en" ? "No driver" : "Sans chauffeur"}</p>
          </div>
        </Link>

        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3">
          <div className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:wallet-money-bold" className="text-violet-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">{(periodKpis.withDriverRevenue + periodKpis.noDriverRevenue).toFixed(0)} &euro;</p>
            <p className="text-[11px] text-neutral-500">{chartData.total} {locale === "en" ? "bookings" : "réservations"}</p>
          </div>
        </div>
      </div>

      {/* Histogram by city/department */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-neutral-700">
            {chartGroupBy === "city"
              ? (locale === "en" ? "Bookings by city" : "Réservations par ville")
              : (locale === "en" ? "Bookings by department" : "Réservations par département")}
            <span className="ml-2 text-neutral-400 font-normal">({chartData.total})</span>
          </h3>
          <div className="flex gap-1 bg-neutral-100 p-0.5 rounded-lg">
            <button
              onClick={() => { setChartGroupBy("city"); setSelectedLocation(null); }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                chartGroupBy === "city"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {locale === "en" ? "City" : "Ville"}
            </button>
            <button
              onClick={() => { setChartGroupBy("department"); setSelectedLocation(null); }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                chartGroupBy === "department"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {locale === "en" ? "Dept." : "Dépt."}
            </button>
          </div>
        </div>
        {chartData.entries.length === 0 ? (
          <p className="text-xs text-neutral-400 text-center py-4">
            {locale === "en" ? "No bookings for this period" : "Aucune réservation sur cette période"}
          </p>
        ) : (
          <div className="space-y-2">
            {chartData.entries.map((entry) => {
              const total = entry.withDriver + entry.noDriver;
              const widthPercent = (total / chartData.maxTotal) * 100;
              const driverPercent = total > 0 ? (entry.withDriver / total) * 100 : 0;
              const isSelected = selectedLocation === entry.key;
              return (
                <div
                  key={entry.label}
                  className={`flex items-center gap-3 cursor-pointer rounded-lg px-1 -mx-1 transition-colors ${
                    isSelected
                      ? "bg-blue-50 ring-1 ring-blue-200"
                      : selectedLocation
                        ? "opacity-40 hover:opacity-70"
                        : "hover:bg-neutral-50"
                  }`}
                  onClick={() => {
                    setSelectedLocation(isSelected ? null : entry.key);
                    setBookingsVisible(5);
                    if (!isSelected) setTimeout(() => bookingsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                  }}
                >
                  <div className="w-[140px] sm:w-[180px] text-[11px] text-neutral-600 truncate shrink-0 text-right">
                    {entry.label}
                  </div>
                  <div className="flex-1 h-6 bg-neutral-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full rounded-lg flex overflow-hidden"
                      style={{ width: `${Math.max(widthPercent, 2)}%` }}
                    >
                      {entry.withDriver > 0 && (
                        <div className="h-full bg-emerald-400" style={{ width: `${driverPercent}%` }} />
                      )}
                      {entry.noDriver > 0 && (
                        <div className="h-full bg-orange-400" style={{ width: `${100 - driverPercent}%` }} />
                      )}
                    </div>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-neutral-500">
                      {total}
                    </span>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {entry.pending > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">{entry.pending} att.</span>}
                    {entry.accepted > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-700 font-medium">{entry.accepted} acc.</span>}
                    {entry.completed > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">{entry.completed} term.</span>}
                    {entry.rejected > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-700 font-medium">{entry.rejected} ref.</span>}
                    {entry.cancelled > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 font-medium">{entry.cancelled} ann.</span>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-neutral-100">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-emerald-400" />
            <span className="text-[11px] text-neutral-500">{locale === "en" ? "With driver" : "Avec chauffeur"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-orange-400" />
            <span className="text-[11px] text-neutral-500">{locale === "en" ? "No driver" : "Sans chauffeur"}</span>
          </div>
        </div>
      </div>

      {/* Active users */}
      <div className="mb-6">
        {/* Active users card — 2 columns */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Icon icon="solar:users-group-rounded-bold" className="text-green-500" />
            <h3 className="text-sm font-semibold">{t("activeUsersTitle")}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Chauffeurs column */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <Icon icon="solar:user-hands-linear" className="text-blue-500 text-sm" />
                <span className="text-xs font-semibold text-neutral-700">{locale === "en" ? "Drivers" : "Chauffeurs"}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last24h")}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.drivers24h}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last7d")}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.drivers7d}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last30d")}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.drivers30d}</span>
                </div>
              </div>
            </div>
            {/* Clients particuliers column */}
            <div className="border-l border-neutral-100 pl-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Icon icon="solar:buildings-2-linear" className="text-violet-500 text-sm" />
                <span className="text-xs font-semibold text-neutral-700">{locale === "en" ? "Clients" : "Clients particuliers"}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last24h")}</span>
                  <span className="text-xs bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.orgs24h}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last7d")}</span>
                  <span className="text-xs bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.orgs7d}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400">{t("last30d")}</span>
                  <span className="text-xs bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full font-medium">{data.activeUsers.orgs30d}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent bookings - paginated */}
      {(() => {
        const displayedBookings = selectedLocation
          ? data.recentBookings.filter((b) => {
              const bookingCity = b.cityName || "Non localisé";
              const bookingRegion = b.regionName || "Non localisé";
              return chartGroupBy === "city" ? bookingCity === selectedLocation : bookingRegion === selectedLocation;
            })
          : data.recentBookings;
        return (
      <div ref={bookingsRef} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mb-8 scroll-mt-4">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" className="text-amber-500" />
            <h2 className="font-semibold text-sm">
              {locale === "en" ? "Recent bookings" : "Dernières réservations"}
              <span className="ml-1.5 text-neutral-400 font-normal">({displayedBookings.length})</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {selectedLocation && (
              <button
                onClick={() => setSelectedLocation(null)}
                className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <Icon icon="solar:map-point-wave-linear" className="text-sm" />
                {selectedLocation}
                <Icon icon="solar:close-circle-linear" className="text-sm" />
              </button>
            )}
            <Link href="/admin/reservations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
              {tc("seeAll")}
              <Icon icon="solar:arrow-right-linear" className="text-xs" />
            </Link>
          </div>
        </div>
        {displayedBookings.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <Icon icon="solar:calendar-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">{t("noBookings")}</p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden lg:block">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-neutral-50 text-neutral-400 text-left">
                    <th className="px-3 py-2 font-medium">{locale === "en" ? "Route" : "Trajet"}</th>
                    <th className="px-3 py-2 font-medium">{locale === "en" ? "Booked" : "Réservé"}</th>
                    <th className="px-3 py-2 font-medium">{locale === "en" ? "Ride" : "Prestation"}</th>
                    <th className="px-3 py-2 font-medium">Dist.</th>
                    <th className="px-3 py-2 font-medium">{locale === "en" ? "Price" : "Prix"}</th>
                    <th className="px-3 py-2 font-medium">{t("driver")}</th>
                    <th className="px-3 py-2 font-medium">{t("client")}</th>
                    <th className="px-3 py-2 font-medium">{locale === "en" ? "Status" : "Statut"}</th>
                    <th className="px-3 py-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {displayedBookings.slice(0, bookingsVisible).map((booking) => {
                    const price = booking.lockedPrice ?? booking.estimatedPrice;
                    const dateFnsLoc = locale === "en" ? enUS : fr;
                    return (
                      <tr key={booking.id} className="hover:bg-neutral-50/50">
                        <td className="px-3 py-2">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&origin=${booking.departureLat},${booking.departureLng}&destination=${booking.arrivalLat},${booking.arrivalLng}&travelmode=driving`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-blue-600 transition-colors"
                          >
                            <div className="font-medium text-neutral-700 break-words leading-snug group-hover:text-blue-600">{booking.departureName}</div>
                            <div className="text-neutral-400 break-words leading-snug mt-0.5">→ {booking.arrivalName}</div>
                          </a>
                        </td>
                        <td className="px-3 py-2 text-neutral-400">
                          {format(new Date(booking.createdAt), "dd MMM yy, HH:mm", { locale: dateFnsLoc })}
                        </td>
                        <td className="px-3 py-2 text-neutral-700 font-medium">
                          {format(new Date(booking.requestedDate), "dd MMM yy, HH:mm", { locale: dateFnsLoc })}
                        </td>
                        <td className="px-3 py-2 text-neutral-500">
                          {booking.estimatedDistance ? `${booking.estimatedDistance.toFixed(1)} km` : "—"}
                        </td>
                        <td className="px-3 py-2 text-neutral-700 font-medium">
                          {price != null ? `${price.toFixed(0)} €` : "—"}
                        </td>
                        <td className="px-3 py-2">
                          {booking.driverName ? (
                            <div>
                              <Link href={`/taxi/${booking.driverSlug}`} target="_blank" className="text-blue-600 hover:underline font-medium">
                                {booking.driverName}
                              </Link>
                              {booking.driverPhone && (
                                <div className="text-neutral-400">{booking.driverPhone}</div>
                              )}
                            </div>
                          ) : (
                            <span className="text-neutral-300">—</span>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          <div className="font-medium text-neutral-700">{booking.clientName}</div>
                          {booking.clientPhone && (
                            <div className="text-neutral-400">{booking.clientPhone}</div>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusConfig[booking.status]?.color || ""}`}>
                            {statusConfig[booking.status]?.label || booking.status}
                          </span>
                          <div className="text-[10px] text-neutral-400 font-mono mt-0.5">#{booking.reference}</div>
                          {booking.orgName && (
                            <span className="text-[10px] px-1 py-0.5 rounded-full bg-violet-50 text-violet-700">{booking.orgName}</span>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex flex-wrap gap-1">
                            {booking.status === "PENDING" && booking.driverName && (
                              <button
                                onClick={() => handleBookingAction(booking.id, "accept-booking")}
                                disabled={loadingAction === `${booking.id}-accept-booking`}
                                className="px-2 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                              >
                                {loadingAction === `${booking.id}-accept-booking` ? "..." : t("confirmBooking")}
                              </button>
                            )}
                            {booking.status === "ACCEPTED" && (
                              <button
                                onClick={() => handleBookingAction(booking.id, "complete-booking")}
                                disabled={loadingAction === `${booking.id}-complete-booking`}
                                className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                              >
                                {loadingAction === `${booking.id}-complete-booking` ? "..." : t("completeBooking")}
                              </button>
                            )}
                            {(booking.status === "PENDING" || booking.status === "ACCEPTED") && (
                              <>
                                <button
                                  onClick={() => handleBookingAction(booking.id, "cancel-booking")}
                                  disabled={loadingAction === `${booking.id}-cancel-booking`}
                                  className="px-2 py-1 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                                >
                                  {loadingAction === `${booking.id}-cancel-booking` ? "..." : (locale === "en" ? "Cancel" : "Annuler")}
                                </button>
                                <button
                                  onClick={() => openReassignModal(booking.id, booking.driverName, booking.driverId)}
                                  className="px-2 py-1 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors text-[10px] font-medium whitespace-nowrap"
                                >
                                  {t("reassignDriver")}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="lg:hidden divide-y divide-neutral-100">
              {displayedBookings.slice(0, bookingsVisible).map((booking) => {
                const price = booking.lockedPrice ?? booking.estimatedPrice;
                const dateFnsLoc = locale === "en" ? enUS : fr;
                return (
                  <div key={booking.id} className="p-4 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusConfig[booking.status]?.color || ""}`}>
                        {statusConfig[booking.status]?.label || booking.status}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono">#{booking.reference}</span>
                    </div>
                    <div className="text-xs">
                      <div className="text-neutral-700 font-medium">{booking.departureName}</div>
                      <div className="text-neutral-400">→ {booking.arrivalName}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                      <div>
                        <span className="text-neutral-400">{locale === "en" ? "Ride" : "Prestation"} : </span>
                        <span className="text-neutral-700 font-medium">{format(new Date(booking.requestedDate), "dd MMM yy, HH:mm", { locale: dateFnsLoc })}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">{locale === "en" ? "Price" : "Prix"} : </span>
                        <span className="text-neutral-700 font-medium">{price != null ? `${price.toFixed(0)} €` : "—"}</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-neutral-400">{t("client")} : </span>
                      <span className="text-neutral-700 font-medium">{booking.clientName}</span>
                      {booking.clientPhone && <span className="text-neutral-400 ml-2">{booking.clientPhone}</span>}
                    </div>
                    {booking.driverName && (
                      <div className="text-xs">
                        <span className="text-neutral-400">{t("driver")} : </span>
                        <span className="text-blue-600 font-medium">{booking.driverName}</span>
                      </div>
                    )}
                    {(booking.status === "PENDING" || booking.status === "ACCEPTED") && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {booking.status === "PENDING" && booking.driverName && (
                          <button
                            onClick={() => handleBookingAction(booking.id, "accept-booking")}
                            disabled={loadingAction === `${booking.id}-accept-booking`}
                            className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors text-xs font-medium disabled:opacity-50"
                          >
                            {loadingAction === `${booking.id}-accept-booking` ? "..." : t("confirmBooking")}
                          </button>
                        )}
                        {booking.status === "ACCEPTED" && (
                          <button
                            onClick={() => handleBookingAction(booking.id, "complete-booking")}
                            disabled={loadingAction === `${booking.id}-complete-booking`}
                            className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-xs font-medium disabled:opacity-50"
                          >
                            {loadingAction === `${booking.id}-complete-booking` ? "..." : t("completeBooking")}
                          </button>
                        )}
                        <button
                          onClick={() => handleBookingAction(booking.id, "cancel-booking")}
                          disabled={loadingAction === `${booking.id}-cancel-booking`}
                          className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors text-xs font-medium disabled:opacity-50"
                        >
                          {loadingAction === `${booking.id}-cancel-booking` ? "..." : (locale === "en" ? "Cancel" : "Annuler")}
                        </button>
                        <button
                          onClick={() => openReassignModal(booking.id, booking.driverName, booking.driverId)}
                          className="px-3 py-1.5 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors text-xs font-medium"
                        >
                          {t("reassignDriver")}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Load more button */}
            {bookingsVisible < displayedBookings.length && (
              <div className="px-5 py-3 border-t border-neutral-100">
                <button
                  onClick={() => setBookingsVisible((prev) => prev + 5)}
                  className="w-full text-xs text-neutral-500 hover:text-neutral-900 font-medium py-2 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
                  {locale === "en"
                    ? `Show more (${Math.min(5, displayedBookings.length - bookingsVisible)} more)`
                    : `Voir plus (${Math.min(5, displayedBookings.length - bookingsVisible)} suivantes)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
        );
      })()}

      {/* Unified activity — 2 columns: Chauffeurs + Clients */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Drivers */}
        {(() => {
          const driverItems = data.recentActivity.filter((i) => i.type === "driver");
          return (
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:user-hands-linear" className="text-blue-500" />
                  <h3 className="font-semibold text-sm">{locale === "en" ? "Drivers" : "Chauffeurs"}</h3>
                </div>
                <Link href="/admin/chauffeurs" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
                  {tc("seeAll")}
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </Link>
              </div>
              {driverItems.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <Icon icon="solar:user-hands-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t("noActivity")}</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-neutral-100">
                    {driverItems.slice(0, driversVisible).map((item) => (
                      <Link
                        key={`driver-${item.id}`}
                        href={`/admin/chauffeurs/${item.id}`}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-blue-50 text-blue-600">
                          <Icon icon="solar:user-hands-linear" className="text-sm" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            {item.isNew && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold shrink-0">Nouveau</span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-400">
                            {item.hasLoggedIn ? t("loggedIn") : (locale === "en" ? "Registered" : "Inscrit")}
                            {item.city && <span className="ml-1 text-blue-500">· {item.city}</span>}
                          </p>
                        </div>
                        <span className="text-xs text-neutral-400 shrink-0">
                          {formatDistanceToNow(new Date(item.at), { addSuffix: true, locale: locale === "en" ? enUS : fr })}
                        </span>
                      </Link>
                    ))}
                  </div>
                  {driversVisible < driverItems.length && (
                    <div className="px-5 py-3 border-t border-neutral-100">
                      <button
                        onClick={() => setDriversVisible((prev) => prev + 5)}
                        className="w-full text-xs text-neutral-500 hover:text-neutral-900 font-medium py-2 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
                        {locale === "en"
                          ? `Show more (${Math.min(5, driverItems.length - driversVisible)} more)`
                          : `Voir plus (${Math.min(5, driverItems.length - driversVisible)} suivants)`}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })()}

        {/* Clients */}
        {(() => {
          const orgItems = data.recentActivity.filter((i) => i.type === "org");
          return (
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:buildings-2-linear" className="text-violet-500" />
                  <h3 className="font-semibold text-sm">{locale === "en" ? "Clients" : "Clients"}</h3>
                </div>
                <Link href="/admin/organisations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
                  {tc("seeAll")}
                  <Icon icon="solar:arrow-right-linear" className="text-xs" />
                </Link>
              </div>
              {orgItems.length === 0 ? (
                <div className="px-5 py-8 text-center">
                  <Icon icon="solar:buildings-2-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
                  <p className="text-sm text-neutral-400 font-light">{t("noActivity")}</p>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-neutral-100">
                    {orgItems.slice(0, clientsVisible).map((item) => (
                      <Link
                        key={`org-${item.id}`}
                        href={`/admin/organisations/${item.id}`}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 bg-violet-50 text-violet-600">
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <p className="text-sm font-medium truncate">{item.name}</p>
                            {item.orgType && (
                              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium shrink-0 ${orgTypeConfig[item.orgType]?.color || "bg-neutral-100 text-neutral-500"}`}>
                                {orgTypeConfig[item.orgType]?.label || item.orgType}
                              </span>
                            )}
                            {item.isNew && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold shrink-0">Nouveau</span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-400">
                            {item.hasLoggedIn ? t("loggedIn") : (locale === "en" ? "Registered" : "Inscrit")}
                            {item.city && <span className="ml-1 text-violet-500">· {item.city}</span>}
                          </p>
                        </div>
                        <span className="text-xs text-neutral-400 shrink-0">
                          {formatDistanceToNow(new Date(item.at), { addSuffix: true, locale: locale === "en" ? enUS : fr })}
                        </span>
                      </Link>
                    ))}
                  </div>
                  {clientsVisible < orgItems.length && (
                    <div className="px-5 py-3 border-t border-neutral-100">
                      <button
                        onClick={() => setClientsVisible((prev) => prev + 5)}
                        className="w-full text-xs text-neutral-500 hover:text-neutral-900 font-medium py-2 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
                        {locale === "en"
                          ? `Show more (${Math.min(5, orgItems.length - clientsVisible)} more)`
                          : `Voir plus (${Math.min(5, orgItems.length - clientsVisible)} suivants)`}
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })()}
      </div>

      {/* Confirmation modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setConfirmModal(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <Icon icon="solar:danger-triangle-bold" className="text-amber-500 text-xl" />
              </div>
              <h3 className="text-base font-semibold text-neutral-900">{confirmModal.title}</h3>
            </div>
            <p className="text-sm text-neutral-500 mb-6 ml-[52px]">{confirmModal.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmModal(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                {locale === "en" ? "Cancel" : "Annuler"}
              </button>
              <button
                onClick={confirmModal.onConfirm}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                {locale === "en" ? "Confirm" : "Confirmer"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reassign modal */}
      {reassignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setReassignModal(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200 max-h-[80vh] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                <Icon icon="solar:user-hands-bold" className="text-violet-500 text-xl" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">{t("reassignTitle")}</h3>
                <p className="text-xs text-neutral-500">{t("reassignMessage")}</p>
              </div>
            </div>

            {reassignModal.currentDriverName && (
              <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-neutral-50 rounded-lg">
                <span className="text-xs text-neutral-500">{t("currentDriver")} :</span>
                <span className="text-xs font-medium text-neutral-700">{reassignModal.currentDriverName}</span>
              </div>
            )}
            {!reassignModal.currentDriverName && (
              <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-orange-50 rounded-lg">
                <span className="text-xs text-orange-600">{t("noDriverAssigned")}</span>
              </div>
            )}

            <div className="relative mb-3">
              <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm" />
              <input
                type="text"
                value={reassignSearch}
                onChange={(e) => setReassignSearch(e.target.value)}
                placeholder={t("searchDriver")}
                className="w-full pl-9 pr-4 py-2 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
              />
            </div>

            <div className="overflow-y-auto flex-1 -mx-1 px-1 space-y-1">
              {reassignModal.drivers
                .filter((d) => {
                  if (!reassignSearch) return true;
                  const q = reassignSearch.toLowerCase();
                  return (
                    `${d.firstName} ${d.lastName}`.toLowerCase().includes(q) ||
                    (d.companyName?.toLowerCase().includes(q) ?? false) ||
                    (d.zoneAddress?.toLowerCase().includes(q) ?? false)
                  );
                })
                .filter((d) => d.id !== reassignModal.currentDriverId)
                .map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedNewDriver(d.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                      selectedNewDriver === d.id
                        ? "bg-violet-50 ring-1 ring-violet-300"
                        : "hover:bg-neutral-50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon icon="solar:user-hands-linear" className="text-blue-500 text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-neutral-900 truncate">{d.firstName} {d.lastName}</p>
                      <p className="text-xs text-neutral-400 truncate">
                        {d.companyName && <span>{d.companyName} · </span>}
                        {d.zoneAddress || "—"}
                      </p>
                    </div>
                    {selectedNewDriver === d.id && (
                      <Icon icon="solar:check-circle-bold" className="text-violet-500 text-lg shrink-0" />
                    )}
                  </button>
                ))}
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-neutral-100">
              <button
                onClick={() => setReassignModal(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                {locale === "en" ? "Cancel" : "Annuler"}
              </button>
              <button
                onClick={() => {
                  if (!selectedNewDriver) return;
                  setReassignModal(null);
                  executeAction(reassignModal.bookingId, "reassign-driver", { newDriverId: selectedNewDriver });
                }}
                disabled={!selectedNewDriver}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("reassignConfirm")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
