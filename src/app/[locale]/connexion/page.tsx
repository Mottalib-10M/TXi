"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { emailError, isValidEmail } from "@/lib/validation";

function ConnexionForm() {
  const t = useTranslations("auth");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");
  const verified = searchParams.get("verified");
  const resetSuccess = searchParams.get("reset");
  const tokenError = searchParams.get("error");
  const { data: session, status } = useSession();
  const [error, setError] = useState("");
  const [emailNotVerified, setEmailNotVerified] = useState(false);
  const [resendEmail, setResendEmail] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formEmail, setFormEmail] = useState("");

  // If already authenticated, redirect based on role
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const dest = session.user.role === "organization" ? "/org" : "/dashboard";
      router.replace(dest);
    }
  }, [status, session, router]);

  // Show loading while checking session (middleware handles redirect, this is a fallback)
  if (status === "loading" || status === "authenticated") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-5 h-5 border-2 border-neutral-300 border-t-neutral-900 rounded-full animate-spin" />
      </div>
    );
  }

  async function handleResend() {
    if (!resendEmail) return;
    setResendLoading(true);
    setResendSuccess(false);
    try {
      const res = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resendEmail, locale }),
      });
      if (res.ok) {
        setResendSuccess(true);
      }
    } catch {
      // silently fail
    } finally {
      setResendLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password: formData.get("password") as string,
        redirect: false,
      });

      if (result?.error) {
        if (result.error.includes("EMAIL_NOT_VERIFIED")) {
          setEmailNotVerified(true);
          setResendEmail(email);
          setError("");
          return;
        }
        setError(t("wrongCredentials"));
        return;
      }

      // Fetch updated session to get role
      const res = await fetch("/api/auth/session");
      const sessionData = await res.json();
      const dest = sessionData?.user?.role === "organization" ? "/org" : "/dashboard";

      // Full page reload to ensure the session cookie is picked up
      window.location.href = dest;
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
            <span className="font-normal text-neutral-600">Taxi</span><span className="font-bold text-neutral-950">Noir</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-6 mb-2">
            {t("loginTitle")}
          </h1>
          <p className="text-sm text-neutral-500 font-light">
            {t("loginSubtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {registered && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-3 rounded-xl">
              {t("accountCreated")}
            </div>
          )}

          {verified && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
              {t("emailVerified")}
            </div>
          )}

          {resetSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
              {t("passwordChanged")}
            </div>
          )}

          {tokenError === "expired_token" && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
              {t("expiredToken")}
            </div>
          )}

          {emailNotVerified && (
            <div className="bg-amber-50 border border-amber-200 text-amber-700 text-sm px-4 py-3 rounded-xl">
              <p>{t("verifyEmail")}</p>
              {resendSuccess ? (
                <p className="mt-2 font-medium">{t("resendSuccess")}</p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendLoading}
                  className="mt-2 underline font-medium hover:no-underline disabled:opacity-50"
                >
                  {resendLoading ? t("resending") : t("resendVerification")}
                </button>
              )}
            </div>
          )}

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
              name="email"
              type="email"
              required
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
              placeholder={t("emailPlaceholder")}
            />
            {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-sm font-medium">
                {t("password")}
              </label>
              <Link href="/mot-de-passe-oublie" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                {t("forgotPassword")}
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              placeholder={t("passwordPlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={loading || (!!formEmail && !isValidEmail(formEmail))}
            className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
          >
            {loading ? t("loggingIn") : t("loginButton")}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-6">
          {t("noAccount")}{" "}
          <Link href="/inscription" className="text-neutral-900 font-medium hover:underline">
            {t("signupLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ConnexionPage() {
  return (
    <Suspense>
      <ConnexionForm />
    </Suspense>
  );
}
