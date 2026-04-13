"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { useTranslations } from "next-intl";

interface DriverResult {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  slug: string;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  zoneAddress: string | null;
  distance: number;
  estimatedPrice?: number;
}

export default function NouvelleCourse() {
  const t = useTranslations("org.newRide");
  const tc = useTranslations("common");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [step, setStep] = useState<"form" | "results">("form");
  const [driverResults, setDriverResults] = useState<DriverResult[]>([]);

  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [departure, setDeparture] = useState({ name: "", lat: 0, lng: 0 });
  const [arrival, setArrival] = useState({ name: "", lat: 0, lng: 0 });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [orgType, setOrgType] = useState<string>("");

  useEffect(() => {
    fetch("/api/org/profile").then((r) => r.json())
      .then(async (profileData) => {
        setOrgType(profileData.type || "");
        if (profileData.type === "INDIVIDUAL") {
          setBeneficiaryName(profileData.name || "");
        }
        // Pré-remplir l'adresse de départ avec l'adresse de l'établissement
        if (profileData.address && profileData.type !== "INDIVIDUAL") {
          setDeparture((prev) => ({ ...prev, name: profileData.address }));
          try {
            const acRes = await fetch(`/api/places/autocomplete?input=${encodeURIComponent(profileData.address)}`);
            const acData = await acRes.json();
            const firstPrediction = acData.predictions?.[0];
            if (firstPrediction?.place_id && firstPrediction.place_id !== "mock_1") {
              const detRes = await fetch(`/api/places/details?place_id=${firstPrediction.place_id}`);
              const detData = await detRes.json();
              if (detData.lat && detData.lng) {
                setDeparture({ name: profileData.address, lat: detData.lat, lng: detData.lng });
              }
            }
          } catch {
            // Garder l'adresse texte sans coordonnées
          }
        }
      })
      .catch(() => {});
  }, []);

  // Estimate price when departure/arrival change (real driving distance via OSRM)
  useEffect(() => {
    if (!departure.lat || !departure.lng || !arrival.lat || !arrival.lng) return;

    let cancelled = false;
    async function fetchDistance() {
      try {
        const url = `https://router.project-osrm.org/route/v1/driving/${departure.lng},${departure.lat};${arrival.lng},${arrival.lat}?overview=false`;
        const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
        const data = await res.json();
        const distKm = data?.routes?.[0]?.distance / 1000;
        if (!cancelled && distKm) {
          const price = Math.max(2 + distKm * 1.5, 7);
          setEstimatedPrice(Math.round(price * 100) / 100);
        }
      } catch {
        // Fallback to haversine
        if (cancelled) return;
        const R = 6371;
        const dLat = ((arrival.lat - departure.lat) * Math.PI) / 180;
        const dLng = ((arrival.lng - departure.lng) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos((departure.lat * Math.PI) / 180) *
            Math.cos((arrival.lat * Math.PI) / 180) *
            Math.sin(dLng / 2) ** 2;
        const dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const price = Math.max(2 + dist * 1.5, 7);
        setEstimatedPrice(Math.round(price * 100) / 100);
      }
    }
    fetchDistance();
    return () => { cancelled = true; };
  }, [departure.lat, departure.lng, arrival.lat, arrival.lng]);

  async function handleSearchDrivers(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!departure.name || !arrival.name) {
      setError(t("missingDeparture"));
      return;
    }

    if (!date || !time) {
      setError(t("missingDate"));
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.set("departureLat", departure.lat.toString());
      params.set("departureLng", departure.lng.toString());
      params.set("arrivalLat", arrival.lat.toString());
      params.set("arrivalLng", arrival.lng.toString());
      const requestedDate = new Date(`${date}T${time}`).toISOString();
      params.set("requestedTime", requestedDate);

      const res = await fetch(`/api/taxis?${params}`);
      const data = await res.json();
      const drivers = (data.drivers || []).slice(0, 3);

      setDriverResults(drivers);
      setStep("results");
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  async function handleConfirmBooking(driverId: string) {
    setLoading(true);
    setError("");

    try {
      const requestedDate = new Date(`${date}T${time}`).toISOString();
      const selectedDriver = driverResults.find((d) => d.id === driverId);

      const res = await fetch("/api/org/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          beneficiaryName,
          departureName: departure.name,
          departureLat: departure.lat,
          departureLng: departure.lng,
          arrivalName: arrival.name,
          arrivalLat: arrival.lat,
          arrivalLng: arrival.lng,
          requestedDate,
          passengerCount,
          driverId,
          estimatedPrice: selectedDriver?.estimatedPrice || estimatedPrice || undefined,
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || t("bookingError"));
        return;
      }

      setSuccess(t("rideCreated", { reference: json.reference }));
      setTimeout(() => router.push("/org/courses"), 2000);
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all";

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-sm text-neutral-500 mt-1">
          {orgType === "INDIVIDUAL" ? t("subtitle") : t("subtitleBeneficiary")}
        </p>
      </div>

      <form onSubmit={handleSearchDrivers} className="space-y-5">
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
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">
            {orgType === "INDIVIDUAL" ? t("passenger") : t("beneficiary")}
          </h2>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {orgType === "INDIVIDUAL" ? t("yourName") : t("beneficiaryName")}
              {orgType !== "INDIVIDUAL" && (
                <span className="text-neutral-400 font-normal ml-1">({tc("optional")})</span>
              )}
            </label>
            <input
              type="text"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
              className={inputClass}
              placeholder={orgType === "INDIVIDUAL" ? t("fullNamePlaceholder") : t("beneficiaryPlaceholder")}
              required={orgType === "INDIVIDUAL"}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">{t("route")}</h2>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("departure")}</label>
            <PlacesAutocomplete
              placeholder={t("departurePlaceholder")}
              value={departure.name}
              onChange={(val, lat, lng) =>
                setDeparture({ name: val, lat: lat || 0, lng: lng || 0 })
              }
              icon="solar:map-point-linear"
              showGeolocation
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("destination")}</label>
            <PlacesAutocomplete
              placeholder={t("destinationPlaceholder")}
              value={arrival.name}
              onChange={(val, lat, lng) =>
                setArrival({ name: val, lat: lat || 0, lng: lng || 0 })
              }
              icon="solar:map-arrow-right-linear"
            />
          </div>

        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">{t("datePassengers")}</h2>

          {/* ASAP button */}
          <button
            type="button"
            onClick={() => {
              const now = new Date(Date.now() + 15 * 60 * 1000);
              setDate(now.toISOString().slice(0, 10));
              setTime(now.toTimeString().slice(0, 5));
              if (step === "results") setStep("form");
            }}
            className="w-full flex items-center justify-center gap-2 bg-neutral-950 border-2 border-neutral-950 hover:bg-neutral-800 hover:border-neutral-800 text-white font-semibold py-3.5 rounded-xl transition-colors"
          >
            <Icon icon="solar:bolt-bold" className="text-lg" />
            {t("asap")}
          </button>

          {/* Separator */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-xs text-neutral-400">{t("orChooseDate")}</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("date")}</label>
              <input
                type="date"
                value={date}
                onChange={(e) => { setDate(e.target.value); if (step === "results") setStep("form"); }}
                onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                className={`${inputClass} cursor-pointer`}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("time")}</label>
              <input
                type="time"
                value={time}
                onChange={(e) => { setTime(e.target.value); if (step === "results") setStep("form"); }}
                onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                className={`${inputClass} cursor-pointer`}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t("passengerCount")}</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPassengerCount(n)}
                  className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 transition-all ${
                    (n === 4 ? passengerCount >= 4 : passengerCount === n)
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center justify-center gap-0.5">
                    {Array.from({ length: Math.min(n, 3) }).map((_, i) => (
                      <Icon key={i} icon="solar:user-rounded-bold" className={n <= 2 ? "text-base" : "text-sm"} />
                    ))}
                    {n === 4 && <span className="text-xs font-bold ml-0.5">+</span>}
                  </div>
                  <span className="text-sm font-semibold">{n === 4 ? "4+" : n}</span>
                </button>
              ))}
            </div>
            {passengerCount >= 4 && (
              <div className="flex items-center gap-2 mt-2">
                <select
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(Number(e.target.value))}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-neutral-900"
                >
                  {[4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n} {tc("passengers")}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {step === "form" && (
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
          >
            {loading ? t("searching") : t("searchDrivers")}
          </button>
        )}

        {step === "results" && (
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
            <div>
              <h2 className="font-semibold">{t("availableDrivers")}</h2>
              <p className="text-xs text-neutral-500 mt-0.5">{t("availableDriversDesc")}</p>
            </div>

            {driverResults.length === 0 ? (
              <div className="text-center py-6">
                <Icon icon="solar:map-point-wave-linear" className="text-3xl text-neutral-300 mx-auto mb-2" />
                <p className="text-sm text-neutral-500">{t("noDriversFound")}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {driverResults.map((driver, index) => (
                  <div
                    key={driver.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                      index === 0 ? "border-green-200 bg-green-50/30" : "border-neutral-200"
                    }`}
                  >
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center text-sm font-semibold text-neutral-600 shrink-0">
                      {driver.firstName[0]}{driver.lastName?.[0] || ""}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold">
                          {driver.firstName} {driver.lastName}
                        </p>
                        {index === 0 && (
                          <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                            {t("closest")}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 truncate">
                        {driver.vehicleBrand && `${driver.vehicleBrand} ${driver.vehicleModel || ""}`}
                        {driver.vehicleBrand && driver.zoneAddress && " · "}
                        {driver.zoneAddress}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      {driver.estimatedPrice && (
                        <p className="text-lg font-bold">{driver.estimatedPrice.toFixed(0)} €</p>
                      )}
                      <p className="text-[10px] text-neutral-400">{t("fixedPriceLabel")}</p>
                    </div>
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => handleConfirmBooking(driver.id)}
                      className="bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 shrink-0"
                    >
                      {t("selectDriver")}
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setStep("form")}
              className="w-full text-sm text-neutral-500 hover:text-neutral-900 py-2 transition-colors"
            >
              ← {t("backToForm")}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
