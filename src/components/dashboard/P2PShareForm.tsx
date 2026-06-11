"use client";

import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { phoneError } from "@/lib/validation";

interface P2PBookingResult {
  id: string;
  reference: string;
  p2pToken: string;
  clientName: string;
  clientPhone: string;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  lockedPrice: number;
  estimatedDistance: number;
  p2pCommissionRate: number;
  p2pCommissionAmount: number;
}

interface P2PShareFormProps {
  driverFirstName: string;
  driverFullName: string;
}

export function P2PShareForm({ driverFirstName }: P2PShareFormProps) {
  const t = useTranslations("dashboard.p2p");

  const [step, setStep] = useState<"form" | "confirmation">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Form fields
  const [departure, setDeparture] = useState("");
  const [departureLat, setDepartureLat] = useState<number | null>(null);
  const [departureLng, setDepartureLng] = useState<number | null>(null);
  const [arrival, setArrival] = useState("");
  const [arrivalLat, setArrivalLat] = useState<number | null>(null);
  const [arrivalLng, setArrivalLng] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [commissionRate, setCommissionRate] = useState(0.1);

  // Build requestedDate from date + time for the rest of the component
  const requestedDate = selectedDate && selectedTime ? `${selectedDate}T${selectedTime}` : "";

  // Minimum date (today) in YYYY-MM-DD
  function getTodayStr() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  // Generate 15-min time slots, disabling those < now+1h when date is today
  function getTimeSlots() {
    const slots: { value: string; label: string; disabled: boolean }[] = [];
    const now = new Date();
    const minTime = new Date(now.getTime() + 3600_000);
    const isToday = selectedDate === getTodayStr();

    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hh = String(h).padStart(2, "0");
        const mm = String(m).padStart(2, "0");
        const value = `${hh}:${mm}`;
        const label = `${hh}h${mm}`;
        let disabled = false;
        if (isToday) {
          disabled = h < minTime.getHours() || (h === minTime.getHours() && m <= minTime.getMinutes());
        }
        slots.push({ value, label, disabled });
      }
    }
    return slots;
  }

  // Estimate
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [durationMinutes, setDurationMinutes] = useState<number | null>(null);
  const [estimating, setEstimating] = useState(false);

  // Result
  const [result, setResult] = useState<P2PBookingResult | null>(null);

  const fetchEstimate = useCallback(async () => {
    if (!departureLat || !departureLng || !arrivalLat || !arrivalLng) return;

    setEstimating(true);
    try {
      const params = new URLSearchParams({
        departureLat: String(departureLat),
        departureLng: String(departureLng),
        arrivalLat: String(arrivalLat),
        arrivalLng: String(arrivalLng),
      });
      if (requestedDate) {
        params.set("date", new Date(requestedDate).toISOString());
      }
      const res = await fetch(`/api/driver/p2p/estimate?${params}`);
      if (res.ok) {
        const data = await res.json();
        setDistanceKm(data.distanceKm);
        setDurationMinutes(data.durationMinutes);
        setPrice(data.suggestedPrice);
      }
    } catch {
      // Ignore estimate errors
    } finally {
      setEstimating(false);
    }
  }, [departureLat, departureLng, arrivalLat, arrivalLng, requestedDate]);

  useEffect(() => {
    fetchEstimate();
  }, [fetchEstimate]);

  const commissionAmount = typeof price === "number" ? Math.round(price * commissionRate * 100) / 100 : 0;

  const clientPhoneErr = clientPhone ? phoneError(clientPhone) : null;

  const canSubmit =
    departure && departureLat && departureLng &&
    arrival && arrivalLat && arrivalLng &&
    requestedDate && clientName && clientPhone && !clientPhoneErr &&
    typeof price === "number" && price > 0 &&
    new Date(requestedDate).getTime() > Date.now() + 3600_000;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/driver/p2p", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientPhone,
          departureName: departure,
          departureLat,
          departureLng,
          arrivalName: arrival,
          arrivalLat,
          arrivalLng,
          requestedDate,
          price,
          commissionRate,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || t("errorCreating"));
        return;
      }

      const data = await res.json();
      setResult(data.booking);
      setStep("confirmation");
    } catch {
      setError(t("errorCreating"));
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getAcceptLink() {
    if (!result) return "";
    const baseUrl = window.location.origin;
    return `${baseUrl}/p2p/accept?token=${result.p2pToken}`;
  }

  function buildShareWhatsAppUrl() {
    if (!result) return "#";
    const acceptLink = getAcceptLink();
    const message = [
      `Salut,`,
      ``,
      `Je te propose une course via TaxiNeo :`,
      ``,
      `📍 ${result.departureName} → ${result.arrivalName}`,
      `📅 ${formatDate(result.requestedDate)}`,
      `💰 ${result.lockedPrice} €`,
      ``,
      `Pour accepter, clique ici :`,
      acceptLink,
      ``,
      `Inscription en moins de 2 minutes si tu n'as pas encore de compte.`,
      ``,
      `${driverFirstName}`,
    ].join("\n");
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }

  async function handleCopyLink() {
    const link = getAcceptLink();
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
    }
  }

  function resetForm() {
    setStep("form");
    setResult(null);
    setDeparture("");
    setDepartureLat(null);
    setDepartureLng(null);
    setArrival("");
    setArrivalLat(null);
    setArrivalLng(null);
    setSelectedDate("");
    setSelectedTime("");
    setClientName("");
    setClientPhone("");
    setPrice("");
    setCommissionRate(0.1);
    setDistanceKm(null);
    setDurationMinutes(null);
    setError("");
    setCopied(false);
  }

  if (step === "confirmation" && result) {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <Icon icon="solar:check-circle-bold" className="text-green-600 text-xl" />
          </div>
          <div>
            <h2 className="font-semibold">{t("rideCreated")}</h2>
            <p className="text-sm text-neutral-500">{t("reference")} : {result.reference}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:map-point-linear" className="text-neutral-400" />
            <span>{result.departureName} → {result.arrivalName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:calendar-linear" className="text-neutral-400" />
            <span>{formatDate(result.requestedDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:tag-price-linear" className="text-neutral-400" />
            <span>{result.lockedPrice} €</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:user-linear" className="text-neutral-400" />
            <span>{t("client")} : {result.clientName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon icon="solar:hand-money-linear" className="text-neutral-400" />
            <span>{t("commission")} : {result.p2pCommissionAmount} € ({Math.round(result.p2pCommissionRate * 100)}%)</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={buildShareWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="text-lg" />
            {t("shareWhatsApp")}
          </a>
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white font-semibold py-3 rounded-xl hover:bg-neutral-800 transition-colors"
          >
            <Icon icon={copied ? "solar:check-circle-bold" : "solar:copy-linear"} className="text-lg" />
            {copied ? t("linkCopied") : t("copyLink")}
          </button>
          <button
            onClick={resetForm}
            className="flex items-center justify-center gap-2 w-full border border-neutral-200 text-neutral-700 font-medium py-3 rounded-xl hover:bg-neutral-50 transition-colors"
          >
            <Icon icon="solar:add-circle-linear" className="text-lg" />
            {t("createAnother")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-2xl p-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-3 py-2 mb-3">
          {error}
        </div>
      )}

      {/* Row 1: Departure + Arrival */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("departure")}</label>
          <PlacesAutocomplete
            placeholder={t("departurePlaceholder")}
            value={departure}
            onChange={(val, lat, lng) => {
              setDeparture(val);
              if (lat && lng) { setDepartureLat(lat); setDepartureLng(lng); }
            }}
            icon="solar:map-point-linear"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("arrival")}</label>
          <PlacesAutocomplete
            placeholder={t("arrivalPlaceholder")}
            value={arrival}
            onChange={(val, lat, lng) => {
              setArrival(val);
              if (lat && lng) { setArrivalLat(lat); setArrivalLng(lng); }
            }}
            icon="solar:flag-linear"
          />
        </div>
      </div>

      {/* Distance estimate inline */}
      {(distanceKm !== null || estimating) && (
        <div className="flex items-center gap-3 mb-3 text-xs text-neutral-500">
          {estimating ? (
            <span>{t("estimating")}</span>
          ) : (
            <>
              <span className="flex items-center gap-1">
                <Icon icon="solar:route-linear" className="text-sm" />
                {distanceKm} km
              </span>
              {durationMinutes !== null && (
                <span className="flex items-center gap-1">
                  <Icon icon="solar:clock-circle-linear" className="text-sm" />
                  ~{durationMinutes} min
                </span>
              )}
            </>
          )}
        </div>
      )}

      {/* Row 2: Date + Price + Commission */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("dateTime")}</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                // Reset time if switching to today and current time is now invalid
                if (e.target.value === getTodayStr() && selectedTime) {
                  const minTime = new Date(Date.now() + 3600_000);
                  const [h, m] = selectedTime.split(":").map(Number);
                  if (h < minTime.getHours() || (h === minTime.getHours() && m <= minTime.getMinutes())) {
                    setSelectedTime("");
                  }
                }
              }}
              min={getTodayStr()}
              className="flex-1 bg-neutral-100 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all cursor-pointer"
              required
            />
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              disabled={!selectedDate}
              className="w-24 bg-neutral-100 rounded-lg px-2 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all cursor-pointer disabled:opacity-40"
              required
            >
              <option value="">{t("hour") ?? "—"}</option>
              {getTimeSlots().map((slot) => (
                <option key={slot.value} value={slot.value} disabled={slot.disabled}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("price")}</label>
          <div className="relative">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : "")}
              min="1"
              step="1"
              placeholder="0"
              className="w-full bg-neutral-100 rounded-lg px-3 py-2.5 pr-8 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">€</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("commissionRate")}</label>
          <div className="flex gap-1.5">
            {[0.05, 0.10, 0.15, 0.20].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setCommissionRate(rate)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  commissionRate === rate
                    ? "bg-violet-600 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {Math.round(rate * 100)}%
              </button>
            ))}
          </div>
          {typeof price === "number" && price > 0 && (
            <p className="text-xs text-violet-600 font-medium mt-1">= {commissionAmount} €</p>
          )}
        </div>
      </div>

      {/* Row 3: Client name + phone */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("clientName")}</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder={t("clientNamePlaceholder")}
            className="w-full bg-neutral-100 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">{t("clientPhone")}</label>
          <input
            type="tel"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="06 12 34 56 78"
            className={`w-full bg-neutral-100 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:bg-white transition-all ${
              clientPhoneErr ? "ring-2 ring-red-300 focus:ring-red-500" : "focus:ring-neutral-900"
            }`}
            required
          />
          {clientPhoneErr && <p className="text-xs text-red-500 mt-0.5">{clientPhoneErr}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSubmit || loading}
        className="w-full bg-violet-600 text-white font-semibold py-3 rounded-xl hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? t("creating") : t("createRide")}
      </button>
    </form>
  );
}
