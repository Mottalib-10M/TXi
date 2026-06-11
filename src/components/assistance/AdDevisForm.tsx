"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { emailError, phoneError, isValidEmail, isValidPhone } from "@/lib/validation";
import { useTranslations } from "next-intl";
import { trackDevisSubmission } from "@/lib/analytics";
import TurnstileWidget from "@/components/TurnstileWidget";

export function AdDevisForm({ cityName }: { cityName: string }) {
  const t = useTranslations("ad");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    breakdownType: "",
    location: cityName,
    destination: "",
    passengers: "1",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [hp, setHp] = useState("");

  const isValid =
    form.name &&
    form.email &&
    isValidEmail(form.email) &&
    form.phone &&
    isValidPhone(form.phone) &&
    form.breakdownType &&
    form.location &&
    form.destination;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/devis-assistance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, city: cityName, turnstileToken, _hp: hp }),
      });
      if (res.ok) {
        setSuccess(true);
        trackDevisSubmission({ formType: "assistance", city: cityName });
        setForm({ name: "", email: "", phone: "", breakdownType: "", location: cityName, destination: "", passengers: "1", message: "" });
      }
    } catch {
      // handled silently
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xl shadow-black/5 text-center">
        <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon icon="solar:check-circle-linear" className="text-green-600 text-2xl" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight mb-2">{t("formSent")}</h3>
        <p className="text-sm text-neutral-500 font-light">{t("formSentDesc")}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xl shadow-black/5">
      <h3 className="text-lg font-semibold tracking-tight mb-1">{t("formTitle")}</h3>
      <p className="text-xs text-neutral-500 font-light mb-5">{t("formSubtitle")}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={t("formName")}
          required
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
        />
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("formEmail")}
              required
              className={`w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all ${emailError(form.email) ? "ring-2 ring-red-300" : ""}`}
            />
            {emailError(form.email) && <p className="text-xs text-red-500 mt-1">{emailError(form.email)}</p>}
          </div>
          <div>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder={t("formPhone")}
              required
              className={`w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all ${phoneError(form.phone) ? "ring-2 ring-red-300" : ""}`}
            />
            {phoneError(form.phone) && <p className="text-xs text-red-500 mt-1">{phoneError(form.phone)}</p>}
          </div>
        </div>
        <select
          value={form.breakdownType}
          onChange={(e) => setForm({ ...form, breakdownType: e.target.value })}
          required
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-neutral-500"
        >
          <option value="">{t("formBreakdownType")}</option>
          <option value="batterie">{t("formTypeBattery")}</option>
          <option value="pneu">{t("formTypeTyre")}</option>
          <option value="moteur">{t("formTypeEngine")}</option>
          <option value="essence">{t("formTypeFuel")}</option>
          <option value="accident">{t("formTypeAccident")}</option>
          <option value="autre">{t("formTypeOther")}</option>
        </select>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-neutral-500 font-light mb-1 block">{t("formLocation")}</label>
            <input
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-500 font-light mb-1 block">{t("formDestination")}</label>
            <input
              value={form.destination}
              onChange={(e) => setForm({ ...form, destination: e.target.value })}
              placeholder={t("formDestinationPlaceholder")}
              required
              className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>
        </div>
        <select
          value={form.passengers}
          onChange={(e) => setForm({ ...form, passengers: e.target.value })}
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-neutral-500"
        >
          <option value="1">{t("formPassengers1")}</option>
          <option value="2">{t("formPassengers2")}</option>
          <option value="3">{t("formPassengers3")}</option>
          <option value="4">{t("formPassengers4")}</option>
          <option value="5+">{t("formPassengers5")}</option>
        </select>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t("formMessage")}
          rows={2}
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
        />
        <input type="text" name="company_url" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none" />
        <TurnstileWidget onToken={setTurnstileToken} />
        <button
          type="submit"
          disabled={submitting || !isValid}
          className="w-full bg-neutral-950 text-white rounded-lg py-3 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? t("formSending") : t("formSubmit")}
        </button>
      </form>
    </div>
  );
}
