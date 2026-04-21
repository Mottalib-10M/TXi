import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { trajets } from "@/data/trajets";
import { guides } from "@/data/guides";
import { getTranslations } from "next-intl/server";

// Keyword → content mapping for internal linking
const keywordMap: Record<string, { trajets?: string[]; guides?: string[] }> = {
  "tarifs": { trajets: ["paris-cdg", "paris-orly"], guides: ["tarif-taxi-reglementation"] },
  "orly": { trajets: ["paris-orly", "orly-paris"], guides: ["tarif-taxi-reglementation"] },
  "cdg": { trajets: ["paris-cdg", "cdg-paris"], guides: ["tarif-taxi-reglementation"] },
  "aeroport": { trajets: ["paris-cdg", "paris-orly", "lyon-saint-exupery-lyon", "nice-aeroport-nice"], guides: ["comment-prendre-taxi"] },
  "chauffeur": { guides: ["taxi-vs-uber", "comment-prendre-taxi"] },
  "longue-distance": { trajets: ["paris-lyon", "paris-marseille", "paris-bordeaux"], guides: ["tarif-taxi-reglementation"] },
  "vtc": { guides: ["taxi-vs-uber"] },
  "nuit": { trajets: ["paris-cdg", "paris-orly"], guides: ["securite-taxi", "tarif-taxi-reglementation"] },
  "hopital": { guides: ["taxi-conventionne-guide", "taxi-handicape-guide"] },
  "medical": { guides: ["taxi-conventionne-guide", "taxi-handicape-guide"] },
  "prix-fixe": { guides: ["tarif-taxi-reglementation"] },
  "compteur": { guides: ["tarif-taxi-reglementation", "comment-prendre-taxi"] },
  "pmr": { guides: ["taxi-handicape-guide"] },
  "evenement": { guides: ["comment-prendre-taxi"] },
  "mariage": { guides: ["comment-prendre-taxi"] },
  "entreprise": { guides: ["reclamer-facture-taxi"] },
  "b2b": { guides: ["reclamer-facture-taxi"] },
  "passager": { guides: ["securite-taxi", "comment-prendre-taxi"] },
  "droits": { guides: ["comment-prendre-taxi", "reclamer-facture-taxi"] },
  "reserver": { guides: ["comment-prendre-taxi"] },
  "ecologique": { guides: ["taxi-vs-uber"] },
  "covoiturage": { guides: ["taxi-vs-uber"] },
  "erreurs": { guides: ["comment-prendre-taxi", "securite-taxi"] },
  "paris": { trajets: ["paris-cdg", "paris-orly", "paris-versailles", "paris-disneyland"] },
  "transport-en-commun": { guides: ["taxi-vs-uber", "comment-prendre-taxi"] },
};

export async function BlogRelatedContent({ slug }: { slug: string }) {
  const t = await getTranslations("blog");

  // Match slug keywords against the map
  const matchedTrajetSlugs = new Set<string>();
  const matchedGuideSlugs = new Set<string>();

  for (const [keyword, content] of Object.entries(keywordMap)) {
    if (slug.includes(keyword)) {
      content.trajets?.forEach((s) => matchedTrajetSlugs.add(s));
      content.guides?.forEach((s) => matchedGuideSlugs.add(s));
    }
  }

  const relatedTrajets = trajets
    .filter((tr) => matchedTrajetSlugs.has(tr.slug))
    .slice(0, 3);
  const relatedGuides = guides
    .filter((g) => matchedGuideSlugs.has(g.slug))
    .slice(0, 3);

  if (relatedTrajets.length === 0 && relatedGuides.length === 0) return null;

  return (
    <div className="mt-12 pt-10 border-t border-neutral-200">
      <h2 className="text-xl font-semibold tracking-tight mb-6">
        {t("relatedContent")}
      </h2>
      <div className="grid gap-3">
        {relatedTrajets.map((tr) => (
          <Link
            key={tr.slug}
            href={`/trajet/${tr.slug}`}
            className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 transition-colors"
          >
            <Icon icon="solar:route-linear" className="text-neutral-400 shrink-0" />
            <div>
              <span className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
                {tr.from} → {tr.to}
              </span>
              <span className="text-xs text-neutral-400 ml-2">
                {tr.distanceKm} km · {tr.priceEstimate}
              </span>
            </div>
          </Link>
        ))}
        {relatedGuides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}` as never}
            className="group flex items-center gap-3 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-300 transition-colors"
          >
            <Icon icon={g.icon} className="text-neutral-400 shrink-0" />
            <span className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
              {g.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
