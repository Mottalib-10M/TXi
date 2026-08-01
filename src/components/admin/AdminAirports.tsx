"use client";

import { useState, useMemo, useRef } from "react";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

interface AirportBooking {
  id: string;
  reference: string;
  clientName: string;
  clientPhone: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  estimatedPrice: number | null;
  lockedPrice: number | null;
  estimatedDistance: number | null;
  status: string;
  createdAt: string;
  driverName: string | null;
  driverId: string | null;
  driverPhone: string | null;
  driverSlug: string | null;
  orgName: string | null;
  direction: "departure" | "arrival" | "both";
  detectedAirport: string;
  price: number;
  hasDriver: boolean;
}

const statusConfig: Record<string, { label: string; color: string }> = {
  PENDING: { label: "En attente", color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200" },
  ACCEPTED: { label: "Acceptée", color: "bg-green-50 text-green-700 ring-1 ring-green-200" },
  REJECTED: { label: "Refusée", color: "bg-red-50 text-red-700 ring-1 ring-red-200" },
  CANCELLED: { label: "Annulée", color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200" },
  COMPLETED: { label: "Terminée", color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200" },
};

const statusConfigEN: Record<string, { label: string; color: string }> = {
  PENDING: { label: "Pending", color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200" },
  ACCEPTED: { label: "Accepted", color: "bg-green-50 text-green-700 ring-1 ring-green-200" },
  REJECTED: { label: "Rejected", color: "bg-red-50 text-red-700 ring-1 ring-red-200" },
  CANCELLED: { label: "Cancelled", color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200" },
  COMPLETED: { label: "Completed", color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200" },
};

export function AdminAirports({ bookings }: { bookings: AirportBooking[] }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const dateFnsLoc = locale === "en" ? enUS : fr;
  const sc = locale === "en" ? statusConfigEN : statusConfig;

  const listRef = useRef<HTMLDivElement>(null);
  const [period, setPeriod] = useState<"24h" | "7d" | "30d" | "all">("7d");
  const [directionFilter, setDirectionFilter] = useState<"all" | "departure" | "arrival">("all");
  const [selectedAirport, setSelectedAirport] = useState<string | null>(null);
  const [listVisible, setListVisible] = useState(10);

  const filteredByPeriod = useMemo(() => {
    if (period === "all") return bookings;
    const now = new Date();
    const ms = period === "24h" ? 24 * 60 * 60 * 1000 : period === "7d" ? 7 * 24 * 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000;
    const cutoff = new Date(now.getTime() - ms);
    return bookings.filter((b) => new Date(b.createdAt) >= cutoff);
  }, [bookings, period]);

  const filtered = useMemo(() => {
    if (directionFilter === "all") return filteredByPeriod;
    return filteredByPeriod.filter((b) =>
      directionFilter === "departure"
        ? b.direction === "departure" || b.direction === "both"
        : b.direction === "arrival" || b.direction === "both"
    );
  }, [filteredByPeriod, directionFilter]);

  const kpis = useMemo(() => {
    const total = filteredByPeriod.length;
    const totalRevenue = filteredByPeriod.reduce((sum, b) => sum + b.price, 0);
    const departures = filteredByPeriod.filter((b) => b.direction === "departure" || b.direction === "both");
    const arrivals = filteredByPeriod.filter((b) => b.direction === "arrival" || b.direction === "both");
    const noDriver = filteredByPeriod.filter((b) => !b.hasDriver);
    const pending = filteredByPeriod.filter((b) => b.status === "PENDING");
    return {
      total,
      totalRevenue,
      departureCount: departures.length,
      departureRevenue: departures.reduce((sum, b) => sum + b.price, 0),
      arrivalCount: arrivals.length,
      arrivalRevenue: arrivals.reduce((sum, b) => sum + b.price, 0),
      noDriverCount: noDriver.length,
      pendingCount: pending.length,
    };
  }, [filteredByPeriod]);

  const histogramData = useMemo(() => {
    const groupMap = new Map<string, {
      name: string;
      depWithDriver: number; depNoDriver: number;
      arrWithDriver: number; arrNoDriver: number;
    }>();
    for (const b of filtered) {
      const key = b.detectedAirport;
      if (!groupMap.has(key)) {
        groupMap.set(key, { name: key, depWithDriver: 0, depNoDriver: 0, arrWithDriver: 0, arrNoDriver: 0 });
      }
      const entry = groupMap.get(key)!;
      const isDep = b.direction === "departure" || b.direction === "both";
      const isArr = b.direction === "arrival" || b.direction === "both";
      if (isDep) { if (b.hasDriver) entry.depWithDriver++; else entry.depNoDriver++; }
      if (isArr) { if (b.hasDriver) entry.arrWithDriver++; else entry.arrNoDriver++; }
    }
    const entries = Array.from(groupMap.values()).sort(
      (a, b) => (b.depWithDriver + b.depNoDriver + b.arrWithDriver + b.arrNoDriver) - (a.depWithDriver + a.depNoDriver + a.arrWithDriver + a.arrNoDriver)
    );
    const maxSide = Math.max(
      ...entries.map((e) => Math.max(e.depWithDriver + e.depNoDriver, e.arrWithDriver + e.arrNoDriver)),
      1
    );
    return { entries, maxSide };
  }, [filtered]);

  return (
    <div>
      {/* Header + Period selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Icon icon="mdi:airplane" className="text-blue-600 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              {locale === "en" ? "Airports" : "Aéroports"}
            </h1>
            <p className="text-sm text-neutral-500 font-light">
              {locale === "en"
                ? `${bookings.length} airport booking(s)`
                : `${bookings.length} réservation(s) aéroport`}
            </p>
          </div>
        </div>
        <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl">
          {([["24h", "24h"], ["7d", "7j"], ["30d", "30j"], ["all", "Tout"]] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setPeriod(key as "24h" | "7d" | "30d" | "all"); setSelectedAirport(null); setListVisible(10); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                period === key
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {locale === "en" ? (key === "all" ? "All" : key) : label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3">
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="mdi:airplane" className="text-blue-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">
              {kpis.total}{" "}
              <span className="text-sm font-normal text-neutral-400">
                &middot; {kpis.totalRevenue.toFixed(0)} &euro;
              </span>
            </p>
            <p className="text-[11px] text-neutral-500">
              {locale === "en" ? "Airport rides" : "Courses aéroport"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3">
          <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:map-arrow-up-bold" className="text-emerald-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">
              {kpis.departureCount}{" "}
              <span className="text-sm font-normal text-neutral-400">
                &middot; {kpis.departureRevenue.toFixed(0)} &euro;
              </span>
            </p>
            <p className="text-[11px] text-neutral-500">
              {locale === "en" ? "From airport" : "Départs aéroport"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3">
          <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:map-arrow-down-bold" className="text-orange-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">
              {kpis.arrivalCount}{" "}
              <span className="text-sm font-normal text-neutral-400">
                &middot; {kpis.arrivalRevenue.toFixed(0)} &euro;
              </span>
            </p>
            <p className="text-[11px] text-neutral-500">
              {locale === "en" ? "To airport" : "Arrivées aéroport"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-4 py-3">
          <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
            <Icon icon="solar:danger-triangle-bold" className="text-amber-500 text-lg" />
          </div>
          <div>
            <p className="text-xl font-bold text-neutral-900">
              {kpis.noDriverCount}
              {kpis.pendingCount > 0 && (
                <span className="text-sm font-normal text-amber-500 ml-1">
                  ({kpis.pendingCount} {locale === "en" ? "pending" : "en att."})
                </span>
              )}
            </p>
            <p className="text-[11px] text-neutral-500">
              {locale === "en" ? "No driver / Pending" : "Sans chauffeur / En attente"}
            </p>
          </div>
        </div>
      </div>

      {/* Direction filter */}
      <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl mb-6 w-fit">
        {(
          [
            ["all", locale === "en" ? "All" : "Tous"],
            ["departure", locale === "en" ? "From airport" : "Départ aéroport"],
            ["arrival", locale === "en" ? "To airport" : "Arrivée aéroport"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => { setDirectionFilter(key as "all" | "departure" | "arrival"); setSelectedAirport(null); setListVisible(10); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              directionFilter === key
                ? "bg-neutral-900 text-white shadow-sm"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Histogram by airport — butterfly / diverging chart */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 mb-8">
        <h3 className="text-sm font-semibold text-neutral-700 mb-1">
          {locale === "en" ? "Bookings by airport" : "Réservations par aéroport"}
          <span className="ml-2 text-neutral-400 font-normal">({filtered.length})</span>
        </h3>
        {/* Column headers */}
        {histogramData.entries.length > 0 && (
          <div className="flex items-center mb-3 mt-2">
            <div className="flex-1 text-right pr-2">
              <span className="text-[10px] font-medium text-orange-500 flex items-center justify-end gap-1">
                <Icon icon="solar:map-arrow-down-linear" className="text-xs" />
                {locale === "en" ? "Arrivals" : "Arrivées"}
              </span>
            </div>
            <div className="w-[100px] sm:w-[140px] shrink-0" />
            <div className="flex-1 pl-2">
              <span className="text-[10px] font-medium text-emerald-500 flex items-center gap-1">
                {locale === "en" ? "Departures" : "Départs"}
                <Icon icon="solar:map-arrow-up-linear" className="text-xs" />
              </span>
            </div>
          </div>
        )}
        {histogramData.entries.length === 0 ? (
          <p className="text-xs text-neutral-400 text-center py-4">
            {locale === "en" ? "No bookings for this period" : "Aucune réservation sur cette période"}
          </p>
        ) : (
          <div className="space-y-1.5">
            {histogramData.entries.map((entry) => {
              const depTotal = entry.depWithDriver + entry.depNoDriver;
              const arrTotal = entry.arrWithDriver + entry.arrNoDriver;
              const depPercent = (depTotal / histogramData.maxSide) * 100;
              const arrPercent = (arrTotal / histogramData.maxSide) * 100;
              const depDriverPct = depTotal > 0 ? (entry.depWithDriver / depTotal) * 100 : 0;
              const arrDriverPct = arrTotal > 0 ? (entry.arrWithDriver / arrTotal) * 100 : 0;
              const isSelected = selectedAirport === entry.name;
              return (
                <div
                  key={entry.name}
                  className={`flex items-center cursor-pointer rounded-lg px-1 -mx-1 transition-colors ${
                    isSelected
                      ? "bg-blue-50 ring-1 ring-blue-200"
                      : selectedAirport
                        ? "opacity-40 hover:opacity-70"
                        : "hover:bg-neutral-50"
                  }`}
                  onClick={() => {
                    setSelectedAirport(isSelected ? null : entry.name);
                    setListVisible(10);
                    if (!isSelected) setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                  }}
                >
                  {/* Left side — Arrivals (bars grow right-to-left) */}
                  <div className="flex-1 flex justify-end">
                    <div className="relative h-6 w-full">
                      {arrTotal > 0 && (
                        <div
                          className="absolute right-0 top-0 h-full rounded-l-lg flex overflow-hidden"
                          style={{ width: `${Math.max(arrPercent, 3)}%` }}
                        >
                          {entry.arrNoDriver > 0 && (
                            <div className="h-full bg-orange-400" style={{ width: `${100 - arrDriverPct}%` }} />
                          )}
                          {entry.arrWithDriver > 0 && (
                            <div className="h-full bg-emerald-400" style={{ width: `${arrDriverPct}%` }} />
                          )}
                        </div>
                      )}
                      {arrTotal > 0 && (
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-neutral-400">
                          {arrTotal}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Center — Airport name */}
                  <div className="w-[100px] sm:w-[140px] shrink-0 text-center px-2">
                    <span className="text-[11px] text-neutral-700 font-medium truncate block">
                      {entry.name}
                    </span>
                  </div>
                  {/* Right side — Departures (bars grow left-to-right) */}
                  <div className="flex-1">
                    <div className="relative h-6 w-full">
                      {depTotal > 0 && (
                        <div
                          className="absolute left-0 top-0 h-full rounded-r-lg flex overflow-hidden"
                          style={{ width: `${Math.max(depPercent, 3)}%` }}
                        >
                          {entry.depWithDriver > 0 && (
                            <div className="h-full bg-emerald-400" style={{ width: `${depDriverPct}%` }} />
                          )}
                          {entry.depNoDriver > 0 && (
                            <div className="h-full bg-orange-400" style={{ width: `${100 - depDriverPct}%` }} />
                          )}
                        </div>
                      )}
                      {depTotal > 0 && (
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium text-neutral-400">
                          {depTotal}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {/* Legend */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-neutral-100">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-emerald-400" />
            <span className="text-[11px] text-neutral-500">
              {locale === "en" ? "With driver" : "Avec chauffeur"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-orange-400" />
            <span className="text-[11px] text-neutral-500">
              {locale === "en" ? "No driver" : "Sans chauffeur"}
            </span>
          </div>
        </div>
      </div>

      {/* Bookings list */}
      {(() => {
        const displayedBookings = selectedAirport
          ? filtered.filter((b) => b.detectedAirport === selectedAirport)
          : filtered;
        return (
      <div ref={listRef} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden scroll-mt-4">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" className="text-blue-500" />
            <h2 className="font-semibold text-sm">
              {locale === "en" ? "Airport bookings" : "Réservations aéroport"}
              <span className="ml-1.5 text-neutral-400 font-normal">({displayedBookings.length})</span>
            </h2>
          </div>
          {selectedAirport && (
            <button
              onClick={() => setSelectedAirport(null)}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <Icon icon="mdi:airplane" className="text-sm" />
              {selectedAirport}
              <Icon icon="solar:close-circle-linear" className="text-sm" />
            </button>
          )}
        </div>

        {displayedBookings.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <Icon icon="mdi:airplane" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">
              {locale === "en" ? "No airport bookings" : "Aucune réservation aéroport"}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden lg:block">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-neutral-50 text-neutral-400 text-left">
                    <th className="px-3 py-2 font-medium w-8" />
                    <th className="px-3 py-2 font-medium">
                      {locale === "en" ? "Airport" : "Aéroport"}
                    </th>
                    <th className="px-3 py-2 font-medium">
                      {locale === "en" ? "Route" : "Trajet"}
                    </th>
                    <th className="px-3 py-2 font-medium">{t("client")}</th>
                    <th className="px-3 py-2 font-medium">
                      {locale === "en" ? "Date" : "Date"}
                    </th>
                    <th className="px-3 py-2 font-medium">
                      {locale === "en" ? "Status" : "Statut"}
                    </th>
                    <th className="px-3 py-2 font-medium">{t("driver")}</th>
                    <th className="px-3 py-2 font-medium">Dist.</th>
                    <th className="px-3 py-2 font-medium">
                      {locale === "en" ? "Price" : "Prix"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {displayedBookings.slice(0, listVisible).map((b) => {
                    const price = b.lockedPrice ?? b.estimatedPrice;
                    return (
                      <tr key={b.id} className="hover:bg-neutral-50/50">
                        <td className="px-3 py-2 text-center">
                          <Icon
                            icon={
                              b.direction === "departure" || b.direction === "both"
                                ? "solar:map-arrow-up-linear"
                                : "solar:map-arrow-down-linear"
                            }
                            className={
                              b.direction === "departure" || b.direction === "both"
                                ? "text-emerald-500"
                                : "text-orange-500"
                            }
                          />
                        </td>
                        <td className="px-3 py-2">
                          <span className="font-medium text-neutral-700">{b.detectedAirport}</span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-start gap-1.5">
                            <div className="flex-1 min-w-0">
                              <div className="text-neutral-700 break-words leading-snug">
                                {b.departureName}
                              </div>
                              <div className="text-neutral-400 break-words leading-snug mt-0.5">
                                &rarr; {b.arrivalName}
                              </div>
                            </div>
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(b.departureName)}&destination=${encodeURIComponent(b.arrivalName)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 mt-1 w-6 h-6 flex items-center justify-center rounded-md text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              title={locale === "en" ? "Open in Google Maps" : "Ouvrir dans Google Maps"}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Icon icon="solar:map-point-wave-linear" className="text-sm" />
                            </a>
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <Link
                            href={`/admin/reservations?search=${encodeURIComponent(b.clientName)}`}
                            className="font-medium text-blue-600 hover:underline"
                          >
                            {b.clientName}
                          </Link>
                          {b.clientPhone && (
                            <div className="text-neutral-400">{b.clientPhone}</div>
                          )}
                        </td>
                        <td className="px-3 py-2 text-neutral-700">
                          {format(new Date(b.requestedDate), "dd MMM yy, HH:mm", {
                            locale: dateFnsLoc,
                          })}
                        </td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-block text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                              sc[b.status]?.color || ""
                            }`}
                          >
                            {sc[b.status]?.label || b.status}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          {b.driverName && b.driverId ? (
                            <Link
                              href={`/admin/chauffeurs/${b.driverId}`}
                              className="text-blue-600 hover:underline font-medium"
                            >
                              {b.driverName}
                            </Link>
                          ) : b.driverName ? (
                            <span className="text-neutral-700 font-medium">{b.driverName}</span>
                          ) : (
                            <span className="text-orange-500 text-[10px] font-medium">
                              {locale === "en" ? "No driver" : "Sans chauffeur"}
                            </span>
                          )}
                        </td>
                        <td className="px-3 py-2 text-neutral-500">
                          {b.estimatedDistance ? `${b.estimatedDistance.toFixed(1)} km` : "\u2014"}
                        </td>
                        <td className="px-3 py-2 text-neutral-700 font-medium">
                          {price != null ? `${price.toFixed(0)} \u20AC` : "\u2014"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden divide-y divide-neutral-100">
              {displayedBookings.slice(0, listVisible).map((b) => {
                const price = b.lockedPrice ?? b.estimatedPrice;
                return (
                  <div key={b.id} className="p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon
                        icon={
                          b.direction === "departure" || b.direction === "both"
                            ? "solar:map-arrow-up-linear"
                            : "solar:map-arrow-down-linear"
                        }
                        className={
                          b.direction === "departure" || b.direction === "both"
                            ? "text-emerald-500"
                            : "text-orange-500"
                        }
                      />
                      <span className="text-xs font-medium text-neutral-700">
                        {b.detectedAirport}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ml-auto ${
                          sc[b.status]?.color || ""
                        }`}
                      >
                        {sc[b.status]?.label || b.status}
                      </span>
                    </div>
                    <div className="text-xs flex items-start gap-1.5">
                      <div className="flex-1 min-w-0">
                        <div className="text-neutral-700 font-medium">{b.departureName}</div>
                        <div className="text-neutral-400">&rarr; {b.arrivalName}</div>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(b.departureName)}&destination=${encodeURIComponent(b.arrivalName)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-md text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title={locale === "en" ? "Open in Google Maps" : "Ouvrir dans Google Maps"}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon icon="solar:map-point-wave-linear" className="text-sm" />
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 text-xs">
                      <div>
                        <span className="text-neutral-400">
                          {locale === "en" ? "Date" : "Date"} :{" "}
                        </span>
                        <span className="text-neutral-700 font-medium">
                          {format(new Date(b.requestedDate), "dd MMM yy, HH:mm", {
                            locale: dateFnsLoc,
                          })}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Dist. : </span>
                        <span className="text-neutral-700 font-medium">
                          {b.estimatedDistance ? `${b.estimatedDistance.toFixed(1)} km` : "\u2014"}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400">
                          {locale === "en" ? "Price" : "Prix"} :{" "}
                        </span>
                        <span className="text-neutral-700 font-medium">
                          {price != null ? `${price.toFixed(0)} \u20AC` : "\u2014"}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-neutral-400">{t("client")} : </span>
                      <Link
                        href={`/admin/reservations?search=${encodeURIComponent(b.clientName)}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {b.clientName}
                      </Link>
                      {b.clientPhone && (
                        <span className="text-neutral-400 ml-2">{b.clientPhone}</span>
                      )}
                    </div>
                    <div className="text-xs">
                      <span className="text-neutral-400">{t("driver")} : </span>
                      {b.driverName && b.driverId ? (
                        <Link
                          href={`/admin/chauffeurs/${b.driverId}`}
                          className="text-blue-600 hover:underline font-medium"
                        >
                          {b.driverName}
                        </Link>
                      ) : b.driverName ? (
                        <span className="text-neutral-700 font-medium">{b.driverName}</span>
                      ) : (
                        <span className="text-orange-500 font-medium">
                          {locale === "en" ? "No driver" : "Sans chauffeur"}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load more */}
            {listVisible < displayedBookings.length && (
              <div className="px-5 py-3 border-t border-neutral-100">
                <button
                  onClick={() => setListVisible((prev) => prev + 10)}
                  className="w-full text-xs text-neutral-500 hover:text-neutral-900 font-medium py-2 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Icon icon="solar:alt-arrow-down-linear" className="text-sm" />
                  {locale === "en"
                    ? `Show more (${Math.min(10, displayedBookings.length - listVisible)} more)`
                    : `Voir plus (${Math.min(10, displayedBookings.length - listVisible)} suivantes)`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
        );
      })()}
    </div>
  );
}
