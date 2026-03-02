import { Icon } from "@iconify/react";
import type { Station } from "@/data/stations";

export function StationInfo({ station }: { station: Station }) {
  return (
    <section className="border-t border-neutral-100 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="text-center fade-up">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{station.annualPassengers}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Voyageurs / an</p>
          </div>
          <div className="text-center fade-up fade-up-delay-1">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{station.transferTime}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Temps de transfert</p>
          </div>
          <div className="text-center fade-up fade-up-delay-2">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">{station.transferPrice}</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Forfait depuis</p>
          </div>
          <div className="text-center fade-up fade-up-delay-3">
            <p className="text-3xl md:text-4xl font-semibold tracking-tight">24/7</p>
            <p className="text-sm text-neutral-500 font-light mt-1">Disponibilité</p>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6 fade-up">
          <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
            <Icon icon="solar:train-linear" className="text-neutral-400" />
            Lignes desservies
          </h3>
          <div className="flex flex-wrap gap-2">
            {station.lines.map((line) => (
              <span key={line} className="text-xs text-neutral-600 font-light bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1.5">
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
