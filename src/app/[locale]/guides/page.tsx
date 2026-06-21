import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { guides } from "@/data/guides";
import { getTranslations } from "next-intl/server";
import { canonicalUrl, alternateUrls } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });
  const canonical = canonicalUrl(locale, "/guides");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical,
      languages: alternateUrls("/guides"),
    },
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: t("faq1Q"), acceptedAnswer: { "@type": "Answer", text: t("faq1A") } },
          { "@type": "Question", name: t("faq2Q"), acceptedAnswer: { "@type": "Answer", text: t("faq2A") } },
          { "@type": "Question", name: t("faq3Q"), acceptedAnswer: { "@type": "Answer", text: t("faq3A") } },
          { "@type": "Question", name: t("faq4Q"), acceptedAnswer: { "@type": "Answer", text: t("faq4A") } },
          { "@type": "Question", name: t("faq5Q"), acceptedAnswer: { "@type": "Answer", text: t("faq5A") } },
          { "@type": "Question", name: t("faq6Q"), acceptedAnswer: { "@type": "Answer", text: t("faq6A") } },
        ],
      }) }} />

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

        {/* Why our guides */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("whyGuidesTitle")}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("whyGuidesText1")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {t("whyGuidesText2")}
            </p>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("popularTopicsTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "solar:tag-price-linear", title: t("popularTopic1Title"), desc: t("popularTopic1Desc") },
                { icon: "solar:shield-check-linear", title: t("popularTopic2Title"), desc: t("popularTopic2Desc") },
                { icon: "mdi:airplane", title: t("popularTopic3Title"), desc: t("popularTopic3Desc") },
                { icon: "solar:health-linear", title: t("popularTopic4Title"), desc: t("popularTopic4Desc") },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 2) + 1}`}
                >
                  <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                    <Icon icon={item.icon} className="text-neutral-900 text-2xl" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips for passengers */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("tipsTitle")}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { title: t("tip1Title"), desc: t("tip1Desc") },
                { title: t("tip2Title"), desc: t("tip2Desc") },
                { title: t("tip3Title"), desc: t("tip3Desc") },
                { title: t("tip4Title"), desc: t("tip4Desc") },
                { title: t("tip5Title"), desc: t("tip5Desc") },
              ].map((tip, i) => (
                <div key={i} className={`flex items-start gap-4 fade-up fade-up-delay-${(i % 3) + 1}`}>
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-xl flex items-center justify-center shrink-0 text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-medium tracking-tight mb-1">{tip.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("faqTitle")}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: t("faq1Q"), a: t("faq1A") },
                { q: t("faq2Q"), a: t("faq2A") },
                { q: t("faq3Q"), a: t("faq3A") },
                { q: t("faq4Q"), a: t("faq4A") },
                { q: t("faq5Q"), a: t("faq5A") },
                { q: t("faq6Q"), a: t("faq6A") },
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 3) + 1}`}
                >
                  <h3 className="text-sm font-medium tracking-tight mb-2 flex items-start gap-3">
                    <Icon icon="solar:question-circle-linear" className="text-neutral-400 text-lg shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed pl-[30px]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("seoTitle")}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoParagraph1")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoParagraph2")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              {t("seoParagraph3")}
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
