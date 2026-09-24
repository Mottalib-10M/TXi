import type { City } from "@/data/cities";
import { getLocale } from "next-intl/server";
import { dateDePage } from "@/lib/page-date";
import { etofferFaq, completerFaq } from "@/lib/faq-etoffer";
import { faitsVille, reserveVille } from "@/lib/faits-hub";

export async function CityJsonLd({ city }: { city: City }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const localBusiness = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/taxi/") ?? undefined,
    "@type": "TaxiService",
    name: `TaxiNeo ${city.name}`,
    description: city.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/taxi-${city.slug}`,
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
    mainEntity: etofferFaq(completerFaq(city.i18n[loc].faq, reserveVille(city.name, loc), 6, 8), faitsVille(city, loc), loc === "en" ? `In ${city.name}` : `À ${city.name}`, city.name).map((item) => ({
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
