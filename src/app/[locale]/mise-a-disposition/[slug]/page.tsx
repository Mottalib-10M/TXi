import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { MadBreadcrumb } from "@/components/mise-a-disposition/MadBreadcrumb";
import { MadJsonLd } from "@/components/mise-a-disposition/MadJsonLd";
import { MadHero } from "@/components/mise-a-disposition/MadHero";
import { MadStats } from "@/components/mise-a-disposition/MadStats";
import { MadIntro } from "@/components/mise-a-disposition/MadIntro";
import { MadUseCases } from "@/components/mise-a-disposition/MadUseCases";
import { MadFleet } from "@/components/mise-a-disposition/MadFleet";
import { MadPricing } from "@/components/mise-a-disposition/MadPricing";
import { MadLandmarkGuide } from "@/components/mise-a-disposition/MadLandmarkGuide";
import { MadQuartiersDetail } from "@/components/mise-a-disposition/MadQuartiersDetail";
import { MadCityGuide } from "@/components/mise-a-disposition/MadCityGuide";
import { MadHowItWorks } from "@/components/mise-a-disposition/MadHowItWorks";
import { MadAdvantages } from "@/components/mise-a-disposition/MadAdvantages";
import { MadComparison } from "@/components/mise-a-disposition/MadComparison";
import { MadPracticalInfo } from "@/components/mise-a-disposition/MadPracticalInfo";
import { MadTestimonials } from "@/components/mise-a-disposition/MadTestimonials";
import { MadFAQ } from "@/components/mise-a-disposition/MadFAQ";
import { MadCTA } from "@/components/mise-a-disposition/MadCTA";
import { MadInternalLinks } from "@/components/mise-a-disposition/MadInternalLinks";
import { getCityBySlug } from "@/data/cities";
import { getMadCityBySlug, getMadCitySlugs } from "@/data/mad-cities";
import { generateMadContent } from "@/data/mad-content-templates";
import { canonicalUrl, alternateUrls } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getMadCitySlugs();
  return ["fr", "en"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const madCity = getMadCityBySlug(slug);
  if (!city || !madCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateMadContent(city, loc);

  const canonical = canonicalUrl(locale, `/mise-a-disposition/${slug}`);
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
      languages: alternateUrls(`/mise-a-disposition/${slug}`),
    },
  };
}

export default async function MiseADispositionCityPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  const madCity = getMadCityBySlug(slug);
  if (!city || !madCity) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateMadContent(city, loc);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <MadJsonLd city={city} faq={content.faq} />

      <main className="flex-grow" id="devis">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <MadBreadcrumb cityName={city.name} />
        </div>

        <MadHero city={city} content={content} />
        <MadStats city={city} />
        <MadIntro city={city} content={content} />
        <MadUseCases useCases={content.useCases} />
        <MadFleet />
        <MadPricing pricing={madCity.pricing} cityName={city.name} />
        <MadLandmarkGuide content={content} cityName={city.name} />
        <MadQuartiersDetail content={content} cityName={city.name} />
        <MadCityGuide content={content} cityName={city.name} />
        <MadHowItWorks steps={content.howItWorks} />
        <MadAdvantages advantages={content.advantages} />
        <MadComparison content={content} cityName={city.name} />
        <MadPracticalInfo content={content} cityName={city.name} />
        <MadTestimonials testimonials={content.testimonials} cityName={city.name} />
        <MadFAQ cityName={city.name} faq={content.faq} />
        <MadCTA cityName={city.name} />
        <MadInternalLinks city={city} nearbyMadCities={content.nearbyMadCities} />
      </main>

      <Footer />
    </div>
  );
}
