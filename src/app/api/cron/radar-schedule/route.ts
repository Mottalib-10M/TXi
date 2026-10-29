// Radar : chaque nuit, recharge les arrivées d'aujourd'hui et de demain dans les gares
// suivies par les chauffeurs (src/lib/radar.ts). Aussi appelée quand un chauffeur ajoute une gare.

import { NextRequest, NextResponse } from "next/server";
import { radarStationsInUse, rebuildSchedule } from "@/lib/radar";

export const maxDuration = 300;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authorized =
    secret &&
    (request.headers.get("authorization") === `Bearer ${secret}` || request.nextUrl.searchParams.get("secret") === secret);
  if (!authorized) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const result = await rebuildSchedule(await radarStationsInUse());
  return NextResponse.json({ ...result, timestamp: new Date().toISOString() });
}
