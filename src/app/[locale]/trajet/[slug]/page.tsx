import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { TrajetBreadcrumb } from "@/components/trajet/TrajetBreadcrumb";
import { TrajetJsonLd } from "@/components/trajet/TrajetJsonLd";
import { TrajetHero } from "@/components/trajet/TrajetHero";
import { TrajetDetails } from "@/components/trajet/TrajetDetails";
import { TrajetPricing } from "@/components/trajet/TrajetPricing";
import { TrajetRoute } from "@/components/trajet/TrajetRoute";
import { TrajetAlternatives } from "@/components/trajet/TrajetAlternatives";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { trajets, getTrajetBySlug } from "@/data/trajets";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    trajets.map((t) => ({ locale, slug: t.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const trajet = getTrajetBySlug(slug);
  if (!trajet) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/trajet/${trajet.slug}`;
  return {
    title: trajet.i18n[loc].metaTitle,
    description: trajet.i18n[loc].metaDescription,
    openGraph: {
      title: trajet.i18n[loc].metaTitle,
      description: trajet.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: {
      canonical,
    },
  };
}

export default async function TrajetPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const trajet = getTrajetBySlug(slug);
  if (!trajet) notFound();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <TrajetJsonLd trajet={trajet} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <TrajetBreadcrumb trajet={trajet} />
        </div>

        <TrajetHero trajet={trajet} />
        <TrajetDetails trajet={trajet} />
        <TrajetRoute trajet={trajet} />
        <TrajetPricing trajet={trajet} />
        <TrajetAlternatives trajet={trajet} />
        <CityFAQ cityName={`${trajet.from} → ${trajet.to}`} faq={trajet.i18n[loc].faq} />
        <CityContactForm cityName={`${trajet.from} → ${trajet.to}`} />
        <CityCTA cityName={`${trajet.from} → ${trajet.to}`} />
      </main>

      <Footer />
    </div>
  );
}
