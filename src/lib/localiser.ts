/**
 * Versions anglaises des pages ville, aéroport et gare.
 *
 * Relevé du 2026-10-03 sur les pages anglaises en ligne : la FAQ propre à
 * chaque ville (« Combien coûte un taxi Paris-CDG ? »), les témoignages, les
 * infos pratiques des aéroports et des gares (« Forfait réglementé rive
 * gauche / rive droite », « 14 km du centre de Paris ») n'étaient saisis
 * qu'en français et servis tels quels : 299 phrases françaises sur 22 des
 * 48 pages /en/taxi-<ville>, et des blocs entiers sur les pages aéroport et
 * gare des grandes villes.
 *
 * Les traductions sont rangées à part (cities-en.ts, airports-en.ts,
 * stations-en.ts) ; la page appelle une seule fois la fonction de cette
 * fichier et tous ses blocs (FAQ et JSON-LD compris) lisent la même version.
 */
import type { City } from "@/data/cities";
import type { Airport } from "@/data/airports";
import type { Station } from "@/data/stations";
import { cityFaqEn, cityTestimonialsEn } from "@/data/cities-en";
import { airportsEn } from "@/data/airports-en";
import { stationsEn } from "@/data/stations-en";
import { lieuEn } from "@/lib/seo-trajet";
import { prixAffiche } from "@/lib/trajet-en";

type Loc = "fr" | "en";

/** Nombre de questions génériques en tête de FAQ, déjà traduites par les gabarits. */
const FAQ_GABARIT = { ville: 4, aeroport: 3, gare: 3 };

/** Repère ou point de départ saisi en français (« Aéroport Charles de Gaulle », « Centre commercial X »). */
export function repereEn(nom: string): string {
  const n = lieuEn(nom.normalize("NFC"));
  return n
    .replace(/^Centre commercial (.+)$/, "$1 shopping centre")
    .replace(/^Zone commerciale (.+)$/, "$1 retail park")
    .replace(/^Quartier d'affaires (.+)$/, "$1 business district")
    .replace(/^Quartier (.+)$/, "$1 district")
    .replace(/^(.+) [Cc]entre$/, "Central $1")
    .replace(/^Centre-ville de (.+)$/, "Central $1")
    .replace(/^Parc des Expositions (.+)$/, "$1 Exhibition Centre")
    .replace(/^Université (.+)$/, "$1 University")
    .replace(/^Campus de (.+)$/, "$1 campus")
    .replace(/^CHU (?:de |d')(.+)$/, "$1 University Hospital")
    .replace(/^CH (?:de |d')(.+)$/, "$1 Hospital")
    .replace(/^Hôpital (?:de |d')?(.+)$/, "$1 Hospital")
    .replace(/^Gare (?:de |d')(?!Lyon$|l')(.+)$/, "$1 station")
    .replace(/^Stade (.+)$/, (m, s) => (/^de France$/.test(s) ? m : `${s} stadium`))
    .replace(/^Port de (.+)$/, "Port of $1")
    .replace(/^Plage(?:s)? (?:de |du |des )?(.+)$/, "$1 beach");
}

/** Prix saisi en français (« 56-65 € », « 36 € ») au format anglais, texte laissé tel quel sinon. */
export function prixEn(prix: string): string {
  const p = prix.normalize("NFC").trim();
  const range = p.match(/^(\d[\d\s]*)\s*[-—–]\s*(\d[\d\s]*)\s*€$/);
  if (range) return prixAffiche(`${range[1]} — ${range[2]} €`, "en");
  return /^\d[\d\s]*\s*€$/.test(p) ? prixAffiche(p.replace(/\s*€$/, ""), "en") : p.replace(/(\d+(?:,\d+)?)\s?€/g, (_, n) => `€${n.replace(",", ".")}`);
}

export function villeLocalisee(c: City, loc: Loc): City {
  if (loc === "fr") return c;
  const en = c.i18n.en;
  const faq = cityFaqEn[c.slug];
  const temoignages = cityTestimonialsEn[c.slug];
  return {
    ...c,
    landmarks: c.landmarks.map(repereEn),
    popularRoutes: c.popularRoutes.map((r) => ({ from: repereEn(r.from), to: repereEn(r.to), price: prixEn(r.price) })),
    i18n: {
      ...c.i18n,
      en: {
        ...en,
        faq: faq ? [...en.faq.slice(0, FAQ_GABARIT.ville), ...faq] : en.faq,
        testimonials: temoignages ?? en.testimonials,
      },
    },
  };
}

export function aeroportLocalise(a: Airport, loc: Loc): Airport {
  if (loc === "fr") return a;
  const t = airportsEn[a.slug];
  const en = a.i18n.en;
  return {
    ...a,
    transferPrice: prixEn(a.transferPrice),
    ...(t
      ? {
          distanceFromCity: t.distanceFromCity,
          annualPassengers: t.annualPassengers,
        }
      : {}),
    destinations: a.destinations.map((d, i) => ({ ...d, name: t?.destinations[i] ?? repereEn(d.name), price: prixEn(d.price) })),
    i18n: {
      ...a.i18n,
      en: t
        ? { ...en, faq: [...en.faq.slice(0, FAQ_GABARIT.aeroport), ...t.extraFaq], testimonials: t.testimonials, practicalInfo: t.practicalInfo }
        : en,
    },
  };
}

export function gareLocalisee(s: Station, loc: Loc): Station {
  if (loc === "fr") return s;
  const t = stationsEn[s.slug];
  const en = s.i18n.en;
  return {
    ...s,
    transferPrice: prixEn(s.transferPrice),
    ...(t ? { distanceFromCity: t.distanceFromCity, annualPassengers: t.annualPassengers, practicalInfo: t.practicalInfo } : {}),
    destinations: s.destinations.map((d, i) => ({ ...d, name: t?.destinations[i] ?? repereEn(d.name), price: prixEn(d.price) })),
    i18n: {
      ...s.i18n,
      en: t ? { ...en, faq: [...en.faq.slice(0, FAQ_GABARIT.gare), ...t.extraFaq], testimonials: t.testimonials } : en,
    },
  };
}
