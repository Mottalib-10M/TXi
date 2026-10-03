import type { Trajet } from "@/data/trajets";
import { getLocale } from "next-intl/server";
import { dateDePage } from "@/lib/page-date";
import { etofferFaq } from "@/lib/faq-etoffer";
import { faitsTrajet } from "@/lib/faits-trajet";
import { nomsTrajet, descriptionTrajet } from "@/lib/seo-trajet";

export async function TrajetJsonLd({ trajet }: { trajet: Trajet }) {
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";
  // Mêmes noms que la FAQ visible de la page (page.tsx), pour que le balisage
  // reprenne exactement le texte affiché.
  const noms = nomsTrajet(trajet, loc);

  const taxiService = {
    "@context": "https://schema.org",
    // §8.4 : la date de dernière modification vient de l'historique git,
    // via la même table que la ligne visible sous le titre.
    dateModified: dateDePage("/trajet/") ?? undefined,
    "@type": "TaxiService",
    name: `TaxiNeo - Taxi ${noms.from} → ${noms.to}`,
    // Même description que la balise meta : le texte saisi passe par le
    // nettoyage (phrase redite « Dépose à votre adresse exacte. Dépose à votre
    // adresse exacte, retour possible. ») et, en anglais, par la traduction des
    // points forts saisis en français. Le texte brut y échappait.
    description: descriptionTrajet(trajet, loc),
    url: `https://www.taxineo.fr${locale === "fr" ? "" : `/${locale}`}/trajet/${trajet.slug}`,
    telephone: "+33759592934",
    areaServed: [
      {
        "@type": "Place",
        name: noms.from,
        geo: {
          "@type": "GeoCoordinates",
          latitude: trajet.fromLat,
          longitude: trajet.fromLng,
        },
      },
      {
        "@type": "Place",
        name: noms.to,
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
    mainEntity: etofferFaq(trajet.i18n[loc].faq, faitsTrajet(trajet, loc), loc === "en" ? `On the ${noms.from} — ${noms.to} route` : `Sur le trajet ${trajet.from} — ${trajet.to}`, noms.to).map((item) => ({
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
