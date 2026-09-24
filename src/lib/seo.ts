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
function couper(texte: string, max: number): string {
  if (texte.length <= max) return texte;
  const coupe = texte.slice(0, max);
  const i = coupe.lastIndexOf(" ");
  return (i > max * 0.6 ? coupe.slice(0, i) : coupe).replace(/[\s,;:—-]+$/, "");
}

export function ajusterTitre(titre: string, complements: string[] = []): string {
  let sortie = titre.trim();
  for (const c of complements) {
    if (sortie.length >= 50) break;
    const essai = `${sortie} ${c}`;
    if (essai.length <= 60) sortie = essai;
  }
  return couper(sortie, 60);
}

export function ajusterDescription(description: string, complements: string[] = []): string {
  let sortie = description.trim();
  for (const c of complements) {
    if (sortie.length >= 150) break;
    const essai = `${sortie} ${c}`;
    if (essai.length <= 160) sortie = essai;
  }
  return couper(sortie, 160);
}
