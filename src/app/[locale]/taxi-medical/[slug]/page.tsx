import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TmBreadcrumb } from "@/components/taxi-medical/TmBreadcrumb";
import { TmJsonLd } from "@/components/taxi-medical/TmJsonLd";
import { TmHero } from "@/components/taxi-medical/TmHero";
import { TmStats } from "@/components/taxi-medical/TmStats";
import { TmIntro } from "@/components/taxi-medical/TmIntro";
import { TmHospitalsGuide } from "@/components/taxi-medical/TmHospitalsGuide";
import { TmUseCases } from "@/components/taxi-medical/TmUseCases";
import { TmPricing } from "@/components/taxi-medical/TmPricing";
import { TmHowItWorks } from "@/components/taxi-medical/TmHowItWorks";
import { TmAdvantages } from "@/components/taxi-medical/TmAdvantages";
import { TmQuartiersAccess } from "@/components/taxi-medical/TmQuartiersAccess";
import { TmComparison } from "@/components/taxi-medical/TmComparison";
import { TmPracticalInfo } from "@/components/taxi-medical/TmPracticalInfo";
import { TmTestimonials } from "@/components/taxi-medical/TmTestimonials";
import { TmFAQ } from "@/components/taxi-medical/TmFAQ";
import { TmCTA } from "@/components/taxi-medical/TmCTA";
import { TmInternalLinks } from "@/components/taxi-medical/TmInternalLinks";
import { getCityBySlug } from "@/data/cities";
import { getTmCityBySlug, getTmCitySlugs } from "@/data/taxi-medical-cities";
import { generateTmContent } from "@/data/taxi-medical-content-templates";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getTmCitySlugs();
  return ["fr", "en"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const tmCity = getTmCityBySlug(slug);
  if (!city || !tmCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateTmContent(city, tmCity, loc);

  const canonical = `https://www.taxineo.fr/${locale}/taxi-medical/${slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: {
      canonical,
      languages: {
        fr: `https://www.taxineo.fr/fr/taxi-medical/${slug}`,
        en: `https://www.taxineo.fr/en/taxi-medical/${slug}`,
      },
    },
  };
}

export default async function TaxiMedicalCityPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const tmCity = getTmCityBySlug(slug);
  if (!city || !tmCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateTmContent(city, tmCity, loc);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <TmJsonLd city={city} faq={content.faq} />

      <main className="flex-grow" id="devis">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <TmBreadcrumb cityName={city.name} />
        </div>

        <TmHero city={city} content={content} />
        <TmStats city={city} />
        <TmIntro city={city} content={content} />
        <TmHospitalsGuide content={content} cityName={city.name} />
        <TmUseCases useCases={content.useCases} />
        <TmPricing pricing={tmCity.pricing} cityName={city.name} />
        <TmHowItWorks steps={content.howItWorks} />
        <TmAdvantages advantages={content.advantages} />
        <TmQuartiersAccess content={content} cityName={city.name} />
        <TmComparison content={content} cityName={city.name} />
        <TmPracticalInfo content={content} cityName={city.name} />
        <TmTestimonials testimonials={content.testimonials} cityName={city.name} />
        <TmFAQ cityName={city.name} faq={content.faq} />
        <TmCTA cityName={city.name} />
        <TmInternalLinks city={city} nearbyTmCities={content.nearbyTmCities} />
      </main>

      <Footer />
    </div>
  );
}
