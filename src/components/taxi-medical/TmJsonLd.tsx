import type { City } from "@/data/cities";
import type { TmFAQ } from "@/data/taxi-medical-content-templates";
import { getLocale } from "next-intl/server";

export async function TmJsonLd({ city, faq }: { city: City; faq: TmFAQ[] }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const medicalBusiness = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "TaxiService"],
    name: loc === "fr"
      ? `Taxi m\u00e9dical conventionn\u00e9 ${city.name} \u2014 TaxiNeo`
      : `CPAM-approved medical taxi ${city.name} \u2014 TaxiNeo`,
    description: loc === "fr"
      ? `Taxi m\u00e9dical conventionn\u00e9 CPAM \u00e0 ${city.name}. Transport assis professionnalis\u00e9 (TAP) vers h\u00f4pitaux, centres de dialyse, chimioth\u00e9rapie, r\u00e9\u00e9ducation. Tiers payant, v\u00e9hicule PMR.`
      : `CPAM-approved medical taxi in ${city.name}. Professional seated transport (TAP) to hospitals, dialysis centres, chemotherapy, rehabilitation. Third-party billing, wheelchair-accessible vehicles.`,
    url: `https://www.taxineo.fr/${locale}/taxi-medical/${city.slug}`,
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
    medicalSpecialty: loc === "fr" ? "Transport sanitaire" : "Healthcare transport",
    serviceType: loc === "fr" ? "Taxi m\u00e9dical conventionn\u00e9 CPAM" : "CPAM-approved medical taxi",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
