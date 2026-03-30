import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { StationBreadcrumb } from "@/components/station/StationBreadcrumb";
import { StationJsonLd } from "@/components/station/StationJsonLd";
import { StationHero } from "@/components/station/StationHero";
import { StationInfo } from "@/components/station/StationInfo";
import { StationIntro } from "@/components/station/StationIntro";
import { StationPricing } from "@/components/station/StationPricing";
import { StationServices } from "@/components/station/StationServices";
import { StationPractical } from "@/components/station/StationPractical";
import { StationWhyUs } from "@/components/station/StationWhyUs";
import { StationTestimonials } from "@/components/station/StationTestimonials";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { StationInternalLinks } from "@/components/station/StationInternalLinks";
import { stations, getStationBySlug } from "@/data/stations";
import { ILE_DE_FRANCE_SLUGS } from "@/data/regions";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    stations.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const st = getStationBySlug(slug);
  if (!st) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/taxi-gare-${st.slug}`;
  return {
    title: st.i18n[loc].metaTitle,
    description: st.i18n[loc].metaDescription,
    openGraph: {
      title: st.i18n[loc].metaTitle,
      description: st.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: {
      canonical,
    },
  };
}

export default async function StationPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const st = getStationBySlug(slug);
  if (!st) notFound();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <StationJsonLd station={st} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <StationBreadcrumb stationName={st.name} />
        </div>

        <StationHero station={st} />
        <StationIntro station={st} />
        <StationInfo station={st} />
        <StationPricing station={st} />
        <StationServices stationName={st.name} />
        <StationPractical station={st} />
        <StationWhyUs station={st} />
        {ILE_DE_FRANCE_SLUGS.has(st.citySlug) && <StationTestimonials station={st} />}
        <CityFAQ cityName={`la gare ${st.name}`} faq={st.i18n[loc].faq} />
        <CityContactForm cityName={`la gare ${st.name}`} />
        <CityCTA cityName={`la gare ${st.name}`} />
        <StationInternalLinks station={st} />
      </main>

      <Footer />
    </div>
  );
}
