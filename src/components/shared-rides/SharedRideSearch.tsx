"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { predefinedLocations } from "@/data/predefined-locations";
import { JoinRouteForm } from "./JoinRouteForm";

interface RouteResult {
  id: string;
  departureName: string;
  destinationName: string;
  departureTime: string;
  totalSeats: number;
  occupiedSeats: number;
  availableSeats: number;
  status: string;
  driver: {
    firstName: string;
    lastName: string;
    photoUrl: string | null;
  };
}

export function SharedRideSearch() {
  const t = useTranslations("sharedRides");
  const [departureId, setDepartureId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [results, setResults] = useState<RouteResult[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [joiningRouteId, setJoiningRouteId] = useState<string | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSearched(false);
    setJoiningRouteId(null);

    const params = new URLSearchParams();
    if (departureId) params.set("departureLocationId", departureId);
    if (destinationId) params.set("destinationLocationId", destinationId);

    try {
      const res = await fetch(`/api/shared-routes?${params}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }

  return (
    <div className="space-y-8">
      {/* Search form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-neutral-200 rounded-2xl p-6"
      >
        <h3 className="text-lg font-medium mb-4">{t("searchTitle")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("departure")}
            </label>
            <select
              value={departureId}
              onChange={(e) => setDepartureId(e.target.value)}
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
          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("destination")}
            </label>
            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
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
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {loading ? t("searching") : t("searchButton")}
        </button>
      </form>

      {/* Results */}
      {searched && (
        <div>
          <h3 className="text-lg font-medium mb-4">{t("resultsTitle")}</h3>
          {results.length === 0 ? (
            <div className="text-center py-12 text-neutral-400">
              <Icon
                icon="solar:map-point-wave-linear"
                className="text-4xl mx-auto mb-3"
              />
              <p className="font-medium">{t("noResults")}</p>
              <p className="text-sm">{t("noResultsDesc")}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((route) => (
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

                  {/* Seats visualization */}
                  <div className="flex items-center gap-1.5 mb-4">
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

                  {/* Join form or button */}
                  {joiningRouteId === route.id ? (
                    <JoinRouteForm
                      routeId={route.id}
                      maxSeats={route.availableSeats}
                      onSuccess={() => {
                        setResults((prev) =>
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
                    route.availableSeats > 0 && (
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
          )}
        </div>
      )}
    </div>
  );
}
