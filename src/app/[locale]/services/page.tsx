import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { services, getServicesByCategory } from "@/data/services-seo";
import type { ServiceSeo } from "@/data/services-seo";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const canonical = `https://www.taxineo.fr/${locale}/services`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: { title: t("metaTitle"), description: t("metaDescription"), url: canonical },
    alternates: {
      canonical,
      languages: {
        fr: "https://www.taxineo.fr/fr/services",
        en: "https://www.taxineo.fr/en/services",
      },
    },
  };
}

const CATEGORY_ICONS: Record<ServiceSeo["category"], string> = {
  transport: "solar:car-linear",
  special: "solar:star-linear",
  premium: "solar:crown-linear",
};

const CATEGORY_LABELS = {
  transport: { fr: "Transport", en: "Transport" },
  special: { fr: "Services sp\u00e9ciaux", en: "Special services" },
  premium: { fr: "Premium", en: "Premium" },
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("services");
  const loc = locale === "en" ? "en" : "fr";

  const categories: ServiceSeo["category"][] = ["transport", "special", "premium"];

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
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{t("breadcrumbServices")}</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {t("badge", { count: services.length })}
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

        {categories.map((cat) => {
          const items = getServicesByCategory(cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="py-12 md:py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-8 fade-up">
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center">
                    <Icon icon={CATEGORY_ICONS[cat]} className="text-neutral-700 text-xl" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {CATEGORY_LABELS[cat][loc]}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((svc, i) => (
                    <Link
                      key={svc.slug}
                      href={`/service/${svc.slug}`}
                      className={`group bg-white border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon icon={svc.icon} className="text-neutral-600 text-lg" />
                          <p className="text-sm font-medium">{svc.i18n[loc].heroTitle}</p>
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

        {/* Why specialised services */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 fade-up">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              {t("whySpecializedTitle")}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("whySpecializedText1")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {t("whySpecializedText2")}
            </p>
          </div>
        </section>

        {/* Advantages cards */}
        <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("advantagesTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "solar:user-id-linear", title: t("advantage1Title"), desc: t("advantage1Desc") },
                { icon: "solar:tag-price-linear", title: t("advantage2Title"), desc: t("advantage2Desc") },
                { icon: "solar:car-linear", title: t("advantage3Title"), desc: t("advantage3Desc") },
                { icon: "solar:clock-circle-linear", title: t("advantage4Title"), desc: t("advantage4Desc") },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${(i % 2) + 1}`}
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

        {/* How to book */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">3 {loc === "en" ? "steps" : "étapes"}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t("howToBookTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: "1", icon: "solar:list-check-linear", title: t("howToBookStep1Title"), desc: t("howToBookStep1Desc") },
                { step: "2", icon: "solar:map-point-linear", title: t("howToBookStep2Title"), desc: t("howToBookStep2Desc") },
                { step: "3", icon: "solar:check-circle-linear", title: t("howToBookStep3Title"), desc: t("howToBookStep3Desc") },
              ].map((item, i) => (
                <div key={item.step} className={`relative fade-up fade-up-delay-${i + 1}`}>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shrink-0 text-lg font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
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
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {t("seoParagraph3")}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-6">
              {t("seoParagraph4")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/tarifs" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkTarifs")}
                <Icon icon="solar:arrow-right-linear" className="text-xs" />
              </Link>
              <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("seoLinkGuides")}
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
