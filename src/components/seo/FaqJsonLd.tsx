import { dateDePage } from "@/lib/page-date";

/**
 * FAQPage déclarée à partir des questions réellement affichées (RECETTE §7).
 *
 * On passe ici exactement le tableau qui sert au rendu visible : une réponse
 * déclarée à Google mais absente de la page est une non-conformité, et c'est
 * l'erreur la plus facile à commettre quand les deux listes sont écrites deux
 * fois.
 */
export function FaqJsonLd({
  faq,
  route,
}: {
  faq: { q: string; a: string }[];
  /** Route dont on reprend la date de dernière modification (§8.4). */
  route?: string;
}) {
  if (!faq.length) return null;
  const donnees = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // Une FAQPage est une WebPage : elle porte donc la date de dernière
    // modification de la page, prise dans l'historique git.
    dateModified: route ? dateDePage(route) ?? undefined : undefined,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }}
    />
  );
}
