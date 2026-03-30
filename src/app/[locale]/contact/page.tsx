"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { emailError, phoneError, isValidEmail } from "@/lib/validation";

export default function ContactPage() {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();
  const sujetParam = searchParams.get("sujet");

  const sujets = [
    { value: "demo", label: t("subjectDemo") },
    { value: "aide", label: t("subjectHelp") },
    { value: "partenariat", label: t("subjectPartnership") },
    { value: "autre", label: t("subjectOther") },
  ];

  const cards = [
    {
      icon: "solar:monitor-smartphone-linear",
      title: t("requestDemo"),
      desc: t("requestDemoDesc"),
      sujet: "demo",
    },
    {
      icon: "mdi:taxi",
      title: t("becomeDriver"),
      desc: t("becomeDriverDesc"),
      sujet: "partenariat",
    },
    {
      icon: "solar:chat-round-dots-linear",
      title: t("helpSupport"),
      desc: t("helpSupportDesc"),
      sujet: "aide",
    },
  ];

  const faqItems = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
  ];

  const [form, setForm] = useState({
    sujet: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (sujetParam && sujets.some((s) => s.value === sujetParam)) {
      setForm((prev) => ({ ...prev, sujet: sujetParam }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sujetParam]);

  function scrollToForm(sujet: string) {
    setForm((prev) => ({ ...prev, sujet }));
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);

    try {
      const sujetLabel = sujets.find((s) => s.value === form.sujet)?.label || form.sujet;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `[${sujetLabel}] ${form.message}`,
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ sujet: "", name: "", email: "", phone: "", message: "" });
      }
    } catch {
      // Error handled silently
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar minimal />

      {/* Header */}
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("subtitle")}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-neutral-500 font-light max-w-lg mx-auto">
              {t("intro")}
            </p>
          </div>

          {/* Topic Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {cards.map((card) => (
              <button
                key={card.sujet}
                onClick={() => scrollToForm(card.sujet)}
                className="text-left bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                  <Icon
                    icon={card.icon}
                    className="text-neutral-600 text-2xl group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-base font-medium tracking-tight mb-1">{card.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {card.desc}
                </p>
              </button>
            ))}
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-semibold tracking-tight">{t("faqTitle")}</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-2">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-neutral-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <span className="text-sm font-medium pr-4">{item.q}</span>
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className={`text-neutral-400 text-lg shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openFaq === i ? "max-h-40 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 text-sm text-neutral-500 font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="formulaire" className="scroll-mt-24">
            {success ? (
              <div className="max-w-xl mx-auto text-center py-16">
                <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon icon="solar:check-circle-linear" className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2">{t("messageSent")}</h3>
                <p className="text-sm text-neutral-500 font-light">
                  {t("messageSentDesc")}
                </p>
              </div>
            ) : (
              <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-semibold tracking-tight">{t("formTitle")}</h2>
                  <p className="text-sm text-neutral-500 font-light mt-2">
                    {t("formSubtitle")}
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <select
                    value={form.sujet}
                    onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                    className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all text-neutral-500"
                  >
                    <option value="">{t("selectSubject")}</option>
                    {sujets.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
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
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 text-sm text-neutral-500 font-light">
              <span className="flex items-center gap-2">
                <Icon icon="solar:clock-circle-linear" className="text-lg text-neutral-400" />
                {t("schedule")}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
