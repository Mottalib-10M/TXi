import type { Airport } from "@/data/airports";
import { getLocale } from "next-intl/server";

export async function AirportJsonLd({ airport }: { airport: Airport }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNoir - Transfert Aéroport ${airport.name}`,
    description: airport.i18n[loc].metaDescription,
    url: `https://www.taxinoir.fr/taxi-aeroport-${airport.slug}`,
    telephone: "+33 1 00 00 00 00",
    areaServed: {
      "@type": "Airport",
      name: airport.name,
      iataCode: airport.iata,
      geo: {
        "@type": "GeoCoordinates",
        latitude: airport.lat,
        longitude: airport.lng,
      },
    },
    provider: {
      "@type": "Organization",
      name: "TaxiNoir",
      url: "https://www.taxinoir.fr",
    },
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
    mainEntity: airport.i18n[loc].faq.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
