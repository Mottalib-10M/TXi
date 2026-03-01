"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export function CityContactForm({ cityName }: { cityName: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    callbackTime: "",
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
        body: JSON.stringify({ ...form, city: cityName }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "", callbackTime: "" });
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
          <h3 className="text-2xl font-semibold tracking-tight mb-2">Message envoyé</h3>
          <p className="text-sm text-neutral-500 font-light">
            Nous avons bien reçu votre demande et vous recontacterons dans les plus brefs délais.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Besoin d&apos;un renseignement ?
          </h2>
          <p className="text-sm text-neutral-500 font-light mt-3">
            Notre équipe à {cityName} vous rappelle gratuitement.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 fade-up">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Votre nom"
            required
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              required
              className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            />
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Téléphone"
              className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            />
          </div>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Votre message"
            required
            rows={4}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
          />
          <select
            value={form.callbackTime}
            onChange={(e) => setForm({ ...form, callbackTime: e.target.value })}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all text-neutral-500"
          >
            <option value="">Heure de rappel souhaitée (optionnel)</option>
            <option value="matin">Le matin (8h - 12h)</option>
            <option value="apres-midi">L&apos;après-midi (12h - 18h)</option>
            <option value="soir">Le soir (18h - 20h)</option>
          </select>
          <button
            type="submit"
            disabled={submitting || !form.name || !form.email || !form.message}
            className="w-full bg-neutral-950 text-white rounded-xl py-4 text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
