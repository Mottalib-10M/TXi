import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { DepartementHero } from "@/components/departement/DepartementHero";
import { DepartementVilles } from "@/components/departement/DepartementVilles";
import { DepartementDescription } from "@/components/departement/DepartementDescription";
import { DepartementJsonLd } from "@/components/departement/DepartementJsonLd";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { departements, getDepartementBySlug } from "@/data/departements";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    departements.map((d) => ({ locale, slug: d.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const dept = getDepartementBySlug(slug);
  if (!dept) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/departement/${dept.slug}`;
  return {
    title: dept.i18n[loc].metaTitle,
    description: dept.i18n[loc].metaDescription,
    openGraph: {
      title: dept.i18n[loc].metaTitle,
      description: dept.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: { canonical },
  };
}

export default async function DepartementPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dept = getDepartementBySlug(slug);
  if (!dept) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const t = await getTranslations("departement");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <DepartementJsonLd dept={dept} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <BreadcrumbJsonLd
            crumbs={[
              { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
              { name: t("breadcrumbDepartements"), item: `https://www.taxineo.fr/${locale}/departements` },
              { name: dept.i18n[loc].heroTitle },
            ]}
          />
          <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/departements" className="hover:text-neutral-900 transition-colors">{t("breadcrumbDepartements")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{dept.i18n[loc].heroTitle}</li>
            </ol>
          </nav>
        </div>

        <DepartementHero dept={dept} />
        <DepartementVilles dept={dept} />
        <DepartementDescription dept={dept} />
        <CityFAQ cityName={`${dept.name} (${dept.code})`} faq={dept.i18n[loc].faq} />
        <CityContactForm cityName={dept.name} />
        <CityCTA cityName={dept.name} />
      </main>

      <Footer />
    </div>
  );
}
