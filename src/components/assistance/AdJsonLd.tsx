import type { City } from "@/data/cities";
import type { AdFAQ } from "@/data/assistance-content-templates";
import { getLocale } from "next-intl/server";

export async function AdJsonLd({ city, faq }: { city: City; faq: AdFAQ[] }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: loc === "fr"
      ? `Assistance dépannage ${city.name} — Chauffeur privé | TaxiNeo`
      : `Breakdown assistance ${city.name} — Private driver | TaxiNeo`,
    description: loc === "fr"
      ? `Service de chauffeur privé pour automobilistes en panne à ${city.name}. Transport immédiat vers garage, domicile ou gare. Disponible 24h/24, 7j/7.`
      : `Private driver service for stranded motorists in ${city.name}. Immediate transport to garage, home or station. Available 24/7.`,
    url: `https://www.taxineo.fr/${locale}/assistance/${city.slug}`,
    telephone: "+33759592934",
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
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
    },
    serviceType: loc === "fr" ? "Assistance dépannage automobile" : "Car breakdown assistance",
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
