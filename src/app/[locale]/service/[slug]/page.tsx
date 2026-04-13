import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceBenefits } from "@/components/service/ServiceBenefits";
import { ServiceJsonLd } from "@/components/service/ServiceJsonLd";
import { CityFAQ } from "@/components/city/CityFAQ";
import { CityContactForm } from "@/components/city/CityContactForm";
import { CityCTA } from "@/components/city/CityCTA";
import { services, getServiceBySlug } from "@/data/services-seo";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return ["fr", "en"].flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const loc = locale === "en" ? "en" : "fr";

  const canonical = `https://www.taxineo.fr/${locale}/service/${service.slug}`;
  return {
    title: service.i18n[loc].metaTitle,
    description: service.i18n[loc].metaDescription,
    openGraph: {
      title: service.i18n[loc].metaTitle,
      description: service.i18n[loc].metaDescription,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
    },
    alternates: { canonical },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const loc = locale === "en" ? "en" : "fr";
  const t = await getTranslations("service");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <ServiceJsonLd service={service} />

      <main className="flex-grow" id="reserver">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <BreadcrumbJsonLd
            crumbs={[
              { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
              { name: t("breadcrumbServices"), item: "https://www.taxineo.fr/services" },
              { name: service.i18n[loc].heroTitle },
            ]}
          />
          <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-neutral-900 transition-colors">{t("breadcrumbServices")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{service.i18n[loc].heroTitle}</li>
            </ol>
          </nav>
        </div>

        <ServiceHero service={service} />
        <ServiceBenefits service={service} />
        <CityFAQ cityName={service.title} faq={service.i18n[loc].faq} />
        <CityContactForm cityName={service.title} />
        <CityCTA cityName={service.title} />
      </main>

      <Footer />
    </div>
  );
}
