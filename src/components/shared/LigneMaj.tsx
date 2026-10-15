"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { dateDePage, dateLisible } from "@/lib/page-date";

/**
 * Ligne « Mise à jour le … » (RECETTE §8.4, règle du 2026-10-15).
 *
 * - `bas` : dans le pied de page, sur toutes les pages, avec l'éditeur ;
 * - `fil` : petite date à droite sur la ligne du fil d'Ariane, seulement sur une
 *   page de lecture (guide, article de blog déclarés `Article`). Sur un
 *   simulateur, un accueil ou une page de rubrique, pas de date en haut : elle
 *   repoussait le titre sans rien apprendre au visiteur (§10.3).
 *
 * La date vient de l'historique git, jamais de la date du jour : une page non
 * modifiée ne doit pas paraître fraîche. Elle s'écrit en toutes lettres.
 */
export function LigneMaj({ position }: { position: "bas" | "fil" }) {
  const pathname = usePathname();
  const locale = useLocale();
  const iso = dateDePage(pathname ?? "/");
  if (!iso) return null;

  const texte = locale === "en" ? "Updated on " : "Mise à jour le ";
  const editeur = locale === "en" ? " · Publisher: Radif Partners" : " · Éditeur : Radif Partners";

  if (position === "fil") {
    return (
      <p className="text-xs text-neutral-500 font-light md:ml-auto md:shrink-0 whitespace-nowrap">
        {texte}
        <time dateTime={iso}>{dateLisible(iso, locale)}</time>
      </p>
    );
  }

  return (
    <p className="text-xs text-neutral-500 font-light">
      {texte}
      <time dateTime={iso}>{dateLisible(iso, locale)}</time>
      {editeur}
    </p>
  );
}
