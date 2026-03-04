"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { emailError, phoneError, isValidEmail, formatPrice } from "@/lib/validation";

interface TaxiResult {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string | null;
  slug: string;
  photoUrl: string | null;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  zoneAddress: string | null;
  baseFare: number;
  pricePerKm: number;
  minimumFare: number;
  estimatedPrice?: number;
  distance?: number;
}

export function BookingForm() {
  const t = useTranslations("booking");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const { data: session } = useSession();
  const [departure, setDeparture] = useState("");
  const [departureLat, setDepartureLat] = useState<number | undefined>();
  const [departureLng, setDepartureLng] = useState<number | undefined>();
  const [arrival, setArrival] = useState("");
  const [arrivalLat, setArrivalLat] = useState<number | undefined>();
  const [arrivalLng, setArrivalLng] = useState<number | undefined>();
  const [passengers, setPassengers] = useState(1);
  const [scheduleLater, setScheduleLater] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");
  const [results, setResults] = useState<TaxiResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"search" | "results" | "booking">("search");
  const [selectedTaxi, setSelectedTaxi] = useState<TaxiResult | null>(null);

  // Client info
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientComments, setClientComments] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isLoggedIn = Boolean(session?.user?.email);

  // Pre-fill client info from session + fetch phone
  useEffect(() => {
    if (session?.user) {
      if (session.user.name) setClientName(session.user.name);
      if (session.user.email) setClientEmail(session.user.email);

      // Fetch phone from profile
      const role = (session.user as { role?: string }).role;
      const endpoint = role === "organization" ? "/api/org/profile" : "/api/driver/profile";
      fetch(endpoint)
        .then((r) => r.ok ? r.json() : null)
        .then((data) => {
          if (data?.phone) setClientPhone(data.phone);
        })
        .catch(() => {});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  async function searchTaxis() {
    if (!departure || !arrival) return;
    setLoading(true);

    try {
      const params = new URLSearchParams();
      if (departureLat) params.set("departureLat", departureLat.toString());
      if (departureLng) params.set("departureLng", departureLng.toString());
      if (arrivalLat) params.set("arrivalLat", arrivalLat.toString());
      if (arrivalLng) params.set("arrivalLng", arrivalLng.toString());
      const requestedTime = scheduleLater && scheduledDate
        ? new Date(scheduledDate).toISOString()
        : new Date().toISOString();
      params.set("requestedTime", requestedTime);

      const res = await fetch(`/api/taxis?${params}`);
      const data = await res.json();
      setResults(data.drivers || []);
      setStep("results");
    } catch {
      // Error
    } finally {
      setLoading(false);
    }
  }

  async function handleBooking() {
    if (!selectedTaxi || !clientName || !clientEmail) return;
    setSubmitting(true);

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
          departureLat: departureLat || 0,
          departureLng: departureLng || 0,
          arrivalName: arrival,
          arrivalLat: arrivalLat || 0,
          arrivalLng: arrivalLng || 0,
          requestedDate: scheduleLater && scheduledDate
            ? new Date(scheduledDate).toISOString()
            : new Date().toISOString(),
          passengerCount: passengers,
          driverId: selectedTaxi.id,
          estimatedPrice: selectedTaxi.estimatedPrice,
          source: "LANDING",
          locale,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push(`/confirmation?ref=${data.reference}` as never);
      }
    } catch {
      // Error
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 md:p-6 overflow-hidden max-w-full">
      {step === "search" && (
        <>
          <h2 className="text-lg font-semibold tracking-tight mb-5">
            {t("title")}
          </h2>

          <div className="relative space-y-3">
            <div className="absolute left-[1.15rem] top-6 bottom-6 w-0.5 bg-neutral-200 z-0" />

            <PlacesAutocomplete
              placeholder={t("departurePlaceholder")}
              value={departure}
              onChange={(val, lat, lng) => {
                setDeparture(val);
                if (lat) setDepartureLat(lat);
                if (lng) setDepartureLng(lng);
              }}
              icon="solar:record-circle-linear"
              showGeolocation
            />

            <button
              type="button"
              onClick={() => {
                setDeparture(arrival);
                setDepartureLat(arrivalLat);
                setDepartureLng(arrivalLng);
                setArrival(departure);
                setArrivalLat(departureLat);
                setArrivalLng(departureLng);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-400 transition-all shadow-sm"
              title={t("swapTooltip")}
            >
              <Icon icon="solar:sort-vertical-linear" className="text-neutral-500 text-base" />
            </button>

            <PlacesAutocomplete
              placeholder={t("destinationPlaceholder")}
              value={arrival}
              onChange={(val, lat, lng) => {
                setArrival(val);
                if (lat) setArrivalLat(lat);
                if (lng) setArrivalLng(lng);
              }}
              icon="solar:map-point-linear"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={() => setScheduleLater(!scheduleLater)}
              className={`flex-1 flex items-center justify-center gap-2 border rounded-xl py-3 transition-colors ${
                scheduleLater
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-neutral-50 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              <Icon icon="solar:clock-circle-linear" className={scheduleLater ? "text-white" : "text-neutral-600"} />
              <span className="text-sm font-medium">
                {scheduleLater ? t("scheduled") : t("now")}
              </span>
              <Icon icon="solar:alt-arrow-down-linear" className={scheduleLater ? "text-neutral-300" : "text-neutral-400"} />
            </button>

            <div className="w-24 flex items-center justify-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl py-3">
              <button
                type="button"
                onClick={() => setPassengers(Math.max(1, passengers - 1))}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <Icon icon="solar:minus-circle-linear" />
              </button>
              <span className="text-sm font-medium">{passengers}</span>
              <button
                type="button"
                onClick={() => setPassengers(Math.min(8, passengers + 1))}
                className="text-neutral-400 hover:text-neutral-900"
              >
                <Icon icon="solar:add-circle-linear" />
              </button>
            </div>
          </div>

          {scheduleLater && (
            <div className="mt-3 w-full">
              <div className="relative w-full">
                <Icon
                  icon="solar:calendar-linear"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-lg z-10 pointer-events-none"
                />
                <input
                  type="datetime-local"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="block w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                  style={{ WebkitAppearance: "none", MozAppearance: "none" }}
                />
              </div>
              {!scheduledDate && (
                <p className="text-xs text-neutral-400 mt-1.5 ml-1">
                  {t("selectDateTime")}
                </p>
              )}
            </div>
          )}

          <button
            onClick={searchTaxis}
            disabled={!departure || !arrival || loading}
            className="w-full mt-6 bg-neutral-950 text-white rounded-xl py-4 text-sm font-medium hover:bg-neutral-800 transition-colors focus:ring-4 focus:ring-neutral-200 btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t("searching") : t("seePrices")}
          </button>
        </>
      )}

      {step === "results" && (
        <>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold tracking-tight">
              {t("availableTaxis")}
            </h2>
            <button
              onClick={() => setStep("search")}
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {tc("edit")}
            </button>
          </div>

          <div className="text-xs text-neutral-500 mb-4 space-y-1">
            <div className="flex items-start gap-2">
              <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0 mt-0.5" />
              <span className="break-words min-w-0 break-all">{departure} → {arrival}</span>
            </div>
            <div className="flex items-center gap-2 pl-[18px]">
              <Icon icon="solar:clock-circle-linear" className="text-neutral-400 shrink-0" />
              <span>
                {scheduleLater && scheduledDate
                  ? new Date(scheduledDate).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", { weekday: "short", day: "numeric", month: "long" }) +
                    (locale === "en" ? " at " : " à ") +
                    new Date(scheduledDate).toLocaleTimeString(locale === "en" ? "en-US" : "fr-FR", { hour: "2-digit", minute: "2-digit" })
                  : t("now")}
              </span>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="text-center py-8">
              <Icon icon="solar:car-linear" className="text-3xl text-neutral-300 mx-auto mb-2" />
              <p className="text-sm text-neutral-500 font-light">
                {t("noTaxisAvailable")}
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-2 max-h-[400px] overflow-y-auto -mx-1 px-1">
                {results.map((taxi) => (
                  <div
                    key={taxi.id}
                    className="w-full text-left p-3 border rounded-xl transition-all border-neutral-200 hover:border-neutral-300"
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar - clickable to see profile */}
                      <Link
                        href={`/taxi/${taxi.slug}`}
                        className="shrink-0"
                        title={t("viewProfile")}
                      >
                        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-neutral-900 transition-all cursor-pointer">
                          {taxi.photoUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={taxi.photoUrl} alt={taxi.firstName} className="w-full h-full object-cover" />
                          ) : (
                            <Icon icon="solar:user-linear" className="text-neutral-400" />
                          )}
                        </div>
                      </Link>

                      {/* Driver info */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          {taxi.companyName || `${taxi.firstName} ${taxi.lastName ? taxi.lastName.charAt(0) + "." : ""}`.trim()}
                        </p>
                        <p className="text-xs text-neutral-500 font-light truncate">
                          {taxi.vehicleBrand} {taxi.vehicleModel}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        {taxi.estimatedPrice ? (
                          <p className="text-sm font-semibold">
                            {formatPrice(taxi.estimatedPrice)}
                          </p>
                        ) : (
                          <p className="text-xs text-neutral-500">
                            {tc("from")} {formatPrice(taxi.minimumFare)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Choose button - full width below */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTaxi(taxi);
                        setStep("booking");
                      }}
                      className="w-full mt-2.5 bg-neutral-900 text-white text-xs font-medium py-2.5 rounded-lg hover:bg-neutral-700 transition-colors"
                    >
                      {tc("choose")}
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-neutral-400">
                <Icon icon="solar:shield-check-linear" className="text-green-500" />
                <span>{t("fixedPriceGuaranteed")}</span>
              </div>
            </>
          )}
        </>
      )}

      {step === "booking" && selectedTaxi && (
        <>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold tracking-tight">
              {isLoggedIn ? t("confirmation") : t("yourDetails")}
            </h2>
            <button
              onClick={() => setStep("results")}
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {tc("back")}
            </button>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                <Icon icon="solar:user-linear" className="text-neutral-500 text-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  {selectedTaxi.companyName || `${selectedTaxi.firstName} ${selectedTaxi.lastName ? selectedTaxi.lastName.charAt(0) + "." : ""}`.trim()}
                </p>
                <p className="text-xs text-neutral-500 font-light">
                  {selectedTaxi.vehicleBrand} {selectedTaxi.vehicleModel}
                </p>
              </div>
              {selectedTaxi.estimatedPrice && (
                <p className="ml-auto text-sm font-semibold">
                  {formatPrice(selectedTaxi.estimatedPrice)}
                </p>
              )}
            </div>
          </div>

          {isLoggedIn ? (
            <div className="space-y-3">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon="solar:user-check-linear" className="text-green-500" />
                  <span className="font-medium">{clientName}</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 mt-1.5 pl-6">
                  <span>{clientEmail}</span>
                  {clientPhone && <span>{clientPhone}</span>}
                </div>
              </div>

              <textarea
                value={clientComments}
                onChange={(e) => setClientComments(e.target.value)}
                placeholder={t("driverNote")}
                rows={2}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
              />
            </div>
          ) : (
            <div className="space-y-3">
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder={t("fullName")}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
              <div>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder={t("yourEmail")}
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
                  placeholder={t("yourPhone")}
                  className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${phoneError(clientPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
                />
                {phoneError(clientPhone) && (
                  <p className="text-xs text-red-500 mt-1">{phoneError(clientPhone)}</p>
                )}
              </div>
              <textarea
                value={clientComments}
                onChange={(e) => setClientComments(e.target.value)}
                placeholder={t("comments")}
                rows={2}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
              />
            </div>
          )}

          <button
            onClick={handleBooking}
            disabled={!clientName || !clientEmail || !isValidEmail(clientEmail) || !!phoneError(clientPhone) || submitting}
            className="w-full mt-6 bg-neutral-950 text-white rounded-xl py-4 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? t("bookingInProgress") : t("confirmBooking")}
          </button>
        </>
      )}
    </div>
  );
}
