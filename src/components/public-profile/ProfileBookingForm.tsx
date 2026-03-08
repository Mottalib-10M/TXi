"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { useSession } from "next-auth/react";
import { useTranslations, useLocale } from "next-intl";
import { Icon } from "@iconify/react";
import { phoneError } from "@/lib/validation";

interface ProfileBookingFormProps {
  driverId: string;
  driverName: string;
  departureAddress: string;
  departureLat?: number;
  departureLng?: number;
  destinationAddress: string;
  destinationLat?: number;
  destinationLng?: number;
  isNow: boolean;
  scheduledDate: string;
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
  isNow,
  scheduledDate,
}: ProfileBookingFormProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const t = useTranslations("booking");
  const locale = useLocale();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isLoggedIn = Boolean(session?.user?.email);

  // Pre-fill client info from session + fetch phone
  useEffect(() => {
    if (session?.user) {
      if (session.user.name) {
        const parts = session.user.name.trim().split(/\s+/);
        setFirstName(parts[0] || "");
        setLastName(parts.slice(1).join(" ") || "");
      }

      const role = (session.user as { role?: string }).role;
      const endpoint = role === "organization" ? "/api/org/profile" : "/api/driver/profile";
      fetch(endpoint)
        .then((r) => r.ok ? r.json() : null)
        .then((data) => {
          if (data?.phone && !clientPhone) setClientPhone(data.phone);
        })
        .catch(() => {});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const clientName = `${firstName} ${lastName}`.trim();

  const hasLocations =
    departureLat != null &&
    departureLng != null &&
    destinationLat != null &&
    destinationLng != null &&
    departureAddress &&
    destinationAddress;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !lastName || !clientPhone || !hasLocations || (!isNow && !scheduledDate)) return;
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
          locale,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push(`/confirmation?ref=${data.reference}`);
      } else {
        setError(data.error || t("bookingError"));
      }
    } catch {
      setError(t("connectionError"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h3 className="text-sm font-semibold tracking-tight mb-3 flex items-center gap-2">
        {t("bookWith", { name: driverName.split(" ")[0] })}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2 rounded-lg">
            {error}
          </div>
        )}

        {isLoggedIn ? (
          <>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3">
              <div className="flex items-center gap-2 text-sm">
                <Icon icon="solar:user-check-linear" className="text-green-500" />
                <span className="font-medium">{clientName}</span>
              </div>
              {clientPhone && (
                <p className="text-xs text-neutral-500 mt-1 pl-6">{clientPhone}</p>
              )}
            </div>
            {!clientPhone && (
              <div>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder={t("phoneRequired")}
                  required
                  className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${phoneError(clientPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
                />
                {phoneError(clientPhone) && (
                  <p className="text-xs text-red-500 mt-1">{phoneError(clientPhone)}</p>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex gap-2">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={t("firstNameRequired")}
                required
                className="flex-1 bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={t("lastNameRequired")}
                required
                className="flex-1 bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder={t("phoneRequired")}
                required
                className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${phoneError(clientPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
              />
              {phoneError(clientPhone) && (
                <p className="text-xs text-red-500 mt-1">{phoneError(clientPhone)}</p>
              )}
            </div>
          </>
        )}

        <div className="flex items-center justify-between bg-neutral-100 rounded-xl px-4 py-3">
          <span className="text-sm text-neutral-500">{t("passengers")}</span>
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
          disabled={!firstName || !lastName || !clientPhone || !!phoneError(clientPhone) || !hasLocations || (!isNow && !scheduledDate) || submitting}
          className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? t("bookingInProgress") : t("bookNow")}
        </button>
      </form>
    </div>
  );
}
