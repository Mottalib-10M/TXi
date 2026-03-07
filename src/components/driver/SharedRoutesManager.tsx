"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { predefinedLocations } from "@/data/predefined-locations";

interface SerializedPassenger {
  id: string;
  passengerName: string;
  passengerEmail: string;
  passengerPhone: string;
  seatCount: number;
  luggageType: string;
  status: string;
  createdAt: string;
}

interface SerializedRoute {
  id: string;
  departureLocationId: string;
  departureName: string;
  destinationName: string;
  departureTime: string;
  totalSeats: number;
  status: string;
  passengers: SerializedPassenger[];
  createdAt: string;
  updatedAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  PENDING_DRIVER: "bg-amber-100 text-amber-700",
  ACTIVE: "bg-green-100 text-green-700",
  FULL: "bg-blue-100 text-blue-700",
  DEPARTED: "bg-neutral-100 text-neutral-500",
  CANCELLED: "bg-red-100 text-red-700",
};

export function SharedRoutesManager({
  initialRoutes,
}: {
  initialRoutes: SerializedRoute[];
}) {
  const t = useTranslations("dashboard");
  const [routes, setRoutes] = useState(initialRoutes);
  const [creating, setCreating] = useState(false);
  const [formError, setFormError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Form state
  const [departureLocationId, setDepartureLocationId] = useState("");
  const [destinationLocationId, setDestinationLocationId] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [totalSeats, setTotalSeats] = useState(4);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSuccessMsg("");
    setCreating(true);

    try {
      const res = await fetch("/api/shared-routes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          departureLocationId,
          destinationLocationId,
          departureTime,
          totalSeats,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setFormError(data.error || "Erreur");
        return;
      }

      const newRoute = await res.json();
      const departure = predefinedLocations.find((l) => l.id === departureLocationId);
      const destination = predefinedLocations.find((l) => l.id === destinationLocationId);

      setRoutes((prev) => [
        {
          ...newRoute,
          departureName: departure?.name || newRoute.departureName,
          destinationName: destination?.name || newRoute.destinationName,
          departureTime: newRoute.departureTime,
          passengers: [],
          createdAt: newRoute.createdAt,
          updatedAt: newRoute.updatedAt,
        },
        ...prev,
      ]);
      setSuccessMsg(t("routeCreated"));
      setDepartureLocationId("");
      setDestinationLocationId("");
      setDepartureTime("");
      setTotalSeats(4);
    } catch {
      setFormError("Erreur de connexion");
    } finally {
      setCreating(false);
    }
  }

  async function handleUpdateStatus(routeId: string, status: string) {
    try {
      const res = await fetch(`/api/driver/shared-routes/${routeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        setRoutes((prev) =>
          prev.map((r) => (r.id === routeId ? { ...r, status } : r))
        );
        setSuccessMsg(t("routeUpdated"));
      }
    } catch {
      // ignore
    }
  }

  function getOccupiedSeats(route: SerializedRoute) {
    return route.passengers
      .filter((p) => p.status === "CONFIRMED")
      .reduce((sum, p) => sum + p.seatCount, 0);
  }

  const statusLabel = (s: string) => {
    const map: Record<string, string> = {
      PENDING_DRIVER: "statusPendingDriver",
      ACTIVE: "statusActive",
      FULL: "statusFull",
      DEPARTED: "statusDeparted",
      CANCELLED: "statusCancelled",
    };
    const key = (map[s] || "statusActive") as
      | "statusPendingDriver"
      | "statusActive"
      | "statusFull"
      | "statusDeparted"
      | "statusCancelled";
    return t(key);
  };

  const luggageIcon = (l: string) => {
    const map: Record<string, { icon: string; label: string; color: string }> = {
      NONE: { icon: "solar:close-circle-linear", label: t("luggageNone"), color: "text-neutral-300" },
      SMALL: { icon: "solar:backpack-linear", label: t("luggageSmall"), color: "text-amber-500" },
      LARGE: { icon: "solar:suitcase-linear", label: t("luggageLarge"), color: "text-blue-500" },
    };
    return map[l] || { icon: "solar:close-circle-linear", label: l, color: "text-neutral-300" };
  };

  return (
    <div className="space-y-8">
      {/* Create form */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <h3 className="text-lg font-medium mb-4">{t("createRoute")}</h3>

        {formError && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-xl">
            {formError}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-xl">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleCreate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("departureLocation")}
            </label>
            <select
              value={departureLocationId}
              onChange={(e) => setDepartureLocationId(e.target.value)}
              required
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <option value="">--</option>
              {predefinedLocations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("destinationLocation")}
            </label>
            <select
              value={destinationLocationId}
              onChange={(e) => setDestinationLocationId(e.target.value)}
              required
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            >
              <option value="">--</option>
              {predefinedLocations.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("departureDateTime")}
            </label>
            <input
              type="datetime-local"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
              onClick={(e) => (e.target as HTMLInputElement).showPicker()}
              required
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("totalSeats")}
            </label>
            <input
              type="number"
              min={1}
              max={8}
              value={totalSeats}
              onChange={(e) => setTotalSeats(Number(e.target.value))}
              required
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={creating}
              className="bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {creating ? t("creating") : t("createRoute")}
            </button>
          </div>
        </form>
      </div>

      {/* Routes list */}
      <div>
        <h3 className="text-lg font-medium mb-4">{t("myRoutes")}</h3>

        {routes.length === 0 ? (
          <div className="text-center py-12 text-neutral-400">
            <Icon icon="solar:users-group-two-rounded-linear" className="text-4xl mx-auto mb-3" />
            <p className="font-medium">{t("noRoutes")}</p>
            <p className="text-sm">{t("noRoutesDesc")}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {routes.map((route) => {
              const occupied = getOccupiedSeats(route);
              const confirmedPassengers = route.passengers.filter(
                (p) => p.status === "CONFIRMED"
              );

              return (
                <div
                  key={route.id}
                  className="bg-white border border-neutral-200 rounded-2xl p-5"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                        {route.departureName}
                        <Icon icon="solar:arrow-right-linear" className="text-neutral-300" />
                        {route.destinationName}
                      </div>
                      <p className="text-xs text-neutral-400 mt-1">
                        {new Date(route.departureTime).toLocaleDateString("fr-FR", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[route.status] || "bg-neutral-100 text-neutral-500"}`}
                    >
                      {statusLabel(route.status)}
                    </span>
                  </div>

                  {/* Seats visualization */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {Array.from({ length: route.totalSeats }).map((_, i) => (
                      <Icon
                        key={i}
                        icon={
                          i < occupied
                            ? "solar:user-bold"
                            : "solar:user-linear"
                        }
                        className={`text-lg ${i < occupied ? "text-neutral-900" : "text-neutral-300"}`}
                      />
                    ))}
                    <span className="text-xs text-neutral-400 ml-2">
                      {occupied}/{route.totalSeats} {t("seats")}
                    </span>
                  </div>

                  {/* Passengers */}
                  {confirmedPassengers.length > 0 && (
                    <div className="mb-3 space-y-1">
                      <p className="text-xs font-medium text-neutral-500 mb-1">
                        {t("passengers")}
                      </p>
                      {confirmedPassengers.map((p) => {
                        const luggage = luggageIcon(p.luggageType);
                        return (
                          <div
                            key={p.id}
                            className="flex items-center justify-between text-xs bg-neutral-50 rounded-lg px-3 py-2"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{p.passengerName}</span>
                              {p.passengerPhone && (
                                <a
                                  href={`tel:${p.passengerPhone}`}
                                  className="flex items-center gap-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                                >
                                  <Icon icon="solar:phone-linear" className="text-sm" />
                                  <span>{p.passengerPhone}</span>
                                </a>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-neutral-400">
                              <span>
                                {p.seatCount} {p.seatCount > 1 ? t("seats") : t("seat")}
                              </span>
                              <span className="flex items-center gap-1" title={luggage.label}>
                                <Icon icon={luggage.icon} className={`text-base ${luggage.color}`} />
                                <span className="hidden sm:inline">{luggage.label}</span>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Actions */}
                  {(route.status === "ACTIVE" || route.status === "FULL") && (
                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
                      <button
                        onClick={() => handleUpdateStatus(route.id, "DEPARTED")}
                        className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors"
                      >
                        {t("markDeparted")}
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(route.id, "CANCELLED")}
                        className="text-xs text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {t("cancelRoute")}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
