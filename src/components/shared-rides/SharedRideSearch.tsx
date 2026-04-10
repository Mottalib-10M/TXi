"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { predefinedLocations } from "@/data/predefined-locations";
import { JoinRouteForm } from "./JoinRouteForm";
import { trackSharedRideSearch } from "@/lib/analytics";

interface RouteResult {
  id: string;
  departureName: string;
  destinationName: string;
  departureTime: string;
  totalSeats: number;
  occupiedSeats: number;
  availableSeats: number;
  status: string;
  estimatedPrice?: number;
  pricePerPassenger?: number;
  distanceKm?: number;
  isNightRate?: boolean;
  driver: {
    firstName: string;
    lastName: string;
    photoUrl: string | null;
  };
}

interface DestinationGroup {
  destinationName: string;
  routes: RouteResult[];
}

const categoryIcons: Record<string, string> = {
  airport: "mdi:airplane",
  station: "mdi:train",
  school: "mdi:school",
  business: "mdi:office-building",
};

function getCategoryIcon(destinationName: string): string {
  const location = predefinedLocations.find(
    (l) => l.name === destinationName
  );
  if (location) return categoryIcons[location.category] || "solar:map-point-linear";
  return "solar:map-point-linear";
}

/** Generate an array of 14 date strings (YYYY-MM-DD) starting from today */
function generateDateRange(): string[] {
  const dates: string[] = [];
  const now = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

/** Format a date string to get day name abbreviation */
function getDayName(dateStr: string, locale: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(locale, { weekday: "short" }).replace(".", "");
}

/** Get day number from a date string */
function getDayNumber(dateStr: string): number {
  return new Date(dateStr + "T00:00:00").getDate();
}

/** Get short month name from a date string */
function getMonthName(dateStr: string, locale: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(locale, { month: "short" }).replace(".", "");
}

export function SharedRideSearch({ departureId: controlledDepartureId }: { departureId?: string } = {}) {
  const t = useTranslations("sharedRides");
  const currentLocale = useLocale();
  const { data: session } = useSession();
  const router = useRouter();
  const [internalDepartureId, setInternalDepartureId] = useState("");
  const isControlled = controlledDepartureId !== undefined;
  const departureId = isControlled ? controlledDepartureId : internalDepartureId;
  const [allRoutes, setAllRoutes] = useState<RouteResult[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null
  );
  const [joiningRouteId, setJoiningRouteId] = useState<string | null>(null);
  const [showProposeForm, setShowProposeForm] = useState(false);
  const [proposeSubmitting, setProposeSubmitting] = useState(false);
  const [proposeSuccess, setProposeSuccess] = useState<{ driversNotified: number } | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const dateRange = useMemo(() => generateDateRange(), []);

  // Count trips per date
  const tripsByDate = useMemo(() => {
    const map: Record<string, number> = {};
    for (const dateStr of dateRange) {
      map[dateStr] = 0;
    }
    for (const route of allRoutes) {
      const routeDate = route.departureTime.split("T")[0];
      if (map[routeDate] !== undefined) {
        map[routeDate]++;
      }
    }
    return map;
  }, [allRoutes, dateRange]);

  // Filter routes by selected date
  const results = useMemo(() => {
    if (!selectedDate) return [];
    return allRoutes.filter(
      (r) => r.departureTime.split("T")[0] === selectedDate
    );
  }, [allRoutes, selectedDate]);

  const fetchRoutes = useCallback(async (depId: string) => {
    trackSharedRideSearch({ departure: depId });
    setLoading(true);
    setSearched(false);
    setSelectedDestination(null);
    setJoiningRouteId(null);
    setSelectedDate("");

    const params = new URLSearchParams();
    params.set("departureLocationId", depId);

    try {
      const res = await fetch(`/api/shared-routes?${params}`);
      if (res.ok) {
        const data: RouteResult[] = await res.json();
        setAllRoutes(data);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }, []);

  // Fetch when departure changes
  useEffect(() => {
    if (departureId) {
      fetchRoutes(departureId);
    } else {
      setAllRoutes([]);
      setSearched(false);
      setSelectedDate("");
    }
  }, [departureId, fetchRoutes]);

  // Auto-select first day with trips after fetch
  useEffect(() => {
    if (!searched || loading) return;
    const firstDayWithTrips = dateRange.find(
      (d) => (tripsByDate[d] || 0) > 0
    );
    setSelectedDate(firstDayWithTrips || dateRange[0]);
  }, [searched, loading, dateRange, tripsByDate]);

  // Auto-scroll to selected date in carousel
  useEffect(() => {
    if (!selectedDate || !carouselRef.current) return;
    const el = carouselRef.current.querySelector(
      `[data-date="${selectedDate}"]`
    );
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [selectedDate]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 200;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Reset destination selection when date changes
  useEffect(() => {
    setSelectedDestination(null);
    setJoiningRouteId(null);
  }, [selectedDate]);

  // Group results by destination, sorted by count descending
  const destinationGroups: DestinationGroup[] = results
    .reduce<DestinationGroup[]>((acc, route) => {
      const existing = acc.find(
        (g) => g.destinationName === route.destinationName
      );
      if (existing) {
        existing.routes.push(route);
      } else {
        acc.push({ destinationName: route.destinationName, routes: [route] });
      }
      return acc;
    }, [])
    .sort((a, b) => b.routes.length - a.routes.length);

  const selectedGroup = selectedDestination
    ? destinationGroups.find((g) => g.destinationName === selectedDestination)
    : null;

  const todayStr = dateRange[0];
  const locale = "fr-FR";

  return (
    <div className="space-y-8">
      {/* Step 1 — Departure selector + propose (hidden in controlled mode) */}
      {!isControlled && <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-lg font-medium mb-4">{t("searchTitle")}</h3>
        <div>
          <label className="block text-sm text-neutral-500 mb-1">
            {t("departure")}
          </label>
          <select
            value={departureId}
            onChange={(e) => setInternalDepartureId(e.target.value)}
            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
          >
            <option value="">{t("selectLocation")}</option>
            {predefinedLocations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>

        {/* Propose a ride — inline */}
        <div className="mt-5 pt-5 border-t border-neutral-100">
          {proposeSuccess ? (
            <div className="text-center py-3">
              <Icon icon="solar:check-circle-bold" className="text-3xl text-green-500 mx-auto mb-2" />
              <p className="font-medium text-green-700 text-sm">{t("proposeSuccess")}</p>
              <p className="text-xs text-neutral-500 mt-1">
                {t("proposeSuccessDesc", { count: proposeSuccess.driversNotified })}
              </p>
            </div>
          ) : !session ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Icon icon="solar:add-circle-linear" className="text-lg flex-shrink-0" />
                <span>{t("loginRequired")}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push("/inscription?type=particulier")}
                  className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors whitespace-nowrap"
                >
                  {t("createAccount")}
                </button>
                <button
                  onClick={() => router.push("/connexion")}
                  className="px-5 py-2 rounded-xl text-sm font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors whitespace-nowrap"
                >
                  {t("login")}
                </button>
              </div>
            </div>
          ) : !showProposeForm ? (
            <button
              onClick={() => setShowProposeForm(true)}
              className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Icon icon="solar:add-circle-linear" className="text-lg" />
              {t("proposeRide")}
            </button>
          ) : (
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setProposeSubmitting(true);
                const formData = new FormData(e.currentTarget);
                try {
                  const res = await fetch("/api/shared-routes/propose", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      departureLocationId: formData.get("departureLocationId"),
                      destinationLocationId: formData.get("destinationLocationId"),
                      departureTime: formData.get("departureTime"),
                      totalSeats: Number(formData.get("totalSeats")),
                      proposerName: formData.get("proposerName"),
                      proposerEmail: formData.get("proposerEmail"),
                      proposerPhone: formData.get("proposerPhone") || "",
                      locale: currentLocale,
                    }),
                  });
                  if (res.ok) {
                    const data = await res.json();
                    setProposeSuccess({ driversNotified: data.driversNotified });
                    setShowProposeForm(false);
                  }
                } catch {
                  // ignore
                } finally {
                  setProposeSubmitting(false);
                }
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">{t("proposeTitle")}</h4>
                <button
                  type="button"
                  onClick={() => setShowProposeForm(false)}
                  className="text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  <Icon icon="solar:close-circle-linear" className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-neutral-500 mb-4">{t("proposeDesc")}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">{t("departure")}</label>
                  <select
                    name="departureLocationId"
                    required
                    defaultValue={departureId}
                    className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="">{t("selectLocation")}</option>
                    {predefinedLocations.map((l) => (
                      <option key={l.id} value={l.id}>{l.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">{t("destination")}</label>
                  <select
                    name="destinationLocationId"
                    required
                    className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="">{t("selectLocation")}</option>
                    {predefinedLocations.map((l) => (
                      <option key={l.id} value={l.id}>{l.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">{t("proposeDepartureTime")}</label>
                  <input
                    type="datetime-local"
                    name="departureTime"
                    required
                    onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                    className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">{t("proposeSeats")}</label>
                  <select
                    name="totalSeats"
                    required
                    defaultValue="4"
                    className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                {!session && (
                  <>
                    <div>
                      <label className="block text-xs text-neutral-500 mb-1">{t("proposeName")}</label>
                      <input
                        type="text"
                        name="proposerName"
                        required
                        className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-500 mb-1">{t("proposeEmail")}</label>
                      <input
                        type="email"
                        name="proposerEmail"
                        required
                        className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-neutral-500 mb-1">{t("proposePhone")}</label>
                      <input
                        type="tel"
                        name="proposerPhone"
                        className="w-full border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  disabled={proposeSubmitting}
                  className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
                >
                  {proposeSubmitting ? t("proposeSubmitting") : t("proposeSubmit")}
                </button>
                <button
                  type="button"
                  onClick={() => setShowProposeForm(false)}
                  className="px-5 py-2 rounded-xl text-sm font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors"
                >
                  {t("proposeCancel")}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>}

      {/* Date carousel */}
      {departureId && (
        <div className="relative">
          {/* Loading skeleton */}
          {loading && (
            <div className="flex gap-2 overflow-hidden">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[72px] h-[88px] rounded-2xl bg-neutral-100 animate-pulse"
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
          )}

          {/* Carousel */}
          {!loading && searched && (
            <>
              {/* Left arrow */}
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors"
                aria-label="Scroll left"
              >
                <Icon icon="solar:arrow-left-linear" className="text-sm" />
              </button>

              {/* Right arrow */}
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors"
                aria-label="Scroll right"
              >
                <Icon icon="solar:arrow-right-linear" className="text-sm" />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-2 overflow-x-auto px-1 py-1"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {dateRange.map((dateStr, index) => {
                  const count = tripsByDate[dateStr] || 0;
                  const isSelected = dateStr === selectedDate;
                  const isToday = dateStr === todayStr;
                  const hasTrips = count > 0;

                  return (
                    <button
                      key={dateStr}
                      data-date={dateStr}
                      onClick={() => setSelectedDate(dateStr)}
                      className={`min-w-[72px] flex flex-col items-center py-2.5 px-3 rounded-2xl transition-all duration-200 flex-shrink-0 ${
                        isSelected
                          ? "bg-neutral-900 text-white shadow-lg"
                          : hasTrips
                            ? "bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-900"
                            : "bg-neutral-50 border border-neutral-100 text-neutral-400"
                      }`}
                      style={{
                        animationDelay: `${index * 40}ms`,
                        animation: "fadeInUp 0.4s ease-out forwards",
                        opacity: 0,
                      }}
                    >
                      <span className={`text-[10px] uppercase font-medium ${
                        isSelected ? "text-neutral-300" : isToday ? "text-neutral-900 font-semibold" : "text-neutral-400"
                      }`}>
                        {isToday ? t("today") : getDayName(dateStr, locale)}
                      </span>
                      <span className={`text-lg font-semibold leading-tight ${
                        isSelected ? "text-white" : ""
                      }`}>
                        {getDayNumber(dateStr)}
                      </span>
                      <span className={`text-[10px] ${
                        isSelected ? "text-neutral-300" : "text-neutral-400"
                      }`}>
                        {getMonthName(dateStr, locale)}
                      </span>
                      {hasTrips && (
                        <span className={`mt-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-neutral-900 text-white"
                        }`}>
                          {count} {count === 1 ? t("tripSingular") : t("tripPlural")}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Placeholder when no departure selected — should not appear since we're inside departureId check, kept for safety */}
        </div>
      )}

      {/* Placeholder when no departure selected */}
      {!departureId && (
        <div className="text-center py-12 text-neutral-400">
          <Icon
            icon="solar:calendar-linear"
            className="text-4xl mx-auto mb-3"
          />
          <p className="text-sm">{t("chooseDepartureFirst")}</p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12 text-neutral-400">
          <Icon
            icon="solar:refresh-linear"
            className="text-3xl mx-auto mb-3 animate-spin"
          />
          <p className="text-sm">{t("loadingResults")}</p>
        </div>
      )}

      {/* Step 2 — Destination cards (when no destination is selected) */}
      {searched && !loading && selectedDate && !selectedDestination && (
        <div>
          {destinationGroups.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              <Icon
                icon="solar:map-point-wave-linear"
                className="text-4xl mx-auto mb-3"
              />
              <p className="font-medium">{t("noTripsOnDate")}</p>
              <p className="text-sm">{t("noTripsOnDateDesc")}</p>
            </div>
          ) : (
            <>
              {departureId && (
                <div className="flex items-center gap-2 mb-3 bg-neutral-100 rounded-xl px-4 py-2.5">
                  <Icon icon="solar:map-point-bold" className="text-neutral-900 text-lg flex-shrink-0" />
                  <span className="text-sm font-medium text-neutral-900">
                    {t("departure")} : {predefinedLocations.find((l) => l.id === departureId)?.name}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">
                  {t("destinationsTitle")}
                </h3>
                <span className="text-sm text-neutral-400">
                  {t("destinationsCount", {
                    count: destinationGroups.length,
                  })}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {destinationGroups.map((group, index) => (
                  <button
                    key={group.destinationName}
                    onClick={() =>
                      setSelectedDestination(group.destinationName)
                    }
                    className="bg-white border border-neutral-200 rounded-2xl p-5 text-left hover:border-neutral-900 hover:shadow-md transition-all duration-200 group"
                    style={{
                      animationDelay: `${index * 75}ms`,
                      animation: "fadeInUp 0.4s ease-out forwards",
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <Icon
                          icon={getCategoryIcon(group.destinationName)}
                          className="text-xl"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {group.destinationName}
                        </p>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {t("tripsAvailable", {
                            count: group.routes.length,
                          })}
                        </p>
                      </div>
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="text-neutral-300 group-hover:text-neutral-900 transition-colors mt-1"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Step 3 — Selected destination: meeting points + trip list */}
      {selectedGroup && !loading && (
        <div className="space-y-6">
          {/* Back button */}
          <button
            onClick={() => {
              setSelectedDestination(null);
              setJoiningRouteId(null);
            }}
            className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <Icon icon="solar:arrow-left-linear" />
            {t("backToDestinations")}
          </button>

          {/* Trip list */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              {selectedGroup.destinationName}
              <span className="text-sm text-neutral-400 font-normal ml-2">
                {t("tripsAvailable", {
                  count: selectedGroup.routes.length,
                })}
              </span>
            </h3>
            <div className="space-y-4">
              {selectedGroup.routes.map((route) => (
                <div
                  key={route.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-5"
                >
                  {/* Route header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Icon
                          icon="solar:map-point-linear"
                          className="text-neutral-400"
                        />
                        {route.departureName}
                        <Icon
                          icon="solar:arrow-right-linear"
                          className="text-neutral-300"
                        />
                        {route.destinationName}
                      </div>
                      <p className="text-xs text-neutral-400 mt-1">
                        {t("departureTime")}:{" "}
                        {new Date(route.departureTime).toLocaleDateString(
                          "fr-FR",
                          {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-medium">
                      {t("seatsAvailable", { count: route.availableSeats })}
                    </span>
                  </div>

                  {/* Driver info */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-neutral-500">
                    <Icon icon="solar:user-linear" className="text-base" />
                    <span>
                      {t("driver")}: {route.driver.firstName}{" "}
                      {route.driver.lastName}
                    </span>
                  </div>

                  {/* Seats visualization + price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: route.totalSeats }).map((_, i) => (
                        <Icon
                          key={i}
                          icon={
                            i < route.occupiedSeats
                              ? "solar:user-bold"
                              : "solar:user-linear"
                          }
                          className={`text-lg ${i < route.occupiedSeats ? "text-neutral-900" : "text-neutral-300"}`}
                        />
                      ))}
                    </div>
                    {route.pricePerPassenger != null && (
                      <div className="flex items-center gap-2">
                        {route.isNightRate && (
                          <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Icon icon="solar:moon-linear" className="text-xs" />
                            {t("nightRate")}
                          </span>
                        )}
                        <span className="text-lg font-semibold text-neutral-900">
                          {route.pricePerPassenger.toFixed(2)} €
                          <span className="text-xs font-normal text-neutral-400 ml-0.5">{t("pricePerPerson")}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Join form or button */}
                  {route.availableSeats > 0 && (
                    !session ? (
                      <div className="flex flex-col sm:flex-row items-center gap-3 bg-neutral-50 rounded-xl p-3">
                        <p className="text-xs text-neutral-500 flex-1">{t("loginRequired")}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => router.push("/inscription?type=particulier")}
                            className="bg-neutral-900 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-neutral-800 transition-colors whitespace-nowrap"
                          >
                            {t("createAccount")}
                          </button>
                          <button
                            onClick={() => router.push("/connexion")}
                            className="px-4 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 hover:bg-white transition-colors whitespace-nowrap"
                          >
                            {t("login")}
                          </button>
                        </div>
                      </div>
                    ) : joiningRouteId === route.id ? (
                      <JoinRouteForm
                        routeId={route.id}
                        maxSeats={route.availableSeats}
                        onSuccess={() => {
                          setAllRoutes((prev) =>
                            prev.map((r) =>
                              r.id === route.id
                                ? {
                                    ...r,
                                    occupiedSeats: r.totalSeats,
                                    availableSeats: 0,
                                  }
                                : r
                            )
                          );
                        }}
                        onCancel={() => setJoiningRouteId(null)}
                      />
                    ) : (
                      <button
                        onClick={() => setJoiningRouteId(route.id)}
                        className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors"
                      >
                        {t("joinRide")}
                      </button>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
