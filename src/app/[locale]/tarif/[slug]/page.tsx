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
        <CityFAQ cityName={tarif.title} faq={tarif.i18n[loc].faq} />
        <CityContactForm cityName={tarif.title} />
        <CityCTA cityName={tarif.title} />
      </main>

      <Footer />
    </div>
  );
}
