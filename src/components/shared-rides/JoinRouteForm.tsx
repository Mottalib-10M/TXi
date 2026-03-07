"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { useSession } from "next-auth/react";

interface JoinRouteFormProps {
  routeId: string;
  maxSeats: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export function JoinRouteForm({
  routeId,
  maxSeats,
  onSuccess,
  onCancel,
}: JoinRouteFormProps) {
  const t = useTranslations("sharedRides");
  const locale = useLocale();
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seatCount, setSeatCount] = useState(1);
  const [luggageType, setLuggageType] = useState("NONE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`/api/shared-routes/${routeId}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(session ? {} : { passengerName: name, passengerEmail: email, passengerPhone: phone }),
          seatCount,
          luggageType,
          locale,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Erreur");
        return;
      }

      setSuccess(true);
      onSuccess();
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-6">
        <Icon
          icon="solar:check-circle-bold"
          className="text-4xl text-green-500 mx-auto mb-3"
        />
        <p className="font-medium text-lg">{t("joinSuccess")}</p>
        <p className="text-sm text-neutral-500 mt-1">{t("joinSuccessDesc")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-medium">{t("joinTitle")}</h3>

      {error && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl">
          {error}
        </div>
      )}

      {!session && (
        <>
          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("yourName")} *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("yourEmail")} *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-500 mb-1">
              {t("yourPhone")}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
            />
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-neutral-500 mb-1">
            {t("seatCount")}
          </label>
          <select
            value={seatCount}
            onChange={(e) => setSeatCount(Number(e.target.value))}
            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
          >
            {Array.from({ length: maxSeats }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-neutral-500 mb-1">
            {t("luggageType")}
          </label>
          <select
            value={luggageType}
            onChange={(e) => setLuggageType(e.target.value)}
            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
          >
            <option value="NONE">{t("luggageNone")}</option>
            <option value="SMALL">{t("luggageSmall")}</option>
            <option value="LARGE">{t("luggageLarge")}</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="bg-neutral-900 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {loading ? t("joining") : t("joinButton")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          {t("cancel")}
        </button>
      </div>
    </form>
  );
}
