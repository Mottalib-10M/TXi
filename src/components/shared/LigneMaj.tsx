"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { dateDePage, dateLisible } from "@/lib/page-date";

/**
 * Ligne « Mise à jour le … · Radif Partners » (RECETTE §8.4).
 *
 * Elle apparaît deux fois : sous le titre, pour que le lecteur sache tout de
 * suite si la page est à jour, et dans le pied, pour que ce soit vrai sur
 * toutes les pages sans exception. La date vient de l'historique git, jamais
 * de la date du jour : une page non modifiée ne doit pas paraître fraîche.
 */
export function LigneMaj({ position = "haut" }: { position?: "haut" | "bas" }) {
  const pathname = usePathname();
  const locale = useLocale();
  const iso = dateDePage(pathname ?? "/");
  if (!iso) return null;

  const texte = locale === "en" ? "Updated on " : "Mise à jour le ";
  const editeur = locale === "en" ? " · Publisher: Radif Partners" : " · Éditeur : Radif Partners";

  return (
    <p
      className={
        position === "haut"
          ? "text-xs text-neutral-500 font-light mb-6"
          : "text-xs text-neutral-500 font-light"
      }
    >
      {texte}
      <time dateTime={iso}>{dateLisible(iso, locale)}</time>
      {editeur}
    </p>
  );
}
