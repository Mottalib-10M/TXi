// Radar des évènements : matchs, concerts, spectacles et salons dans les grandes salles et
// les stades de France, là où des milliers de personnes sortent en même temps.
//
// - Lieux : src/data/radar-venues.json (47 stades, salles et parcs des expositions des grandes
//   villes, coordonnées OpenStreetMap, capacité). Seuls ces lieux comptent : un évènement
//   ailleurs n'amène pas assez de monde pour un taxi.
// - Ligue 1 : calendrier ouvert openfootball (date et heure du coup d'envoi). Sortie du public
//   estimée 1 h 55 après le coup d'envoi.
// - DATAtourisme : fichier national des offices de tourisme (data.gouv.fr, mis à jour chaque
//   nuit). On ne garde que les évènements situés dans un des lieux, hors marchés et expositions.
//   Les heures n'y sont pas toujours : on les lit dans la description, sinon la sortie est estimée.
// - Rechargé chaque nuit par src/app/api/cron/radar-events (table radar_venue_events).

import { prisma } from "@/lib/prisma";
import { haversineDistance } from "@/lib/geo";
import { parisDay, parisToUtc } from "@/lib/radar";
import VENUES from "@/data/radar-venues.json";

export type Venue = { id: string; name: string; kind: "stade" | "salle" | "salon"; capacity: number; lat: number; lon: number; team?: string };
export const ALL_VENUES = VENUES as Venue[];
const BY_ID = new Map(ALL_VENUES.map((v) => [v.id, v]));
export const venueById = (id: string) => BY_ID.get(id);

export type VenueEventKind = "match" | "concert" | "spectacle" | "salon" | "sport";

/** Rayon minimal autour de la zone du chauffeur : on fait plus de route pour un stade que pour une gare. */
export const EVENT_MIN_RADIUS_KM = 10;
/** Jours chargés à l'avance. */
const DAYS_AHEAD = 14;
const MIN = 60_000;

type NewEvent = { key: string; venueId: string; title: string; kind: VenueEventKind; startsAt: Date; peakAt: Date; timeKnown: boolean; source: string };

/** « 20261101 » → « 2026-11-01 ». */
const isoDay = (d: string) => `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
const compactDay = (iso: string) => iso.replaceAll("-", "");

function nextDays(now: Date, count: number) {
  return Array.from({ length: count }, (_, i) => isoDay(parisDay(now.getTime() + i * 86_400_000)));
}

// ---------------------------------------------------------------------------
// Ligue 1

function season(now: Date) {
  const y = Number(parisDay(now).slice(0, 4));
  const m = Number(parisDay(now).slice(4, 6));
  const start = m >= 7 ? y : y - 1;
  return `${start}-${String((start + 1) % 100).padStart(2, "0")}`;
}

export async function ligue1Events(now: Date): Promise<NewEvent[]> {
  const res = await fetch(`https://raw.githubusercontent.com/openfootball/football.json/master/${season(now)}/fr.1.json`, {
    cache: "no-store",
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`Ligue 1 : ${res.status}`);
  const data = (await res.json()) as { matches: { date: string; time?: string; team1: string; team2: string }[] };
  const days = new Set(nextDays(now, DAYS_AHEAD));
  const out: NewEvent[] = [];
  for (const m of data.matches) {
    // Sans heure, le match est trop loin pour être utile (l'horaire est fixé 3 à 5 semaines avant).
    if (!m.time || !days.has(m.date)) continue;
    const venue = ALL_VENUES.find((v) => v.team === m.team1);
    if (!venue) continue;
    const [h, min] = m.time.split(":").map(Number);
    const startsAt = parisToUtc(compactDay(m.date), h * 3600 + min * 60);
    out.push({
      key: `ligue1:${m.date}:${venue.id}`,
      venueId: venue.id,
      title: `${shortTeam(m.team1)} – ${shortTeam(m.team2)}`,
      kind: "match",
      startsAt,
      peakAt: new Date(startsAt.getTime() + 115 * MIN),
      timeKnown: true,
      source: "ligue1",
    });
  }
  return out;
}

/** « Olympique de Marseille » → « OM », « Stade Rennais FC 1901 » → « Rennes » : ce que disent les chauffeurs. */
function shortTeam(name: string) {
  const known: Record<string, string> = {
    "Paris Saint-Germain FC": "PSG",
    "Olympique de Marseille": "OM",
    "Olympique Lyonnais": "OL",
    "Stade Rennais FC 1901": "Rennes",
    "RC Strasbourg Alsace": "Strasbourg",
    "Racing Club de Lens": "Lens",
    "Stade Brestois 29": "Brest",
    "ES Troyes AC": "Troyes",
    "Le Havre AC": "Le Havre",
    "Angers SCO": "Angers",
    "AS Monaco FC": "Monaco",
    "AJ Auxerre": "Auxerre",
    "OGC Nice": "Nice",
    "Lille OSC": "Lille",
    "Toulouse FC": "Toulouse",
    "FC Lorient": "Lorient",
    "Paris FC": "Paris FC",
    "Le Mans FC": "Le Mans",
    "FC Nantes": "Nantes",
    "Montpellier HSC": "Montpellier",
  };
  return known[name] ?? name.replace(/\b(FC|SC|AC|OSC|HSC)\b/g, "").trim();
}

// ---------------------------------------------------------------------------
// DATAtourisme

const DATATOURISME_DATASET = "https://www.data.gouv.fr/api/1/datasets/5b598be088ee387c0c353714/";

/** Lecture CSV (guillemets, retours à la ligne dans les champs), ligne par ligne. */
function csvRows(text: string, onRow: (row: string[]) => void) {
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); onRow(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); onRow(row); }
}

function kindOf(categories: string): VenueEventKind | null {
  const c = categories.toLowerCase();
  // Marchés, expositions, visites, congrès et cirques sous chapiteau : trop peu de monde à la même minute.
  if (/#market\b|#exhibition\b|#visit\b|#workshop|#congress|#seminar|circus|#cirque/.test(c)) return null;
  if (/concert|musicevent/.test(c)) return "concert";
  if (/sport/.test(c)) return "sport";
  if (/saleevent|businessevent|fair|tradeshow|exhibitionevent/.test(c)) return "salon";
  if (/show|theater|theatre|cultural|entertainment|festival|dance|circus/.test(c)) return "spectacle";
  return null;
}

/** Heures citées dans la description (« 20h », « 20 h 30 »), entre 9 h et 23 h 59. */
function hoursIn(text: string) {
  const found = new Set<number>();
  const re = /\b([01]?\d|2[0-3])\s?h\s?([0-5]\d)?\b/gi;
  const head = text.slice(0, 1500);
  let m: RegExpExecArray | null;
  while ((m = re.exec(head))) {
    const h = Number(m[1]) + (m[2] ? Number(m[2]) / 60 : 0);
    if (h >= 9) found.add(h);
  }
  return Array.from(found).sort((a, b) => a - b);
}

/** Sortie du public en heures décimales, et si l'heure vient de la description. */
function peakHour(kind: VenueEventKind, hours: number[]): { hour: number; known: boolean } {
  if (kind === "salon") return hours.length ? { hour: hours[hours.length - 1], known: true } : { hour: 18, known: false };
  if (!hours.length) return { hour: kind === "sport" ? 22 : 22.75, known: false };
  const first = hours[0];
  const last = hours[hours.length - 1];
  // « de 20 h à 23 h » : la seconde heure est la fin. « 18 h 30 ouverture, 20 h concert » : début + 2 h 30.
  if (hours.length >= 2 && last - first >= 2) return { hour: last, known: true };
  return { hour: Math.min(last + 2.5, 23.98), known: true };
}

function nearestVenue(lat: number, lon: number) {
  let best: { venue: Venue; km: number } | null = null;
  for (const v of ALL_VENUES) {
    const km = haversineDistance(lat, lon, v.lat, v.lon);
    if (!best || km < best.km) best = { venue: v, km };
  }
  // Les parcs des expositions sont grands : 800 m ; une salle ou un stade : 400 m.
  return best && best.km <= (best.venue.kind === "salon" ? 0.8 : 0.4) ? best.venue : null;
}

export async function datatourismeEvents(now: Date): Promise<NewEvent[]> {
  const meta = await fetch(DATATOURISME_DATASET, { cache: "no-store", signal: AbortSignal.timeout(20_000) }).then((r) => r.json());
  const url = (meta.resources as { title: string; url: string }[]).find((r) => r.title === "datatourisme-fma.csv")?.url;
  if (!url) throw new Error("DATAtourisme : fichier des évènements introuvable");
  const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(120_000) });
  if (!res.ok) throw new Error(`DATAtourisme : ${res.status}`);
  const text = await res.text();

  const days = nextDays(now, DAYS_AHEAD);
  const first = days[0];
  const last = days[days.length - 1];
  const out = new Map<string, NewEvent>();
  let header: string[] | null = null;
  csvRows(text, (row) => {
    if (!header) { header = row; return; }
    const get = (name: string) => row[header!.indexOf(name)] ?? "";
    const lat = Number(get("Latitude"));
    const lon = Number(get("Longitude"));
    if (!lat || !lon) return;
    const venue = nearestVenue(lat, lon);
    if (!venue) return;
    const kind = kindOf(get("Categories_de_POI"));
    if (!kind) return;
    // Dans un stade, seuls un match ou un concert remplissent les tribunes (le reste a lieu sur le parking ou en salle annexe).
    if (venue.kind === "stade" && kind !== "sport" && kind !== "concert") return;
    if (/\bcirque\b/i.test(get("Nom_du_POI")) && venue.kind === "stade") return;
    const title = get("Nom_du_POI").trim();
    const hours = hoursIn(get("Description"));
    for (const period of get("Periodes_regroupees").split("|")) {
      const m = period.match(/(\d{4}-\d\d-\d\d)<->(\d{4}-\d\d-\d\d)/);
      if (!m || m[1] > last || m[2] < first) continue;
      // Une « période » de plusieurs semaines est une exposition ou un programme, pas un évènement.
      const length = (Date.parse(m[2]) - Date.parse(m[1])) / 86_400_000;
      if (length > (kind === "salon" ? 10 : 3)) continue;
      for (const day of days) {
        if (day < m[1] || day > m[2]) continue;
        const { hour, known } = peakHour(kind, hours);
        const peakAt = parisToUtc(compactDay(day), Math.round(hour * 3600));
        const startsAt = new Date(peakAt.getTime() - (kind === "salon" ? 8 * 60 : 150) * MIN);
        const key = `dt:${day}:${venue.id}:${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60)}`;
        out.set(key, { key, venueId: venue.id, title, kind, startsAt, peakAt, timeKnown: known, source: "datatourisme" });
      }
    }
  });
  return Array.from(out.values());
}

// ---------------------------------------------------------------------------
// Agenda de la Ville de Paris (« Que faire à Paris », données ouvertes) : les salles parisiennes,
// avec l'heure de début et de fin. Les heures y sont celles de Paris, même quand le décalage écrit est faux.

const PARIS_AGENDA = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records";
const PARIS_TAGS = /concert|spectacle musical|humour|danse|théâtre|opéra|sport/i;
const PARIS_SKIP = /enfants|expo|conférence|atelier|balade|nature/i;

export async function parisAgendaEvents(now: Date): Promise<NewEvent[]> {
  const venues = ALL_VENUES.filter((v) => haversineDistance(48.8566, 2.3522, v.lat, v.lon) <= 30);
  const near = venues.map((v) => `within_distance(lat_lon, GEOM'POINT(${v.lon} ${v.lat})', 300m)`).join(" or ");
  const days = new Set(nextDays(now, DAYS_AHEAD));
  const out = new Map<string, NewEvent>();
  for (let offset = 0; offset < 1000; offset += 100) {
    const url = new URL(PARIS_AGENDA);
    url.searchParams.set("where", `(${near}) and date_end >= '${nextDays(now, 1)[0]}'`);
    url.searchParams.set("select", "title,occurrences,qfap_tags,lat_lon");
    url.searchParams.set("limit", "100");
    url.searchParams.set("offset", String(offset));
    const res = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(20_000) });
    if (!res.ok) throw new Error(`Agenda de Paris : ${res.status}`);
    const data = (await res.json()) as { results: { title: string; occurrences: string | null; qfap_tags: string | null; lat_lon: { lat: number; lon: number } | null }[] };
    for (const r of data.results) {
      const tags = r.qfap_tags ?? "";
      if (!r.lat_lon || !r.occurrences || !PARIS_TAGS.test(tags) || PARIS_SKIP.test(tags) || /sport proximité|paris sportives|activité|initiation/i.test(r.title)) continue;
      const venue = nearestVenue(r.lat_lon.lat, r.lat_lon.lon);
      if (!venue) continue;
      const kind: VenueEventKind = /concert|spectacle musical/i.test(tags) ? "concert" : /sport/i.test(tags) ? "sport" : "spectacle";
      for (const occ of r.occurrences.split(";")) {
        const m = occ.match(/^(\d{4}-\d\d-\d\d)T(\d\d):(\d\d).*?_(\d{4}-\d\d-\d\d)T(\d\d):(\d\d)/);
        if (!m || !days.has(m[1])) continue;
        const start = Number(m[2]) * 3600 + Number(m[3]) * 60;
        const end = Number(m[5]) * 3600 + Number(m[6]) * 60;
        // Fin publiée le même jour : c'est la sortie. Sinon (« 00:00 », plusieurs jours) : début + 2 h 30.
        const sameDayEnd = m[4] === m[1] && end > start;
        const startsAt = parisToUtc(compactDay(m[1]), start);
        const peakAt = sameDayEnd ? parisToUtc(compactDay(m[1]), end) : new Date(startsAt.getTime() + 150 * MIN);
        const key = `paris:${m[1]}:${venue.id}:${r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60)}`;
        out.set(key, { key, venueId: venue.id, title: r.title, kind, startsAt, peakAt, timeKnown: start > 0, source: "paris" });
      }
    }
    if (data.results.length < 100) break;
  }
  return Array.from(out.values());
}

// ---------------------------------------------------------------------------
// Chargement de la nuit

/** Recharge les évènements des 14 prochains jours. Une source qui ne répond pas garde ses évènements de la veille. */
export async function refreshVenueEvents(now = new Date()) {
  const report: Record<string, number | string> = {};
  const loaded: NewEvent[] = [];
  const sources = [["ligue1", ligue1Events], ["paris", parisAgendaEvents], ["datatourisme", datatourismeEvents]] as const;
  for (const [source, load] of sources) {
    try {
      let events = await load(now);
      if (source !== "ligue1") {
        // Même lieu, même jour, déjà connu par une source plus précise (Ligue 1, puis agenda de Paris) :
        // la fiche suivante ferait doublon.
        const known = new Set(loaded.filter((e) => e.kind !== "salon").map((e) => `${parisDay(e.startsAt)}:${e.venueId}`));
        events = events.filter((e) => e.kind === "salon" || !known.has(`${parisDay(e.startsAt)}:${e.venueId}`));
      }
      // Deux fiches du même spectacle (même lieu, même jour) : une seule ligne.
      const seen = new Set<string>();
      events = events.filter((e) => {
        if (e.kind === "salon") return true;
        const k = `${parisDay(e.startsAt)}:${e.venueId}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      await prisma.$transaction([
        prisma.radarVenueEvent.deleteMany({ where: { source, peakAt: { gte: new Date(now.getTime() - 60 * MIN) } } }),
        prisma.radarVenueEvent.createMany({ data: events, skipDuplicates: true }),
      ]);
      loaded.push(...events);
      report[source] = events.length;
    } catch (e) {
      report[source] = `erreur : ${e instanceof Error ? e.message : String(e)}`;
    }
  }
  await prisma.radarVenueEvent.deleteMany({ where: { peakAt: { lt: new Date(now.getTime() - 2 * 86_400_000) } } });
  return report;
}

// ---------------------------------------------------------------------------
// Pour un chauffeur

export type ZoneEvent = {
  id: string;
  title: string;
  kind: VenueEventKind;
  venue: Venue;
  distanceKm: number;
  startsAt: Date;
  peakAt: Date;
  timeKnown: boolean;
  score: number;
};

type Zone = { zoneLat: number | null; zoneLng: number | null; zoneRadius: number };

/**
 * Évènements des grands lieux de la zone du chauffeur dont la sortie tombe entre `from` et `to`,
 * du plus intéressant au moins intéressant : beaucoup de monde, près de lui, bientôt.
 */
export async function zoneEvents(d: Zone, from: Date, to: Date, now = new Date()): Promise<ZoneEvent[]> {
  if (d.zoneLat == null || d.zoneLng == null) return [];
  const radius = Math.max(d.zoneRadius || 0, EVENT_MIN_RADIUS_KM);
  const near = new Map(
    ALL_VENUES.map((v) => [v.id, { venue: v, km: haversineDistance(d.zoneLat!, d.zoneLng!, v.lat, v.lon) }]).filter(([, x]) => (x as { km: number }).km <= radius) as [string, { venue: Venue; km: number }][],
  );
  if (!near.size) return [];
  const rows = await prisma.radarVenueEvent.findMany({
    where: { venueId: { in: Array.from(near.keys()) }, peakAt: { gte: from, lte: to } },
    orderBy: { peakAt: "asc" },
    take: 200,
  });
  return rows
    .map((r) => {
      const { venue, km } = near.get(r.venueId)!;
      const hoursLeft = (r.peakAt.getTime() - now.getTime()) / 3600_000;
      const soon = hoursLeft <= 3 ? 1 : hoursLeft <= 8 ? 0.6 : hoursLeft <= 24 ? 0.35 : 0.15;
      // Un salon se vide sur plusieurs heures : moins de monde à la même minute qu'à la fin d'un match.
      const crowd = venue.capacity * (r.kind === "salon" ? 0.4 : 1) * (r.timeKnown ? 1 : 0.8);
      return {
        id: r.id,
        title: r.title,
        kind: r.kind as VenueEventKind,
        venue,
        distanceKm: Math.round(km * 10) / 10,
        startsAt: r.startsAt,
        peakAt: r.peakAt,
        timeKnown: r.timeKnown,
        score: crowd * soon / (1 + km / 10),
      };
    })
    .sort((a, b) => b.score - a.score);
}
