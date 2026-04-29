import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { GuideHero } from "@/components/guide/GuideHero";
import { GuideContent } from "@/components/guide/GuideContent";
import { GuideRelated } from "@/components/guide/GuideRelated";
import { GuideJsonLd } from "@/components/guide/GuideJsonLd";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityCTA } from "@/components/city/CityCTA";
import { guides, getGuideBySlug } from "@/data/guides";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    guides.map((g) => ({ locale, slug: g.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/guide/${guide.slug}`;
  return {
    title: guide.i18n[loc].metaTitle,
    description: guide.i18n[loc].metaDescription,
    openGraph: {
      title: guide.i18n[loc].metaTitle,
      description: guide.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "article",
    },
    alternates: { canonical },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const t = await getTranslations("guide");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <GuideJsonLd guide={guide} />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-6 pt-24">
          <BreadcrumbJsonLd
            crumbs={[
              {
                name: t("breadcrumbHome"),
                item: "https://www.taxineo.fr",
              },
              {
                name: t("breadcrumbGuides"),
                item: "https://www.taxineo.fr/guides",
              },
              { name: guide.i18n[loc].heroTitle },
            ]}
          />
          <nav
            className="text-sm text-neutral-500 font-light mb-6"
            aria-label={t("breadcrumbLabel")}
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="hover:text-neutral-900 transition-colors"
                >
                  {t("breadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-neutral-900 transition-colors"
                >
                  {t("breadcrumbGuides")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">
                {guide.i18n[loc].heroTitle}
              </li>
            </ol>
          </nav>
        </div>

        <GuideHero guide={guide} />
        <GuideContent guide={guide} />
        <CityFAQ cityName={guide.title} faq={guide.i18n[loc].faq} />
        <GuideRelated currentSlug={guide.slug} />
        <CityCTA cityName="TaxiNeo" />
      </main>

      <Footer />
    </div>
  );
}
