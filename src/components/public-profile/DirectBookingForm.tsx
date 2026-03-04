"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { emailError, phoneError, isValidEmail } from "@/lib/validation";

interface DirectBookingFormProps {
  driverId: string;
  driverName: string;
  minimumFare: number;
}

export function DirectBookingForm({
  driverId,
  driverName,
  minimumFare,
}: DirectBookingFormProps) {
  const router = useRouter();
  const [departure, setDeparture] = useState("");
  const [departureLat, setDepartureLat] = useState<number>(0);
  const [departureLng, setDepartureLng] = useState<number>(0);
  const [arrival, setArrival] = useState("");
  const [arrivalLat, setArrivalLat] = useState<number>(0);
  const [arrivalLng, setArrivalLng] = useState<number>(0);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientComments, setClientComments] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [scheduledDate, setScheduledDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!departure || !arrival || !clientName || !clientEmail) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          clientComments,
          departureName: departure,
          departureLat,
          departureLng,
          arrivalName: arrival,
          arrivalLat,
          arrivalLng,
          requestedDate: scheduledDate
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
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-1">
        Réserver avec {driverName.split(" ")[0]}
      </h2>
      <p className="text-xs text-neutral-500 font-light mb-5">
        À partir de {minimumFare.toFixed(2).replace(".", ",")} €
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        <PlacesAutocomplete
          placeholder="Lieu de départ"
          value={departure}
          onChange={(val, lat, lng) => {
            setDeparture(val);
            if (lat) setDepartureLat(lat);
            if (lng) setDepartureLng(lng);
          }}
          icon="solar:record-circle-linear"
          showGeolocation
        />

        <PlacesAutocomplete
          placeholder="Destination"
          value={arrival}
          onChange={(val, lat, lng) => {
            setArrival(val);
            if (lat) setArrivalLat(lat);
            if (lng) setArrivalLng(lng);
          }}
          icon="solar:stop-linear"
        />

        <input
          type="datetime-local"
          value={scheduledDate}
          onChange={(e) => setScheduledDate(e.target.value)}
          className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
        />

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
            <span className="text-sm font-medium w-4 text-center">{passengers}</span>
            <button
              type="button"
              onClick={() => setPassengers(Math.min(8, passengers + 1))}
              className="text-neutral-400 hover:text-neutral-900"
            >
              <Icon icon="solar:add-circle-linear" />
            </button>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-3 space-y-3">
          <input
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Votre nom complet *"
            required
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
          <div>
            <input
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="Votre email *"
              required
              className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${emailError(clientEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
            />
            {emailError(clientEmail) && (
              <p className="text-xs text-red-500 mt-1">{emailError(clientEmail)}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="Votre téléphone"
              className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${phoneError(clientPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
            />
            {phoneError(clientPhone) && (
              <p className="text-xs text-red-500 mt-1">{phoneError(clientPhone)}</p>
            )}
          </div>
          <textarea
            value={clientComments}
            onChange={(e) => setClientComments(e.target.value)}
            placeholder="Commentaires (optionnel)"
            rows={2}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={!departure || !arrival || !clientName || !clientEmail || !isValidEmail(clientEmail) || !!phoneError(clientPhone) || submitting}
          className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Réservation en cours..." : "Réserver maintenant"}
        </button>
      </form>
    </div>
  );
}
