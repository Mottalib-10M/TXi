import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { blogArticles } from "@/data/blog";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const canonical = `https://taxineo.fr/${locale === "fr" ? "" : locale + "/"}blog`;
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

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const lang = locale as "fr" | "en";

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 fade-up">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              {t("title")}
            </h1>
            <p className="text-neutral-500 font-light">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid gap-6">
            {blogArticles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}` as never}
                className={`group bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 text-xs text-neutral-400 font-light mb-3">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-neutral-200">|</span>
                  <span>{t("readingTime", { minutes: article.readingTime })}</span>
                </div>
                <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-2 group-hover:text-neutral-600 transition-colors">
                  {article.title[lang]}
                </h2>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">
                  {article.excerpt[lang]}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 group-hover:gap-2.5 transition-all">
                  {t("readMore")}
                  <Icon icon="solar:arrow-right-linear" className="text-sm" />
                </span>
              </Link>
            ))}
          </div>

          {/* Cross-links SEO */}
          <div className="mt-16 pt-10 border-t border-neutral-100 fade-up">
            <h2 className="text-lg font-semibold tracking-tight mb-4">
              {lang === "en" ? "Explore TaxiNeo" : "Découvrez aussi"}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
              >
                <Icon icon="solar:book-linear" className="text-neutral-400" />
                {lang === "en" ? "Practical guides" : "Guides pratiques"}
              </Link>
              <Link
                href="/trajets"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
              >
                <Icon icon="solar:route-linear" className="text-neutral-400" />
                {lang === "en" ? "Popular routes" : "Trajets populaires"}
              </Link>
              <Link
                href="/villes"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
              >
                <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                {lang === "en" ? "Cities" : "Villes desservies"}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium hover:border-neutral-400 transition-colors"
              >
                <Icon icon="solar:star-linear" className="text-neutral-400" />
                {lang === "en" ? "Our services" : "Nos services"}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
