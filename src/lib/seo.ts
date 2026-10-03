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
  const c = complement.toLowerCase();
  // « Prix fixe dès 125 € » après « Prix fixe 125-155 € » : mêmes deux
  // premiers mots, même information.
  const tete = c.replace(/^[|\s]+/, "").split(/\s+/).slice(0, 2).join(" ");
  if (tete.split(" ").length === 2 && bas.includes(tete)) return true;
  if (/24h\/24|24\/7/.test(c) && /24h\/24|24\/7/.test(bas)) return true;
  return c
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

/**
 * Pas de tiret cadratin dans un snippet (règle du 2026-10-03) : il signe un
 * texte écrit à la machine. Une fourchette « 105 — 130 € » devient « 105-130 € »,
 * un séparateur de titre devient « | », un incise de description une virgule.
 */
export function sansTiret(texte: string, mode: "titre" | "description"): string {
  return texte
    .replace(/(\d|€)\s*[—–]\s*(?=\d|€)/g, "$1-")
    .replace(/\s+[—–]\s+/g, mode === "titre" ? " | " : ", ")
    .replace(/[—–]/g, "-")
    .replace(/\s*\|\s*\|\s*/g, " | ");
}

/** Nettoie une description : virgules doublées, phrases répétées à l'identique. */
function nettoyerDescription(texte: string): string {
  const phrases = sansTiret(texte, "description")
    .replace(/,\s*,/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/);
  const cle = (p: string) => p.toLowerCase().replace(/[^0-9a-zà-ÿ]+/g, "");
  const vues = new Set<string>();
  return phrases
    .filter((p, i) => {
      const k = cle(p);
      // « Dépose à votre adresse exacte. Dépose à votre adresse exacte, retour
      // possible. » : la phrase est redite, en plus long, juste après.
      const suivante = phrases[i + 1] ? cle(phrases[i + 1]) : "";
      if (vues.has(k) || (k && suivante.startsWith(k))) return false;
      vues.add(k);
      return true;
    })
    .join(" ");
}

/**
 * Cherche, parmi les sous-ensembles de compléments (dans l'ordre donné), celui
 * qui amène le texte dans [min, max] ; à égalité, le plus long. Le complément
 * gourmand d'avant laissait des descriptions à 147-149 signes faute d'avoir un
 * complément assez court pour la dernière marche.
 */
function completerExact(texte: string, complements: string[], min: number, max: number): string | null {
  const pool = complements.filter((c) => c.trim().length > 0 && !redondant(texte, c)).slice(0, 10);
  let meilleur: string | null = null;
  for (let masque = 0; masque < 1 << pool.length; masque++) {
    const morceaux = pool.filter((_, i) => masque & (1 << i));
    const essai = [texte, ...morceaux].join(" ");
    if (essai.length < min || essai.length > max) continue;
    // Un complément ne doit pas en redire un autre.
    if (morceaux.some((m, i) => morceaux.slice(0, i).some((n) => redondant(n, m)))) continue;
    if (!meilleur || essai.length > meilleur.length) meilleur = essai;
  }
  return meilleur;
}

/**
 * Premier candidat dont la longueur tombe dans [min, max] ; à défaut, le plus
 * long qui ne dépasse pas max ; à défaut, le premier coupé par ajusterTitre.
 * Sert aux gabarits (trajets, taxi médical) dont la longueur des noms varie.
 */
export function choisirTitre(candidats: string[], min = 50, max = 60): string {
  const propres = candidats.map((c) => sansTiret(c.trim(), "titre"));
  const bon = propres.find((c) => c.length >= min && c.length <= max);
  if (bon) return bon;
  const courts = propres.filter((c) => c.length <= max).sort((a, b) => b.length - a.length);
  return courts[0] ?? ajusterTitre(propres[0]);
}

export function ajusterTitre(titre: string, complements: string[] = []): string {
  let sortie = sansTiret(titre.trim(), "titre");
  complements = complements.map((c) => sansTiret(c.replace(/^\s*[—–]\s*/, "| "), "titre"));
  if (sortie.length >= 50 && sortie.length <= 60) return sortie;

  // Trop long : on retire le dernier segment (souvent la marque) plutôt que de
  // couper un mot du sujet, qui est la partie utile du titre.
  if (sortie.length > 60) {
    // On ne retire un segment que s'il reste un titre d'au moins 50 signes :
    // sur « A propos de TaxiNeo | Plateforme de reservation… », le dernier
    // segment porte le sujet, pas la marque, et le couper laissait 19 signes.
    const segments = sortie.split(/\s*[|·]\s*/);
    // On essaie d'abord de retirer des segments du milieu en gardant le
    // premier (le sujet) : « Taxi Avon | Fontainebleau-Avon Station, Forest |
    // Fixed Price 24/7 | TaxiNeo » donnait « … Forest | Fixed », coupé net.
    if (segments.length > 2 && segments.length <= 7) {
      let meilleur: string[] | null = null;
      const reste = segments.slice(1);
      for (let masque = 1; masque < 1 << reste.length; masque++) {
        const choix = [segments[0], ...reste.filter((_, i) => masque & (1 << i))];
        const texte = choix.join(" | ");
        if (texte.length < 50 || texte.length > 60) continue;
        if (!meilleur || choix.length > meilleur.length || (choix.length === meilleur.length && texte.length > meilleur.join(" | ").length)) meilleur = choix;
      }
      if (meilleur) return meilleur.join(" | ");
    }
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

  return completerExact(sortie, complements, 50, 60) ?? completer(sortie, complements, 50, 60);
}

/** Coupe une description trop longue par phrases puis par propositions. */
function raccourcir(sortie: string, max: number): string {
  if (sortie.length <= max) return sortie;
  const phrases = sortie.split(/(?<=[.!?])\s+/);
  while (phrases.length > 1 && phrases.join(" ").length > max) phrases.pop();
  sortie = phrases.join(" ");
  while (sortie.length > max) {
    const virgule = sortie.lastIndexOf(", ");
    if (virgule < 100) break;
    sortie = `${sortie.slice(0, virgule)}.`;
  }
  if (sortie.length > max) {
    const brut = sortie.slice(0, max - 1);
    const i = brut.lastIndexOf(" ");
    sortie = `${nettoyerQueue(i > 120 ? brut.slice(0, i) : brut)}.`;
  }
  return sortie;
}

export function ajusterDescription(description: string, complements: string[] = []): string {
  const propre = nettoyerDescription(description);
  complements = complements.map((c) => sansTiret(c.replace(/^\s*[—–]\s*/, ""), "description"));
  if (propre.length >= 150 && propre.length <= 160) return propre;

  // On garde le plus de phrases d'origine possible : toutes, puis une de moins,
  // etc., et pour chaque base on cherche la combinaison de compléments qui tombe
  // dans les bornes.
  const phrases = propre.split(/(?<=[.!?])\s+/);
  for (let k = phrases.length; k >= 1; k--) {
    const base = raccourcir(phrases.slice(0, k).join(" "), 160);
    if (base.length >= 150) return base;
    const essai = completerExact(base, complements, 150, 160);
    if (essai) return essai;
  }
  return completer(raccourcir(propre, 160), complements, 150, 160);
}
