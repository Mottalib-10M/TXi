import { Icon } from "@iconify/react";
import type { Airport } from "@/data/airports";

export function AirportInfo({ airport }: { airport: Airport }) {
  return (
    <section className="border-t border-neutral-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="text-center fade-up">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{airport.iata}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Code IATA</p>
          </div>
          <div className="text-center fade-up fade-up-delay-1">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{airport.transferTime}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Temps de transfert</p>
          </div>
          <div className="text-center fade-up fade-up-delay-2">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{airport.transferPrice}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Forfait depuis</p>
          </div>
          <div className="text-center fade-up fade-up-delay-3">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">24/7</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Disponibilité</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 fade-up">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              <Icon icon="solar:buildings-linear" className="text-neutral-400" />
              Terminaux
            </h3>
            <div className="flex flex-wrap gap-2">
              {airport.terminals.map((t) => (
                <span key={t} className="text-xs text-neutral-600 font-light bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-1">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              <Icon icon="mdi:airplane" className="text-neutral-400" />
              Compagnies principales
            </h3>
            <div className="flex flex-wrap gap-2">
              {airport.airlines.map((a) => (
                <span key={a} className="text-xs text-neutral-600 font-light bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
