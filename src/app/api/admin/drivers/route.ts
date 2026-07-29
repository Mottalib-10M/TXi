import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const drivers = await prisma.driver.findMany({
    where: { isActive: true },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      companyName: true,
      zoneAddress: true,
    },
    orderBy: { lastName: "asc" },
  });

  return NextResponse.json({ drivers });
}
