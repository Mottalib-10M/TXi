import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { Station } from "@/data/stations";
import { getNearbyStations } from "@/data/stations";
import { getTranslations } from "next-intl/server";

export async function StationInternalLinks({ station }: { station: Station }) {
  const t = await getTranslations("station");
  const nearby = getNearbyStations(station);

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 fade-up">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("nearbyStations")}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center fade-up">
          {nearby.map((s) => (
            <Link
              key={s.slug}
              href={`/taxi-gare-${s.slug}`}
              className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="mdi:train" className="text-neutral-400" />
              <span className="text-sm font-medium">Taxi {t("stationPrefix")}{s.name}</span>
            </Link>
          ))}
          {station.citySlug && (
            <Link
              href={`/taxi-${station.citySlug}`}
              className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:city-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">Taxi {station.city}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
