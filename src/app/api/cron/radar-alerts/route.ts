// Radar : toutes les 5 minutes, repère dans les gares suivies ce qui amène des clients
// (forte demande probable, train en retard, train supprimé) et prévient les chauffeurs
// sur leur téléphone. Le Top chauffeur est prévenu tout de suite, les autres 5 minutes
// après. Au plus Driver.radarMaxPerDay alertes par jour (heure de Paris).

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyDriver } from "@/lib/push";
import { serverTrack } from "@/lib/usage-server";
import {
  TOP_DRIVER_HEAD_START_MS,
  ensureSchedule,
  followedStations,
  parisToUtc,
  parisDay,
  realtime,
  stationView,
  type RadarEvent,
} from "@/lib/radar";

export const maxDuration = 300;

const MIN = 60_000;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authorized =
    secret &&
    (request.headers.get("authorization") === `Bearer ${secret}` || request.nextUrl.searchParams.get("secret") === secret);
  if (!authorized) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const now = new Date();
  const drivers = await prisma.driver.findMany({
    where: {
      radarEnabled: true,
      notifyPush: true,
      isActive: true,
      suspendedAt: null,
      zoneLat: { not: null },
      zoneLng: { not: null },
      isVerified: true,
    },
    select: { id: true, zoneLat: true, zoneLng: true, zoneRadius: true, radarOffStations: true, radarExtraStations: true, radarMaxPerDay: true, isTopDriver: true },
  });

  let created = 0;
  // Gares dont les horaires ne sont pas encore chargés (zone changée dans la journée).
  await ensureSchedule(Array.from(new Set(drivers.flatMap((d) => followedStations(d).map((s) => s.uic)))));
  const rt = drivers.length ? await realtime() : null;
  if (rt) {
    // Événements de chaque gare suivie, calculés une seule fois.
    const events = new Map<string, RadarEvent[]>();
    for (const d of drivers) {
      for (const station of followedStations(d)) {
        if (!events.has(station.uic)) events.set(station.uic, (await stationView(station, rt, now)).events);
      }
    }

    for (const d of drivers) {
      const mine = followedStations(d).flatMap((s) => events.get(s.uic) ?? []);
      for (const e of mine) {
        // Forte demande : une seule alerte par gare et par heure, les créneaux glissent de 15 min en 15 min.
        if (e.kind === "wave") {
          const recent = await prisma.radarAlert.findFirst({
            where: { driverId: d.id, stationUic: e.stationUic, key: { startsWith: "wave:" }, createdAt: { gt: new Date(now.getTime() - 60 * MIN) } },
            select: { id: true },
          });
          if (recent) continue;
        }
        const { count } = await prisma.radarAlert.createMany({
          data: [{
            driverId: d.id,
            key: e.key,
            stationUic: e.stationUic,
            title: e.push.title,
            body: e.push.body,
            sendAt: new Date(now.getTime() + (d.isTopDriver ? 0 : TOP_DRIVER_HEAD_START_MS)),
          }],
          skipDuplicates: true,
        });
        created += count;
      }
    }
  }

  // Envoi de ce qui est dû. Une alerte restée 30 minutes sans partir n'a plus d'intérêt.
  const due = await prisma.radarAlert.findMany({
    where: { sentAt: null, sendAt: { lte: now } },
    orderBy: { sendAt: "asc" },
  });
  const maxOf = new Map(drivers.map((d) => [d.id, d.radarMaxPerDay]));
  const dayStart = parisToUtc(parisDay(now), 0);
  let sent = 0;
  for (const a of due) {
    const stale = now.getTime() - a.sendAt.getTime() > 30 * MIN;
    const today = await prisma.radarAlert.count({ where: { driverId: a.driverId, dropped: false, sentAt: { gte: dayStart } } });
    const max = maxOf.get(a.driverId) ?? 0;
    const drop = stale || today >= max;
    const { count } = await prisma.radarAlert.updateMany({ where: { id: a.id, sentAt: null }, data: { sentAt: now, dropped: drop } });
    if (count && !drop) {
      await notifyDriver(a.driverId, "radar", { title: a.title, body: a.body }, "/dashboard/radar");
      sent++;
    }
    // Mesure d'usage : alertes vraiment parties (et non les essais « test: »).
    if (count && !drop && !a.key.startsWith("test:")) {
      serverTrack(a.driverId, "radar_alert_sent", { kind: a.key.split(":")[0], station_uic: a.stationUic, delay_min: Math.round((now.getTime() - a.createdAt.getTime()) / MIN) });
    }
  }

  return NextResponse.json({ drivers: drivers.length, live: Boolean(rt), created, sent, timestamp: now.toISOString() });
}
