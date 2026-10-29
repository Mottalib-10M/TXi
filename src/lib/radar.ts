// Radar des gares : quand des clients potentiels arrivent près des gares d'un chauffeur.
//
// - Gares : src/data/sncf-stations.json (scripts/radar-stations.mjs). Un chauffeur suit
//   d'office les gares de sa zone (au moins MIN_RADIUS_KM), moins celles qu'il coupe,
//   plus celles qu'il ajoute (Driver.radarOffStations, radarExtraStations).
// - Horaires : chaque nuit, les arrivées du jour et du lendemain dans les gares suivies
//   sont tirées des horaires ouverts de la SNCF (rebuildSchedule → RadarArrival).
// - Direct : retards et suppressions, flux GTFS-RT de la SNCF mis à jour toutes les
//   2 minutes, lu à la demande (realtime). S'il ne répond pas, on affiche l'horaire prévu.
// - Alertes : forte demande probable, train en retard, train supprimé (stationEvents),
//   envoyées par src/app/api/cron/radar-alerts.

import GtfsRt from "gtfs-realtime-bindings";
import { unzipSync, strFromU8 } from "fflate";
import { prisma } from "@/lib/prisma";
import { haversineDistance } from "@/lib/geo";
import STATIONS from "@/data/sncf-stations.json";

/** En test : le Radar n'est visible que pour ces comptes. */
export const RADAR_TESTERS = ["amradif@gmail.com"];
export function radarAllowed(email?: string | null) {
  return Boolean(email && RADAR_TESTERS.includes(email.toLowerCase()));
}

const GTFS_URL = "https://eu.ftp.opendatasoft.com/sncf/plandata/Export_OpenData_SNCF_GTFS_NewTripId.zip";
const RT_URL = "https://proxy.transport.data.gouv.fr/resource/sncf-gtfs-rt-trip-updates";
export const MIN_RADIUS_KM = 5;
/** Le Top chauffeur reçoit les alertes ce délai avant les autres. */
export const TOP_DRIVER_HEAD_START_MS = 5 * 60 * 1000;

// ---------------------------------------------------------------------------
// Gares

export type Station = { uic: string; name: string; lat: number; lon: number };
const ALL: Station[] = (STATIONS as [string, string, number, number][]).map(([uic, name, lat, lon]) => ({ uic, name, lat, lon }));
const BY_UIC = new Map(ALL.map((s) => [s.uic, s]));

export function stationByUic(uic: string) {
  return BY_UIC.get(uic) ?? null;
}

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function searchStations(q: string, limit = 8): Station[] {
  const needle = fold(q.trim());
  if (needle.length < 2) return [];
  const starts = ALL.filter((s) => fold(s.name).startsWith(needle));
  const contains = ALL.filter((s) => !fold(s.name).startsWith(needle) && fold(s.name).includes(needle));
  return [...starts, ...contains].slice(0, limit);
}

type RadarDriver = {
  zoneLat: number | null;
  zoneLng: number | null;
  zoneRadius: number;
  radarOffStations: string[];
  radarExtraStations: string[];
};

/** Gares de la zone du chauffeur, de la plus proche à la plus lointaine. */
export function zoneStations(d: Pick<RadarDriver, "zoneLat" | "zoneLng" | "zoneRadius">) {
  if (d.zoneLat == null || d.zoneLng == null) return [];
  const radius = Math.max(d.zoneRadius || 0, MIN_RADIUS_KM);
  return ALL.map((s) => ({ ...s, distanceKm: haversineDistance(d.zoneLat!, d.zoneLng!, s.lat, s.lon) }))
    .filter((s) => s.distanceKm <= radius)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 12);
}

/** Gares suivies : celles de la zone qu'il n'a pas coupées, puis celles qu'il a ajoutées. */
export function followedStations(d: RadarDriver): Station[] {
  const zone = zoneStations(d).filter((s) => !d.radarOffStations.includes(s.uic));
  const extra = d.radarExtraStations.map(stationByUic).filter((s): s is Station => Boolean(s) && !zone.some((z) => z.uic === s!.uic));
  return [...zone, ...extra];
}

// ---------------------------------------------------------------------------
// Heure de Paris

const PARIS = new Intl.DateTimeFormat("en-US", {
  timeZone: "Europe/Paris",
  hourCycle: "h23",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function parisParts(at: Date | number) {
  const p = PARIS.formatToParts(new Date(at));
  const g = (t: string) => Number(p.find((x) => x.type === t)?.value);
  return { y: g("year"), m: g("month"), d: g("day"), h: g("hour"), min: g("minute"), s: g("second") };
}

function parisOffsetMs(at: number) {
  const p = parisParts(at);
  return Date.UTC(p.y, p.m - 1, p.d, p.h, p.min, p.s) - Math.floor(at / 1000) * 1000;
}

/** Jour de Paris, « AAAAMMJJ ». */
export function parisDay(at: Date | number) {
  const p = parisParts(at);
  return `${p.y}${String(p.m).padStart(2, "0")}${String(p.d).padStart(2, "0")}`;
}

/** Heure de Paris en heures décimales (21,5 = 21 h 30). */
export function parisHour(at: Date) {
  const p = parisParts(at);
  return p.h + p.min / 60;
}

/** Jour « AAAAMMJJ » + secondes depuis minuit (peut dépasser 24 h, comme dans les horaires) → instant. */
export function parisToUtc(day: string, seconds: number) {
  const local = Date.UTC(Number(day.slice(0, 4)), Number(day.slice(4, 6)) - 1, Number(day.slice(6, 8))) + seconds * 1000;
  let utc = local - parisOffsetMs(local);
  utc = local - parisOffsetMs(utc);
  return new Date(utc);
}

/** « 17 h 30 », « 17 h », avec des espaces insécables : l'heure ne se coupe jamais en fin de ligne. */
export function hhmm(at: Date) {
  const p = parisParts(at);
  return p.min ? `${p.h}\u00a0h\u00a0${String(p.min).padStart(2, "0")}` : `${p.h}\u00a0h`;
}

/** « 17:30 ». */
export function clock(at: Date) {
  const p = parisParts(at);
  return `${String(p.h).padStart(2, "0")}:${String(p.min).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Horaires prévus (chaque nuit)

const TRAIN_TYPES: Record<string, string> = {
  "TGV INOUI": "TGV",
  OUIGO: "OUIGO",
  INTERCITES: "Intercités",
  "INTERCITES de nuit": "Intercités de nuit",
  "Train TER": "TER",
  TramTrain: "Tram-train",
  ICE: "ICE",
  Lyria: "Lyria",
  Train: "Train",
};

const uicOf = (stopId: string) => stopId.match(/(\d{8})$/)?.[1] ?? null;

/** Type de train d'un point d'arrêt (« StopPoint:OCETGV INOUI-87543009 »), null pour un car ou une navette. */
function trainTypeOf(stopId: string) {
  if (!stopId.startsWith("StopPoint:OCE")) return null;
  return TRAIN_TYPES[stopId.slice(13, stopId.lastIndexOf("-"))] ?? null;
}

/** Chaque ligne d'un fichier des horaires, sans l'en-tête. */
function eachLine(text: string, fn: (line: string) => void) {
  let start = text.indexOf("\n") + 1;
  while (start > 0 && start < text.length) {
    const end = text.indexOf("\n", start);
    const line = text.slice(start, end === -1 ? undefined : end).replace(/\r$/, "");
    if (line) fn(line);
    if (end === -1) break;
    start = end + 1;
  }
}

const seconds = (hms: string) => {
  const [h, m, s] = hms.split(":").map(Number);
  return h * 3600 + m * 60 + (s || 0);
};

/** Gares suivies par au moins un chauffeur qui a le Radar. */
export async function radarStationsInUse() {
  const drivers = await prisma.driver.findMany({
    where: { radarEnabled: true, zoneLat: { not: null }, zoneLng: { not: null }, email: { in: RADAR_TESTERS } },
    select: { zoneLat: true, zoneLng: true, zoneRadius: true, radarOffStations: true, radarExtraStations: true },
  });
  return Array.from(new Set(drivers.flatMap((d) => followedStations(d).map((s) => s.uic))));
}

/** Recharge les arrivées d'aujourd'hui et de demain (Paris) dans ces gares. */
export async function rebuildSchedule(stationUics: string[]) {
  const now = Date.now();
  const days = [parisDay(now), parisDay(now + 24 * 3600 * 1000)];
  const wanted = new Set(stationUics);
  if (!wanted.size) return { stations: 0, arrivals: 0 };

  const res = await fetch(GTFS_URL, { cache: "no-store", signal: AbortSignal.timeout(60_000) });
  if (!res.ok) throw new Error(`Horaires SNCF : ${res.status}`);
  const files = unzipSync(new Uint8Array(await res.arrayBuffer()), {
    filter: (f) => ["calendar_dates.txt", "trips.txt", "stops.txt", "stop_times.txt"].includes(f.name),
  });

  // Jours de circulation de chaque service, limités à aujourd'hui et demain.
  const serviceDays = new Map<string, Set<string>>();
  eachLine(strFromU8(files["calendar_dates.txt"]), (line) => {
    const [service, date, exception] = line.split(",");
    if (!days.includes(date)) return;
    const set = serviceDays.get(service) ?? new Set<string>();
    if (exception === "1") set.add(date);
    else set.delete(date);
    serviceDays.set(service, set);
  });

  const trips = new Map<string, { days: string[]; number: string }>();
  eachLine(strFromU8(files["trips.txt"]), (line) => {
    const [, service, tripId, headsign] = line.split(",");
    const active = serviceDays.get(service);
    if (active?.size) trips.set(tripId, { days: Array.from(active), number: headsign });
  });

  const stopNames = new Map<string, string>();
  eachLine(strFromU8(files["stops.txt"]), (line) => {
    const [id, name] = line.split(",");
    stopNames.set(id, name);
  });

  // Une seule lecture des horaires de passage : gare de départ de chaque train, et arrivées dans nos gares.
  const first = new Map<string, { seq: number; stopId: string }>();
  const hits: { tripId: string; uic: string; type: string; secs: number }[] = [];
  eachLine(strFromU8(files["stop_times.txt"]), (line) => {
    const [tripId, arrival, , stopId, seqText, , , dropOff] = line.split(",");
    if (!trips.has(tripId)) return;
    const seq = Number(seqText);
    const f = first.get(tripId);
    if (!f || seq < f.seq) first.set(tripId, { seq, stopId });
    const uic = uicOf(stopId);
    if (!uic || !wanted.has(uic) || dropOff === "1") return;
    const type = trainTypeOf(stopId);
    if (type) hits.push({ tripId, uic, type, secs: seconds(arrival) });
  });

  const rows = hits.flatMap((h) => {
    const trip = trips.get(h.tripId)!;
    const from = first.get(h.tripId)!;
    if (uicOf(from.stopId) === h.uic) return []; // gare de départ : pas d'arrivée
    return trip.days.map((day) => ({
      stationUic: h.uic,
      tripId: h.tripId,
      serviceDate: day,
      scheduledAt: parisToUtc(day, h.secs),
      origin: stopNames.get(from.stopId) ?? "",
      trainType: h.type,
      trainNumber: trip.number,
      isLast: false,
    }));
  });

  // Dernière arrivée de la journée dans chaque gare.
  const last = new Map<string, (typeof rows)[number]>();
  for (const r of rows) {
    const key = `${r.stationUic}|${r.serviceDate}`;
    if (!last.has(key) || r.scheduledAt > last.get(key)!.scheduledAt) last.set(key, r);
  }
  last.forEach((r) => (r.isLast = true));

  await prisma.radarArrival.deleteMany({
    where: { OR: [{ scheduledAt: { lt: new Date(now - 12 * 3600 * 1000) } }, { stationUic: { in: Array.from(wanted) }, serviceDate: { in: days } }] },
  });
  for (let i = 0; i < rows.length; i += 1000) {
    await prisma.radarArrival.createMany({ data: rows.slice(i, i + 1000), skipDuplicates: true });
  }
  return { stations: wanted.size, arrivals: rows.length };
}

// ---------------------------------------------------------------------------
// Direct

type RtStop = { delay: number; skipped: boolean };
type Realtime = { at: Date; trips: Map<string, { cancelled: boolean; stops: Map<string, RtStop> }> };
let rtCache: { rt: Realtime; fetchedAt: number } | null = null;

const num = (v: unknown) => (v == null ? 0 : Number(String(v)));

/** Retards et suppressions en direct (flux SNCF), gardés 90 secondes. null si le flux ne répond pas. */
export async function realtime(): Promise<Realtime | null> {
  if (rtCache && Date.now() - rtCache.fetchedAt < 90_000) return rtCache.rt;
  try {
    const res = await fetch(RT_URL, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`Direct SNCF : ${res.status}`);
    const T = GtfsRt.transit_realtime;
    const feed = T.FeedMessage.decode(new Uint8Array(await res.arrayBuffer()));
    const trips: Realtime["trips"] = new Map();
    for (const e of feed.entity) {
      const tu = e.tripUpdate;
      if (!tu?.trip?.tripId) continue;
      const stops = new Map<string, RtStop>();
      for (const s of tu.stopTimeUpdate ?? []) {
        const uic = s.stopId ? uicOf(s.stopId) : null;
        if (!uic) continue;
        stops.set(uic, {
          delay: num(s.arrival?.delay ?? s.departure?.delay),
          skipped: s.scheduleRelationship === T.TripUpdate.StopTimeUpdate.ScheduleRelationship.SKIPPED,
        });
      }
      trips.set(`${tu.trip.tripId}|${tu.trip.startDate ?? ""}`, {
        cancelled: tu.trip.scheduleRelationship === T.TripDescriptor.ScheduleRelationship.CANCELED,
        stops,
      });
    }
    const rt = { at: new Date(num(feed.header.timestamp) * 1000), trips };
    rtCache = { rt, fetchedAt: Date.now() };
    return rt;
  } catch (error) {
    console.error("[radar] direct SNCF indisponible", error);
    return rtCache && Date.now() - rtCache.fetchedAt < 15 * 60_000 ? rtCache.rt : null;
  }
}

// ---------------------------------------------------------------------------
// Tableau des arrivées

export type BoardRow = {
  tripId: string;
  scheduledAt: Date;
  expectedAt: Date;
  delayMin: number;
  status: "ontime" | "late" | "cancelled" | "planned";
  origin: string;
  trainType: string;
  trainNumber: string;
  isLast: boolean;
};

/** Arrivées dans une gare entre from et to (heure attendue), avec le direct quand il existe. */
export async function stationBoard(uic: string, from: Date, to: Date, rt: Realtime | null): Promise<BoardRow[]> {
  const rows = await prisma.radarArrival.findMany({
    where: { stationUic: uic, scheduledAt: { gte: new Date(from.getTime() - 4 * 3600 * 1000), lte: to } },
    orderBy: { scheduledAt: "asc" },
  });
  return rows
    .map((r) => {
      const live = rt?.trips.get(`${r.tripId}|${r.serviceDate}`);
      const stop = live?.stops.get(uic);
      const cancelled = Boolean(live?.cancelled || stop?.skipped);
      const delayMin = stop && !cancelled ? Math.max(0, Math.round(stop.delay / 60)) : 0;
      const status: BoardRow["status"] = !live ? "planned" : cancelled ? "cancelled" : delayMin >= 5 ? "late" : "ontime";
      return {
        tripId: r.tripId,
        scheduledAt: r.scheduledAt,
        expectedAt: new Date(r.scheduledAt.getTime() + delayMin * 60_000),
        delayMin,
        status,
        origin: r.origin,
        trainType: r.trainType,
        trainNumber: r.trainNumber,
        isLast: r.isLast,
      };
    })
    .filter((r) => r.expectedAt >= from && r.expectedAt <= to)
    .sort((a, b) => a.expectedAt.getTime() - b.expectedAt.getTime());
}

// ---------------------------------------------------------------------------
// Demande probable et alertes

/** Poids d'un train dans la demande : un TGV amène bien plus de voyageurs qu'un TER. */
const WEIGHT: Record<string, number> = { TGV: 3, OUIGO: 3, ICE: 3, Lyria: 3, Intercités: 2, "Intercités de nuit": 2 };
const weight = (r: BoardRow) => WEIGHT[r.trainType] ?? 1;

/** Demande par quart d'heure, à partir du quart d'heure en cours (barres de la carte Radar). */
export function demandBuckets(rows: BoardRow[], from: Date, count = 8) {
  const first = Math.floor(from.getTime() / (15 * 60_000)) * 15 * 60_000;
  return Array.from({ length: count }, (_, i) => {
    const start = first + i * 15 * 60_000;
    const inside = rows.filter((r) => r.status !== "cancelled" && r.expectedAt.getTime() >= start && r.expectedAt.getTime() < start + 15 * 60_000);
    return { start: new Date(start), trains: inside.length, weight: inside.reduce((n, r) => n + weight(r), 0) };
  });
}

export type RadarEvent = {
  key: string;
  kind: "wave" | "late" | "cancelled";
  stationUic: string;
  title: string;
  body: string;
  /** Quelques mots pour la liste des gares : « Forte demande dès 19 h 29 ». */
  short: string;
  at: Date;
  priority: number;
};

const MIN = 60_000;
const typeList = (rows: BoardRow[]) => Array.from(new Set(rows.map((r) => r.trainType))).join(", ");

/**
 * Événements qui valent le déplacement dans une gare, du plus important au moins important.
 * dayArrivals : nombre d'arrivées prévues dans la journée, pour juger ce qui sort de l'ordinaire.
 */
export function stationEvents(station: Station, rows: BoardRow[], now: Date, dayArrivals: number): RadarEvent[] {
  const events: RadarEvent[] = [];
  const t = now.getTime();

  for (const r of rows) {
    // Train en retard : 30 min ou plus, ou 15 min le soir ou pour le dernier train.
    const lateEvening = parisHour(r.expectedAt) >= 21 || parisHour(r.expectedAt) < 5;
    if (r.status === "late" && (r.delayMin >= 30 || (r.delayMin >= 15 && (lateEvening || r.isLast)))) {
      const at = r.expectedAt.getTime();
      if (at < t + 10 * MIN || at > t + 90 * MIN) continue;
      const extra = r.isLast
        ? " C'est le dernier train de la journée."
        : lateEvening
          ? " Tard le soir, peu de transports en commun : les voyageurs chercheront un taxi."
          : "";
      events.push({
        key: `late:${r.tripId}:${station.uic}`,
        kind: "late",
        stationUic: station.uic,
        title: `Train en retard : clients potentiels à ${station.name}`,
        body: `${r.trainType} de ${r.origin} : +${r.delayMin} min, arrivée prévue à ${hhmm(r.expectedAt)}.${extra}`,
        short: `Train en retard, arrivée ${hhmm(r.expectedAt)}`,
        at: r.expectedAt,
        priority: r.isLast ? 4 : 3,
      });
    }
    // Train supprimé : ses voyageurs prendront le suivant, ou un autre moyen.
    if (r.status === "cancelled") {
      const at = r.scheduledAt.getTime();
      if (at < t + 20 * MIN || at > t + 180 * MIN) continue;
      const next = rows.find((n) => n.status !== "cancelled" && n.origin === r.origin && n.expectedAt > r.scheduledAt);
      const extra = r.isLast
        ? " C'était le dernier train de la journée : ses voyageurs chercheront un autre moyen."
        : next
          ? ` Ses voyageurs arriveront par le train suivant, à ${hhmm(next.expectedAt)}.`
          : "";
      events.push({
        key: `cancel:${r.tripId}:${station.uic}`,
        kind: "cancelled",
        stationUic: station.uic,
        title: `Train supprimé : clients potentiels à ${station.name}`,
        body: `Le ${r.trainType} de ${r.origin} prévu à ${hhmm(r.scheduledAt)} est supprimé.${extra}`,
        short: r.isLast ? "Dernier train supprimé" : `Train de ${hhmm(r.scheduledAt)} supprimé`,
        at: next?.expectedAt ?? r.scheduledAt,
        priority: r.isLast ? 5 : 2,
      });
    }
  }

  // Forte demande : beaucoup plus d'arrivées que d'habitude sur 30 minutes, dans 15 à 75 minutes.
  const usual = Math.max(1, (dayArrivals / 36) * 1.5); // 18 h de service, 36 demi-heures ; moyenne pondérée approchée
  for (let start = t + 15 * MIN; start <= t + 75 * MIN; start += 15 * MIN) {
    const inside = rows.filter((r) => r.status !== "cancelled" && r.expectedAt.getTime() >= start && r.expectedAt.getTime() < start + 30 * MIN);
    const w = inside.reduce((n, r) => n + weight(r), 0);
    if (inside.length >= 3 && w >= 5 && w >= 2 * usual) {
      const a = inside[0].expectedAt;
      const b = inside[inside.length - 1].expectedAt;
      events.push({
        key: `wave:${station.uic}:${parisDay(a)}:${Math.floor(parisHour(a) * 2)}`,
        kind: "wave",
        stationUic: station.uic,
        title: `Forte demande de taxi probable · ${station.name}`,
        body: `${inside.length} trains arrivent entre ${hhmm(a)} et ${hhmm(b)} (${typeList(inside)}). Beaucoup de clients potentiels à la sortie.`,
        short: `Forte demande dès ${hhmm(a)}`,
        at: a,
        priority: 1,
      });
      break;
    }
  }

  return events.sort((a, b) => b.priority - a.priority || a.at.getTime() - b.at.getTime());
}

/** Tout ce qu'il faut pour afficher une gare : arrivées des prochaines heures et événements. */
export async function stationView(station: Station, rt: Realtime | null, now = new Date(), hours = 3) {
  const [rows, dayArrivals] = await Promise.all([
    stationBoard(station.uic, new Date(now.getTime() - 5 * MIN), new Date(now.getTime() + hours * 3600 * 1000), rt),
    prisma.radarArrival.count({ where: { stationUic: station.uic, serviceDate: parisDay(now) } }),
  ]);
  return { station, rows, dayArrivals, events: stationEvents(station, rows, now, dayArrivals) };
}

type StationView = Awaited<ReturnType<typeof stationView>>;

/** Gares de la plus intéressante à la plus calme : événement le plus fort, puis demande de la prochaine heure. */
export function rankStations(views: StationView[], now = new Date()) {
  const nextHour = (v: StationView) =>
    v.rows.filter((r) => r.status !== "cancelled" && r.expectedAt.getTime() < now.getTime() + 3600_000).reduce((n, r) => n + weight(r), 0);
  return [...views].sort((a, b) => (b.events[0]?.priority ?? 0) - (a.events[0]?.priority ?? 0) || nextHour(b) - nextHour(a));
}
