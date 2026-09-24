const BASE = "https://www.taxineo.fr";

/**
 * Build the canonical URL for a page, respecting localePrefix: "as-needed".
 * French (default locale) pages are served without /fr prefix.
 */
export function canonicalUrl(locale: string, path = "") {
  return locale === "fr" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;
}

/**
 * Build hreflang alternate URLs for a page.
 * French URLs have no prefix; other locales are prefixed.
 */
export function alternateUrls(path = "") {
  return {
    fr: `${BASE}${path}`,
    en: `${BASE}/en${path}`,
  };
}

/**
 * Ajuste un titre et une description aux bornes du §11 (50-60 et 150-160).
 *
 * Un titre trop court laisse de la place inutilisée dans le résultat Google ;
 * trop long, il est coupé au milieu d'un mot et le terme-clé de fin disparaît.
 * On complète avec la marque ou un complément utile, et on coupe sur une
 * frontière de mot plutôt qu'au caractère près.
 */
/**
 * Ajuste un titre et une description aux bornes du §11 (50-60 et 150-160).
 *
 * Deux écueils, constatés sur taxineo.fr le 2026-09-24 :
 *   — couper au caractère près produit « Transport sanitaire | » ou
 *     « réservation en », c'est-à-dire un snippet abîmé, plus nuisible que le
 *     dépassement qu'on corrigeait ;
 *   — compléter sans regarder le texte produit « Mentions legales — TaxiNeo —
 *     TaxiNeo, taxis à prix fixe ».
 * On raccourcit donc par unités de sens (segment de titre, phrase, proposition)
 * et on refuse un complément dont le contenu figure déjà dans le texte.
 */

/** Mots vides : un texte coupé ne doit pas se terminer dessus. */
const QUEUE_VIDE = /(?:\s+(?:et|ou|de|du|des|le|la|les|un|une|en|à|au|aux|pour|par|sur|dans|avec|and|or|the|a|an|to|for|in|on|with|of))+$/i;

function nettoyerQueue(texte: string): string {
  return texte
    .replace(/[\s,;:|—–-]+$/, "")
    .replace(QUEUE_VIDE, "")
    .replace(/[\s,;:|—–-]+$/, "");
}

/** Le complément redit-il quelque chose qui est déjà écrit ? */
function redondant(texte: string, complement: string): boolean {
  const bas = texte.toLowerCase();
  // Un seul mot significatif déjà présent suffit : c'est ainsi qu'on évite
  // « Mentions legales — TaxiNeo — TaxiNeo, taxis à prix fixe ».
  return complement
    .toLowerCase()
    .split(/[^0-9A-Za-zÀ-ÿ]+/)
    .filter((m) => m.length > 4)
    .some((m) => bas.includes(m));
}

/**
 * Complète un texte trop court en choisissant, à chaque tour, le complément
 * qui l'approche le plus du maximum sans le dépasser.
 *
 * Prendre les compléments dans l'ordre laissait des textes à 104 caractères
 * parce que le premier complément de la liste dépassait la borne et que les
 * suivants n'étaient pas essayés.
 */
function completer(texte: string, complements: string[], min: number, max: number): string {
  let sortie = texte;
  const restants = complements.filter((c) => c.trim().length > 0);
  while (sortie.length < min && restants.length) {
    let meilleur = -1;
    let longueur = sortie.length;
    restants.forEach((c, i) => {
      if (redondant(sortie, c)) return;
      const essai = `${sortie} ${c}`;
      if (essai.length <= max && essai.length > longueur) {
        meilleur = i;
        longueur = essai.length;
      }
    });
    if (meilleur < 0) break;
    sortie = `${sortie} ${restants[meilleur]}`;
    restants.splice(meilleur, 1);
  }
  return sortie;
}

export function ajusterTitre(titre: string, complements: string[] = []): string {
  let sortie = titre.trim();

  // Trop long : on retire le dernier segment (souvent la marque) plutôt que de
  // couper un mot du sujet, qui est la partie utile du titre.
  if (sortie.length > 60) {
    // On ne retire un segment que s'il reste un titre d'au moins 50 signes :
    // sur « A propos de TaxiNeo — Plateforme de reservation… », le dernier
    // segment porte le sujet, pas la marque, et le couper laissait 19 signes.
    const segments = sortie.split(/\s*[|·–—]\s*/);
    while (segments.length > 1 && segments.join(" | ").length > 60) {
      const essai = segments.slice(0, -1).join(" | ");
      if (essai.length < 50) break;
      segments.pop();
    }
    sortie = segments.join(" | ");
    if (sortie.length > 60) {
      const brut = sortie.slice(0, 60);
      const i = brut.lastIndexOf(" ");
      sortie = nettoyerQueue(i > 40 ? brut.slice(0, i) : brut);
    }
    return sortie;
  }

  return completer(sortie, complements, 50, 60);
}

export function ajusterDescription(description: string, complements: string[] = []): string {
  let sortie = description.trim();

  // Trop longue : on retire d'abord des phrases entières, puis, si le texte
  // repasse sous le minimum, la dernière proposition de la phrase finale. Le
  // résultat se termine toujours par un point.
  if (sortie.length > 160) {
    const phrases = sortie.split(/(?<=[.!?])\s+/);
    while (phrases.length > 1 && phrases.join(" ").length > 160) phrases.pop();
    sortie = phrases.join(" ");
    while (sortie.length > 160) {
      const virgule = sortie.lastIndexOf(", ");
      if (virgule < 100) break;
      sortie = `${sortie.slice(0, virgule)}.`;
    }
    if (sortie.length > 160) {
      const brut = sortie.slice(0, 159);
      const i = brut.lastIndexOf(" ");
      sortie = `${nettoyerQueue(i > 120 ? brut.slice(0, i) : brut)}.`;
    }
  }

  return completer(sortie, complements, 150, 160);
}
