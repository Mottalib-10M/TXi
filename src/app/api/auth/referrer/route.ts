import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const driver = await prisma.driver.findUnique({
    where: { referralCode: code },
    select: { firstName: true, companyName: true },
  });

  if (!driver) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    firstName: driver.firstName,
    companyName: driver.companyName,
  });
}
