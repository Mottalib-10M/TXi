import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TarifHero } from "@/components/tarif/TarifHero";
import { TarifGrid } from "@/components/tarif/TarifGrid";
import { TarifExplanation } from "@/components/tarif/TarifExplanation";
import { TarifJsonLd } from "@/components/tarif/TarifJsonLd";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { tarifs, getTarifBySlug } from "@/data/tarifs";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    tarifs.map((t) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tarif = getTarifBySlug(slug);
  if (!tarif) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/tarif/${tarif.slug}`;
  return {
    title: tarif.i18n[loc].metaTitle,
    description: tarif.i18n[loc].metaDescription,
    openGraph: {
      title: tarif.i18n[loc].metaTitle,
      description: tarif.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: { canonical },
  };
}

export default async function TarifPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const tarif = getTarifBySlug(slug);
  if (!tarif) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const t = await getTranslations("tarif");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <TarifJsonLd tarif={tarif} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <BreadcrumbJsonLd
            crumbs={[
              { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
              { name: t("breadcrumbTarifs"), item: "https://www.taxineo.fr/tarifs" },
              { name: tarif.i18n[loc].heroTitle },
            ]}
          />
          <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/tarifs" className="hover:text-neutral-900 transition-colors">{t("breadcrumbTarifs")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{tarif.i18n[loc].heroTitle}</li>
            </ol>
          </nav>
        </div>

        <TarifHero tarif={tarif} />
        <TarifGrid tarif={tarif} />
        <TarifExplanation tarif={tarif} />

        {tarif.i18n[loc].introduction && (
          <section className="py-12 md:py-16 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "About these fares" : "À propos de ces tarifs"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {tarif.i18n[loc].introduction}
              </p>
            </div>
          </section>
        )}

        {tarif.i18n[loc].conseils && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "Tips to save money" : "Conseils pour économiser"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {tarif.i18n[loc].conseils}
              </p>
            </div>
          </section>
        )}

        {tarif.i18n[loc].bonASavoir && (
          <section className="py-12 md:py-16 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "Good to know" : "Bon à savoir"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {tarif.i18n[loc].bonASavoir}
              </p>
            </div>
          </section>
        )}

        {/* Voir aussi — Cross-links SEO */}
        {(() => {
          const others = tarifs
            .filter((t2) => t2.slug !== tarif.slug)
            .slice(0, 3);
          return (
            <section className="py-12 md:py-16 bg-neutral-50">
              <div className="max-w-4xl mx-auto px-6 fade-up">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  {loc === "en" ? "See also" : "Voir aussi"}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {others.map((t2) => (
                    <Link
                      key={t2.slug}
                      href={`/tarif/${t2.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                    >
                      {t2.i18n[loc].heroTitle}
                    </Link>
                  ))}
                  <Link
                    href="/trajets"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                  >
                    {loc === "en" ? "Popular routes" : "Trajets populaires"}
                  </Link>
                  <Link
                    href="/departements"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                  >
                    {loc === "en" ? "Departments" : "Départements"}
                  </Link>
                </div>
              </div>
            </section>
          );
        })()}

        <CityFAQ cityName={tarif.title} faq={tarif.i18n[loc].faq} />
        <CityContactForm cityName={tarif.title} />
        <CityCTA cityName={tarif.title} />
      </main>

      <Footer />
    </div>
  );
}
