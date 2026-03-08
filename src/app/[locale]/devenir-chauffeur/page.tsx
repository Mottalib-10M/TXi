import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { QRCodeAnimation } from "@/components/driver/QRCodeAnimation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyJoin" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function WhyJoinPage() {
  const t = await getTranslations("whyJoin");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />

      {/* Hero Section */}
      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:max-w-xl fade-up">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-medium text-neutral-600">
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
                {t("heroTitle")}
              </h1>
              <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
                {t("heroSubtitle")}
              </p>
              <Link
                href="/inscription?type=driver"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("heroCta")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* Right: Driver Profile Mockup */}
            <div className="hidden md:block fade-up fade-up-delay-2">
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl shadow-black/5 max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Icon icon="solar:user-linear" className="text-neutral-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-base font-semibold">{t("mockupName")}</p>
                    <div className="flex items-center text-xs text-neutral-500 gap-1 font-light">
                      <Icon icon="solar:star-bold" className="text-amber-500" />
                      {t("mockupRating")} <span className="text-neutral-300">|</span> {t("mockupCity")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                  <Icon icon="solar:shield-check-linear" className="text-green-600" />
                  <span className="text-xs font-medium text-green-700">{t("mockupVerified")}</span>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon icon="solar:car-linear" className="text-neutral-400" />
                    <span className="text-neutral-600 font-light">{t("mockupVehicle")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                    <span className="text-neutral-600 font-light">{t("mockupZone")}</span>
                  </div>
                </div>
                <button className="w-full bg-neutral-950 text-white text-sm font-medium py-3 rounded-xl">
                  {t("mockupBook")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-t border-neutral-100 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: t("stat1Value"), label: t("stat1Label") },
              { value: t("stat2Value"), label: t("stat2Label") },
              { value: t("stat3Value"), label: t("stat3Label") },
              { value: t("stat4Value"), label: t("stat4Label") },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center fade-up ${i > 0 ? `fade-up-delay-${i}` : ""}`}>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500 font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section — 6 cards grid */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("advantagesSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("advantagesTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "solar:graph-up-linear", title: t("advantage1Title"), desc: t("advantage1Desc") },
              { icon: "solar:user-id-linear", title: t("advantage2Title"), desc: t("advantage2Desc") },
              { icon: "solar:card-2-linear", title: t("advantage3Title"), desc: t("advantage3Desc") },
              { icon: "solar:clipboard-list-linear", title: t("advantage4Title"), desc: t("advantage4Desc") },
              { icon: "solar:calendar-linear", title: t("advantage5Title"), desc: t("advantage5Desc") },
              { icon: "solar:shield-check-linear", title: t("advantage6Title"), desc: t("advantage6Desc") },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon icon={item.icon} className="text-neutral-900 text-2xl" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools Section — 2 columns */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                {t("toolsSubtitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {t("toolsTitle")}
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed mb-8">
                {t("toolsDesc")}
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  t("tool1"),
                  t("tool2"),
                  t("tool3"),
                  t("tool4"),
                  t("tool5"),
                  t("tool6"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center shrink-0">
                      <Icon icon="solar:check-read-linear" className="text-white text-xs" />
                    </div>
                    <span className="text-sm font-light text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/inscription?type=driver"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("heroCta")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* Dashboard mockup */}
            <div className="hidden md:block fade-up fade-up-delay-2">
              <div className="bg-neutral-950 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-50" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-white text-sm font-medium">{t("toolsDashboardTitle")}</p>
                    <span className="text-xs text-neutral-500 font-light">{t("toolsDashboardMonth")}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("toolsRides")}</p>
                      <p className="text-xl font-semibold text-white mt-1">127</p>
                      <p className="text-xs text-green-400 mt-1">+18%</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("toolsRevenue")}</p>
                      <p className="text-xl font-semibold text-white mt-1">4 850 €</p>
                      <p className="text-xs text-green-400 mt-1">+12%</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("toolsRating")}</p>
                      <p className="text-xl font-semibold text-white mt-1">4.9</p>
                      <p className="text-xs text-neutral-500 mt-1">★★★★★</p>
                    </div>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 font-light mb-3">
                      {t("toolsRidesPerWeek")}
                    </p>
                    <div className="flex items-end gap-2 h-24">
                      {[35, 55, 40, 70, 100, 60, 45].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 ${i === 4 ? "bg-white" : "bg-neutral-700"} rounded-t-sm`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-neutral-600">
                      {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center fade-up">
              <QRCodeAnimation />
            </div>
            <div className="order-1 md:order-2 fade-up fade-up-delay-1">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                {t("qrSectionSubtitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {t("qrSectionTitle")}
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed mb-8">
                {t("qrSectionDesc")}
              </p>
              <div className="space-y-4">
                {[
                  { icon: "solar:card-2-linear", title: t("qrBenefit1Title"), desc: t("qrBenefit1Desc") },
                  { icon: "mdi:car-outline", title: t("qrBenefit2Title"), desc: t("qrBenefit2Desc") },
                  { icon: "solar:buildings-linear", title: t("qrBenefit3Title"), desc: t("qrBenefit3Desc") },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 fade-up fade-up-delay-${i + 1}`}>
                    <div className="w-10 h-10 bg-white border border-neutral-200 rounded-xl flex items-center justify-center shrink-0">
                      <Icon icon={item.icon} className="text-neutral-900 text-lg" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-0.5">{item.title}</h3>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3 steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("stepsSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("stepsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: "1", title: t("step1Title"), desc: t("step1Desc") },
              { step: "2", title: t("step2Title"), desc: t("step2Desc") },
              { step: "3", title: t("step3Title"), desc: t("step3Desc") },
            ].map((item, i) => (
              <div key={item.step} className={`relative fade-up fade-up-delay-${i + 1}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shrink-0 text-lg font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("testimonialsSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("testimonialsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: t("testimonial1"),
                name: t("testimonial1Name"),
                location: t("testimonial1Location"),
                initials: "KB",
              },
              {
                text: t("testimonial2"),
                name: t("testimonial2Name"),
                location: t("testimonial2Location"),
                initials: "PR",
              },
              {
                text: t("testimonial3"),
                name: t("testimonial3Name"),
                location: t("testimonial3Location"),
                initials: "NL",
              },
            ].map((testimonial, i) => (
              <div
                key={testimonial.name}
                className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${i + 1}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} icon="solar:star-bold" className="text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500 font-light">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("faqSubtitle")}
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

      {/* Final CTA Section */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 fade-up">
            {t("ctaTitle")}
          </h2>
          <p className="text-neutral-400 font-light mb-8 fade-up fade-up-delay-1">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/inscription?type=driver"
            className="inline-flex items-center gap-2 bg-white text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors btn-lift fade-up fade-up-delay-2"
          >
            {t("ctaButton")}
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
