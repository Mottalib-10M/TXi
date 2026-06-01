"use client";

import { useState, useMemo, useCallback } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Booking {
  id: string;
  reference: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientComments: string | null;
  beneficiaryName: string | null;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  passengerCount: number;
  estimatedPrice: number | null;
  lockedPrice: number | null;
  estimatedDistance: number | null;
  status: string;
  source: string;
  cancelledBy: string | null;
  driver: { name: string; slug: string; phone: string; email: string } | null;
  organization: { name: string; type: string } | null;
  regionCode: string | null;
  regionName: string | null;
  createdAt: string;
}

interface RegionGroup {
  regionKey: string;
  regionLabel: string;
  regionCode: string | null;
  bookings: Booking[];
  hasPending: boolean;
  pendingCount: number;
  latestCreatedAt: string;
}

export function AdminBookingsTable({ bookings }: { bookings: Booking[] }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const router = useRouter();

  const statusConfig: Record<string, { label: string; color: string }> = {
    PENDING: { label: t("statusPending"), color: "bg-amber-50 text-amber-700" },
    ACCEPTED: { label: t("statusAccepted"), color: "bg-green-50 text-green-700" },
    REJECTED: { label: t("statusRejected"), color: "bg-red-50 text-red-700" },
    CANCELLED: { label: t("statusCancelled"), color: "bg-neutral-100 text-neutral-500" },
    COMPLETED: { label: t("statusCompleted"), color: "bg-blue-50 text-blue-700" },
  };

  const [filter, setFilter] = useState<string>("PENDING");
  const [search, setSearch] = useState("");
  const [collapsedRegions, setCollapsedRegions] = useState<Set<string>>(new Set());
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({});
  const [chartPeriod, setChartPeriod] = useState<"24h" | "7d" | "30d">("24h");
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const noDriverCount = bookings.filter((b) => b.driver === null).length;

  const filtered = bookings.filter((b) => {
    const matchesStatus =
      filter === "ALL"
        ? true
        : filter === "NO_DRIVER"
          ? b.driver === null
          : b.status === filter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      b.reference.toLowerCase().includes(q) ||
      b.clientName.toLowerCase().includes(q) ||
      (b.driver?.name.toLowerCase().includes(q) ?? false);
    return matchesStatus && matchesSearch;
  });

  const regionGroups = useMemo(() => {
    const groupMap = new Map<string, Booking[]>();
    for (const b of filtered) {
      const key = b.regionName || "Non localisé";
      if (!groupMap.has(key)) groupMap.set(key, []);
      groupMap.get(key)!.push(b);
    }

    const groups: RegionGroup[] = [];
    for (const [regionKey, regionBookings] of groupMap) {
      const first = regionBookings[0];
      const pendingCount = regionBookings.filter((b) => b.status === "PENDING").length;
      groups.push({
        regionKey,
        regionLabel:
          first.regionCode
            ? `${first.regionName} (${first.regionCode})`
            : regionKey,
        regionCode: first.regionCode,
        bookings: regionBookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
        hasPending: pendingCount > 0,
        pendingCount,
        latestCreatedAt: regionBookings[0].createdAt,
      });
    }

    groups.sort((a, b) => {
      if (a.hasPending && !b.hasPending) return -1;
      if (!a.hasPending && b.hasPending) return 1;
      return new Date(b.latestCreatedAt).getTime() - new Date(a.latestCreatedAt).getTime();
    });

    return groups;
  }, [filtered]);

  const chartData = useMemo(() => {
    const now = new Date();
    const cutoff = new Date(
      chartPeriod === "24h" ? now.getTime() - 24 * 60 * 60 * 1000
        : chartPeriod === "7d" ? now.getTime() - 7 * 24 * 60 * 60 * 1000
        : now.getTime() - 30 * 24 * 60 * 60 * 1000
    );
    const periodBookings = bookings.filter((b) => new Date(b.createdAt) >= cutoff);
    const deptMap = new Map<string, { label: string; withDriver: number; noDriver: number; pending: number; accepted: number; rejected: number; cancelled: number; completed: number }>();
    for (const b of periodBookings) {
      const key = b.regionName || "Non localisé";
      if (!deptMap.has(key)) {
        deptMap.set(key, {
          label: b.regionCode ? `${b.regionName} (${b.regionCode})` : key,
          withDriver: 0, noDriver: 0,
          pending: 0, accepted: 0, rejected: 0, cancelled: 0, completed: 0,
        });
      }
      const entry = deptMap.get(key)!;
      if (b.driver) entry.withDriver++;
      else entry.noDriver++;
      if (b.status === "PENDING") entry.pending++;
      else if (b.status === "ACCEPTED") entry.accepted++;
      else if (b.status === "REJECTED") entry.rejected++;
      else if (b.status === "CANCELLED") entry.cancelled++;
      else if (b.status === "COMPLETED") entry.completed++;
    }
    const entries = Array.from(deptMap.values()).sort((a, b) => (b.withDriver + b.noDriver) - (a.withDriver + a.noDriver));
    const maxTotal = Math.max(...entries.map((e) => e.withDriver + e.noDriver), 1);
    return { entries, maxTotal, total: periodBookings.length };
  }, [bookings, chartPeriod]);

  // Regions without PENDING are collapsed by default
  const isCollapsed = (regionKey: string, hasPending: boolean) => {
    if (collapsedRegions.has(regionKey)) return true;
    // If user hasn't explicitly toggled, default: collapsed if no pending
    if (!collapsedRegions.has(`__opened__${regionKey}`)) return !hasPending;
    return false;
  };

  const toggleRegion = (regionKey: string, hasPending: boolean) => {
    setCollapsedRegions((prev) => {
      const next = new Set(prev);
      const currentlyCollapsed = isCollapsed(regionKey, hasPending);
      if (currentlyCollapsed) {
        next.delete(regionKey);
        next.add(`__opened__${regionKey}`);
      } else {
        next.add(regionKey);
        next.delete(`__opened__${regionKey}`);
      }
      return next;
    });
  };

  const formatShortDate = (dateStr: string) =>
    format(
      new Date(dateStr),
      locale === "en" ? "dd MMM yy, HH:mm" : "dd MMM yy, HH:mm",
      { locale: locale === "en" ? enUS : fr }
    );

  const cancelledByLabel = (cancelledBy: string | null): string | null => {
    if (!cancelledBy) return locale === "en" ? "by driver" : "par chauffeur";
    const labels: Record<string, string> = locale === "en"
      ? { SYSTEM: "by admin", CLIENT: "by client", DRIVER: "by driver" }
      : { SYSTEM: "par admin", CLIENT: "par client", DRIVER: "par chauffeur" };
    return labels[cancelledBy] || cancelledBy;
  };

  const handleRecalculate = async (bookingId: string) => {
    setLoadingAction(`${bookingId}-recalc`);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Erreur lors du recalcul");
        return;
      }
      toast.success("Distance et prix recalculés");
      router.refresh();
    } catch {
      toast.error("Erreur réseau");
    } finally {
      setLoadingAction(null);
    }
  };

  const executeAction = useCallback(async (bookingId: string, action: "remind-driver" | "apologize-refuse" | "cancel-booking") => {
    setLoadingAction(`${bookingId}-${action}`);
    try {
      const res = await fetch(`/api/admin/bookings/${bookingId}/actions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Erreur");
        return;
      }
      if (action === "remind-driver") {
        toast.success(locale === "en" ? "Reminder sent to driver" : "Rappel envoyé au chauffeur");
      } else if (action === "apologize-refuse") {
        toast.success(locale === "en" ? "Booking refused, apology email sent" : "Réservation refusée, email d'excuse envoyé");
        router.refresh();
      } else if (action === "cancel-booking") {
        toast.success(locale === "en" ? "Booking cancelled" : "Course annulée");
        router.refresh();
      }
    } catch {
      toast.error("Erreur réseau");
    } finally {
      setLoadingAction(null);
    }
  }, [locale, router]);

  const handleAction = (bookingId: string, action: "remind-driver" | "apologize-refuse" | "cancel-booking") => {
    if (action === "apologize-refuse") {
      setConfirmModal({
        title: locale === "en" ? "Refuse this booking?" : "Refuser cette réservation ?",
        message: locale === "en"
          ? "The booking will be cancelled and an apology email will be sent to the client."
          : "La réservation sera annulée et un email d'excuse sera envoyé au client.",
        onConfirm: () => {
          setConfirmModal(null);
          executeAction(bookingId, action);
        },
      });
      return;
    }
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
    executeAction(bookingId, action);
  };

  return (
    <div>
      {/* Histogram */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-neutral-700">
            {locale === "en" ? "Bookings by department" : "Réservations par département"}
            <span className="ml-2 text-neutral-400 font-normal">({chartData.total})</span>
          </h3>
          <div className="flex gap-1">
            {([["24h", "24h"], ["7d", "7j"], ["30d", "30j"]] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setChartPeriod(key)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                  chartPeriod === key
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                {locale === "en" ? key : label}
              </button>
            ))}
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
              return (
                <div key={entry.label} className="flex items-center gap-3">
                  <div className="w-[140px] sm:w-[180px] text-[11px] text-neutral-600 truncate shrink-0 text-right">
                    {entry.label}
                  </div>
                  <div className="flex-1 h-6 bg-neutral-50 rounded-lg overflow-hidden relative">
                    <div
                      className="h-full rounded-lg flex overflow-hidden"
                      style={{ width: `${Math.max(widthPercent, 2)}%` }}
                    >
                      {entry.withDriver > 0 && (
                        <div
                          className="h-full bg-emerald-400"
                          style={{ width: `${driverPercent}%` }}
                        />
                      )}
                      {entry.noDriver > 0 && (
                        <div
                          className="h-full bg-orange-400"
                          style={{ width: `${100 - driverPercent}%` }}
                        />
                      )}
                    </div>
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-neutral-500">
                      {total}
                    </span>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {entry.pending > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">{entry.pending} {locale === "en" ? "pend." : "att."}</span>}
                    {entry.accepted > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-700 font-medium">{entry.accepted} {locale === "en" ? "acc." : "acc."}</span>}
                    {entry.completed > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">{entry.completed} {locale === "en" ? "done" : "term."}</span>}
                    {entry.rejected > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-700 font-medium">{entry.rejected} {locale === "en" ? "rej." : "ref."}</span>}
                    {entry.cancelled > 0 && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 font-medium">{entry.cancelled} {locale === "en" ? "canc." : "ann."}</span>}
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

      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {[
          { key: "PENDING", label: t("filterPending") },
          { key: "ACCEPTED", label: t("filterAccepted") },
          { key: "COMPLETED", label: t("filterCompleted") },
          { key: "REJECTED", label: t("filterRejected") },
          { key: "CANCELLED", label: t("filterCancelled") },
          { key: "NO_DRIVER", label: t("filterNoDriver") },
          { key: "ALL", label: t("filterAll") },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setVisibleCounts({}); }}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === f.key
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {f.label}
            {f.key === "NO_DRIVER" && (
              <span className="ml-1.5 text-neutral-400">({noDriverCount})</span>
            )}
            {f.key === "ALL" && (
              <span className="ml-1.5 text-neutral-400">({bookings.length})</span>
            )}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("searchBookings")}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:calendar-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">{t("noBookingsFound")}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {regionGroups.map((group) => {
            const collapsed = isCollapsed(group.regionKey, group.hasPending);
            const maxVisible = visibleCounts[group.regionKey] || 3;
            const visibleBookings = group.bookings.slice(0, maxVisible);
            const hasMore = group.bookings.length > maxVisible;
            return (
              <div
                key={group.regionKey}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden"
              >
                {/* Region header */}
                <button
                  onClick={() => toggleRegion(group.regionKey, group.hasPending)}
                  className="w-full flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-4 hover:bg-neutral-50 transition-colors text-left"
                >
                  <Icon icon="solar:map-point-bold" className="text-neutral-400 text-lg shrink-0" />
                  <span className="font-semibold text-sm">{group.regionLabel}</span>
                  <span className="text-xs text-neutral-400">
                    {group.bookings.length} course{group.bookings.length > 1 ? "s" : ""}
                  </span>
                  {group.pendingCount > 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium">
                      {group.pendingCount} en attente
                    </span>
                  )}
                  <Icon
                    icon={collapsed ? "solar:alt-arrow-down-linear" : "solar:alt-arrow-up-linear"}
                    className="text-neutral-400 ml-auto"
                  />
                </button>

                {/* Region content */}
                {!collapsed && (
                  <div className="border-t border-neutral-100">
                    {/* Desktop table */}
                    <div className="hidden lg:block">
                      <table className="w-full text-xs table-fixed">
                        <thead>
                          <tr className="bg-neutral-50 text-neutral-400 text-left">
                            <th className="px-2 py-2 font-medium w-[24%]">{locale === "en" ? "Route" : "Trajet"}</th>
                            <th className="px-2 py-2 font-medium w-[8%]">{locale === "en" ? "Booked" : "Réservé"}</th>
                            <th className="px-2 py-2 font-medium w-[8%]">{locale === "en" ? "Ride" : "Prestation"}</th>
                            <th className="px-2 py-2 font-medium w-[5%]">Dist.</th>
                            <th className="px-2 py-2 font-medium w-[5%]">{locale === "en" ? "Price" : "Prix"}</th>
                            {filter !== "NO_DRIVER" && <th className="px-2 py-2 font-medium w-[12%]">{t("driver")}</th>}
                            <th className="px-2 py-2 font-medium w-[12%]">{t("client")}</th>
                            <th className="px-2 py-2 font-medium w-[10%]">{locale === "en" ? "Status" : "Statut"}</th>
                            {filter !== "NO_DRIVER" && <th className="px-2 py-2 font-medium w-[16%]">Actions</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {visibleBookings.map((booking) => {
                            const price = booking.lockedPrice ?? booking.estimatedPrice;
                            return (
                              <tr key={booking.id} className="hover:bg-neutral-50/50">
                                {/* Route */}
                                <td className="px-2 py-2">
                                  <div className="font-medium text-neutral-700 break-words leading-snug">
                                    {booking.departureName}
                                  </div>
                                  <div className="text-neutral-400 break-words leading-snug mt-0.5">
                                    → {booking.arrivalName}
                                  </div>
                                </td>
                                {/* Booked date */}
                                <td className="px-2 py-2 text-neutral-400">
                                  {formatShortDate(booking.createdAt)}
                                </td>
                                {/* Ride date */}
                                <td className="px-2 py-2 text-neutral-700 font-medium">
                                  {formatShortDate(booking.requestedDate)}
                                </td>
                                {/* Distance */}
                                <td className="px-2 py-2 text-neutral-500">
                                  {booking.estimatedDistance
                                    ? `${booking.estimatedDistance.toFixed(1)} km`
                                    : (
                                      <button
                                        onClick={() => handleRecalculate(booking.id)}
                                        disabled={loadingAction === `${booking.id}-recalc`}
                                        className="text-blue-600 hover:text-blue-800 hover:underline disabled:opacity-50"
                                      >
                                        {loadingAction === `${booking.id}-recalc` ? "..." : "Recalc."}
                                      </button>
                                    )}
                                </td>
                                {/* Price */}
                                <td className="px-2 py-2 text-neutral-700 font-medium">
                                  {price != null ? `${price.toFixed(0)} €` : "—"}
                                </td>
                                {/* Driver */}
                                {filter !== "NO_DRIVER" && (
                                  <td className="px-2 py-2">
                                    {booking.driver ? (
                                      <div>
                                        <Link
                                          href={`/taxi/${booking.driver.slug}`}
                                          target="_blank"
                                          className="text-blue-600 hover:underline font-medium truncate block"
                                        >
                                          {booking.driver.name}
                                        </Link>
                                        {booking.driver.phone && (
                                          <div className="text-neutral-400 truncate">
                                            <a href={`tel:${booking.driver.phone}`} className="hover:text-neutral-600">
                                              {booking.driver.phone}
                                            </a>
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <span className="text-neutral-300">—</span>
                                    )}
                                  </td>
                                )}
                                {/* Client */}
                                <td className="px-2 py-2">
                                  <div className="font-medium text-neutral-700 truncate">{booking.clientName}</div>
                                  {booking.clientPhone && (
                                    <div className="text-neutral-400 truncate">
                                      <a href={`tel:${booking.clientPhone}`} className="hover:text-neutral-600">
                                        {booking.clientPhone}
                                      </a>
                                    </div>
                                  )}
                                </td>
                                {/* Status + Ref */}
                                <td className="px-2 py-2">
                                  {filter === "NO_DRIVER" && !booking.driver ? (
                                    <span className="inline-block text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-orange-50 text-orange-700">
                                      Mail d&apos;excuse envoyé
                                    </span>
                                  ) : (
                                    <>
                                      <span
                                        className={`inline-block text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                                          statusConfig[booking.status]?.color || ""
                                        }`}
                                      >
                                        {statusConfig[booking.status]?.label || booking.status}
                                      </span>
                                      {(booking.status === "REJECTED" || booking.status === "CANCELLED") && (
                                        <div className="text-[10px] text-neutral-400 mt-0.5">
                                          {cancelledByLabel(booking.cancelledBy)}
                                        </div>
                                      )}
                                    </>
                                  )}
                                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                                    #{booking.reference}
                                  </div>
                                  {booking.organization && (
                                    <div className="mt-0.5">
                                      <span className="text-[10px] px-1 py-0.5 rounded-full bg-violet-50 text-violet-700">
                                        {booking.organization.name}
                                      </span>
                                    </div>
                                  )}
                                </td>
                                {/* Actions */}
                                {filter !== "NO_DRIVER" && (
                                  <td className="px-2 py-2">
                                    {booking.status === "PENDING" && booking.driver && (
                                      <div className="flex gap-1">
                                        <button
                                          onClick={() => handleAction(booking.id, "remind-driver")}
                                          disabled={loadingAction === `${booking.id}-remind-driver`}
                                          className="px-2 py-1 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                                        >
                                          {loadingAction === `${booking.id}-remind-driver` ? "..." : "Relancer"}
                                        </button>
                                        <button
                                          onClick={() => handleAction(booking.id, "apologize-refuse")}
                                          disabled={loadingAction === `${booking.id}-apologize-refuse`}
                                          className="px-2 py-1 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                                        >
                                          {loadingAction === `${booking.id}-apologize-refuse` ? "..." : "Refuser"}
                                        </button>
                                      </div>
                                    )}
                                    {(booking.status === "PENDING" || booking.status === "ACCEPTED") && (
                                      <button
                                        onClick={() => handleAction(booking.id, "cancel-booking")}
                                        disabled={loadingAction === `${booking.id}-cancel-booking`}
                                        className="px-2 py-1 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50 mt-1"
                                      >
                                        {loadingAction === `${booking.id}-cancel-booking` ? "..." : (locale === "en" ? "Cancel" : "Annuler")}
                                      </button>
                                    )}
                                  </td>
                                )}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="lg:hidden divide-y divide-neutral-100">
                      {visibleBookings.map((booking) => {
                        const price = booking.lockedPrice ?? booking.estimatedPrice;
                        return (
                          <div key={booking.id} className="p-4 space-y-2">
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-2">
                              {filter === "NO_DRIVER" && !booking.driver ? (
                                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-orange-50 text-orange-700">
                                  Mail d&apos;excuse envoyé
                                </span>
                              ) : (
                                <>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                      statusConfig[booking.status]?.color || ""
                                    }`}
                                  >
                                    {statusConfig[booking.status]?.label || booking.status}
                                  </span>
                                  {(booking.status === "REJECTED" || booking.status === "CANCELLED") && (
                                    <span className="text-[10px] text-neutral-400">
                                      {cancelledByLabel(booking.cancelledBy)}
                                    </span>
                                  )}
                                </>
                              )}
                              <span className="text-xs text-neutral-400 font-mono">#{booking.reference}</span>
                              {booking.organization && (
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-700">
                                  {booking.organization.name}
                                </span>
                              )}
                            </div>

                            {/* Route */}
                            <div className="text-xs">
                              <div className="text-neutral-700 font-medium">{booking.departureName}</div>
                              <div className="text-neutral-400">→ {booking.arrivalName}</div>
                            </div>

                            {/* Meta grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                              <div>
                                <span className="text-neutral-400">{locale === "en" ? "Booked" : "Réservé le"} : </span>
                                <span className="text-neutral-600">{formatShortDate(booking.createdAt)}</span>
                              </div>
                              <div>
                                <span className="text-neutral-400">{locale === "en" ? "Ride" : "Prestation"} : </span>
                                <span className="text-neutral-700 font-medium">{formatShortDate(booking.requestedDate)}</span>
                              </div>
                              <div>
                                <span className="text-neutral-400">Distance : </span>
                                {booking.estimatedDistance ? (
                                  <span className="text-neutral-600">{booking.estimatedDistance.toFixed(1)} km</span>
                                ) : (
                                  <button
                                    onClick={() => handleRecalculate(booking.id)}
                                    disabled={loadingAction === `${booking.id}-recalc`}
                                    className="text-blue-600 hover:text-blue-800 hover:underline disabled:opacity-50"
                                  >
                                    {loadingAction === `${booking.id}-recalc` ? "..." : "Recalculer"}
                                  </button>
                                )}
                              </div>
                              <div>
                                <span className="text-neutral-400">{locale === "en" ? "Price" : "Prix"} : </span>
                                <span className="text-neutral-700 font-medium">
                                  {price != null ? `${price.toFixed(2)} €` : "—"}
                                </span>
                              </div>
                            </div>

                            {/* Driver */}
                            {booking.driver && (
                              <div className="text-xs">
                                <span className="text-neutral-400">{t("driver")} : </span>
                                <Link
                                  href={`/taxi/${booking.driver.slug}`}
                                  target="_blank"
                                  className="text-blue-600 hover:underline font-medium"
                                >
                                  {booking.driver.name}
                                </Link>
                                {booking.driver.phone && (
                                  <span className="text-neutral-400 ml-2">
                                    <a href={`tel:${booking.driver.phone}`} className="hover:text-neutral-600">
                                      {booking.driver.phone}
                                    </a>
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Client */}
                            <div className="text-xs">
                              <span className="text-neutral-400">{t("client")} : </span>
                              <span className="text-neutral-700 font-medium">{booking.clientName}</span>
                              {booking.clientPhone && (
                                <span className="text-neutral-400 ml-2">
                                  <a href={`tel:${booking.clientPhone}`} className="hover:text-neutral-600">
                                    {booking.clientPhone}
                                  </a>
                                </span>
                              )}
                            </div>

                            {/* Actions */}
                            {filter !== "NO_DRIVER" && booking.status === "PENDING" && booking.driver && (
                              <div className="flex gap-2 pt-1">
                                <button
                                  onClick={() => handleAction(booking.id, "remind-driver")}
                                  disabled={loadingAction === `${booking.id}-remind-driver`}
                                  className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors text-xs font-medium disabled:opacity-50"
                                >
                                  {loadingAction === `${booking.id}-remind-driver` ? "..." : "Relancer"}
                                </button>
                                <button
                                  onClick={() => handleAction(booking.id, "apologize-refuse")}
                                  disabled={loadingAction === `${booking.id}-apologize-refuse`}
                                  className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-xs font-medium disabled:opacity-50"
                                >
                                  {loadingAction === `${booking.id}-apologize-refuse` ? "..." : "Refuser"}
                                </button>
                              </div>
                            )}
                            {filter !== "NO_DRIVER" && (booking.status === "PENDING" || booking.status === "ACCEPTED") && (
                              <div className="pt-1">
                                <button
                                  onClick={() => handleAction(booking.id, "cancel-booking")}
                                  disabled={loadingAction === `${booking.id}-cancel-booking`}
                                  className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors text-xs font-medium disabled:opacity-50"
                                >
                                  {loadingAction === `${booking.id}-cancel-booking` ? "..." : (locale === "en" ? "Cancel" : "Annuler")}
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {/* Show more button */}
                    {hasMore && (
                      <button
                        onClick={() => setVisibleCounts((prev) => ({
                          ...prev,
                          [group.regionKey]: maxVisible + 10,
                        }))}
                        className="w-full py-2.5 text-xs font-medium text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 transition-colors border-t border-neutral-100"
                      >
                        {locale === "en" ? "Show more" : "Afficher plus"} ({group.bookings.length - maxVisible} {locale === "en" ? "remaining" : "restantes"})
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* Confirmation modal */}
      {confirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setConfirmModal(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Icon icon="solar:danger-triangle-bold" className="text-red-500 text-xl" />
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
                className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                {locale === "en" ? "Confirm" : "Confirmer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
