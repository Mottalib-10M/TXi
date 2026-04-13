import { NextRequest, NextResponse } from "next/server";
import { runEscalation } from "@/lib/escalation";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await runEscalation();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Escalation cron error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
