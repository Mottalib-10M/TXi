"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";

interface FavoriteDriver {
  id: string;
  driver: {
    id: string;
    firstName: string;
    lastName: string;
    vehicleBrand?: string;
    vehicleModel?: string;
  };
}

export default function NouvelleCourse() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [departure, setDeparture] = useState({ name: "", lat: 0, lng: 0 });
  const [arrival, setArrival] = useState({ name: "", lat: 0, lng: 0 });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [driverChoice, setDriverChoice] = useState<"auto" | string>("auto");
  const [favorites, setFavorites] = useState<FavoriteDriver[]>([]);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/org/favorites")
      .then((r) => r.json())
      .then((data) => setFavorites(data.favorites || []))
      .catch(() => {});
  }, []);

  // Estimate price when departure/arrival change
  useEffect(() => {
    if (departure.lat && departure.lng && arrival.lat && arrival.lng) {
      const R = 6371;
      const dLat = ((arrival.lat - departure.lat) * Math.PI) / 180;
      const dLng = ((arrival.lng - departure.lng) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos((departure.lat * Math.PI) / 180) *
          Math.cos((arrival.lat * Math.PI) / 180) *
          Math.sin(dLng / 2) ** 2;
      const dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      // Use default pricing: base 2€ + 1.5€/km, min 7€
      const price = Math.max(2 + dist * 1.5, 7);
      setEstimatedPrice(Math.round(price * 100) / 100);
    }
  }, [departure.lat, departure.lng, arrival.lat, arrival.lng]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!departure.name || !arrival.name) {
      setError("Veuillez renseigner le départ et la destination");
      return;
    }

    if (!date || !time) {
      setError("Veuillez renseigner la date et l'heure");
      return;
    }

    setLoading(true);

    try {
      const requestedDate = new Date(`${date}T${time}`).toISOString();

      const body: Record<string, unknown> = {
        beneficiaryName,
        departureName: departure.name,
        departureLat: departure.lat,
        departureLng: departure.lng,
        arrivalName: arrival.name,
        arrivalLat: arrival.lat,
        arrivalLng: arrival.lng,
        requestedDate,
        passengerCount,
        estimatedPrice: estimatedPrice || undefined,
      };

      if (driverChoice !== "auto") {
        body.driverId = driverChoice;
      }

      const res = await fetch("/api/org/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Erreur lors de la réservation");
        return;
      }

      setSuccess(`Course créée ! Référence : ${json.reference}`);
      setTimeout(() => router.push("/org/courses"), 2000);
    } catch {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all";

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Nouvelle course</h1>
        <p className="text-sm text-neutral-500 mt-1">Réserver un taxi pour un bénéficiaire</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
            {success}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">Bénéficiaire</h2>
          <div>
            <label className="block text-sm font-medium mb-1.5">Nom du bénéficiaire</label>
            <input
              type="text"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
              className={inputClass}
              placeholder="Nom du client, patient, ou salarié"
              required
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">Trajet</h2>
          <div>
            <label className="block text-sm font-medium mb-1.5">Départ</label>
            <PlacesAutocomplete
              placeholder="Adresse de départ"
              value={departure.name}
              onChange={(val, lat, lng) =>
                setDeparture({ name: val, lat: lat || 0, lng: lng || 0 })
              }
              icon="solar:map-point-linear"
              showGeolocation
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Destination</label>
            <PlacesAutocomplete
              placeholder="Adresse d'arrivée"
              value={arrival.name}
              onChange={(val, lat, lng) =>
                setArrival({ name: val, lat: lat || 0, lng: lng || 0 })
              }
              icon="solar:map-arrow-right-linear"
            />
          </div>

          {estimatedPrice && (
            <div className="flex items-center gap-2 bg-neutral-50 rounded-xl px-4 py-3">
              <Icon icon="solar:tag-price-linear" className="text-neutral-500" />
              <span className="text-sm">
                Prix estimé : <strong>{estimatedPrice.toFixed(0)} €</strong>
              </span>
              <span className="text-xs text-neutral-400 ml-1">(verrouillé à la réservation)</span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">Date & passagers</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Heure</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Nombre de passagers</label>
            <select
              value={passengerCount}
              onChange={(e) => setPassengerCount(Number(e.target.value))}
              className={inputClass}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} passager{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">Chauffeur</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-neutral-200 cursor-pointer hover:border-neutral-400 transition-colors has-[:checked]:border-neutral-900">
              <input
                type="radio"
                name="driver"
                value="auto"
                checked={driverChoice === "auto"}
                onChange={() => setDriverChoice("auto")}
                className="accent-neutral-900"
              />
              <div>
                <p className="text-sm font-medium">Automatique</p>
                <p className="text-xs text-neutral-500">Attribution au chauffeur le plus proche</p>
              </div>
            </label>
            {favorites.map((fav) => (
              <label
                key={fav.id}
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-neutral-200 cursor-pointer hover:border-neutral-400 transition-colors has-[:checked]:border-neutral-900"
              >
                <input
                  type="radio"
                  name="driver"
                  value={fav.driver.id}
                  checked={driverChoice === fav.driver.id}
                  onChange={() => setDriverChoice(fav.driver.id)}
                  className="accent-neutral-900"
                />
                <div>
                  <p className="text-sm font-medium">
                    {fav.driver.firstName} {fav.driver.lastName}
                  </p>
                  {fav.driver.vehicleBrand && (
                    <p className="text-xs text-neutral-500">
                      {fav.driver.vehicleBrand} {fav.driver.vehicleModel}
                    </p>
                  )}
                </div>
              </label>
            ))}
            {favorites.length === 0 && (
              <p className="text-xs text-neutral-400 px-1">
                Ajoutez des chauffeurs favoris pour les sélectionner ici
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
        >
          {loading ? "Réservation en cours..." : "Réserver la course"}
        </button>
      </form>
    </div>
  );
}
