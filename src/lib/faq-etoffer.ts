/**
 * Étoffement des réponses de FAQ (RECETTE §7).
 *
 * Une réponse de FAQ doit tenir entre 40 et 90 mots : en dessous, elle
 * n'apporte rien au lecteur et Google ne la retient pas comme réponse ; au
 * dessus, elle n'est plus lisible dans un résultat enrichi. Beaucoup de nos
 * réponses engendrées tiennent en deux phrases.
 *
 * Plutôt que d'ajouter du remplissage, on complète chaque réponse avec des
 * faits tirés de la page elle-même — distance, durée, fourchette de prix,
 * autoroute, péages. Deux pages différentes reçoivent donc des compléments
 * différents, et aucun chiffre n'est inventé : il vient des données du trajet.
 *
 * Le même appel sert à l'affichage et au JSON-LD, pour que la réponse déclarée
 * à Google soit exactement celle que le lecteur voit (§7).
 */

export interface FaqCourte {
  question: string;
  answer: string;
}

/** Faits disponibles pour compléter une réponse, dans l'ordre de priorité. */
export interface FaitsFaq {
  /** Phrases complètes, déjà rédigées dans la langue de la page. */
  phrases: string[];
}

const mots = (t: string) => t.trim().split(/\s+/).filter(Boolean).length;

/** Coupe une réponse trop longue à une fin de phrase, jamais au milieu. */
function raccourcir(texte: string, max = 90): string {
  if (mots(texte) <= max) return texte;
  // La frontière exige une majuscule après l'espace : sinon « 6.91 % » ou
  // « 30 min. » seraient pris pour des fins de phrase.
  const phrases = texte.split(/(?<=[.!?])\s+(?=[A-ZÀ-Ý])/);
  let sortie = "";
  for (const p of phrases) {
    if (sortie && mots(`${sortie} ${p}`) > max) break;
    sortie = sortie ? `${sortie} ${p}` : p;
  }
  return sortie || phrases[0];
}

/**
 * Complète une réponse trop courte avec les faits fournis, sans jamais répéter
 * un fait dont le chiffre figure déjà dans la réponse.
 */
export function etofferReponse(reponse: string, faits: string[], min = 45, max = 90): string {
  let sortie = reponse.trim();
  if (mots(sortie) >= min) return raccourcir(sortie, max);

  for (const phrase of faits) {
    if (mots(sortie) >= min) break;
    // Un fait dont le nombre est déjà écrit ferait doublon dans la réponse.
    const nombres = phrase.match(/\d+(?:[.,]\d+)?/g) ?? [];
    if (nombres.length && nombres.every((n) => sortie.includes(n))) continue;
    if (mots(`${sortie} ${phrase}`) > max) continue;
    sortie = `${sortie} ${phrase}`;
  }
  return sortie;
}

/**
 * Rattache une question générique à sa page (§7).
 *
 * « Peut-on réserver à l'avance ? » figure telle quelle sur des dizaines de
 * pages : Google n'a alors aucune raison de retenir l'une plutôt qu'une autre,
 * et le lecteur ne sait pas de quel trajet on parle. On préfixe donc la
 * question par le lieu, sauf si elle le nomme déjà.
 */
export function contextualiserQuestion(question: string, prefixe?: string, repere?: string): string {
  if (!prefixe) return question;
  if (repere && question.toLowerCase().includes(repere.toLowerCase())) return question;
  const premier = question.split(/\s+/)[0] ?? "";
  // On ne touche pas à une majuscule qui porte du sens (sigle, nom propre).
  const suite = premier === premier.toUpperCase() && premier.length > 1
    ? question
    : question.charAt(0).toLowerCase() + question.slice(1);
  return `${prefixe}, ${suite}`;
}

/** Applique l'étoffement à une liste de questions-réponses. */
export function etofferFaq<T extends FaqCourte>(
  faq: T[],
  faits: string[],
  prefixe?: string,
  repere?: string,
): T[] {
  return faq.map((qr, i) => ({
    ...qr,
    question: contextualiserQuestion(qr.question, prefixe, repere),
    // On décale le point de départ des faits selon la position de la question :
    // deux réponses de la même page ne reçoivent pas le même complément.
    answer: etofferReponse(qr.answer, faits.slice(i % Math.max(faits.length, 1)).concat(faits)),
  }));
}

/** Question de réserve, avec le mot-clé qui permet de repérer un doublon. */
export interface QuestionReserve {
  cle: string;
  question: string;
  answer: string;
}

/**
 * Ramène une FAQ dans les bornes de nombre de questions du §7.
 *
 * Trop de questions noient la page et Google n'en retient aucune ; trop peu et
 * la page ne couvre pas son sujet. On coupe au-delà du maximum, et on complète
 * en dessous du minimum avec des questions de réserve, en sautant celles dont
 * le sujet est déjà traité sur la page.
 */
export function completerFaq<T extends FaqCourte>(
  faq: T[],
  reserve: QuestionReserve[],
  min: number,
  max: number,
): (T | QuestionReserve)[] {
  const sortie: (T | QuestionReserve)[] = faq.slice(0, max);
  for (const q of reserve) {
    if (sortie.length >= min) break;
    const deja = sortie.some((x) => x.question.toLowerCase().includes(q.cle.toLowerCase()));
    if (!deja) sortie.push(q);
  }
  return sortie;
}
