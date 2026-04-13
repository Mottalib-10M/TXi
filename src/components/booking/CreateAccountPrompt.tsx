"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface CreateAccountPromptProps {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  locale: string;
}

export function CreateAccountPrompt({
  clientName,
  clientEmail,
  clientPhone,
  locale,
}: CreateAccountPromptProps) {
  const t = useTranslations("confirmation");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profileType: "particulier",
          name: clientName,
          email: clientEmail,
          phone: clientPhone,
          password,
          locale,
        }),
      });

      if (res.status === 409) {
        setError(t("accountExists"));
        setLoading(false);
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Erreur");
        setLoading(false);
        return;
      }

      setSuccess(true);
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-left mb-8">
        <div className="flex items-start gap-3">
          <Icon icon="solar:check-circle-bold" className="text-green-600 text-xl mt-0.5 shrink-0" />
          <p className="text-sm text-green-800">{t("accountCreated")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-left mb-8">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
          <Icon icon="solar:map-arrow-right-bold" className="text-amber-700 text-base" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-900">{t("createAccountTitle")}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{t("createAccountDesc")}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="text-xs text-neutral-500 block mb-1">{t("choosePassword")}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
            className="w-full border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        {error && (
          <p className="text-xs text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || password.length < 6}
          className="w-full bg-neutral-900 text-white text-sm font-medium py-2.5 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? t("creating") : t("finalize")}
        </button>
      </form>
    </div>
  );
}
