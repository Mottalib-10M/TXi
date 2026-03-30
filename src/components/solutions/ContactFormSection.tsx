"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { emailError, phoneError, isValidEmail } from "@/lib/validation";

export function ContactFormSection() {
  const t = useTranslations("contact");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      // Error handled silently
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <section className="py-20 md:py-28">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon icon="solar:check-circle-linear" className="text-green-600 text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">{t("messageSent")}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {t("messageSentDesc")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t("formTitle")}</h2>
          <p className="text-sm text-neutral-500 font-light mt-2">
            {t("formSubtitle")}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={t("yourName")}
            required
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                required
                className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${emailError(form.email) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
              />
              {emailError(form.email) && (
                <p className="text-xs text-red-500 mt-1">{emailError(form.email)}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={t("phoneOptional")}
                className={`w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all ${phoneError(form.phone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`}
              />
              {phoneError(form.phone) && (
                <p className="text-xs text-red-500 mt-1">{phoneError(form.phone)}</p>
              )}
            </div>
          </div>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t("yourMessage")}
            required
            rows={4}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
          />
          <button
            type="submit"
            disabled={submitting || !form.name || !form.email || !isValidEmail(form.email) || !!phoneError(form.phone) || !form.message}
            className="w-full bg-neutral-950 text-white rounded-xl py-4 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? t("sending") : t("sendMessage")}
          </button>
        </form>
      </div>
    </section>
  );
}
