"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface ProposedRoute {
  id: string;
  departureName: string;
  destinationName: string;
  departureTime: string;
  totalSeats: number;
  proposerName: string | null;
  proposerEmail: string | null;
  passengerCount: number;
}

export function AcceptProposedRoute({ route }: { route: ProposedRoute }) {
  const t = useTranslations("dashboard");
  const router = useRouter();
  const [accepting, setAccepting] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleAccept = async () => {
    setAccepting(true);
    setError("");
    try {
      const res = await fetch(`/api/shared-routes/${route.id}/accept`, {
        method: "POST",
      });
      if (res.ok) {
        setAccepted(true);
        router.refresh();
      } else {
        const data = await res.json();
        if (res.status === 409) {
          setError(t("routeAlreadyTaken"));
        } else {
          setError(data.error || "Erreur");
        }
      }
    } catch {
      setError("Erreur de connexion");
    } finally {
      setAccepting(false);
    }
  };

  if (accepted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3">
          <Icon icon="solar:check-circle-bold" className="text-2xl text-green-600" />
          <p className="font-medium text-green-700">{t("routeAccepted")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
      <div className="flex items-start gap-3 mb-4">
        <Icon icon="solar:hand-shake-linear" className="text-2xl text-amber-600 mt-0.5" />
        <div>
          <h3 className="font-medium text-amber-900">{t("proposedRouteTitle")}</h3>
          <p className="text-sm text-amber-700 mt-0.5">{t("proposedRouteDesc")}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 text-sm font-medium mb-2">
          <Icon icon="solar:map-point-linear" className="text-neutral-400" />
          {route.departureName}
          <Icon icon="solar:arrow-right-linear" className="text-neutral-300" />
          {route.destinationName}
        </div>
        <p className="text-xs text-neutral-500">
          {new Date(route.departureTime).toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        {route.proposerName && (
          <p className="text-xs text-neutral-500 mt-1">
            {t("proposedBy")}: {route.proposerName}
          </p>
        )}
        <p className="text-xs text-neutral-500 mt-1">
          {route.totalSeats} {t("seats")} — {route.passengerCount} {t("passengers").toLowerCase()}
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-600 mb-3">{error}</p>
      )}

      <button
        onClick={handleAccept}
        disabled={accepting}
        className="bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
      >
        {accepting ? t("accepting") : t("acceptRoute")}
      </button>
    </div>
  );
}
