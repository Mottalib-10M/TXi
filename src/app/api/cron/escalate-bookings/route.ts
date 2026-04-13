import { NextRequest, NextResponse } from "next/server";
import { runEscalation } from "@/lib/escalation";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const expectedSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${expectedSecret}`) {
    console.log(`[Cron] Unauthorized - auth: ${authHeader ? "present" : "missing"}, secret configured: ${expectedSecret ? "yes" : "NO"}`);
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

    return NextResponse.json({
      ...result,
      pendingBefore: pendingByPhase,
      timestamp: new Date().toISOString(),
      resendConfigured: Boolean(process.env.RESEND_API_KEY),
    });
  } catch (error) {
    console.error("[Cron] Escalation error:", error);
    return NextResponse.json({ error: "Internal error", details: String(error) }, { status: 500 });
  }
}
