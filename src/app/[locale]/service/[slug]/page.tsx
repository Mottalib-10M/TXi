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
import { services, getServiceBySlug, getServicesByCategory } from "@/data/services-seo";
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

        {service.i18n[loc].detailedDescription && (
          <section className="py-12 md:py-16 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "About this service" : "En détail"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {service.i18n[loc].detailedDescription}
              </p>
            </div>
          </section>
        )}

        {service.i18n[loc].useCases && (
          <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "Who is it for?" : "Pour qui ?"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {service.i18n[loc].useCases}
              </p>
            </div>
          </section>
        )}

        {service.i18n[loc].howItWorks && (
          <section className="py-12 md:py-16 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                {loc === "en" ? "How it works" : "Comment ça marche ?"}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {service.i18n[loc].howItWorks}
              </p>
            </div>
          </section>
        )}

        {/* Voir aussi — Cross-links SEO */}
        {(() => {
          const sameCategory = getServicesByCategory(service.category)
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3);
          const others = sameCategory.length >= 3
            ? sameCategory
            : [
                ...sameCategory,
                ...services
                  .filter((s) => s.slug !== service.slug && !sameCategory.some((sc) => sc.slug === s.slug))
                  .slice(0, 3 - sameCategory.length),
              ];
          return (
            <section className="py-12 md:py-16 bg-neutral-50">
              <div className="max-w-4xl mx-auto px-6 fade-up">
                <h2 className="text-2xl font-semibold tracking-tight mb-6">
                  {loc === "en" ? "See also" : "Voir aussi"}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {others.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/service/${s.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                    >
                      {s.i18n[loc].heroTitle}
                    </Link>
                  ))}
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                  >
                    {loc === "en" ? "Taxi fares" : "Tarifs taxi"}
                  </Link>
                  <Link
                    href="/trajets"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
                  >
                    {loc === "en" ? "Popular routes" : "Trajets populaires"}
                  </Link>
                </div>
              </div>
            </section>
          );
        })()}

        <CityFAQ cityName={service.title} faq={service.i18n[loc].faq} />
        <CityContactForm cityName={service.title} />
        <CityCTA cityName={service.title} />
      </main>

      <Footer />
    </div>
  );
}
