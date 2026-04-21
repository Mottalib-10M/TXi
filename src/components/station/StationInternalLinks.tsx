import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { Station } from "@/data/stations";
import { getNearbyStations } from "@/data/stations";
import { findDepartementForCoords } from "@/data/departements";
import { getTrajetsNearPoint } from "@/data/trajets";
import { getTranslations } from "next-intl/server";

export async function StationInternalLinks({ station }: { station: Station }) {
  const t = await getTranslations("station");
  const nearby = getNearbyStations(station);
  const dept = findDepartementForCoords(station.lat, station.lng);
  const relatedTrajets = getTrajetsNearPoint(station.lat, station.lng, 4);

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div>
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

        {/* Département */}
        {dept && (
          <div className="fade-up">
            <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
              {t("departementLink")}
            </h3>
            <div className="flex justify-center">
              <Link
                href={`/departement/${dept.slug}`}
                className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
              >
                <Icon icon="solar:map-linear" className="text-neutral-400" />
                <span className="text-sm font-medium">{dept.name} ({dept.code})</span>
              </Link>
            </div>
          </div>
        )}

        {/* Trajets liés */}
        {relatedTrajets.length > 0 && (
          <div className="fade-up">
            <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
              {t("relatedTrajets")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {relatedTrajets.map((tr) => (
                <Link
                  key={tr.slug}
                  href={`/trajet/${tr.slug}`}
                  className="flex flex-col gap-1 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <span className="text-sm font-medium">{tr.from} → {tr.to}</span>
                  <span className="text-xs text-neutral-400">
                    {tr.distanceKm} km · {tr.durationMin} min · {tr.priceEstimate}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
