// Rappels des courses confirmées (toutes les 10 minutes, vercel.json), au
// chauffeur et au client (organisation, ou téléphone du client qui a réservé
// dans l'app) :
// - la veille au soir, entre 19 h et 23 h (heure de Paris), pour les courses du lendemain ;
// - une heure avant le départ.
// Chaque rappel n'est envoyé qu'une fois (Booking.reminderEveSentAt, reminderHourSentAt).

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyBookingClient, notifyDriver, type PushKind } from "@/lib/push";

export const maxDuration = 300;

const HOUR = 60 * 60 * 1000;

/** Date du jour à Paris, « AAAA-MM-JJ », et heure de Paris. */
function paris(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return { day: `${get("year")}-${get("month")}-${get("day")}`, hour: Number(get("hour")) };
}

const SELECT = {
  id: true,
  reference: true,
  departureName: true,
  arrivalName: true,
  requestedDate: true,
  driverId: true,
  organizationId: true,
  clientDeviceId: true,
  driver: { select: { firstName: true, lastName: true } },
} as const;

type Ride = { departureName: string; arrivalName: string; requestedDate: Date; driverId: string | null; organizationId: string | null; clientDeviceId: string | null; reference: string; driver: { firstName: string; lastName: string } | null };

async function remind(ride: Ride, driverKind: PushKind, clientKind: PushKind) {
  const vars = { from: ride.departureName, to: ride.arrivalName, date: ride.requestedDate };
  await notifyDriver(ride.driverId, driverKind, vars);
  const driver = ride.driver ? `${ride.driver.firstName} ${ride.driver.lastName}`.trim() : "";
  await notifyBookingClient(ride, clientKind, { ...vars, driver });
}

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authorized =
    secret &&
    (request.headers.get("authorization") === `Bearer ${secret}` || request.nextUrl.searchParams.get("secret") === secret);
  if (!authorized) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const now = new Date();

  // Une heure avant : départ dans 65 minutes au plus, pas encore passé.
  const soon = await prisma.booking.findMany({
    where: { status: "ACCEPTED", reminderHourSentAt: null, requestedDate: { gt: now, lte: new Date(now.getTime() + HOUR + 5 * 60 * 1000) } },
    select: SELECT,
  });
  for (const ride of soon) {
    // Marquée d'abord : deux passages simultanés n'envoient pas le rappel deux fois.
    const { count } = await prisma.booking.updateMany({ where: { id: ride.id, reminderHourSentAt: null }, data: { reminderHourSentAt: now } });
    if (count) await remind(ride, "reminderHourDriver", "reminderHourClient");
  }

  // La veille au soir : courses du lendemain (jour de Paris), à partir de 19 h.
  let eve = 0;
  const { hour } = paris(now);
  if (hour >= 19 && hour < 23) {
    const tomorrow = paris(new Date(now.getTime() + 24 * HOUR)).day;
    const candidates = await prisma.booking.findMany({
      where: { status: "ACCEPTED", reminderEveSentAt: null, requestedDate: { gt: new Date(now.getTime() + 2 * HOUR), lte: new Date(now.getTime() + 30 * HOUR) } },
      select: SELECT,
    });
    for (const ride of candidates.filter((r) => paris(r.requestedDate).day === tomorrow)) {
      const { count } = await prisma.booking.updateMany({ where: { id: ride.id, reminderEveSentAt: null }, data: { reminderEveSentAt: now } });
      if (count) {
        await remind(ride, "reminderEveDriver", "reminderEveClient");
        eve++;
      }
    }
  }

  return NextResponse.json({ hour: soon.length, eve, timestamp: now.toISOString() });
}
