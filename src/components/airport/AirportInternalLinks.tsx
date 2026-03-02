import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Airport } from "@/data/airports";
import { getNearbyAirports } from "@/data/airports";

export function AirportInternalLinks({ airport }: { airport: Airport }) {
  const nearby = getNearbyAirports(airport);

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 fade-up">
          <h2 className="text-2xl font-semibold tracking-tight">
            Autres aéroports à proximité
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 justify-center fade-up">
          {nearby.map((a) => (
            <Link
              key={a.slug}
              href={`/taxi-aeroport-${a.slug}`}
              className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:airplane-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">Taxi {a.name}</span>
              <span className="text-xs text-neutral-400">({a.iata})</span>
            </Link>
          ))}
          {airport.citySlug && (
            <Link
              href={`/taxi-${airport.citySlug}`}
              className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:city-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">Taxi {airport.city}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
