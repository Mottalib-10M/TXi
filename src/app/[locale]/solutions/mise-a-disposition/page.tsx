import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ContactFormSection } from "@/components/solutions/ContactFormSection";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionMiseADispo" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

const fleetIcons = [
  "solar:sedan-minimalistic-linear",
  "solar:bus-linear",
  "solar:minibus-linear",
];

const serviceIcons = [
  "solar:airplane-linear",
  "solar:star-shine-linear",
  "solar:route-linear",
  "solar:buildings-2-linear",
  "solar:heart-linear",
  "solar:compass-linear",
];

const advantageIcons = [
  "solar:user-check-linear",
  "solar:clock-circle-linear",
  "solar:crown-linear",
  "solar:document-text-linear",
  "solar:shield-check-linear",
  "solar:settings-linear",
];

export default async function MiseADispositionPage() {
  const t = await getTranslations("solutionMiseADispo");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("heroTitle"),
    description: t("metaDescription"),
    provider: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://taxineo.fr",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("pricingTitle"),
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("pricingBerline") },
          priceSpecification: { "@type": "PriceSpecification", price: "90", priceCurrency: "EUR", unitText: "HOUR" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("pricingSuv") },
          priceSpecification: { "@type": "PriceSpecification", price: "110", priceCurrency: "EUR", unitText: "HOUR" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t("pricingVan") },
          priceSpecification: { "@type": "PriceSpecification", price: "130", priceCurrency: "EUR", unitText: "HOUR" },
        },
      ],
    },
  };

  const fleet = [
    {
      icon: fleetIcons[0],
      title: t("fleet1Title"),
      models: t("fleet1Models"),
      passengers: t("fleet1Passengers"),
      features: [t("fleet1Feature1"), t("fleet1Feature2"), t("fleet1Feature3")],
    },
    {
      icon: fleetIcons[1],
      title: t("fleet2Title"),
      models: t("fleet2Models"),
      passengers: t("fleet2Passengers"),
      features: [t("fleet2Feature1"), t("fleet2Feature2"), t("fleet2Feature3")],
    },
    {
      icon: fleetIcons[2],
      title: t("fleet3Title"),
      models: t("fleet3Models"),
      passengers: t("fleet3Passengers"),
      features: [t("fleet3Feature1"), t("fleet3Feature2"), t("fleet3Feature3")],
    },
  ];

  const pricingRows = [
    { label: t("pricing1h"), berline: t("pricingBerline1h"), suv: t("pricingSuv1h"), van: t("pricingVan1h") },
    { label: t("pricingHalfDay"), berline: t("pricingBerlineHalf"), suv: t("pricingSuvHalf"), van: t("pricingVanHalf") },
    { label: t("pricingFullDay"), berline: t("pricingBerlineFull"), suv: t("pricingSuvFull"), van: t("pricingVanFull") },
    { label: t("pricingCustom"), berline: t("pricingCustomLabel"), suv: t("pricingCustomLabel"), van: t("pricingCustomLabel") },
  ];

  const services = [
    { icon: serviceIcons[0], title: t("service1Title"), desc: t("service1Desc") },
    { icon: serviceIcons[1], title: t("service2Title"), desc: t("service2Desc") },
    { icon: serviceIcons[2], title: t("service3Title"), desc: t("service3Desc") },
    { icon: serviceIcons[3], title: t("service4Title"), desc: t("service4Desc") },
    { icon: serviceIcons[4], title: t("service5Title"), desc: t("service5Desc") },
    { icon: serviceIcons[5], title: t("service6Title"), desc: t("service6Desc") },
  ];

  const advantages = [
    { icon: advantageIcons[0], title: t("advantage1Title"), desc: t("advantage1Desc") },
    { icon: advantageIcons[1], title: t("advantage2Title"), desc: t("advantage2Desc") },
    { icon: advantageIcons[2], title: t("advantage3Title"), desc: t("advantage3Desc") },
    { icon: advantageIcons[3], title: t("advantage4Title"), desc: t("advantage4Desc") },
    { icon: advantageIcons[4], title: t("advantage5Title"), desc: t("advantage5Desc") },
    { icon: advantageIcons[5], title: t("advantage6Title"), desc: t("advantage6Desc") },
  ];

  const steps = [
    { step: "1", title: t("step1Title"), desc: t("step1Desc") },
    { step: "2", title: t("step2Title"), desc: t("step2Desc") },
    { step: "3", title: t("step3Title"), desc: t("step3Desc") },
  ];

  const testimonials = [
    { text: t("testimonial1"), name: t("testimonial1Name"), location: t("testimonial1Location") },
    { text: t("testimonial2"), name: t("testimonial2Name"), location: t("testimonial2Location") },
    { text: t("testimonial3"), name: t("testimonial3Name"), location: t("testimonial3Location") },
  ];

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero Section */}
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
                href="/contact?sujet=mise-a-disposition"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("heroCta")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* Right: Mockup card */}
            <div className="hidden md:block fade-up fade-up-delay-2">
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl shadow-black/5 max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Icon icon="solar:crown-linear" className="text-neutral-400 text-2xl" />
                  </div>
                  <div>
                    <p className="text-base font-semibold">{t("mockupTitle")}</p>
                    <p className="text-xs text-neutral-500 font-light">{t("mockupClient")}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon icon="solar:sedan-minimalistic-linear" className="text-neutral-400" />
                    <span className="text-neutral-600 font-light">{t("mockupVehicle")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon icon="solar:clock-circle-linear" className="text-neutral-400" />
                    <span className="text-neutral-600 font-light">{t("mockupDuration")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                  <Icon icon="solar:shield-check-linear" className="text-green-600" />
                  <span className="text-xs font-medium text-green-700">{t("mockupStatus")}</span>
                </div>
                <div className="flex items-center gap-3 text-sm bg-neutral-50 rounded-lg px-3 py-2">
                  <Icon icon="solar:user-linear" className="text-neutral-400" />
                  <span className="text-neutral-600 font-light">{t("mockupChauffeur")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 2. Stats Section */}
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
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">{stat.value}</p>
                <p className="text-sm text-neutral-500 font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fleet Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("fleetSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("fleetTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((vehicle, i) => (
              <div
                key={vehicle.title}
                className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${i + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon icon={vehicle.icon} className="text-neutral-900 text-2xl" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-1">{vehicle.title}</h3>
                <p className="text-xs text-neutral-400 font-light mb-3">{vehicle.models}</p>
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                  <Icon icon="solar:users-group-rounded-linear" className="text-neutral-400" />
                  <span className="font-light">{vehicle.passengers}</span>
                </div>
                <ul className="space-y-2">
                  {vehicle.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 bg-neutral-900 rounded-full flex items-center justify-center shrink-0">
                        <Icon icon="solar:check-read-linear" className="text-white text-[10px]" />
                      </div>
                      <span className="text-neutral-600 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("pricingSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("pricingTitle")}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto fade-up fade-up-delay-1">
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-4 bg-neutral-950 text-white">
                <div className="p-4 text-sm font-medium" />
                <div className="p-4 text-sm font-medium text-center">{t("pricingBerline")}</div>
                <div className="p-4 text-sm font-medium text-center">{t("pricingSuv")}</div>
                <div className="p-4 text-sm font-medium text-center">{t("pricingVan")}</div>
              </div>
              {/* Table rows */}
              {pricingRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-4 ${i < pricingRows.length - 1 ? "border-b border-neutral-100" : ""}`}
                >
                  <div className="p-4 text-sm font-medium text-neutral-900">{row.label}</div>
                  <div className="p-4 text-sm text-neutral-600 font-light text-center">{row.berline}</div>
                  <div className="p-4 text-sm text-neutral-600 font-light text-center">{row.suv}</div>
                  <div className="p-4 text-sm text-neutral-600 font-light text-center">{row.van}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-400 font-light mt-4 text-center">{t("pricingNote")}</p>
            <div className="text-center mt-8">
              <Link
                href="/contact?sujet=mise-a-disposition"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("pricingCta")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("servicesSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("servicesTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon icon={service.icon} className="text-neutral-900 text-2xl" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Advantages Section */}
      <section className="py-20 md:py-28">
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
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon icon={item.icon} className="text-neutral-900 text-2xl" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
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
            {steps.map((item, i) => (
              <div key={item.step} className={`relative fade-up fade-up-delay-${i + 1}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shrink-0 text-lg font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
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
            {testimonials.map((testimonial, i) => (
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
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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

      {/* 9. FAQ */}
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
            {faqs.map((faq, i) => (
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

      {/* Contact Form */}
      <ContactFormSection />

      {/* 10. Final CTA */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 fade-up">
            {t("ctaTitle")}
          </h2>
          <p className="text-neutral-400 font-light mb-8 fade-up fade-up-delay-1">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/contact?sujet=mise-a-disposition"
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
