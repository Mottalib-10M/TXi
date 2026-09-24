import type { Trajet } from "@/data/trajets";
import { getLocale } from "next-intl/server";
import { dateDePage } from "@/lib/page-date";
import { etofferFaq } from "@/lib/faq-etoffer";
import { faitsTrajet } from "@/lib/faits-trajet";

export async function TrajetJsonLd({ trajet }: { trajet: Trajet }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  const taxiService = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/trajet/") ?? undefined,
    "@type": "TaxiService",
    name: `TaxiNeo - Taxi ${trajet.from} → ${trajet.to}`,
    description: trajet.i18n[loc].metaDescription,
    url: `https://www.taxineo.fr/${locale}/trajet/${trajet.slug}`,
    telephone: "+33759592934",
    areaServed: [
      {
        "@type": "Place",
        name: trajet.from,
        geo: {
          "@type": "GeoCoordinates",
          latitude: trajet.fromLat,
          longitude: trajet.fromLng,
        },
      },
      {
        "@type": "Place",
        name: trajet.to,
        geo: {
          "@type": "GeoCoordinates",
          latitude: trajet.toLat,
          longitude: trajet.toLng,
        },
      },
    ],
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
    mainEntity: etofferFaq(trajet.i18n[loc].faq, faitsTrajet(trajet, loc), loc === "en" ? `On the ${trajet.from} — ${trajet.to} route` : `Sur le trajet ${trajet.from} — ${trajet.to}`, trajet.to).map((item) => ({
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
