import { NextRequest, NextResponse } from "next/server";
import { runEscalation } from "@/lib/escalation";
import { approveExpiredCartes, sendCarteProReminders } from "@/lib/carte-pro";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const querySecret = request.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.CRON_SECRET;

  const isAuthorized =
    expectedSecret &&
    (authHeader === `Bearer ${expectedSecret}` || querySecret === expectedSecret);

  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Diagnostic: count pending bookings by phase BEFORE escalation
    const pendingByPhase = await prisma.booking.groupBy({
      by: ["escalationPhase"],
      where: { status: "PENDING" },
      _count: true,
    });

    const result = await runEscalation();
    const cartesApproved = await approveExpiredCartes().catch((err) => {
      console.error("[Cron] Carte pro approval error:", err);
      return 0;
    });
    const cartesReminded = await sendCarteProReminders().catch((err) => {
      console.error("[Cron] Carte pro reminder error:", err);
      return 0;
    });

    return NextResponse.json({
      ...result,
      cartesApproved,
      cartesReminded,
      pendingBefore: pendingByPhase,
      timestamp: new Date().toISOString(),
      resendConfigured: Boolean(process.env.RESEND_API_KEY),
    });
  } catch (error) {
    console.error("[Cron] Escalation error:", error);
    return NextResponse.json({ error: "Internal error", details: String(error) }, { status: 500 });
  }
}
