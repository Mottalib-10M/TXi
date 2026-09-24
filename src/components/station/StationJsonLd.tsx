import type { Station } from "@/data/stations";
import { getLocale } from "next-intl/server";
import { dateDePage } from "@/lib/page-date";
import { etofferFaq } from "@/lib/faq-etoffer";
import { faitsGare } from "@/lib/faits-hub";

export async function StationJsonLd({ station }: { station: Station }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const localBusiness = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/gare/") ?? undefined,
    "@type": "TaxiService",
    name: `TaxiNeo - Transfert Gare ${station.name}`,
    description: station.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/taxi-gare-${station.slug}`,
    telephone: "+33759592934",
    areaServed: {
      "@type": "TrainStation",
      name: station.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: station.lat,
        longitude: station.lng,
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
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: etofferFaq(station.i18n[loc].faq.slice(0, 8), faitsGare(station, loc), loc === "en" ? `At ${station.name}` : `À la ${station.name}`, station.name).map((item) => ({
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
