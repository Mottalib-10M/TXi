import type { Tarif } from "@/data/tarifs";
import { getLocale } from "next-intl/server";

export async function TarifJsonLd({ tarif }: { tarif: Tarif }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNeo - ${tarif.title}`,
    description: tarif.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/tarif/${tarif.slug}`,
    provider: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tarif.i18n[loc].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
