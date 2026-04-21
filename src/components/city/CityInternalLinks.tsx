import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { City } from "@/data/cities";
import { getNearbyCities } from "@/data/cities";
import { findDepartementForCoords } from "@/data/departements";
import { stations } from "@/data/stations";
import { airports } from "@/data/airports";
import { haversineDistance } from "@/lib/geo";
import { getTranslations } from "next-intl/server";

export async function CityInternalLinks({ city }: { city: City }) {
  const t = await getTranslations("city");
  const nearby = getNearbyCities(city);
  const dept = findDepartementForCoords(city.lat, city.lng);

  const nearbyStations = stations
    .map((s) => ({ s, dist: haversineDistance(city.lat, city.lng, s.lat, s.lng) }))
    .filter((x) => x.dist < 15)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3)
    .map((x) => x.s);

  const nearbyAirports = airports
    .map((a) => ({ a, dist: haversineDistance(city.lat, city.lng, a.lat, a.lng) }))
    .filter((x) => x.dist < 50)
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 2)
    .map((x) => x.a);

  const hasContent = nearby.length > 0 || dept || nearbyStations.length > 0 || nearbyAirports.length > 0;
  if (!hasContent) return null;

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Villes proches */}
        {nearby.length > 0 && (
          <div>
            <div className="text-center mb-10 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("nearbyCities")}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 fade-up">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/taxi-${c.slug}`}
                  className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                  <span className="text-sm font-medium">{t("taxiPrefix")}{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

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

        {/* Gares proches */}
        {nearbyStations.length > 0 && (
          <div className="fade-up">
            <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
              {t("nearbyStations")}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {nearbyStations.map((s) => (
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

        {/* Aéroports proches */}
        {nearbyAirports.length > 0 && (
          <div className="fade-up">
            <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
              {t("nearbyAirports")}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {nearbyAirports.map((a) => (
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
      </div>
    </section>
  );
}
