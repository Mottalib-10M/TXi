import type { City } from "@/data/cities";
import type { MadFAQ } from "@/data/mad-content-templates";
import { getLocale } from "next-intl/server";

export async function MadJsonLd({ city, faq }: { city: City; faq: MadFAQ[] }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: loc === "fr"
      ? `Mise à disposition chauffeur ${city.name} — TaxiNeo`
      : `Chauffeur service ${city.name} — TaxiNeo`,
    description: loc === "fr"
      ? `Service de mise à disposition d'un chauffeur privé à ${city.name}. Berline, SUV ou van avec chauffeur dédié à l'heure, demi-journée ou journée complète.`
      : `Private chauffeur hire service in ${city.name}. Sedan, SUV or van with dedicated driver by the hour, half-day or full day.`,
    url: `https://www.taxineo.fr/${locale}/mise-a-disposition/${city.slug}`,
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
    serviceType: loc === "fr" ? "Mise à disposition de chauffeur" : "Chauffeur hire service",
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
