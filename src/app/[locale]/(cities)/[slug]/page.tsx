import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { CityBreadcrumb } from "@/components/city/CityBreadcrumb";
import { CityJsonLd } from "@/components/city/CityJsonLd";
import { CityHero } from "@/components/city/CityHero";
import { CityStats } from "@/components/city/CityStats";
import { CityServices } from "@/components/city/CityServices";
import { CityLandmarks } from "@/components/city/CityLandmarks";
import { CityWhyUs } from "@/components/city/CityWhyUs";
import { CityTestimonials } from "@/components/city/CityTestimonials";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { CityInternalLinks } from "@/components/city/CityInternalLinks";
import { cities, getCityBySlug } from "@/data/cities";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    cities.map((city) => ({ locale, slug: city.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  const loc = locale === "en" ? "en" : "fr";

  return {
    title: city.i18n[loc].metaTitle,
    description: city.i18n[loc].metaDescription,
    openGraph: {
      title: city.i18n[loc].metaTitle,
      description: city.i18n[loc].metaDescription,
      url: `https://www.taxinoir.fr/taxi-${city.slug}`,
      siteName: "TaxiNoir",
      type: "website",
    },
    alternates: {
      canonical: `https://www.taxinoir.fr/taxi-${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const city = getCityBySlug(slug);
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
        <CityServices cityName={city.name} />
        <CityLandmarks city={city} />
        <CityWhyUs cityName={city.name} />
        <CityTestimonials city={city} />
        <CityFAQ cityName={city.name} faq={city.i18n[loc].faq} />
        <CityContactForm cityName={city.name} />
        <CityCTA cityName={city.name} />
        <CityInternalLinks city={city} />
      </main>

      <Footer />
    </div>
  );
}
