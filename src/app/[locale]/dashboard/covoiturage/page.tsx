import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { SharedRoutesManager } from "@/components/driver/SharedRoutesManager";
import { getTranslations } from "next-intl/server";

export default async function CovoituragePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const t = await getTranslations("dashboard");

  const routes = await prisma.sharedRoute.findMany({
    where: { driverId: session.user.id },
    include: {
      passengers: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const serialized = routes.map((r) => ({
    ...r,
    departureTime: r.departureTime.toISOString(),
    createdAt: r.createdAt.toISOString(),
    updatedAt: r.updatedAt.toISOString(),
    passengers: r.passengers.map((p) => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
    })),
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {t("sharedRidesTitle")}
        </h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {t("sharedRidesSubtitle")}
        </p>
      </div>
      <SharedRoutesManager initialRoutes={serialized} />
    </div>
  );
}
