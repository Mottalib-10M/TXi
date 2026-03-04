"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { emailError, isValidEmail } from "@/lib/validation";

export default function ForgotPasswordPage() {
  const t = useTranslations("auth");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale }),
      });

      if (!res.ok) {
        setError(t("genericError"));
        return;
      }

      setSent(true);
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl">
            <span className="font-normal text-neutral-600">Taxi</span>
            <span className="font-bold text-neutral-950">Noir</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-6 mb-2">
            {t("forgotPasswordTitle")}
          </h1>
          <p className="text-sm text-neutral-500 font-light">
            {t("forgotPasswordSubtitle")}
          </p>
        </div>

        {sent ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
              {t("forgotPasswordSent")}
            </div>
            <p className="text-center text-sm text-neutral-500">
              <Link href="/connexion" className="text-neutral-900 font-medium hover:underline">
                {t("backToLogin")}
              </Link>
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  {t("email")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${emailError(email) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
                  placeholder={t("emailPlaceholder")}
                />
                {emailError(email) && <p className="text-xs text-red-500 mt-1">{emailError(email)}</p>}
              </div>

              <button
                type="submit"
                disabled={loading || (!!email && !isValidEmail(email))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? t("sendingLink") : t("sendLink")}
              </button>
            </form>

            <p className="text-center text-sm text-neutral-500 mt-6">
              <Link href="/connexion" className="text-neutral-900 font-medium hover:underline">
                {t("backToLogin")}
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
