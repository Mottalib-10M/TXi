import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { guides } from "@/data/guides";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });
  const canonical = `https://www.taxineo.fr/${locale}/guides`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
    },
    alternates: { canonical },
  };
}

export default async function GuidesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("guides");
  const loc = locale === "en" ? "en" : "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-neutral-500 font-light mb-6">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link
                  href="/"
                  className="hover:text-neutral-900 transition-colors"
                >
                  {t("breadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">
                {t("breadcrumbGuides")}
              </li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("badge", { count: guides.length })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className={`group bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center">
                    <Icon
                      icon={guide.icon}
                      className="text-neutral-700 text-lg"
                    />
                  </div>
                  <span className="text-xs text-neutral-400">
                    {t("readingTime", { min: guide.readingTime })}
                  </span>
                </div>
                <p className="text-sm font-medium mb-2">
                  {guide.i18n[loc].heroTitle}
                </p>
                <p className="text-xs text-neutral-500 font-light line-clamp-2">
                  {guide.i18n[loc].heroSubtitle}
                </p>
                <div className="flex items-center gap-1 mt-4 text-xs text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  <span>{t("readMore")}</span>
                  <Icon icon="solar:arrow-right-linear" className="text-sm" />
                </div>
              </Link>
            ))}
          </div>
        </div>

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
              <Link href="/tarifs" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkTarifs")}
                <Icon icon="solar:arrow-right-linear" className="text-xs" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkServices")}
                <Icon icon="solar:arrow-right-linear" className="text-xs" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-neutral-950 py-20 md:py-28 mt-16">
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
