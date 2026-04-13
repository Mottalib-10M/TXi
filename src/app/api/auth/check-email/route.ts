import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ exists: false });
    }

    const [driver, org] = await Promise.all([
      prisma.driver.findUnique({ where: { email }, select: { id: true } }),
      prisma.organization.findUnique({ where: { email }, select: { id: true } }),
    ]);

    return NextResponse.json({ exists: !!(driver || org) });
  } catch {
    return NextResponse.json({ exists: false });
  }
}
