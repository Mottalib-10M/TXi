import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { AirportBreadcrumb } from "@/components/airport/AirportBreadcrumb";
import { AirportJsonLd } from "@/components/airport/AirportJsonLd";
import { AirportHero } from "@/components/airport/AirportHero";
import { AirportInfo } from "@/components/airport/AirportInfo";
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return airports.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ap = getAirportBySlug(slug);
  if (!ap) return {};

  return {
    title: ap.metaTitle,
    description: ap.metaDescription,
    openGraph: {
      title: ap.metaTitle,
      description: ap.metaDescription,
      url: `https://www.taxinoir.fr/taxi-aeroport-${ap.slug}`,
      siteName: "TaxiNoir",
      type: "website",
    },
    alternates: {
      canonical: `https://www.taxinoir.fr/taxi-aeroport-${ap.slug}`,
    },
  };
}

export default async function AirportPage({ params }: PageProps) {
  const { slug } = await params;
  const ap = getAirportBySlug(slug);
  if (!ap) notFound();

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
        <AirportInfo airport={ap} />
        <AirportPricing airport={ap} />
        <AirportServices airportName={ap.name} />
        <AirportPractical airport={ap} />
        <AirportWhyUs airportName={ap.name} />
        <AirportTestimonials airport={ap} />
        <CityFAQ cityName={ap.name} faq={ap.faq} />
        <CityContactForm cityName={`l'aéroport ${ap.name}`} />
        <CityCTA cityName={`l'aéroport ${ap.name}`} />
        <AirportInternalLinks airport={ap} />
      </main>

      <Footer />
    </div>
  );
}
