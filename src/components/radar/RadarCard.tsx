// Carte « Maintenant autour de vous » en haut de l'onglet Demandes : la demande probable
// des 2 prochaines heures dans les gares suivies, par quart d'heure, et le fait marquant.

import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { demandBuckets, followedStations, hhmm, realtime, stationView } from "@/lib/radar";

type Driver = {
  zoneLat: number | null;
  zoneLng: number | null;
  zoneRadius: number;
  radarOffStations: string[];
  radarExtraStations: string[];
};

const BAR = ["bg-neutral-200", "bg-neutral-300", "bg-neutral-400", "bg-neutral-600", "bg-neutral-900"];

export async function RadarCard({ driver }: { driver: Driver }) {
  const t = await getTranslations("radar");
  const stations = followedStations(driver);
  const now = new Date();
  const rt = stations.length ? await realtime() : null;
  const views = await Promise.all(stations.map((s) => stationView(s, rt, now, 2)));

  const buckets = demandBuckets(views.flatMap((v) => v.rows), now);
  const max = Math.max(1, ...buckets.map((b) => b.weight));
  const top = views.flatMap((v) => v.events).sort((a, b) => b.priority - a.priority || a.at.getTime() - b.at.getTime())[0];
  const minutes = rt ? Math.max(0, Math.round((now.getTime() - rt.at.getTime()) / 60_000)) : null;

  return (
    <section className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold">{t("card.title")}</h2>
        {rt ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            {t("card.live")}
          </span>
        ) : (
          <span className="text-xs text-neutral-500">{t("card.planned")}</span>
        )}
      </div>

      {stations.length === 0 ? (
        <p className="text-sm text-neutral-500">{t("card.noStation")}</p>
      ) : (
        <>
          <div>
            <div className="flex items-end gap-1 h-14" aria-hidden>
              {buckets.map((b) => {
                const ratio = b.weight / max;
                return (
                  <div
                    key={b.start.toISOString()}
                    className={`flex-1 rounded ${BAR[Math.min(4, Math.round(ratio * 4))]}`}
                    style={{ height: `${Math.max(8, ratio * 100)}%` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[11px] text-neutral-500 mt-1.5">
              {[0, 2, 4, 6, 8].map((i) => (
                <span key={i}>{hhmm(new Date(now.getTime() + i * 15 * 60_000))}</span>
              ))}
            </div>
          </div>

          {top ? (
            <div className="flex gap-2.5 items-start rounded-xl bg-amber-50 p-3">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0" />
              <p className="text-sm leading-snug">
                <strong className="font-semibold">{top.title}.</strong> {top.body}
              </p>
            </div>
          ) : (
            <p className="text-sm text-neutral-600">{t("card.calm")}</p>
          )}
        </>
      )}

      <div className="flex items-center justify-between gap-3">
        <span className="text-xs text-neutral-500 min-w-0 truncate">
          {minutes == null ? t("noLive") : `${minutes < 1 ? t("updatedNow") : t("updated", { min: minutes })} · ${t("card.source")}`}
        </span>
        <Link href="/dashboard/radar" className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-neutral-900">
          {t("card.see")}
          <Icon icon="solar:arrow-right-linear" className="text-base" />
        </Link>
      </div>
    </section>
  );
}
