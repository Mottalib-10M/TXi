import type { Trajet } from "@/data/trajets";
import { ajusterDescription, choisirTitre } from "@/lib/seo";
import { anglaiser } from "@/lib/trajet-en";

/**
 * Titre et description des pages /trajet/<slug>, construits à partir des
 * champs du trajet plutôt que recopiés des fichiers de données.
 *
 * Relevé du 2026-10-03 : 68 pages anglaises servaient le titre français à
 * l'identique (« Taxi Aéroport Bordeaux-Mérignac → Arcachon | 65 km »), des
 * titres tombaient à 46-48 signes, et 262 descriptions affichaient
 * « en undefined min » faute de durée dans le texte saisi.
 */

type Loc = "fr" | "en";

/** Noms de lieux traduits pour les titres anglais. */
const LIEUX_EN: Record<string, string> = {
  "Gand (Belgique)": "Ghent (Belgium)",
  "Vintimille (Italie)": "Ventimiglia (Italy)",
  "Sarrebruck (Allemagne)": "Saarbrücken (Germany)",
  "San Sebastián (Espagne)": "San Sebastián (Spain)",
  "Aéroport d'Orly": "Orly Airport",
  "Gare Bordeaux Saint-Jean": "Bordeaux Saint-Jean Station",
  "Gare Nantes": "Nantes Station",
  "Gare Nice-Ville": "Nice-Ville Station",
  "Gare Strasbourg": "Strasbourg Station",
  "Gare Part-Dieu Lyon": "Lyon Part-Dieu Station",
  "Île de Ré": "Île de Ré",
  "Gare Saint-Charles": "Marseille Saint-Charles Station",
  "Château de Versailles": "Palace of Versailles",
  "Château de Fontainebleau": "Palace of Fontainebleau",
  "Zoo de Thoiry": "Thoiry Zoo",
  "Zoo de Vincennes": "Vincennes Zoo",
  "Domaine de Saint-Cloud": "Saint-Cloud Park",
  "Gorges du Verdon": "Verdon Gorge",
  "Genève": "Geneva",
  "Bâle": "Basel",
  "Andorre-la-Vieille": "Andorra la Vella",
  "Aéroport Paris-CDG": "Paris-CDG Airport",
  // Villes étrangères : forme anglaise usuelle (« Paris → Londres » servait
  // tel quel sur la page anglaise).
  "Londres": "London",
  "Bruxelles": "Brussels",
  "Barcelone": "Barcelona",
  "Sarrebruck": "Saarbrücken",
  "Fribourg-en-Brisgau": "Freiburg im Breisgau",
};

export function lieuEn(nom: string): string {
  if (LIEUX_EN[nom]) return LIEUX_EN[nom];
  const aeroport = nom.match(/^Aéroport (?:de |d')?(.+)$/);
  if (aeroport) return `${aeroport[1]} Airport`;
  // « Paris 11e » → « Paris 11th », « Paris 3e » → « Paris 3rd »
  const arr = nom.match(/^Paris (\d+)e$/);
  if (arr) {
    const n = Number(arr[1]);
    const suf = n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th";
    return `Paris ${n}${suf}`;
  }
  return nom
    .replace(/\(Espagne\)/, "(Spain)")
    .replace(/\(Italie\)/, "(Italy)")
    .replace(/\(Belgique\)/, "(Belgium)")
    .replace(/\(Allemagne\)/, "(Germany)")
    .replace(/\(Suisse\)/, "(Switzerland)");
}

/** Noms de départ et d'arrivée affichés sur la page, dans la langue de la page. */
export function nomsTrajet(t: Trajet, loc: Loc): { from: string; to: string } {
  return loc === "en" ? { from: lieuEn(t.from), to: lieuEn(t.to) } : { from: t.from, to: t.to };
}

function duree(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, "0")}` : `${h}h`;
}

function prixDepart(t: Trajet): number | undefined {
  if (t.prixMin) return t.prixMin;
  const m = t.priceEstimate.match(/\d+/);
  return m ? Number(m[0]) : undefined;
}

export function titreTrajet(t: Trajet, loc: Loc): string {
  const a = loc === "en" ? lieuEn(t.from) : t.from;
  const b = loc === "en" ? lieuEn(t.to) : t.to;
  const tete = `Taxi ${a} → ${b}`;
  const km = `${t.distanceKm} km`;
  const d = duree(t.durationMin);
  const p = prixDepart(t);
  const prix = p === undefined ? "" : loc === "en" ? `from €${p}` : `dès ${p} €`;
  const fixe = loc === "en" ? "Fixed Price" : "Prix fixe";

  const candidats = prix
    ? [
        `${tete} | ${km}, ${prix} | TaxiNeo`,
        `${tete} | ${km}, ${prix}, ${d} | TaxiNeo`,
        `${tete} | ${fixe} ${prix}, ${km}, ${d} | TaxiNeo`,
        `${tete} | ${km}, ${prix}, ${d}`,
        `${tete} | ${km}, ${prix}`,
        `${tete} | ${prix} | TaxiNeo`,
        `${tete} | ${prix}`,
        `${tete} | ${km}`,
        tete,
      ]
    : [
        `${tete} | ${km}, ${d} | TaxiNeo`,
        `${tete} | ${fixe}, ${km}, ${d} | TaxiNeo`,
        `${tete} | ${km}, ${d}`,
        `${tete} | ${km}`,
        tete,
      ];
  return choisirTitre(candidats);
}

export function descriptionTrajet(t: Trajet, loc: Loc): string {
  const d = duree(t.durationMin);
  // « en undefined min » / « undefined min ride » : la durée manquait au
  // moment de la saisie ; on la reprend du champ durationMin.
  let brut = t.i18n[loc].metaDescription
    .replace(/\bundefined min\b/g, d)
    .replace(/\bundefined\b/g, d);
  // Les descriptions anglaises reprennent des points forts et des itinéraires
  // saisis en français (« Roues à aubes and Brocante en route ») : on les
  // traduit, et les noms de départ et d'arrivée prennent leur forme anglaise.
  if (loc === "en") brut = anglaiser(brut, { [t.from]: lieuEn(t.from), [t.to]: lieuEn(t.to) });
  const p = prixDepart(t);
  const aeroport = t.category === "aeroport";
  const complements =
    loc === "en"
      ? [
          p !== undefined ? `Fixed price from €${p}.` : "",
          t.prixVan ? `Van from €${t.prixVan}.` : "",
          `${t.distanceKm} km trip.`,
          aeroport ? "Flight tracking included." : "",
          "Luggage included.",
          "Licensed drivers, 24/7.",
          "Free cancellation.",
          "Price confirmed before booking, tolls included.",
        ]
      : [
          p !== undefined ? `Prix fixe dès ${p} €.` : "",
          t.prixVan ? `Van dès ${t.prixVan} €.` : "",
          `Trajet de ${t.distanceKm} km.`,
          aeroport ? "Suivi de vol inclus." : "",
          "Bagages compris.",
          "Chauffeurs agréés 24h/24.",
          "Annulation sans frais.",
          "Prix confirmé avant la réservation, péages compris.",
        ];
  return ajusterDescription(brut, complements);
}
