// Radar : chaque nuit, recharge les grands évènements des 14 prochains jours
// (matchs de Ligue 1, concerts, spectacles, salons dans les grands lieux, src/lib/radar-events.ts).

import { NextRequest, NextResponse } from "next/server";
import { refreshVenueEvents } from "@/lib/radar-events";

export const maxDuration = 300;

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const authorized =
    secret &&
    (request.headers.get("authorization") === `Bearer ${secret}` || request.nextUrl.searchParams.get("secret") === secret);
  if (!authorized) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const result = await refreshVenueEvents();
  return NextResponse.json({ ...result, timestamp: new Date().toISOString() });
}
