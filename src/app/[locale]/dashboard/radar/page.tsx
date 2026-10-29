// Page Radar : pour une gare suivie, ce qui amène des clients (forte demande probable,
// trains en retard ou supprimés) et les arrivées des 3 prochaines heures, avec le direct
// de la SNCF quand il répond. En test : réservée à RADAR_TESTERS (src/lib/radar.ts).

import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Link } from "@/i18n/navigation";
import { clock, ensureSchedule, followedStations, radarAllowed, rankStations, realtime, stationView, type BoardRow } from "@/lib/radar";
import { RadarShareButton } from "@/components/radar/RadarShareButton";
import { TopDriverBadge } from "@/components/radar/TopDriverBadge";

export const dynamic = "force-dynamic";

export default async function RadarPage({ searchParams }: { searchParams: { gare?: string } }) {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");
  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: {
      email: true,
      zoneLat: true,
      zoneLng: true,
      zoneRadius: true,
      zoneAddress: true,
      radarOffStations: true,
      radarExtraStations: true,
      isTopDriver: true,
      referralCode: true,
    },
  });
  if (!driver || !radarAllowed(driver.email)) redirect("/dashboard");

  const t = await getTranslations("radar");
  const stations = followedStations(driver);
  const now = new Date();
  const [rt] = await Promise.all([realtime(), ensureSchedule(stations.map((s) => s.uic))]);
  // Toutes les gares suivies, de la plus intéressante à la plus calme ; sans choix, on ouvre la première.
  const views = rankStations(await Promise.all(stations.map((s) => stationView(s, rt, now))), now);
  const view = views.find((v) => v.station.uic === searchParams.gare) ?? views[0] ?? null;
  const station = view?.station;
  const minutes = rt ? Math.max(0, Math.round((now.getTime() - rt.at.getTime()) / 60_000)) : null;
  // Trains d'une forte demande annoncée : repérés dans la liste.
  const wave = view?.events.find((e) => e.kind === "wave");
  const inWave = (r: BoardRow) => Boolean(wave && r.status !== "cancelled" && r.expectedAt >= wave.at && r.expectedAt.getTime() < wave.at.getTime() + 30 * 60_000);
  const city = (driver.zoneAddress ?? station?.name ?? "").split(",")[0].trim();

  return (
    <div className="min-w-0 max-w-3xl space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-sm text-neutral-500 mt-1">{t("subtitle")}</p>
        </div>
        {driver.isTopDriver && <TopDriverBadge city={city} />}
      </div>

      {views.length > 1 && (
        <nav aria-label="Gares" className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {views.map((v) => {
            const on = v.station.uic === station?.uic;
            return (
              <Link
                key={v.station.uic}
                href={`/dashboard/radar?gare=${v.station.uic}` as "/dashboard"}
                scroll={false}
                aria-current={on ? "page" : undefined}
                className={`shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm whitespace-nowrap border ${
                  on ? "bg-neutral-900 border-neutral-900 text-white font-semibold" : "bg-white border-neutral-200 text-neutral-700"
                }`}
              >
                {v.events.length > 0 && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                {v.station.name}
              </Link>
            );
          })}
        </nav>
      )}

      <p className={`flex items-center gap-1.5 text-sm ${minutes == null ? "text-neutral-500" : "text-green-700 font-medium"}`}>
        {minutes != null && <span className="w-1.5 h-1.5 rounded-full bg-green-600" />}
        {minutes == null ? t("noLive") : `${t("card.live")} · ${minutes < 1 ? t("updatedNow") : t("updated", { min: minutes })} · ${t("card.source")}`}
      </p>

      {!station ? (
        <p className="text-sm text-neutral-600 bg-white border border-neutral-200 rounded-2xl p-4">{t("card.noStation")}</p>
      ) : (
        <>
          {view!.events.length > 0 && (
            <div className="space-y-3">
              {view!.events.slice(0, 3).map((e) => (
                <div key={e.key} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0" />
                    <p className="text-sm leading-relaxed">
                      <strong className="font-semibold">{e.title}.</strong> {e.body}
                    </p>
                  </div>
                  <div className="pl-4">
                    <RadarShareButton title={e.title} body={e.body} referralCode={driver.referralCode} />
                  </div>
                </div>
              ))}
            </div>
          )}

          <section className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
            <div className="flex items-baseline justify-between px-4 pt-4 pb-2">
              <h2 className="font-semibold">{t("arrivals")}</h2>
              <span className="text-xs text-neutral-500">{t("next3h")}</span>
            </div>

            {view!.dayArrivals === 0 ? (
              <p className="px-4 pb-4 text-sm text-neutral-500">{t("noData")}</p>
            ) : view!.rows.length === 0 ? (
              <p className="px-4 pb-4 text-sm text-neutral-500">{t("noArrivals")}</p>
            ) : (
              <ul>
                {view!.rows.slice(0, 30).map((r) => {
                  const cancelled = r.status === "cancelled";
                  const moved = r.status === "late";
                  return (
                    <li key={`${r.tripId}-${r.scheduledAt.toISOString()}`} className="flex gap-3 px-4 py-3 border-t border-neutral-100">
                      <span className="w-12 shrink-0 flex flex-col text-[15px] font-semibold tabular-nums">
                        <span className={cancelled || moved ? "line-through text-neutral-400" : r.status === "planned" ? "text-neutral-600" : ""}>
                          {clock(r.scheduledAt)}
                        </span>
                        {moved && <span className="text-orange-700">{clock(r.expectedAt)}</span>}
                      </span>
                      <span className="flex-1 min-w-0 flex flex-col gap-1">
                        <span className={`text-sm font-medium truncate ${cancelled ? "text-neutral-500" : ""}`}>{r.origin}</span>
                        <span className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
                          {r.trainType} {r.trainNumber}
                          {inWave(r) && <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">{t("strong")}</span>}
                          {r.isLast && <span className="px-2 py-0.5 rounded-full bg-neutral-900 text-white font-semibold">{t("lastTrain")}</span>}
                          {(cancelled || (moved && r.delayMin >= 15)) && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">{t("potential")}</span>
                          )}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 text-xs font-semibold ${
                          cancelled ? "text-red-700" : moved ? "text-orange-700" : r.status === "planned" ? "italic font-medium text-neutral-500" : "text-green-700"
                        }`}
                      >
                        {cancelled ? t("cancelled") : moved ? `+${r.delayMin} min` : r.status === "planned" ? t("planned") : t("ontime")}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="px-4 py-3 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">{t("plannedNote")}</p>
          </section>
        </>
      )}

      <Link
        href="/dashboard/profil?section=notifications"
        className="flex items-center justify-between bg-white border border-neutral-200 rounded-2xl px-4 py-3.5 text-sm font-medium hover:bg-neutral-50"
      >
        <span className="flex items-center gap-3">
          <Icon icon="solar:settings-linear" className="text-lg text-neutral-500" />
          {t("settings")}
        </span>
        <Icon icon="solar:alt-arrow-right-linear" className="text-neutral-400" />
      </Link>
    </div>
  );
}
