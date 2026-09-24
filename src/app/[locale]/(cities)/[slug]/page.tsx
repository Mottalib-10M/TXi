import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CityBreadcrumb } from "@/components/city/CityBreadcrumb";
import { CityJsonLd } from "@/components/city/CityJsonLd";
import { CityHero } from "@/components/city/CityHero";
import { CityStats } from "@/components/city/CityStats";
import { CityIntro } from "@/components/city/CityIntro";
import { CityServices } from "@/components/city/CityServices";
import { CityPopularRoutes } from "@/components/city/CityPopularRoutes";
import { CityLandmarks } from "@/components/city/CityLandmarks";
import { CityQuartiers } from "@/components/city/CityQuartiers";
import { CityWhyUs } from "@/components/city/CityWhyUs";
import { CityTestimonials } from "@/components/city/CityTestimonials";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { CityInternalLinks } from "@/components/city/CityInternalLinks";
import { ILE_DE_FRANCE_SLUGS } from "@/data/regions";
import { cities, getCityBySlug } from "@/data/cities";
import { activeCitySlugs } from "@/data/page-whitelists";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { etofferFaq, completerFaq } from "@/lib/faq-etoffer";
import { faitsVille, reserveVille } from "@/lib/faits-hub";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    cities
      .filter((city) => activeCitySlugs.has(city.slug))
      .map((city) => ({ locale, slug: `taxi-${city.slug}` }))
  );
}

function citySlugFromParam(slug: string): string {
  return slug.startsWith("taxi-") ? slug.slice(5) : slug;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = getCityBySlug(citySlugFromParam(slug));
  if (!city) notFound();
  const loc = locale === "en" ? "en" : "fr";

  const canonical = canonicalUrl(locale, `/taxi-${city.slug}`);
  return {
    title: ajusterTitre(city.i18n[loc].metaTitle, [loc === "en" ? "— TaxiNeo" : "— TaxiNeo", loc === "en" ? "fixed price" : "prix fixe"]),
    description: ajusterDescription(city.i18n[loc].metaDescription, [loc === "en" ? "Fixed price confirmed before booking, luggage included." : "Prix fixe confirmé avant la réservation, bagages compris."]),
    openGraph: {
      title: ajusterTitre(city.i18n[loc].metaTitle, [loc === "en" ? "— TaxiNeo" : "— TaxiNeo", loc === "en" ? "fixed price" : "prix fixe"]),
      description: ajusterDescription(city.i18n[loc].metaDescription, [loc === "en" ? "Fixed price confirmed before booking, luggage included." : "Prix fixe confirmé avant la réservation, bagages compris."]),
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: ajusterTitre(city.i18n[loc].metaTitle, [loc === "en" ? "— TaxiNeo" : "— TaxiNeo", loc === "en" ? "fixed price" : "prix fixe"]) }],
    },
    alternates: {
      canonical,
      languages: alternateUrls(`/taxi-${city.slug}`),
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(citySlugFromParam(slug));
  if (!city) notFound();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <CityJsonLd city={city} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <CityBreadcrumb cityName={city.name} />
        </div>

        <CityHero city={city} />
        <CityStats city={city} />
        <CityIntro city={city} />
        <CityServices cityName={city.name} />
        <CityPopularRoutes city={city} />
        <CityLandmarks city={city} />
        <CityQuartiers city={city} />
        <CityWhyUs city={city} />
        {ILE_DE_FRANCE_SLUGS.has(city.slug) && <CityTestimonials city={city} />}
        <CityFAQ cityName={city.name} faq={etofferFaq(completerFaq(city.i18n[loc].faq, reserveVille(city.name, loc), 6, 8), faitsVille(city, loc), loc === "en" ? `In ${city.name}` : `À ${city.name}`, city.name)} />
        <CityContactForm cityName={city.name} />
        <CityCTA cityName={city.name} />
        <CityInternalLinks city={city} />
      </main>

      <Footer />
    </div>
  );
}
