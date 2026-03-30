import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { AirportBreadcrumb } from "@/components/airport/AirportBreadcrumb";
import { AirportJsonLd } from "@/components/airport/AirportJsonLd";
import { AirportHero } from "@/components/airport/AirportHero";
import { AirportInfo } from "@/components/airport/AirportInfo";
import { AirportIntro } from "@/components/airport/AirportIntro";
import { AirportPricing } from "@/components/airport/AirportPricing";
import { AirportServices } from "@/components/airport/AirportServices";
import { AirportPractical } from "@/components/airport/AirportPractical";
import { AirportWhyUs } from "@/components/airport/AirportWhyUs";
import { AirportTestimonials } from "@/components/airport/AirportTestimonials";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { AirportInternalLinks } from "@/components/airport/AirportInternalLinks";
import { airports, getAirportBySlug } from "@/data/airports";
import { ILE_DE_FRANCE_SLUGS } from "@/data/regions";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    airports.map((a) => ({ locale, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const ap = getAirportBySlug(slug);
  if (!ap) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/taxi-aeroport-${ap.slug}`;
  return {
    title: ap.i18n[loc].metaTitle,
    description: ap.i18n[loc].metaDescription,
    openGraph: {
      title: ap.i18n[loc].metaTitle,
      description: ap.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: {
      canonical,
    },
  };
}

export default async function AirportPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const ap = getAirportBySlug(slug);
  if (!ap) notFound();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <AirportJsonLd airport={ap} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <AirportBreadcrumb airportName={ap.name} />
        </div>

        <AirportHero airport={ap} />
        <AirportIntro airport={ap} />
        <AirportInfo airport={ap} />
        <AirportPricing airport={ap} />
        <AirportServices airportName={ap.name} />
        <AirportPractical airport={ap} />
        <AirportWhyUs airport={ap} />
        {ILE_DE_FRANCE_SLUGS.has(ap.citySlug) && <AirportTestimonials airport={ap} />}
        <CityFAQ cityName={ap.name} faq={ap.i18n[loc].faq} />
        <CityContactForm cityName={`l'aéroport ${ap.name}`} />
        <CityCTA cityName={`l'aéroport ${ap.name}`} />
        <AirportInternalLinks airport={ap} />
      </main>

      <Footer />
    </div>
  );
}
