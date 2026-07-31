import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getTranslations, getLocale } from "next-intl/server";
import { ReferralPageClient } from "@/components/dashboard/ReferralPageClient";

export default async function ParrainagePage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: {
      referralCode: true,
      referralCount: true,
      firstName: true,
    },
  });

  if (!driver || !driver.referralCode) return null;

  const referrals = await prisma.driver.findMany({
    where: { referredByCode: driver.referralCode },
    select: {
      id: true,
      firstName: true,
      companyName: true,
      createdAt: true,
      isVerified: true,
      lastLoginAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const t = await getTranslations("dashboard");
  const locale = await getLocale();

  return (
    <ReferralPageClient
      referralCode={driver.referralCode}
      referralCount={driver.referralCount}
      referrals={referrals.map((r) => ({
        id: r.id,
        firstName: r.firstName,
        companyName: r.companyName,
        createdAt: r.createdAt.toISOString(),
        isVerified: r.isVerified,
        lastLoginAt: r.lastLoginAt?.toISOString() || null,
      }))}
    />
  );
}
