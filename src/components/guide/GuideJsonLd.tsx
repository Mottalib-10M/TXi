import type { Guide } from "@/data/guides";
import { getLocale } from "next-intl/server";
import { dateDePage } from "@/lib/page-date";

export async function GuideJsonLd({ guide }: { guide: Guide }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const article = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/guide/") ?? undefined,
    "@type": "Article",
    headline: guide.i18n[loc].heroTitle,
    description: guide.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/guide/${guide.slug}`,
    inLanguage: loc,
    author: {
      "@type": "Organization",
      name: "Radif Partners",
      knowsAbout: loc === "en"
        ? ["taxi fares in France", "urban mobility", "medical transport", "airport transfers"]
        : ["tarifs des taxis en France", "mobilité urbaine", "transport médical", "transferts aéroport"],
      foundingDate: "2025-01-01",
      publishingPrinciples: "https://www.taxineo.fr/a-propos",
      url: "https://www.taxineo.fr/a-propos",
    },
    publisher: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.taxineo.fr/apple-icon",
      },
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
