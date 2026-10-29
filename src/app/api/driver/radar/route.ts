// Réglages du Radar du chauffeur (Moi › Notifications) : gares de sa zone, allumées
// d'office, gares ajoutées hors zone, nombre d'alertes par jour. ?q= cherche une gare.

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { radarAllowed, rebuildSchedule, searchStations, stationByUic, zoneStations } from "@/lib/radar";

export const maxDuration = 60;

const SELECT = {
  email: true,
  zoneLat: true,
  zoneLng: true,
  zoneRadius: true,
  radarEnabled: true,
  radarOffStations: true,
  radarExtraStations: true,
  radarMaxPerDay: true,
} as const;

async function currentDriver() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") return null;
  const driver = await prisma.driver.findUnique({ where: { id: session.user.id }, select: { id: true, ...SELECT } });
  return driver && radarAllowed(driver.email) ? driver : null;
}

type Driver = NonNullable<Awaited<ReturnType<typeof currentDriver>>>;

function settings(d: Driver) {
  return {
    enabled: d.radarEnabled,
    maxPerDay: d.radarMaxPerDay,
    zone: zoneStations(d).map((s) => ({ uic: s.uic, name: s.name, distanceKm: Math.round(s.distanceKm * 10) / 10, on: !d.radarOffStations.includes(s.uic) })),
    extra: d.radarExtraStations.map(stationByUic).filter(Boolean).map((s) => ({ uic: s!.uic, name: s!.name })),
  };
}

export async function GET(request: Request) {
  const driver = await currentDriver();
  if (!driver) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const q = new URL(request.url).searchParams.get("q");
  if (q != null) return NextResponse.json({ stations: searchStations(q).map((s) => ({ uic: s.uic, name: s.name })) });
  return NextResponse.json(settings(driver));
}

export async function PUT(request: Request) {
  const driver = await currentDriver();
  if (!driver) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const body = await request.json();
  const valid = (list: unknown) => (Array.isArray(list) ? Array.from(new Set(list.filter((u): u is string => typeof u === "string" && Boolean(stationByUic(u))))).slice(0, 20) : undefined);

  const extra = valid(body.extra);
  const updated = await prisma.driver.update({
    where: { id: driver.id },
    data: {
      radarEnabled: typeof body.enabled === "boolean" ? body.enabled : undefined,
      radarMaxPerDay: [1, 2, 3, 5].includes(body.maxPerDay) ? body.maxPerDay : undefined,
      radarOffStations: valid(body.off),
      radarExtraStations: extra,
    },
    select: { id: true, ...SELECT },
  });

  // Nouvelle gare hors zone : ses horaires sont chargés tout de suite, sans attendre la nuit.
  const added = (extra ?? []).filter((u) => !driver.radarExtraStations.includes(u));
  if (added.length) {
    const known = await prisma.radarArrival.findFirst({ where: { stationUic: { in: added } }, select: { id: true } });
    if (!known) await rebuildSchedule(added).catch((error) => console.error("[radar] horaires", error));
  }

  return NextResponse.json(settings(updated));
}
