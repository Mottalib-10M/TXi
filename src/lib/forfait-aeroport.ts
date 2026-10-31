/**
 * Forfaits réglementés des taxis parisiens entre Paris et les aéroports Charles-de-Gaulle et Orly.
 *
 * Source : arrêté du 24 décembre 2025 relatif aux tarifs des courses de taxi pour 2026, annexe A
 * « Forfaits parisiens » (https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053228231), repris par
 * service-public.gouv.fr (actualité A15396 du 16 janvier 2026, lue le 31 octobre 2026) : « courses
 * directes des taxis parisiens entre Paris et les aéroports de Roissy-Charles-de-Gaulle et d'Orly
 * (dans les 2 sens) » : CDG – rive droite 56 €, CDG – rive gauche 65 €, Orly – rive droite 45 €,
 * Orly – rive gauche 36 €. Suppléments des taxis parisiens : réservation immédiate 4 €, à l'avance 7 €.
 * Montants : src/data/departmental-tariffs.ts (AIRPORT_FARES, AIRPORT_SUPPLEMENTS), jamais ici.
 *
 * Rive gauche = arrondissements 5, 6, 7, 13, 14, 15 (au sud de la Seine) ; les autres, îles de la Cité
 * et Saint-Louis comprises (1er et 4e), sont rive droite. L'arrêté ne découpe pas lui-même les rives.
 * Tests : tests/forfait-aeroport.test.ts (npm run test:unit).
 */
import { getParisAirportFares } from "../data/departmental-tariffs";

export type Aeroport = "CDG" | "ORY";
export type Rive = "droite" | "gauche";

/** Centre des aérogares (mêmes points que src/data/airports.ts) et rayon retenu pour dire « à l'aéroport ». */
const AEROPORTS: Record<Aeroport, { lat: number; lng: number; rayonKm: number }> = {
  CDG: { lat: 49.0097, lng: 2.5479, rayonKm: 4 },
  ORY: { lat: 48.7262, lng: 2.3652, rayonKm: 3 },
};

const RIVE_GAUCHE = new Set([5, 6, 7, 13, 14, 15]);

/** Au-delà de ce délai entre la demande et l'heure de prise en charge, la course est « réservée à l'avance ». */
export const DELAI_RESERVATION_AVANCE_MIN = 15;

function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export function aeroportProche(lat: number, lng: number): Aeroport | null {
  for (const code of Object.keys(AEROPORTS) as Aeroport[]) {
    const a = AEROPORTS[code];
    if (distanceKm(lat, lng, a.lat, a.lng) <= a.rayonKm) return code;
  }
  return null;
}

/** Rive d'une adresse parisienne depuis son code commune INSEE (75101 à 75120) ; null hors de Paris. */
export function riveDepuisCodeInsee(citycode: string | null | undefined): Rive | null {
  const m = /^751(\d\d)$/.exec(citycode ?? "");
  if (!m) return null;
  const arr = Number(m[1]);
  if (arr < 1 || arr > 20) return null;
  return RIVE_GAUCHE.has(arr) ? "gauche" : "droite";
}

export interface ForfaitAeroport {
  aeroport: Aeroport;
  rive: Rive;
  forfait: number;
  supplement: number;
  reservation: "immediate" | "avance";
  total: number;
}

/**
 * Forfait applicable à une course : un bout à CDG ou Orly, l'autre dans Paris (rive connue).
 * `codeDepart` / `codeArrivee` : codes communes INSEE des deux adresses (null si inconnus).
 */
export function forfaitParisAeroport(i: {
  depart: { lat: number; lng: number; citycode?: string | null };
  arrivee: { lat: number; lng: number; citycode?: string | null };
  prisEnCharge: Date;
  maintenant?: Date;
}): ForfaitAeroport | null {
  const aDep = aeroportProche(i.depart.lat, i.depart.lng);
  const aArr = aeroportProche(i.arrivee.lat, i.arrivee.lng);
  let aeroport: Aeroport | null = null;
  let rive: Rive | null = null;
  if (aDep && !aArr) { aeroport = aDep; rive = riveDepuisCodeInsee(i.arrivee.citycode); }
  else if (aArr && !aDep) { aeroport = aArr; rive = riveDepuisCodeInsee(i.depart.citycode); }
  if (!aeroport || !rive) return null;

  const f = getParisAirportFares();
  const forfait = aeroport === "CDG" ? (rive === "droite" ? f.cdgRiveDroite : f.cdgRiveGauche) : (rive === "droite" ? f.orlyRiveDroite : f.orlyRiveGauche);
  const maintenant = i.maintenant ?? new Date();
  const avance = i.prisEnCharge.getTime() - maintenant.getTime() > DELAI_RESERVATION_AVANCE_MIN * 60_000;
  const supplement = avance ? f.supplements.reservationAvance : f.supplements.reservationImmediate;
  return { aeroport, rive, forfait, supplement, reservation: avance ? "avance" : "immediate", total: forfait + supplement };
}

/** Code commune INSEE d'un point, par la Base adresse nationale (api-adresse.data.gouv.fr) ; null en cas d'échec. */
export async function codeInseeDuPoint(lat: number, lng: number): Promise<string | null> {
  try {
    const res = await fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}&limit=1`, { signal: AbortSignal.timeout(2500) });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.features?.[0]?.properties?.citycode ?? null;
  } catch {
    return null;
  }
}

/** Forfait d'une course entre deux points, avec géocodage inverse seulement si l'un des bouts est un aéroport. */
export async function forfaitPourCourse(depLat: number, depLng: number, arrLat: number, arrLng: number, prisEnCharge: Date): Promise<ForfaitAeroport | null> {
  const aDep = aeroportProche(depLat, depLng);
  const aArr = aeroportProche(arrLat, arrLng);
  if (!aDep === !aArr) return null; // aucun aéroport, ou aéroport aux deux bouts
  const citycode = await codeInseeDuPoint(aDep ? arrLat : depLat, aDep ? arrLng : depLng);
  return forfaitParisAeroport({
    depart: { lat: depLat, lng: depLng, citycode: aDep ? null : citycode },
    arrivee: { lat: arrLat, lng: arrLng, citycode: aDep ? citycode : null },
    prisEnCharge,
  });
}
