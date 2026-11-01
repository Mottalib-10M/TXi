// Une ligne d'évènement du Radar : ce qui se passe, où, quand le public sort, combien de monde.

import { getLocale, getTranslations } from "next-intl/server";
import { hhmm } from "@/lib/radar";
import type { ZoneEvent } from "@/lib/radar-events";

export async function VenueEventRow({ event, highlight = false, showDay = false }: { event: ZoneEvent; highlight?: boolean; showDay?: boolean }) {
  const t = await getTranslations("radar.events");
  const locale = await getLocale();
  const day = showDay
    ? new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", { timeZone: "Europe/Paris", weekday: "long", day: "numeric", month: "long" }).format(event.peakAt)
    : null;
  const time = day ? `${day}, ${hhmm(event.peakAt)}` : hhmm(event.peakAt);
  return (
    <li className="flex items-start gap-3 py-2.5">
      <span className={`w-1.5 h-1.5 mt-2 rounded-full shrink-0 ${highlight ? "bg-amber-500" : "bg-neutral-300"}`} />
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-medium truncate">
          <span className="text-neutral-500 font-normal">{t(`kinds.${event.kind}`)} · </span>
          {event.title}
        </span>
        <span className="block text-xs text-neutral-500 truncate">{event.venue.name}</span>
        <span className={`block text-xs ${highlight ? "text-amber-800 font-medium" : "text-neutral-600"}`}>
          {event.timeKnown ? t("exit", { time }) : t("exitEstimated", { time })}
          {" · "}
          {t("seats", { count: event.venue.capacity.toLocaleString(locale === "fr" ? "fr-FR" : "en-GB") })}
        </span>
      </span>
      <span className="shrink-0 text-xs text-neutral-500 tabular-nums mt-0.5">{t("km", { km: event.distanceKm.toLocaleString(locale === "fr" ? "fr-FR" : "en-GB") })}</span>
    </li>
  );
}
