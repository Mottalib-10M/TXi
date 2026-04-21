import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { Departement } from "@/data/departements";
import { getNearbyDepartements } from "@/data/departements";
import { getStationsInDepartement } from "@/data/stations";
import { getAirportsInDepartement } from "@/data/airports";
import { getTrajetsForDepartement } from "@/data/trajets";
import { getTranslations } from "next-intl/server";

export async function DepartementInternalLinks({ dept }: { dept: Departement }) {
  const t = await getTranslations("departement");
  const stations = getStationsInDepartement(dept);
  const airports = getAirportsInDepartement(dept);
  const trajets = getTrajetsForDepartement(dept);
  const nearbyDepts = getNearbyDepartements(dept);

  if (stations.length === 0 && airports.length === 0 && trajets.length === 0 && nearbyDepts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-14">
        {/* Gares */}
        {stations.length > 0 && (
          <div className="fade-up">
            <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
              {t("garesTitle")}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {stations.map((s) => (
                <Link
                  key={s.slug}
                  href={`/taxi-gare-${s.slug}`}
                  className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="mdi:train" className="text-neutral-400" />
                  <span className="text-sm font-medium">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Aéroports */}
        {airports.length > 0 && (
          <div className="fade-up">
            <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
              {t("aeroportsTitle")}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {airports.map((a) => (
                <Link
                  key={a.slug}
                  href={`/taxi-aeroport-${a.slug}`}
                  className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="mdi:airplane" className="text-neutral-400" />
                  <span className="text-sm font-medium">{a.name}</span>
                  <span className="text-xs text-neutral-400">({a.iata})</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Trajets populaires */}
        {trajets.length > 0 && (
          <div className="fade-up">
            <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
              {t("trajetsTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trajets.map((tr) => (
                <Link
                  key={tr.slug}
                  href={`/trajet/${tr.slug}`}
                  className="flex flex-col gap-1 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <span className="text-sm font-medium">
                    {tr.from} → {tr.to}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {tr.distanceKm} km · {tr.durationMin} min · {tr.priceEstimate}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Départements voisins */}
        {nearbyDepts.length > 0 && (
          <div className="fade-up">
            <h2 className="text-2xl font-semibold tracking-tight text-center mb-8">
              {t("nearbyDepts")}
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {nearbyDepts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/departement/${d.slug}`}
                  className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:map-linear" className="text-neutral-400" />
                  <span className="text-sm font-medium">{d.name} ({d.code})</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
