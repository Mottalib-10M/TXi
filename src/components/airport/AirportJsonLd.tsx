import type { Airport } from "@/data/airports";
import { getLocale } from "next-intl/server";
import { AIRPORT_FARES, AIRPORT_SUPPLEMENTS } from "@/data/departmental-tariffs";
import { dateDePage } from "@/lib/page-date";
import { etofferFaq } from "@/lib/faq-etoffer";
import { faitsAeroport } from "@/lib/faits-hub";

const PARIS_AIRPORT_SLUGS = new Set(["paris-charles-de-gaulle", "paris-orly"]);

export async function AirportJsonLd({ airport }: { airport: Airport }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const parisGroup = PARIS_AIRPORT_SLUGS.has(airport.slug)
    ? AIRPORT_FARES.find((g) => g.airport === "Paris CDG & Orly")
    : null;

  const localBusiness = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/aeroport/") ?? undefined,
    "@type": "TaxiService",
    name: `TaxiNeo - Transfert Aéroport ${airport.name}`,
    description: airport.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/taxi-aeroport-${airport.slug}`,
    telephone: "+33759592934",
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
    mainEntity: etofferFaq(airport.i18n[loc].faq.slice(0, 8), faitsAeroport(airport, loc), loc === "en" ? `At ${airport.name}` : `À ${airport.name}`, airport.name).map((item) => ({
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
