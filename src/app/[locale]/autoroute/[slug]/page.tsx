import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ArBreadcrumb } from "@/components/autoroute/ArBreadcrumb";
import { ArJsonLd } from "@/components/autoroute/ArJsonLd";
import { ArHero } from "@/components/autoroute/ArHero";
import { ArStats } from "@/components/autoroute/ArStats";
import { ArIntro } from "@/components/autoroute/ArIntro";
import { ArServiceAreas } from "@/components/autoroute/ArServiceAreas";
import { ArCitiesServed } from "@/components/autoroute/ArCitiesServed";
import { ArEmergencyProcedure } from "@/components/autoroute/ArEmergencyProcedure";
import { ArPricing } from "@/components/autoroute/ArPricing";
import { ArAdvantages } from "@/components/autoroute/ArAdvantages";
import { ArComparison } from "@/components/autoroute/ArComparison";
import { ArPracticalInfo } from "@/components/autoroute/ArPracticalInfo";
import { ArFAQ } from "@/components/autoroute/ArFAQ";
import { ArCTA } from "@/components/autoroute/ArCTA";
import { ArHowItWorks } from "@/components/autoroute/ArHowItWorks";
import { ArInternalLinks } from "@/components/autoroute/ArInternalLinks";
import { getAutorouteBySlug, getAutorouteSlugs } from "@/data/autoroutes";
import { generateArContent } from "@/data/autoroute-content-templates";
import { canonicalUrl, alternateUrls } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAutorouteSlugs();
  return ["fr", "en"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const autoroute = getAutorouteBySlug(slug);
  if (!autoroute) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateArContent(autoroute, loc);

  const canonical = canonicalUrl(locale, `/autoroute/${slug}`);
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
      languages: alternateUrls(`/autoroute/${slug}`),
    },
  };
}

export default async function AutoroutePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const autoroute = getAutorouteBySlug(slug);
  if (!autoroute) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const content = generateArContent(autoroute, loc);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <ArJsonLd autoroute={autoroute} faq={content.faq} />

      <main className="flex-grow" id="devis">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <ArBreadcrumb autorouteName={autoroute.name} />
        </div>

        <ArHero autoroute={autoroute} content={content} />
        <ArStats autoroute={autoroute} />
        <ArIntro autoroute={autoroute} content={content} />
        <ArServiceAreas autoroute={autoroute} />
        <ArCitiesServed autoroute={autoroute} />
        <ArEmergencyProcedure content={content} autorouteName={autoroute.name} />
        <ArPricing autoroute={autoroute} />
        <ArHowItWorks steps={content.howItWorks} />
        <ArAdvantages advantages={content.advantages} />
        <ArComparison content={content} autorouteName={autoroute.name} />
        <ArPracticalInfo content={content} autorouteName={autoroute.name} />
        <ArFAQ autorouteName={autoroute.name} faq={content.faq} />
        <ArCTA autorouteName={autoroute.name} />
        <ArInternalLinks autoroute={autoroute} />
      </main>

      <Footer />
    </div>
  );
}
