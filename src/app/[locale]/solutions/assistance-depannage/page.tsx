import type { Metadata } from "next";
import { canonicalUrl, alternateUrls } from "@/lib/seo";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";
import { getCityBySlug } from "@/data/cities";
import { getAdCitySlugs } from "@/data/assistance-cities";
import { autoroutes } from "@/data/autoroutes";
import { HubFAQ } from "@/components/assistance/HubFAQ";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "fr";

  const title = loc === "fr"
    ? "Panne de voiture — Taxi dépannage en 20 min, 138 villes"
    : "Car breakdown France — Breakdown taxi 20 min, 24/7";
  const description = loc === "fr"
    ? "Voiture en panne ? Un taxi dépannage arrive en 20 min dans 138 villes et sur 30 autoroutes. Transport vers garage, domicile ou gare. Tarif fixe, 24h/24."
    : "Car broke down in France? A breakdown taxi arrives in 20 min. 138 cities and 30 motorways covered. Transport to garage, home or station. Fixed fare, 24/7.";

  const canonical = canonicalUrl(locale, "/solutions/assistance-depannage");
  return {
    title,
    description,
    openGraph: {
      title, description, url: canonical, siteName: "TaxiNeo", type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    alternates: {
      canonical,
      languages: alternateUrls("/solutions/assistance-depannage"),
    },
  };
}

const whyIcons = [
  "solar:clock-circle-linear",
  "solar:tag-price-linear",
  "solar:users-group-rounded-linear",
  "solar:map-point-linear",
  "solar:shield-check-linear",
  "solar:heart-pulse-linear",
];

export default async function AssistanceDepannageHub({ params }: PageProps) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "fr";
  const t = await getTranslations("assistanceDepannage");
  const adSlugs = getAdCitySlugs();

  const citiesWithData = adSlugs
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean);

  const faqItems = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    question: t(`faqQ${i}`),
    answer: t(`faqA${i}`),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <BreadcrumbJsonLd
        crumbs={[
          { name: lang === "en" ? "Home" : "Accueil", item: `https://www.taxineo.fr/${locale}` },
          { name: "Solutions", item: `https://www.taxineo.fr/${locale}/services` },
          { name: t("heroTitle") },
        ]}
      />

      <main className="flex-grow">
        {/* Breadcrumb UI */}
        <div className="max-w-4xl mx-auto px-6 pt-24">
          <nav className="text-sm text-neutral-500 font-light mb-4" aria-label={lang === "en" ? "Breadcrumb" : "Fil d'Ariane"}>
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{lang === "en" ? "Home" : "Accueil"}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-neutral-900 transition-colors">Solutions</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{t("heroTitle")}</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="pt-4 pb-16 md:pt-8 md:pb-24">
          <div className="max-w-4xl mx-auto px-6 text-center fade-up">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-orange-700">{t("heroBadge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed mb-8">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("heroCTA")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-neutral-100 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center fade-up">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">138</p>
                <p className="text-sm text-neutral-500 font-light mt-1">{t("statsCities")}</p>
              </div>
              <div className="text-center fade-up fade-up-delay-1">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">30</p>
                <p className="text-sm text-neutral-500 font-light mt-1">{t("statsAutoroutes")}</p>
              </div>
              <div className="text-center fade-up fade-up-delay-2">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">20 min</p>
                <p className="text-sm text-neutral-500 font-light mt-1">{t("statsResponse")}</p>
              </div>
              <div className="text-center fade-up fade-up-delay-3">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight">24/7</p>
                <p className="text-sm text-neutral-500 font-light mt-1">{t("statsAvailability")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Content */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("introSectionSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("introSectionTitle")}</h2>
            </div>
            <div className="space-y-6 fade-up">
              <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">{t("introP1")}</p>
              <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">{t("introP2")}</p>
              <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">{t("introP3")}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("whyChooseSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("whyChooseTitle")}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6">
                  <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={whyIcons[i - 1]} className="text-neutral-600 text-xl" />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight mb-2">{t(`why${i}Title`)}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{t(`why${i}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("citiesSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("citiesTitle")}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 fade-up">
              {citiesWithData.map((city) => (
                <Link
                  key={city!.slug}
                  href={`/assistance/${city!.slug}`}
                  className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-3 hover:border-neutral-400 transition-colors card-hover text-center"
                >
                  <span className="text-xs font-medium">{city!.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Autoroutes Grid */}
        <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("autoroutesSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("autoroutesTitle")}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 fade-up">
              {autoroutes.map((ar) => (
                <Link
                  key={ar.slug}
                  href={`/autoroute/${ar.slug}`}
                  className="flex flex-col items-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:road-linear" className="text-neutral-400 text-xl" />
                  <span className="text-sm font-semibold">{ar.name}</span>
                  <span className="text-xs text-neutral-500 font-light text-center">{ar.from} — {ar.to}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("howItWorksSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("howItWorksTitle")}</h2>
            </div>
            <div className="space-y-8 fade-up">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-neutral-950 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white text-sm font-semibold">{step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold tracking-tight mb-2">{t(`step${step}Title`)}</h3>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed">{t(`step${step}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-neutral-50 border-t border-b border-neutral-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("faqHubSubtitle")}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("faqHubTitle")}</h2>
            </div>
            <HubFAQ items={faqItems} />
          </div>
        </section>

        {/* Cross-links SEO */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-lg font-semibold tracking-tight mb-6 fade-up">
              {lang === "en" ? "Explore our solutions" : "Découvrez nos autres solutions"}
            </h2>
            <div className="flex flex-wrap gap-3 fade-up">
              <Link href="/solutions/hotel" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                {lang === "en" ? "Hotels" : "Hôtels"}
              </Link>
              <Link href="/solutions/particulier" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                {lang === "en" ? "Individuals" : "Particuliers"}
              </Link>
              <Link href="/solutions/entreprise" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                {lang === "en" ? "Businesses" : "Entreprises"}
              </Link>
              <Link href="/solutions/taxi-medical" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                {lang === "en" ? "Medical taxi" : "Taxi médical"}
              </Link>
              <Link href="/solutions/mise-a-disposition" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                {lang === "en" ? "Chauffeur hire" : "Mise à disposition"}
              </Link>
              <Link href="/guides" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors">
                <Icon icon="solar:book-linear" className="text-neutral-400" />
                {lang === "en" ? "Practical guides" : "Guides pratiques"}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-neutral-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-20" />
              <div className="relative z-10 fade-up">
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                  {t("ctaTitle")}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">
                  {t("ctaDescription")}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors btn-lift"
                  >
                    {t("ctaCTA")}
                    <Icon icon="solar:arrow-right-linear" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
