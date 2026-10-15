/**
 * Date de dernière mise à jour d'une page (RECETTE §8.4).
 *
 * `page-dates.json` est engendré avant la construction à partir de
 * l'historique git : une route y porte la date du dernier commit ayant touché
 * son gabarit ou les données qui l'alimentent. On ne fabrique jamais de date :
 * une route absente du fichier n'affiche rien plutôt qu'une date fausse.
 */
import dates from "./page-dates.json";

const table = dates as Record<string, string>;

/** Chemin sans préfixe de langue, terminé par « / ». */
function normaliser(pathname: string): string {
  const sansLangue = pathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";
  return sansLangue.endsWith("/") ? sansLangue : `${sansLangue}/`;
}

/** Date AAAA-MM-JJ de la page, ou null si l'historique ne la donne pas. */
export function dateDePage(pathname: string): string | null {
  const chemin = normaliser(pathname);
  if (table[chemin]) return table[chemin];
  // Les pages engendrées (/trajet/paris-cdg/) portent la date de leur famille
  // (/trajet/), puisque c'est le même fichier de données qui les fait vivre.
  let meilleur: string | null = null;
  let longueur = -1;
  for (const [prefixe, date] of Object.entries(table)) {
    if (chemin.startsWith(prefixe) && prefixe.length > longueur) {
      meilleur = date;
      longueur = prefixe.length;
    }
  }
  return meilleur;
}

/** Date lisible dans la langue de la page, en toutes lettres (« 1er octobre 2026 »). */
export function dateLisible(iso: string, locale: string): string {
  const texte = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T12:00:00Z`));
  // En français, le premier jour du mois s'écrit « 1er » (RECETTE §8.4).
  return locale !== "en" && texte.startsWith("1 ") ? `1er${texte.slice(1)}` : texte;
}
