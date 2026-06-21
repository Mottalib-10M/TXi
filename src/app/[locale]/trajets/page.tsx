import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { canonicalUrl, alternateUrls } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { trajets, getTrajetsByCategory, categoryLabels } from "@/data/trajets";
import type { Trajet } from "@/data/trajets";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "trajets" });

  const canonical = canonicalUrl(locale, "/trajets");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical,
      languages: alternateUrls("/trajets"),
    },
  };
}

const CATEGORY_ICONS: Record<Trajet["category"], string> = {
  aeroport: "mdi:airplane",
  gare: "mdi:train",
  touristique: "solar:camera-linear",
  "ville-a-ville": "solar:city-linear",
  "longue-distance": "solar:route-linear",
};

export default async function TrajetsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("trajets");
  const loc = locale === "en" ? "en" : "fr";

  const categories: Trajet["category"][] = ["aeroport", "gare", "touristique", "ville-a-ville", "longue-distance"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("metaTitle"),
    description: t("metaDescription"),
    numberOfItems: trajets.length,
    itemListElement: trajets.map((trajet, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Taxi ${trajet.from} → ${trajet.to}`,
      url: `https://www.taxineo.fr/${locale}/trajet/${trajet.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: `https://www.taxineo.fr/${locale}` },
      { "@type": "ListItem", position: 2, name: t("breadcrumbTrajets"), item: `https://www.taxineo.fr/${locale}/trajets` },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: t("faq1Q"), acceptedAnswer: { "@type": "Answer", text: t("faq1A") } },
          { "@type": "Question", name: t("faq2Q"), acceptedAnswer: { "@type": "Answer", text: t("faq2A") } },
          { "@type": "Question", name: t("faq3Q"), acceptedAnswer: { "@type": "Answer", text: t("faq3A") } },
          { "@type": "Question", name: t("faq4Q"), acceptedAnswer: { "@type": "Answer", text: t("faq4A") } },
          { "@type": "Question", name: t("faq5Q"), acceptedAnswer: { "@type": "Answer", text: t("faq5A") } },
          { "@type": "Question", name: t("faq6Q"), acceptedAnswer: { "@type": "Answer", text: t("faq6A") } },
        ],
      }) }} />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-neutral-500 font-light mb-6">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{t("breadcrumbTrajets")}</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("badge", { count: trajets.length })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>

        {categories.map((cat) => {
          const items = getTrajetsByCategory(cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-8 fade-up">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center">
                    <Icon icon={CATEGORY_ICONS[cat]} className="text-neutral-700 text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {categoryLabels[cat][loc]}
                    </h2>
                    <p className="text-sm text-neutral-500 font-light">
                      {t("categoryCount", { count: items.length })}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((trajet, i) => (
                    <Link
                      key={trajet.slug}
                      href={`/trajet/${trajet.slug}`}
                      className={`group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-medium">{trajet.from} → {trajet.to}</p>
                        <Icon
                          icon="solar:arrow-right-linear"
                          className="text-neutral-400 group-hover:text-neutral-900 transition-colors"
                        />
                      </div>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-light">
                        <span>{trajet.distanceKm} km</span>
                        <span>·</span>
                        <span>{trajet.durationMin} min</span>
                        <span>·</span>
                        <span className="font-medium text-neutral-900">{trajet.priceEstimate}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* How fixed-price routes work */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">3 {loc === "en" ? "steps" : "étapes"}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("howForfaitsWorkTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "1", icon: "solar:map-point-linear", title: t("howForfaitsStep1Title"), desc: t("howForfaitsStep1Desc") },
                { step: "2", icon: "solar:tag-price-linear", title: t("howForfaitsStep2Title"), desc: t("howForfaitsStep2Desc") },
                { step: "3", icon: "solar:car-linear", title: t("howForfaitsStep3Title"), desc: t("howForfaitsStep3Desc") },
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

        {/* Route categories detail */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {t("categoriesTitle")}
              </h2>
              <p className="text-base text-neutral-500 font-light max-w-2xl mx-auto">
                {t("categoriesText")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "mdi:airplane", title: loc === "en" ? "Airport" : "Aéroport", desc: t("categoryAirportDesc") },
                { icon: "mdi:train", title: loc === "en" ? "Train station" : "Gare", desc: t("categoryGareDesc") },
                { icon: "solar:camera-linear", title: loc === "en" ? "Tourist" : "Touristique", desc: t("categoryTouristiqueDesc") },
                { icon: "solar:city-linear", title: loc === "en" ? "City-to-city" : "Ville à ville", desc: t("categoryVilleDesc") },
                { icon: "solar:route-linear", title: loc === "en" ? "Long distance" : "Longue distance", desc: t("categoryLongueDistanceDesc") },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
                >
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={item.icon} className="text-neutral-700 text-xl" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular routes & fares */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("popularRoutesTitle")}
            </h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {t("popularRoutesText")}
            </p>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              {t("popularRoutesText2")}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
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

        {/* SEO Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("seoTitle")}
            </h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoText1")}
            </p>
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoText2")}
            </p>
            <p className="text-base text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoText3")}
            </p>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              {t("seoText4")}
            </p>
          </div>
        </section>

        {/* Cross-Links */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 fade-up">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                {t("crossLinksTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              </Link>
              <Link
                href="/aeroports"
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition-colors fade-up fade-up-delay-2"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center group-hover:bg-neutral-100 transition-colors">
                    <Icon icon="mdi:airplane" className="text-neutral-700 text-xl" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight">{t("crossLinkAirports")}</h3>
                </div>
              </Link>
              <Link
                href="/gares"
                className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition-colors fade-up fade-up-delay-3"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center group-hover:bg-neutral-100 transition-colors">
                    <Icon icon="mdi:train" className="text-neutral-700 text-xl" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight">{t("crossLinkStations")}</h3>
                </div>
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
