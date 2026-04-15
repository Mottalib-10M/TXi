import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { FranceMapAirports } from "@/components/airport/FranceMapAirports";
import { airports } from "@/data/airports";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "airports" });

  const canonical = `https://www.taxineo.fr/${locale}/aeroports`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
    },
    alternates: { canonical },
  };
}

export default async function AeroportsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("airports");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("metaTitle"),
    description: t("metaDescription"),
    numberOfItems: airports.length,
    itemListElement: airports.map((airport, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Taxi ${airport.name}`,
      url: `https://www.taxineo.fr/${locale}/taxi-aeroport-${airport.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: `https://www.taxineo.fr/${locale}` },
      { "@type": "ListItem", position: 2, name: t("breadcrumbAirport"), item: `https://www.taxineo.fr/${locale}/aeroports` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: t("faq1Q"), acceptedAnswer: { "@type": "Answer", text: t("faq1A") } },
      { "@type": "Question", name: t("faq2Q"), acceptedAnswer: { "@type": "Answer", text: t("faq2A") } },
      { "@type": "Question", name: t("faq3Q"), acceptedAnswer: { "@type": "Answer", text: t("faq3A") } },
      { "@type": "Question", name: t("faq4Q"), acceptedAnswer: { "@type": "Answer", text: t("faq4A") } },
      { "@type": "Question", name: t("faq5Q"), acceptedAnswer: { "@type": "Answer", text: t("faq5A") } },
      { "@type": "Question", name: t("faq6Q"), acceptedAnswer: { "@type": "Answer", text: t("faq6A") } },
      { "@type": "Question", name: t("faq7Q"), acceptedAnswer: { "@type": "Answer", text: t("faq7A") } },
      { "@type": "Question", name: t("faq8Q"), acceptedAnswer: { "@type": "Answer", text: t("faq8A") } },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-neutral-500 font-light mb-6">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{t("breadcrumbAirport")}</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("badge", { count: airports.length, regions: 13 })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <FranceMapAirports />
        </div>

        {/* SEO Content Block 1 */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("seoTitle1")}
            </h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoText1")}
            </p>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              {t("seoText1b")}
            </p>
          </div>
        </section>

        {/* SEO Content Block 2 - Taxi vs transports */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {t("seoTitle2")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "solar:home-angle-linear", text: t("seoText2a") },
                { icon: "solar:moon-sleep-linear", text: t("seoText2b") },
                { icon: "solar:armchair-linear", text: t("seoText2c") },
                { icon: "solar:users-group-two-rounded-linear", text: t("seoText2d") },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 2) + 1}`}
                >
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={item.icon} className="text-neutral-700 text-xl" />
                  </div>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">3 étapes</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("howItWorksTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "1", icon: "mdi:airplane", title: t("step1Title"), desc: t("step1Desc") },
                { step: "2", icon: "solar:document-text-linear", title: t("step2Title"), desc: t("step2Desc") },
                { step: "3", icon: "solar:car-linear", title: t("step3Title"), desc: t("step3Desc") },
              ].map((item, i) => (
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

        {/* Advantages */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">TaxiNeo</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("advantagesTitle")}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "solar:user-id-linear", title: t("adv1Title"), desc: t("adv1Desc") },
                { icon: "solar:tag-price-linear", title: t("adv2Title"), desc: t("adv2Desc") },
                { icon: "solar:radar-2-linear", title: t("adv3Title"), desc: t("adv3Desc") },
                { icon: "solar:hand-shake-linear", title: t("adv4Title"), desc: t("adv4Desc") },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 2) + 1}`}
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

        {/* FAQ - Extended */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">FAQ</p>
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
                { q: t("faq6Q"), a: t("faq6A") },
                { q: t("faq7Q"), a: t("faq7A") },
                { q: t("faq8Q"), a: t("faq8A") },
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

        {/* Cross-Links */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                {t("crossLinksTitle")}
              </h2>
              <p className="text-sm text-neutral-500 font-light max-w-xl mx-auto">
                {t("crossLinksDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/villes"
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition-colors fade-up fade-up-delay-1"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center group-hover:bg-neutral-100 transition-colors">
                    <Icon icon="solar:city-linear" className="text-neutral-700 text-xl" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight">{t("crossLinkCities")}</h3>
                </div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {t("crossLinkCitiesDesc")}
                </p>
              </Link>
              <Link
                href="/gares"
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition-colors fade-up fade-up-delay-2"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center group-hover:bg-neutral-100 transition-colors">
                    <Icon icon="mdi:train" className="text-neutral-700 text-xl" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight">{t("crossLinkStations")}</h3>
                </div>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {t("crossLinkStationsDesc")}
                </p>
              </Link>
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
              {t("ctaDesc")}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors btn-lift fade-up fade-up-delay-2"
            >
              {t("ctaButton")}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
