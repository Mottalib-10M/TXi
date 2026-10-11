// Bilan de la semaine des chauffeurs (dimanche soir, vercel.json) : une
// notification à chaque chauffeur qui a l'app, avec ses courses des 7 derniers
// jours, pour qu'il revienne sur son tableau de bord. Comptes de démo exclus.

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { driverPool } from "@/lib/demo";
import { notifyDriverWeekly } from "@/lib/push";

export const maxDuration = 300;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authorized =
    secret &&
    (request.headers.get("authorization") === `Bearer ${secret}` || request.nextUrl.searchParams.get("secret") === secret);
  if (!authorized) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Essai : ?driver=<id> n'envoie qu'à ce chauffeur, même désactivé.
  const only = request.nextUrl.searchParams.get("driver");
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const withApp = await prisma.deviceToken.findMany({ where: { driverId: { not: null } }, select: { driverId: true }, distinct: ["driverId"] });
  const drivers = await prisma.driver.findMany({
    where: only ? { id: only } : { ...driverPool(), isActive: true, id: { in: withApp.map((d) => d.driverId!) } },
    select: { id: true },
  });

  let sent = 0;
  for (const { id } of drivers) {
    const rides = await prisma.booking.findMany({
      where: { driverId: id, status: { in: ["ACCEPTED", "COMPLETED"] }, requestedDate: { gte: since, lte: new Date() } },
      select: { lockedPrice: true, estimatedPrice: true },
    });
    const amount = rides.reduce((sum, r) => sum + (r.lockedPrice ?? r.estimatedPrice ?? 0), 0);
    await notifyDriverWeekly(id, rides.length, amount);
    sent++;
  }

  return NextResponse.json({ drivers: sent, timestamp: new Date().toISOString() });
}
