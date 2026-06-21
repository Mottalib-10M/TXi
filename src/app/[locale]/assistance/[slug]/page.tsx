import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { AdBreadcrumb } from "@/components/assistance/AdBreadcrumb";
import { AdJsonLd } from "@/components/assistance/AdJsonLd";
import { AdHero } from "@/components/assistance/AdHero";
import { AdStats } from "@/components/assistance/AdStats";
import { AdIntro } from "@/components/assistance/AdIntro";
import { AdGaragesGuide } from "@/components/assistance/AdGaragesGuide";
import { AdUseCases } from "@/components/assistance/AdUseCases";
import { AdPricing } from "@/components/assistance/AdPricing";
import { AdHowItWorks } from "@/components/assistance/AdHowItWorks";
import { AdAdvantages } from "@/components/assistance/AdAdvantages";
import { AdQuartiersAccess } from "@/components/assistance/AdQuartiersAccess";
import { AdComparison } from "@/components/assistance/AdComparison";
import { AdPracticalInfo } from "@/components/assistance/AdPracticalInfo";
import { AdTestimonials } from "@/components/assistance/AdTestimonials";
import { AdFAQ } from "@/components/assistance/AdFAQ";
import { AdCTA } from "@/components/assistance/AdCTA";
import { AdInternalLinks } from "@/components/assistance/AdInternalLinks";
import { getCityBySlug } from "@/data/cities";
import { getAdCityBySlug, getAdCitySlugs } from "@/data/assistance-cities";
import { generateAdContent } from "@/data/assistance-content-templates";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAdCitySlugs();
  return ["fr", "en"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const adCity = getAdCityBySlug(slug);
  if (!city || !adCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateAdContent(city, adCity, loc);

  const canonical = `https://www.taxineo.fr/${locale}/assistance/${slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
      images: [
        {
          url: "https://www.taxineo.fr/opengraph-image",
          width: 1200,
          height: 630,
          alt: content.metaTitle,
        },
      ],
    },
    alternates: {
      canonical,
      languages: {
        fr: `https://www.taxineo.fr/fr/assistance/${slug}`,
        en: `https://www.taxineo.fr/en/assistance/${slug}`,
      },
    },
  };
}

export default async function AssistanceCityPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const adCity = getAdCityBySlug(slug);
  if (!city || !adCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateAdContent(city, adCity, loc);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <AdJsonLd city={city} faq={content.faq} />

      <main className="flex-grow" id="devis">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <AdBreadcrumb cityName={city.name} />
        </div>

        <AdHero city={city} content={content} />
        <AdStats city={city} />
        <AdIntro city={city} content={content} />
        <AdGaragesGuide content={content} cityName={city.name} />
        <AdUseCases useCases={content.useCases} />
        <AdPricing pricing={adCity.pricing} cityName={city.name} />
        <AdHowItWorks steps={content.howItWorks} />
        <AdAdvantages advantages={content.advantages} />
        <AdQuartiersAccess content={content} cityName={city.name} />
        <AdComparison content={content} cityName={city.name} />
        <AdPracticalInfo content={content} cityName={city.name} />
        <AdTestimonials testimonials={content.testimonials} cityName={city.name} />
        <AdFAQ cityName={city.name} faq={content.faq} />
        <AdCTA cityName={city.name} />
        <AdInternalLinks city={city} nearbyAdCities={content.nearbyAdCities} nearestAutoroutes={adCity.nearestAutoroutes} />
      </main>

      <Footer />
    </div>
  );
}
