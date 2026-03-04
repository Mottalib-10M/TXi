import type { Station } from "@/data/stations";
import { getLocale } from "next-intl/server";

export async function StationJsonLd({ station }: { station: Station }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNoir - Transfert Gare ${station.name}`,
    description: station.i18n[loc].metaDescription,
    url: `https://www.taxinoir.fr/taxi-gare-${station.slug}`,
    telephone: "+33 1 00 00 00 00",
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
    mainEntity: station.i18n[loc].faq.map((item) => ({
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
