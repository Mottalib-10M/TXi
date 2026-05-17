"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { emailError, phoneError, isValidEmail, isValidPhone } from "@/lib/validation";
import { useTranslations } from "next-intl";

export function TmDevisForm({ cityName }: { cityName: string }) {
  const t = useTranslations("tm");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    transportType: "",
    medicalReason: "",
    vehicleType: "",
    companion: false,
    reducedMobility: false,
    pickup: cityName,
    hospital: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValid =
    form.name &&
    form.email &&
    isValidEmail(form.email) &&
    form.phone &&
    isValidPhone(form.phone) &&
    form.date &&
    form.transportType &&
    form.medicalReason &&
    form.hospital;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/devis-taxi-medical", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, city: cityName }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", date: "", transportType: "", medicalReason: "", vehicleType: "", companion: false, reducedMobility: false, pickup: cityName, hospital: "", message: "" });
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
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-neutral-500"
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            value={form.transportType}
            onChange={(e) => setForm({ ...form, transportType: e.target.value })}
            required
            className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-neutral-500"
          >
            <option value="">{t("formTransportType")}</option>
            <option value="aller-simple">{t("formOneWay")}</option>
            <option value="aller-retour">{t("formRoundTrip")}</option>
            <option value="serie-5">{t("formSerie5")}</option>
            <option value="serie-10">{t("formSerie10")}</option>
          </select>
          <select
            value={form.medicalReason}
            onChange={(e) => setForm({ ...form, medicalReason: e.target.value })}
            required
            className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all text-neutral-500"
          >
            <option value="">{t("formMedicalReason")}</option>
            <option value="dialyse">{t("formReasonDialysis")}</option>
            <option value="chimio">{t("formReasonChemo")}</option>
            <option value="consult">{t("formReasonConsult")}</option>
            <option value="kine">{t("formReasonRehab")}</option>
            <option value="hospitalisation">{t("formReasonHospital")}</option>
            <option value="autre">{t("formReasonOther")}</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-neutral-500 font-light mb-1 block">{t("formPickup")}</label>
            <input
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-neutral-500 font-light mb-1 block">{t("formHospital")}</label>
            <input
              value={form.hospital}
              onChange={(e) => setForm({ ...form, hospital: e.target.value })}
              placeholder={t("formHospitalPlaceholder")}
              required
              className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.reducedMobility}
              onChange={(e) => setForm({ ...form, reducedMobility: e.target.checked })}
              className="rounded border-neutral-300"
            />
            {t("formPMR")}
          </label>
          <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.companion}
              onChange={(e) => setForm({ ...form, companion: e.target.checked })}
              className="rounded border-neutral-300"
            />
            {t("formCompanion")}
          </label>
        </div>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t("formMessage")}
          rows={2}
          className="w-full rounded-lg border border-neutral-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none"
        />
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
