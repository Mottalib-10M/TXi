import { Icon } from "@iconify/react";
import type { Station } from "@/data/stations";

export function StationPractical({ station }: { station: Station }) {
  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              Bon à savoir
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Infos pratiques gare {station.name}
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8">
              {station.intro}
            </p>
            <ul className="space-y-4">
              {station.practicalInfo.map((info) => (
                <li key={info} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center shrink-0">
                    <Icon icon="solar:check-read-linear" className="text-white text-xs" />
                  </div>
                  <span className="text-sm font-light text-neutral-600">{info}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block fade-up fade-up-delay-2">
            <div className="bg-neutral-950 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-50" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white text-sm font-medium">Votre transfert</p>
                  <span className="text-xs text-neutral-500 font-light">{station.lines[0]}</span>
                </div>
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div>
                      <p className="text-xs text-neutral-500">Train détecté</p>
                      <p className="text-sm text-white font-medium">Arrivée dans 10 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <div>
                      <p className="text-xs text-neutral-500">Chauffeur</p>
                      <p className="text-sm text-white font-medium">En position à la sortie</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Forfait</p>
                    <p className="text-xl font-semibold text-white mt-1">{station.transferPrice}</p>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500">Temps</p>
                    <p className="text-xl font-semibold text-white mt-1">{station.transferTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
