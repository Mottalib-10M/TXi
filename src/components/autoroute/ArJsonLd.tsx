import type { AutorouteData } from "@/data/autoroutes";
import type { ArFAQ } from "@/data/autoroute-content-templates";
import { getLocale } from "next-intl/server";

export async function ArJsonLd({ autoroute, faq }: { autoroute: AutorouteData; faq: ArFAQ[] }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: loc === "fr"
      ? `Chauffeur privé après panne sur ${autoroute.name} — TaxiNeo`
      : `Private driver after breakdown on ${autoroute.name} — TaxiNeo`,
    description: loc === "fr"
      ? `Service de chauffeur privé pour automobilistes en panne sur ${autoroute.name} (${autoroute.fullName}). Prise en charge aux aires de service, transport vers votre destination. 24h/24, 7j/7.`
      : `Private driver service for motorists stranded on ${autoroute.name} (${autoroute.fullName}). Pickup at service areas, transport to your destination. 24/7.`,
    url: `https://www.taxineo.fr/${locale}/autoroute/${autoroute.slug}`,
    telephone: "+33759592934",
    areaServed: {
      "@type": "Place",
      name: `${autoroute.name} (${autoroute.from} – ${autoroute.to})`,
    },
    provider: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
    serviceType: loc === "fr" ? "Transport après panne autoroute" : "Transport after motorway breakdown",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
