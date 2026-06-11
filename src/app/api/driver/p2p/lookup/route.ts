import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const phone = searchParams.get("phone")?.trim();

  if (!phone || phone.length < 10) {
    return NextResponse.json({ found: false });
  }

  // Normalize: try matching with raw value, 0-prefixed, and +33-prefixed
  const digits = phone.replace(/[^\d]/g, "");
  const variants: string[] = [phone, digits];
  if (digits.startsWith("33") && digits.length >= 11) {
    variants.push("0" + digits.slice(2));
    variants.push("+" + digits);
    variants.push("+33 " + digits.slice(2));
  } else if (digits.startsWith("0") && digits.length === 10) {
    variants.push("33" + digits.slice(1));
    variants.push("+33" + digits.slice(1));
    variants.push("+33 " + digits.slice(1));
  }

  try {
    const driver = await prisma.driver.findFirst({
      where: {
        phone: { in: variants },
        id: { not: session.user.id },
      },
      select: { firstName: true, lastName: true, phone: true },
    });

    if (!driver) {
      return NextResponse.json({ found: false });
    }

    return NextResponse.json({
      found: true,
      firstName: driver.firstName,
      lastName: driver.lastName,
    });
  } catch {
    return NextResponse.json({ found: false });
  }
}
