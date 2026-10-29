// Carte « Maintenant autour de vous » en haut de l'onglet Demandes : une ligne par gare
// suivie, de la plus intéressante à la plus calme (au plus 3), avec la demande probable
// des 2 prochaines heures par quart d'heure, puis le fait marquant en clair.

import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { demandBuckets, followedStations, hhmm, rankStations, realtime, stationView } from "@/lib/radar";

type Driver = {
  zoneLat: number | null;
  zoneLng: number | null;
  zoneRadius: number;
  radarOffStations: string[];
  radarExtraStations: string[];
};

const SHOWN = 3;
const BAR = ["bg-neutral-200", "bg-neutral-300", "bg-neutral-400", "bg-neutral-600", "bg-neutral-900"];

export async function RadarCard({ driver }: { driver: Driver }) {
  const t = await getTranslations("radar");
  const stations = followedStations(driver);
  const now = new Date();
  const rt = stations.length ? await realtime() : null;
  const views = rankStations(await Promise.all(stations.map((s) => stationView(s, rt, now, 2))), now);

  const lines = views.map((v) => ({ view: v, buckets: demandBuckets(v.rows, now) }));
  // Même échelle pour toutes les gares : on voit tout de suite laquelle reçoit le plus de monde.
  const max = Math.max(1, ...lines.flatMap((l) => l.buckets.map((b) => b.weight)));
  const top = views[0]?.events[0];
  const minutes = rt ? Math.max(0, Math.round((now.getTime() - rt.at.getTime()) / 60_000)) : null;
  const axis = lines[0]?.buckets.filter((_, i) => i % 2 === 0).map((b) => hhmm(b.start)) ?? [];

  return (
    <section className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold">{t("card.title")}</h2>
        {rt ? (
          <span className="flex items-center gap-1.5 text-xs font-medium text-green-700 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            {t("card.live")}
          </span>
        ) : (
          <span className="text-xs text-neutral-500 shrink-0">{t("card.planned")}</span>
        )}
      </div>

      {stations.length === 0 ? (
        <p className="text-sm text-neutral-500 mt-3">{t("card.noStation")}</p>
      ) : (
        <>
          <p className="text-xs text-neutral-500 mt-1">{t("card.legend")}</p>

          <ul className="mt-3 divide-y divide-neutral-100">
            {lines.slice(0, SHOWN).map(({ view, buckets }) => {
              const event = view.events[0];
              return (
                <li key={view.station.uic} className="flex items-center gap-3 py-2.5">
                  <Link
                    href={`/dashboard/radar?gare=${view.station.uic}` as "/dashboard"}
                    className="flex-1 min-w-0"
                  >
                    <span className="block text-sm font-medium truncate">{view.station.name}</span>
                    <span className={`flex items-center gap-1.5 text-xs truncate ${event ? "text-amber-800 font-medium" : "text-neutral-500"}`}>
                      {event && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />}
                      <span className="truncate">{event ? event.short : t("card.calmShort")}</span>
                    </span>
                  </Link>
                  <div className="w-32 sm:w-44 shrink-0 grid grid-cols-8 gap-0.5 items-end h-8" aria-hidden>
                    {buckets.map((b) => {
                      const ratio = b.weight / max;
                      return (
                        <span
                          key={b.start.toISOString()}
                          className={`rounded-sm ${BAR[Math.min(4, Math.round(ratio * 4))]}`}
                          style={{ height: `${Math.max(10, ratio * 100)}%` }}
                        />
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Repères d'heure, alignés sur les barres : une heure toutes les deux barres */}
          <div className="flex gap-3" aria-hidden>
            <span className="flex-1" />
            <div className="w-32 sm:w-44 shrink-0 grid grid-cols-4 text-[10px] text-neutral-500">
              {axis.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>

          {lines.length > SHOWN && (
            <p className="text-xs text-neutral-500 mt-2">{t("card.more", { count: lines.length - SHOWN })}</p>
          )}

          {top ? (
            <div className="flex gap-2.5 items-start rounded-xl bg-amber-50 p-3 mt-4">
              <span className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0" />
              <p className="text-sm leading-snug">
                <strong className="font-semibold">{top.title}.</strong> {top.body}
              </p>
            </div>
          ) : (
            <p className="text-sm text-neutral-600 mt-4">{t("card.calm")}</p>
          )}
        </>
      )}

      <Link
        href="/dashboard/radar"
        className="mt-4 flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800"
      >
        <Icon icon="solar:radar-2-linear" className="text-lg" />
        {t("card.see")}
        <Icon icon="solar:arrow-right-linear" className="text-base" />
      </Link>
      <p className="text-[11px] text-neutral-500 text-center mt-2">
        {minutes == null ? t("noLive") : `${minutes < 1 ? t("updatedNow") : t("updated", { min: minutes })} · ${t("card.source")}`}
      </p>
    </section>
  );
}
