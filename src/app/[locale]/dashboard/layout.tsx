import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { WaitlistScreen } from "@/components/dashboard/WaitlistScreen";
import { escalateIfDue } from "@/lib/escalation";
import { getTranslations } from "next-intl/server";
import { SpaceBackLink } from "@/components/layout/SpaceBackLink";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // Course sans réponse (transmise : 30 min) : proposée aux chauffeurs proches, au plus une fois par minute.
  await escalateIfDue();

  if (!session?.user) {
    redirect("/connexion");
  }

  if (session.user.role === "organization") {
    redirect("/org");
  }

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: {
      firstName: true,
      lastName: true,
      companyName: true,
      isVerified: true,
      referralCode: true,
      referralCount: true,
      slug: true,
      carteProUrl: true,
      createdAt: true,
      suspendedAt: true,
      vehicles: true,
      vehicleBrand: true,
      vehicleModel: true,
    },
  });

  // Compte supprimé depuis un autre appareil, ou suspendu par l'administration
  // (src/lib/moderation.ts) : la session est fermée.
  if (!driver) {
    redirect("/api/auth/end-session");
  }
  if (driver.suspendedAt) {
    redirect("/api/auth/end-session?reason=suspended");
  }

  // Generate referral code for existing drivers who don't have one
  let referralCode = driver.referralCode;
  if (!referralCode) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    for (let attempt = 0; attempt < 5; attempt++) {
      let code = "";
      for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      try {
        await prisma.driver.update({
          where: { id: session.user.id },
          data: { referralCode: code },
        });
        referralCode = code;
        break;
      } catch {
        // Unique constraint collision, retry
      }
    }
  }

  // Auto-verify if referral threshold reached
  if (!driver.isVerified && driver.referralCount >= 2) {
    await prisma.driver.update({
      where: { id: session.user.id },
      data: { isVerified: true },
    });
    driver.isVerified = true;
  }

  // Block entire dashboard if not verified → show waitlist screen
  if (!driver.isVerified) {
    const realPosition = await prisma.driver.count({
      where: { isVerified: false, createdAt: { lte: driver.createdAt } },
    });
    const position = realPosition + 27;

    return (
      <div className="min-h-screen bg-neutral-50">
        <main className="p-4 sm:p-6 lg:p-8 flex justify-center">
          <WaitlistScreen
            driverName={driver.firstName}
            referralCode={referralCode || ""}
            referralCount={driver.referralCount}
            waitlistPosition={position}
            slug={driver.slug}
            hasCartePro={Boolean(driver.carteProUrl)}
          />
        </main>
      </div>
    );
  }

  const userName = driver.lastName
    ? `${driver.firstName} ${driver.lastName}`
    : driver.companyName
      ? `${driver.firstName} — ${driver.companyName}`
      : driver.firstName;

  const v0 = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; model?: string }>)[0] : null;
  const qr = {
    slug: driver.slug,
    driverName: `${driver.firstName} ${driver.lastName}`.trim(),
    companyName: driver.companyName || "",
    vehicleModel: v0?.brand ? `${v0.brand} ${v0.model || ""}`.trim() : `${driver.vehicleBrand || ""} ${driver.vehicleModel || ""}`.trim(),
  };

  const tm = await getTranslations("dashboard.me");
  // Pastille de l'onglet Demandes : courses en attente de réponse.
  const pendingCount = await prisma.booking.count({
    where: {
      OR: [{ driverId: session.user.id }, { invitedDriverIds: { has: session.user.id } }],
      status: "PENDING",
    },
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      <DashboardSidebar userName={userName} pendingCount={pendingCount} qr={qr} />
      <div className="lg:pl-64 min-w-0">
        <main className="space-main p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1600px]">
            <SpaceBackLink href="/dashboard/moi" label={tm("title")} pages={["/dashboard/profil", "/dashboard/profil-public", "/dashboard/carte", "/dashboard/parrainage"]} />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
