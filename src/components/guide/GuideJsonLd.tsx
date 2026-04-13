import type { Guide } from "@/data/guides";
import { getLocale } from "next-intl/server";

export async function GuideJsonLd({ guide }: { guide: Guide }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.i18n[loc].heroTitle,
    description: guide.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/guide/${guide.slug}`,
    publisher: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.i18n[loc].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
