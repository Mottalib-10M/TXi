import type { Airport } from "@/data/airports";
import { getLocale } from "next-intl/server";
import { AIRPORT_FARES, AIRPORT_SUPPLEMENTS } from "@/data/departmental-tariffs";

const PARIS_AIRPORT_SLUGS = new Set(["paris-charles-de-gaulle", "paris-orly"]);

export async function AirportJsonLd({ airport }: { airport: Airport }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const parisGroup = PARIS_AIRPORT_SLUGS.has(airport.slug)
    ? AIRPORT_FARES.find((g) => g.airport === "Paris CDG & Orly")
    : null;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNeo - Transfert Aéroport ${airport.name}`,
    description: airport.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/taxi-aeroport-${airport.slug}`,
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
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    ...(parisGroup && {
      priceSpecification: parisGroup.fares.map((fare) => ({
        "@type": "PriceSpecification",
        name: fare.route,
        price: fare.price,
        priceCurrency: "EUR",
        validFrom: AIRPORT_SUPPLEMENTS.validFrom,
        validThrough: AIRPORT_SUPPLEMENTS.validThrough,
      })),
    }),
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
