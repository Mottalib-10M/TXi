import type { ServiceSeo } from "@/data/services-seo";
import { getLocale } from "next-intl/server";

export async function ServiceJsonLd({ service }: { service: ServiceSeo }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNeo - ${service.title}`,
    description: service.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/service/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.i18n[loc].faq.map((item) => ({
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
