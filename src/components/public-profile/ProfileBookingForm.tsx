"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

interface ProfileBookingFormProps {
  driverId: string;
  driverName: string;
  departureAddress: string;
  departureLat?: number;
  departureLng?: number;
  destinationAddress: string;
  destinationLat?: number;
  destinationLng?: number;
}

export function ProfileBookingForm({
  driverId,
  driverName,
  departureAddress,
  departureLat,
  departureLng,
  destinationAddress,
  destinationLat,
  destinationLng,
}: ProfileBookingFormProps) {
  const router = useRouter();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isNow, setIsNow] = useState(true);
  const [scheduledDate, setScheduledDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const hasLocations =
    departureLat != null &&
    departureLng != null &&
    destinationLat != null &&
    destinationLng != null &&
    departureAddress &&
    destinationAddress;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!clientName || !clientPhone || !hasLocations || (!isNow && !scheduledDate)) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientPhone,
          departureName: departureAddress,
          departureLat,
          departureLng,
          arrivalName: destinationAddress,
          arrivalLat: destinationLat,
          arrivalLng: destinationLng,
          requestedDate: !isNow && scheduledDate
            ? new Date(scheduledDate).toISOString()
            : new Date().toISOString(),
          passengerCount: passengers,
          driverId,
          source: "PROFILE",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push(`/confirmation?ref=${data.reference}`);
      } else {
        setError(data.error || "Erreur lors de la réservation");
      }
    } catch {
      setError("Erreur de connexion");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-tight mb-3 flex items-center gap-2">
        Réserver avec {driverName.split(" ")[0]}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        <input
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Votre nom complet *"
          required
          className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
        />

        <input
          type="tel"
          value={clientPhone}
          onChange={(e) => setClientPhone(e.target.value)}
          placeholder="Votre téléphone *"
          required
          className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setIsNow(true); setScheduledDate(""); }}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              isNow
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            Maintenant
          </button>
          <button
            type="button"
            onClick={() => setIsNow(false)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              !isNow
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            <Icon icon="solar:clock-circle-linear" className="text-lg" />
            Planifier
          </button>
        </div>

        {!isNow && (
          <input
            type="datetime-local"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            min={new Date().toISOString().slice(0, 16)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
        )}

        <div className="flex items-center justify-between bg-neutral-100 rounded-xl px-4 py-3">
          <span className="text-sm text-neutral-500">Passagers</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPassengers(Math.max(1, passengers - 1))}
              className="text-neutral-400 hover:text-neutral-900"
            >
              <Icon icon="solar:minus-circle-linear" />
            </button>
            <span className="text-sm font-medium w-4 text-center">
              {passengers}
            </span>
            <button
              type="button"
              onClick={() => setPassengers(Math.min(8, passengers + 1))}
              className="text-neutral-400 hover:text-neutral-900"
            >
              <Icon icon="solar:add-circle-linear" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!clientName || !clientPhone || !hasLocations || (!isNow && !scheduledDate) || submitting}
          className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Réservation en cours..." : "Réserver maintenant"}
        </button>
      </form>
    </div>
  );
}
