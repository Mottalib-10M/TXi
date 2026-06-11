import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { P2PShareForm } from "@/components/dashboard/P2PShareForm";
import { P2PHistory } from "@/components/dashboard/P2PHistory";
import { P2PStats } from "@/components/dashboard/P2PStats";
import { getTranslations } from "next-intl/server";
import { Icon } from "@iconify/react";

export default async function P2PPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const t = await getTranslations("dashboard.p2p");

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: { firstName: true, lastName: true },
  });

  if (!driver) return null;

  const bookings = await prisma.booking.findMany({
    where: { referrerDriverId: session.user.id },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      reference: true,
      departureName: true,
      arrivalName: true,
      requestedDate: true,
      lockedPrice: true,
      status: true,
      targetDriverName: true,
      targetDriverPhone: true,
      p2pCommissionRate: true,
      p2pCommissionAmount: true,
      driver: {
        select: { firstName: true, lastName: true },
      },
      createdAt: true,
    },
  });

  const serialized = bookings.map((b) => ({
    ...b,
    requestedDate: b.requestedDate.toISOString(),
    createdAt: b.createdAt.toISOString(),
  }));

  const totalCommission = bookings
    .filter((b) => b.status === "ACCEPTED" || b.status === "COMPLETED")
    .reduce((sum, b) => sum + (b.p2pCommissionAmount || 0), 0);

  return (
    <div className="min-w-0">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center shrink-0">
          <Icon icon="solar:transfer-horizontal-linear" className="text-violet-600 text-2xl" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t("pageTitle")}</h1>
          <p className="text-sm text-neutral-500">{t("pageSubtitle")}</p>
        </div>
        {totalCommission > 0 && (
          <div className="ml-auto bg-green-50 border border-green-200 rounded-xl px-4 py-2 text-center shrink-0">
            <p className="text-lg font-bold text-green-700">{totalCommission.toFixed(0)} €</p>
            <p className="text-xs text-green-600">{t("earned")}</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <P2PStats />

      {/* 2-column layout: form left, history right */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <P2PShareForm
            driverFirstName={driver.firstName}
            driverFullName={`${driver.firstName} ${driver.lastName}`}
          />
        </div>
        <div className="lg:col-span-2">
          <P2PHistory bookings={serialized} />
        </div>
      </div>
    </div>
  );
}
