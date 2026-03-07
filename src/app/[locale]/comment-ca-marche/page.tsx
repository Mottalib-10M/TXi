import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "howItWorksPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function HowItWorksPage() {
  const t = await getTranslations("howItWorksPage");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />

      {/* Hero Section — with visual mockup */}
      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:max-w-xl fade-up">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-medium text-neutral-600">
                  {t("heroSubtitle")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
                {t("heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#reserver"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
                >
                  {t("ctaFixed")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
                <Link
                  href="/taxi-partage"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors"
                >
                  {t("ctaPool")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>

            {/* Right: Visual journey mockup */}
            <div
              className="hidden md:flex h-full min-h-[480px] rounded-3xl bg-neutral-50 border border-neutral-100 relative overflow-hidden items-center justify-center"
              style={{
                backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="absolute w-80 h-80 bg-white/60 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
                <path
                  d="M130 140 Q 200 200 260 280 Q 310 340 340 370"
                  stroke="#d4d4d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Step 1 card */}
              <div className="absolute top-12 left-8 bg-white border border-neutral-200 rounded-xl p-3 shadow-lg shadow-black/5 animate-float z-10 max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-neutral-900 text-white rounded-lg flex items-center justify-center text-xs font-semibold">1</div>
                  <span className="text-xs font-medium">{t("fixedStep1Title")}</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                    <div className="w-2 h-2 bg-neutral-900 rounded-full" />
                    Paris, Gare du Nord
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                    <div className="w-2 h-2 bg-neutral-400 rounded-sm" />
                    CDG Terminal 2E
                  </div>
                </div>
              </div>

              {/* Step 2 card — price */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 bg-white border border-neutral-200 rounded-xl p-3 shadow-lg shadow-black/5 animate-float-delayed z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-neutral-900 text-white rounded-lg flex items-center justify-center text-xs font-semibold">2</div>
                  <span className="text-xs font-medium">{t("fixedStep2Title")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:tag-price-linear" className="text-neutral-600 text-sm" />
                  <span className="text-lg font-semibold">35,00 &euro;</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Icon icon="solar:lock-linear" className="text-green-600 text-[10px]" />
                  <span className="text-[10px] text-green-600 font-medium">{t("compareFixedPrice")}</span>
                </div>
              </div>

              {/* Step 3 card — driver */}
              <div className="absolute bottom-12 left-12 bg-white border border-neutral-200 rounded-xl p-3 shadow-lg shadow-black/5 animate-float z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-neutral-900 text-white rounded-lg flex items-center justify-center text-xs font-semibold">3</div>
                  <span className="text-xs font-medium">{t("fixedStep3Title")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Icon icon="solar:user-linear" className="text-neutral-400 text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Marc L.</p>
                    <div className="flex items-center text-[10px] text-neutral-500 gap-1">
                      <Icon icon="solar:star-bold" className="text-amber-500" /> 4.9
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Pins */}
              <div className="absolute top-[27%] left-[24%] z-10">
                <div className="w-4 h-4 bg-neutral-900 rounded-full border-4 border-white shadow-md relative">
                  <div className="absolute inset-0 bg-neutral-900 rounded-full animate-ping-slow" />
                </div>
              </div>
              <div className="absolute bottom-[24%] right-[30%] z-10">
                <div className="w-4 h-4 bg-neutral-900 rounded-sm border-4 border-white shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Section 1 — Taxi à prix fixe (2 cols: steps left, visual right) */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                {t("fixedTitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {t("fixedDesc")}
              </h2>
              <div className="space-y-6 mt-8">
                {[
                  { step: "1", icon: "solar:map-point-linear", title: t("fixedStep1Title"), desc: t("fixedStep1Desc") },
                  { step: "2", icon: "solar:tag-price-linear", title: t("fixedStep2Title"), desc: t("fixedStep2Desc") },
                  { step: "3", icon: "solar:shield-check-linear", title: t("fixedStep3Title"), desc: t("fixedStep3Desc") },
                ].map((item, i) => (
                  <div key={item.step} className={`flex items-start gap-4 fade-up fade-up-delay-${i + 1}`}>
                    <div className="w-10 h-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center shrink-0 text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-medium tracking-tight mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 fade-up">
                <Link
                  href="/#reserver"
                  className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
                >
                  {t("fixedCta")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>

            {/* Right: Booking flow mockup */}
            <div className="hidden md:block fade-up fade-up-delay-2">
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl shadow-black/5 max-w-sm mx-auto">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
                    <Icon icon="solar:routing-linear" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t("fixedTitle")}</p>
                    <p className="text-xs text-neutral-500 font-light">{t("compareFixedBooking")}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm bg-neutral-50 rounded-xl px-4 py-3">
                    <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full shrink-0" />
                    <span className="text-neutral-600 font-light">Paris, Gare du Nord</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm bg-neutral-50 rounded-xl px-4 py-3">
                    <div className="w-2.5 h-2.5 bg-neutral-400 rounded-sm shrink-0" />
                    <span className="text-neutral-600 font-light">CDG Terminal 2E</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="solar:lock-linear" className="text-green-600" />
                    <span className="text-sm font-medium text-green-700">{t("compareFixedPrice")}</span>
                  </div>
                  <span className="text-lg font-semibold text-green-700">35,00 &euro;</span>
                </div>
                <div className="flex items-center gap-3 text-sm mb-4">
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Icon icon="solar:user-linear" className="text-neutral-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Marc L.</p>
                    <div className="flex items-center text-xs text-neutral-500 gap-1">
                      <Icon icon="solar:star-bold" className="text-amber-500" /> 4.9
                      <span className="text-neutral-300">|</span> Taxi Parisien
                    </div>
                  </div>
                </div>
                <Link href="/#reserver" className="block w-full bg-neutral-900 text-white text-sm font-medium py-3 rounded-xl text-center hover:bg-neutral-800 transition-colors">
                  {t("fixedCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Taxi partagé (dark bg, like homepage) */}
      <section className="bg-neutral-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Visual mockup */}
            <div className="hidden md:block fade-up">
              <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Icon icon="solar:users-group-rounded-linear" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t("poolTitle")}</p>
                    <p className="text-xs text-neutral-500 font-light">{t("comparePoolBooking")}</p>
                  </div>
                </div>
                <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-400">CDG T2 &rarr; Paris centre</span>
                    <span className="text-xs text-emerald-400 font-medium">-50%</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-white font-medium">SL</div>
                      <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-white font-medium">TM</div>
                      <div className="w-6 h-6 rounded-full bg-neutral-700 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-neutral-400">+1</div>
                    </div>
                    <span className="text-[10px] text-neutral-500">3/4 places</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Icon icon="solar:clock-circle-linear" className="text-xs" />
                      08:30
                    </div>
                    <span className="text-sm font-semibold text-white">18,00 &euro;</span>
                  </div>
                </div>
                <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-400">Orly &rarr; Paris 14e</span>
                    <span className="text-xs text-emerald-400 font-medium">-45%</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-white font-medium">AB</div>
                      <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-white font-medium">NL</div>
                    </div>
                    <span className="text-[10px] text-neutral-500">2/4 places</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Icon icon="solar:clock-circle-linear" className="text-xs" />
                      14:00
                    </div>
                    <span className="text-sm font-semibold text-white">14,50 &euro;</span>
                  </div>
                </div>
                <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-400">Beauvais &rarr; Paris Nord</span>
                    <span className="text-xs text-emerald-400 font-medium">-40%</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-neutral-800 flex items-center justify-center text-[8px] text-white font-medium">PR</div>
                    </div>
                    <span className="text-[10px] text-neutral-500">1/4 places</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Icon icon="solar:clock-circle-linear" className="text-xs" />
                      17:15
                    </div>
                    <span className="text-sm font-semibold text-white">22,00 &euro;</span>
                  </div>
                </div>
                <Link href="/taxi-partage" className="block w-full bg-emerald-600 text-white text-sm font-medium py-3 rounded-xl text-center hover:bg-emerald-700 transition-colors">
                  {t("poolCta")}
                </Link>
              </div>
            </div>

            {/* Right: Steps */}
            <div className="fade-up">
              <p className="text-sm font-medium text-emerald-400 mb-2 uppercase tracking-wider">
                {t("poolTitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                {t("poolDesc")}
              </h2>
              <div className="space-y-6 mt-8">
                {[
                  { step: "1", title: t("poolStep1Title"), desc: t("poolStep1Desc") },
                  { step: "2", title: t("poolStep2Title"), desc: t("poolStep2Desc") },
                  { step: "3", title: t("poolStep3Title"), desc: t("poolStep3Desc") },
                ].map((item, i) => (
                  <div key={item.step} className={`flex items-start gap-4 fade-up fade-up-delay-${i + 1}`}>
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-medium tracking-tight text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 fade-up">
                <Link
                  href="/taxi-partage"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors btn-lift"
                >
                  {t("poolCta")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Comparatif */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("compareTitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("compareTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Taxi fixe — white */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 card-hover fade-up fade-up-delay-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Icon icon="solar:routing-linear" className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{t("fixedTitle")}</h3>
              </div>
              <div className="space-y-6">
                {[
                  { icon: "solar:tag-price-linear", label: t("compareCriteriaPrice"), value: t("compareFixedPrice") },
                  { icon: "solar:routing-linear", label: t("compareCriteriaRoute"), value: t("compareFixedRoute") },
                  { icon: "solar:star-linear", label: t("compareCriteriaIdeal"), value: t("compareFixedIdeal") },
                  { icon: "solar:calendar-linear", label: t("compareCriteriaBooking"), value: t("compareFixedBooking") },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon icon={item.icon} className="text-neutral-600 text-base" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-neutral-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/#reserver"
                  className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift w-full justify-center"
                >
                  {t("fixedCta")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>

            {/* Card Taxi partagé — dark */}
            <div className="bg-neutral-950 rounded-2xl p-8 card-hover fade-up fade-up-delay-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Icon icon="solar:users-group-rounded-linear" className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{t("poolTitle")}</h3>
              </div>
              <div className="space-y-6">
                {[
                  { icon: "solar:tag-price-linear", label: t("compareCriteriaPrice"), value: t("comparePoolPrice") },
                  { icon: "solar:routing-linear", label: t("compareCriteriaRoute"), value: t("comparePoolRoute") },
                  { icon: "solar:star-linear", label: t("compareCriteriaIdeal"), value: t("comparePoolIdeal") },
                  { icon: "solar:calendar-linear", label: t("compareCriteriaBooking"), value: t("comparePoolBooking") },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon icon={item.icon} className="text-emerald-400 text-base" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-neutral-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/taxi-partage"
                  className="inline-flex items-center gap-2 bg-white text-neutral-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors btn-lift w-full justify-center"
                >
                  {t("poolCta")}
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — FAQ */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("faqTitle")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: t("faq1Q"), a: t("faq1A") },
              { q: t("faq2Q"), a: t("faq2A") },
              { q: t("faq3Q"), a: t("faq3A") },
              { q: t("faq4Q"), a: t("faq4A") },
              { q: t("faq5Q"), a: t("faq5A") },
            ].map((faq, i) => (
              <div
                key={i}
                className={`bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <h3 className="text-sm font-medium tracking-tight mb-2 flex items-start gap-3">
                  <Icon icon="solar:question-circle-linear" className="text-neutral-400 text-lg shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed pl-[30px]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 fade-up">
            {t("ctaTitle")}
          </h2>
          <p className="text-neutral-400 font-light mb-8 max-w-lg mx-auto fade-up fade-up-delay-1">
            {t("ctaSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-delay-2">
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors btn-lift"
            >
              {t("ctaFixed")}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
            <Link
              href="/taxi-partage"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              {t("ctaPool")}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
