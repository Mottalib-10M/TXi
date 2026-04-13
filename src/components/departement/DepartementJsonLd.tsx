import type { Departement } from "@/data/departements";
import { getLocale } from "next-intl/server";

export async function DepartementJsonLd({ dept }: { dept: Departement }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNeo - ${dept.name} (${dept.code})`,
    description: dept.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/departement/${dept.slug}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: dept.name,
    },
    provider: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dept.i18n[loc].faq.map((item) => ({
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
