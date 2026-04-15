import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { departements, getDepartementsByRegion } from "@/data/departements";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "departements" });
  const canonical = `https://www.taxineo.fr/${locale}/departements`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: { title: t("metaTitle"), description: t("metaDescription"), url: canonical },
    alternates: { canonical },
  };
}

export default async function DepartementsPage({ params }: PageProps) {
  await params;
  const t = await getTranslations("departements");

  // Group by region (preserve insertion order)
  const regions = Array.from(new Set(departements.map((d) => d.region)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-neutral-500 font-light mb-6">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{t("breadcrumbDepartements")}</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("badge", { count: departements.length })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </div>

        {regions.map((region) => {
          const items = getDepartementsByRegion(region);
          if (items.length === 0) return null;
          return (
            <section key={region} className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-8 fade-up">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center">
                    <Icon icon="solar:map-linear" className="text-neutral-700 text-xl" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {region}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((dept, i) => (
                    <Link
                      key={dept.slug}
                      href={`/departement/${dept.slug}`}
                      className={`group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-neutral-400">{dept.code}</span>
                          <p className="text-sm font-medium">{dept.name}</p>
                        </div>
                        <Icon icon="solar:arrow-right-linear" className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("seoTitle")}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoParagraph1")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              {t("seoParagraph2")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/villes" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkVilles")}
                <Icon icon="solar:arrow-right-linear" className="text-xs" />
              </Link>
              <Link href="/tarifs" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkTarifs")}
                <Icon icon="solar:arrow-right-linear" className="text-xs" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 fade-up">
              {t("ctaTitle")}
            </h2>
            <p className="text-neutral-400 font-light mb-8 fade-up fade-up-delay-1">
              {t("ctaDesc")}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors btn-lift fade-up fade-up-delay-2"
            >
              {t("ctaButton")}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
