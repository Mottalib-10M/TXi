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
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [confirmModal, setConfirmModal] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const filtered = bookings.filter((b) => {
    const matchesStatus = filter === "ALL" || b.status === filter;
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
        bookings: regionBookings,
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

  const executeAction = useCallback(async (bookingId: string, action: "remind-driver" | "apologize-refuse") => {
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
      } else {
        toast.success(locale === "en" ? "Booking refused, apology email sent" : "Réservation refusée, email d'excuse envoyé");
        router.refresh();
      }
    } catch {
      toast.error("Erreur réseau");
    } finally {
      setLoadingAction(null);
    }
  }, [locale, router]);

  const handleAction = (bookingId: string, action: "remind-driver" | "apologize-refuse") => {
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
    executeAction(bookingId, action);
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {[
          { key: "PENDING", label: t("filterPending") },
          { key: "ACCEPTED", label: t("filterAccepted") },
          { key: "COMPLETED", label: t("filterCompleted") },
          { key: "REJECTED", label: t("filterRejected") },
          { key: "CANCELLED", label: t("filterCancelled") },
          { key: "ALL", label: t("filterAll") },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === f.key
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {f.label}
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
                            <th className="px-2 py-2 font-medium w-[18%]">{locale === "en" ? "Route" : "Trajet"}</th>
                            <th className="px-2 py-2 font-medium w-[9%]">{locale === "en" ? "Booked" : "Réservé"}</th>
                            <th className="px-2 py-2 font-medium w-[9%]">{locale === "en" ? "Ride" : "Prestation"}</th>
                            <th className="px-2 py-2 font-medium w-[6%]">Dist.</th>
                            <th className="px-2 py-2 font-medium w-[6%]">{locale === "en" ? "Price" : "Prix"}</th>
                            <th className="px-2 py-2 font-medium w-[14%]">{t("driver")}</th>
                            <th className="px-2 py-2 font-medium w-[14%]">{t("client")}</th>
                            <th className="px-2 py-2 font-medium w-[10%]">{locale === "en" ? "Status" : "Statut"}</th>
                            <th className="px-2 py-2 font-medium w-[14%]">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {group.bookings.map((booking) => {
                            const price = booking.lockedPrice ?? booking.estimatedPrice;
                            return (
                              <tr key={booking.id} className="hover:bg-neutral-50/50">
                                {/* Route */}
                                <td className="px-2 py-2">
                                  <div className="truncate font-medium text-neutral-700">
                                    {booking.departureName}
                                  </div>
                                  <div className="truncate text-neutral-400">
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
                                <td className="px-2 py-2">
                                  {booking.status === "PENDING" && (
                                    <div className="flex gap-1">
                                      {booking.driver && (
                                        <button
                                          onClick={() => handleAction(booking.id, "remind-driver")}
                                          disabled={loadingAction === `${booking.id}-remind-driver`}
                                          className="px-2 py-1 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                                        >
                                          {loadingAction === `${booking.id}-remind-driver` ? "..." : "Relancer"}
                                        </button>
                                      )}
                                      <button
                                        onClick={() => handleAction(booking.id, "apologize-refuse")}
                                        disabled={loadingAction === `${booking.id}-apologize-refuse`}
                                        className="px-2 py-1 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-[10px] font-medium whitespace-nowrap disabled:opacity-50"
                                      >
                                        {loadingAction === `${booking.id}-apologize-refuse` ? "..." : "Refuser"}
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="lg:hidden divide-y divide-neutral-100">
                      {group.bookings.map((booking) => {
                        const price = booking.lockedPrice ?? booking.estimatedPrice;
                        return (
                          <div key={booking.id} className="p-4 space-y-2">
                            {/* Header */}
                            <div className="flex flex-wrap items-center gap-2">
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
                            {booking.status === "PENDING" && (
                              <div className="flex gap-2 pt-1">
                                {booking.driver && (
                                  <button
                                    onClick={() => handleAction(booking.id, "remind-driver")}
                                    disabled={loadingAction === `${booking.id}-remind-driver`}
                                    className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors text-xs font-medium disabled:opacity-50"
                                  >
                                    {loadingAction === `${booking.id}-remind-driver` ? "..." : "Relancer"}
                                  </button>
                                )}
                                <button
                                  onClick={() => handleAction(booking.id, "apologize-refuse")}
                                  disabled={loadingAction === `${booking.id}-apologize-refuse`}
                                  className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors text-xs font-medium disabled:opacity-50"
                                >
                                  {loadingAction === `${booking.id}-apologize-refuse` ? "..." : "Refuser"}
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
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
                {locale === "en" ? "Refuse" : "Refuser"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
