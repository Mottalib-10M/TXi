import type { City } from "@/data/cities";
import { getLocale } from "next-intl/server";

export async function CityJsonLd({ city }: { city: City }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: `TaxiNoir ${city.name}`,
    description: city.i18n[loc].metaDescription,
    url: `https://www.taxinoir.fr/taxi-${city.slug}`,
    telephone: "+33 1 00 00 00 00",
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    provider: {
      "@type": "Organization",
      name: "TaxiNoir",
      url: "https://www.taxinoir.fr",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: city.rating.toString(),
      reviewCount: (city.driverCount * 12).toString(),
      bestRating: "5",
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
    mainEntity: city.i18n[loc].faq.map((item) => ({
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
