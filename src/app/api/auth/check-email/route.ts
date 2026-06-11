import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { applyStrictRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const rateLimited = await applyStrictRateLimit();
  if (rateLimited) return rateLimited;

  const start = Date.now();

  try {
    const { email } = await request.json();
    if (!email) {
      // Enforce constant response time to prevent timing attacks
      await enforceMinDelay(start, 200);
      return NextResponse.json({ exists: false });
    }

    const [driver, org] = await Promise.all([
      prisma.driver.findUnique({ where: { email }, select: { id: true } }),
      prisma.organization.findUnique({ where: { email }, select: { id: true } }),
    ]);

    const exists = !!(driver || org);

    // Enforce constant response time regardless of result
    await enforceMinDelay(start, 200);

    return NextResponse.json({ exists });
  } catch {
    await enforceMinDelay(start, 200);
    return NextResponse.json({ exists: false });
  }
}

async function enforceMinDelay(start: number, minMs: number) {
  const elapsed = Date.now() - start;
  if (elapsed < minMs) {
    await new Promise((r) => setTimeout(r, minMs - elapsed));
  }
}
