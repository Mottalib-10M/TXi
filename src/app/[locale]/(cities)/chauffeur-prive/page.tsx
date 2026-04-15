import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "chauffeurPrive" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

const advantageIcons = [
  "solar:user-check-linear",
  "mdi:car-side",
  "solar:tag-price-linear",
  "solar:bus-linear",
  "solar:clock-circle-linear",
  "solar:heart-linear",
];

const serviceIcons = [
  "mdi:airplane",
  "solar:buildings-2-linear",
  "solar:star-shine-linear",
  "solar:route-linear",
  "solar:heart-linear",
  "solar:clock-circle-linear",
];

export default async function ChauffeurPrivePage() {
  const t = await getTranslations("chauffeurPrive");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "TaxiNeo", item: "https://taxineo.fr" },
      { "@type": "ListItem", position: 2, name: t("heroTitle"), item: "https://taxineo.fr/chauffeur-prive" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: 5 }, (_, i) => ({
      "@type": "Question",
      name: t(`faq${i + 1}Q`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq${i + 1}A`) },
    })),
  };

  const advantages = Array.from({ length: 6 }, (_, i) => ({
    icon: advantageIcons[i],
    title: t(`advantage${i + 1}Title`),
    desc: t(`advantage${i + 1}Desc`),
  }));

  const services = Array.from({ length: 6 }, (_, i) => ({
    icon: serviceIcons[i],
    title: t(`service${i + 1}Title`),
    desc: t(`service${i + 1}Desc`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    q: t(`faq${i + 1}Q`),
    a: t(`faq${i + 1}A`),
  }));

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 font-light">
            <Link href="/" className="hover:text-neutral-900 transition-colors">TaxiNeo</Link>
            <Icon icon="solar:alt-arrow-right-linear" className="text-xs" />
            <span className="text-neutral-900">{t("heroTitle")}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <main className="flex-grow pt-8 pb-12 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">{t("badge")}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              {t("heroTitle")}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-2xl font-light leading-relaxed">
              {t("heroSubtitle")}
            </p>
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
            >
              {t("heroCta")}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </main>

      {/* Stats */}
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

      {/* Advantages */}
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

      {/* Services */}
      <section className="py-20 md:py-28">
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

      {/* FAQ */}
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
                <p className="text-sm text-neutral-500 font-light leading-relaxed pl-[30px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 fade-up">
            {t("ctaTitle")}
          </h2>
          <p className="text-neutral-400 font-light mb-8 fade-up fade-up-delay-1">
            {t("ctaSubtitle")}
          </p>
          <Link
            href="/#reserver"
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
