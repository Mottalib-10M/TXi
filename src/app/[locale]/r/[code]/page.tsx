import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ code: string; locale: string }>;
}

export default async function ReferralTrackingPage({ params }: Props) {
  const { code, locale } = await params;
  const referralCode = code.toUpperCase();

  // Find the driver who owns this referral code
  const driver = await prisma.driver.findUnique({
    where: { referralCode },
    select: { id: true, isVerified: true, referralCount: true },
  });

  if (!driver) {
    redirect(`/${locale}/inscription?type=driver`);
  }

  // Get visitor IP
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  const visitorIp = forwarded?.split(",")[0]?.trim() || realIp || "unknown";

  // Upsert referral click (unique per IP + code)
  try {
    await prisma.referralClick.upsert({
      where: {
        referralCode_visitorIp: { referralCode, visitorIp },
      },
      create: { referralCode, visitorIp },
      update: {},
    });
  } catch {
    // Ignore duplicate errors
  }

  // Count unique clicks and update driver
  const uniqueClicks = await prisma.referralClick.count({
    where: { referralCode },
  });

  const updateData: { referralCount: number; isVerified?: boolean } = {
    referralCount: uniqueClicks,
  };

  // Auto-verify if 10+ unique referrals and not yet verified
  if (uniqueClicks >= 10 && !driver.isVerified) {
    updateData.isVerified = true;
  }

  await prisma.driver.update({
    where: { id: driver.id },
    data: updateData,
  });

  // Redirect to inscription page with referral code
  redirect(`/${locale}/inscription?type=driver&ref=${referralCode}`);
}
