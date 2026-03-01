import { Icon } from "@iconify/react";
import type { City } from "@/data/cities";

export function CityLandmarks({ city }: { city: City }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            Destinations populaires
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Lieux desservis à {city.name}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {city.landmarks.map((landmark, i) => (
            <div
              key={landmark}
              className={`flex items-center gap-3 bg-white border border-neutral-200 rounded-xl p-4 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                <Icon icon="solar:map-point-linear" className="text-neutral-600 text-lg" />
              </div>
              <span className="text-sm font-light text-neutral-700">{landmark}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
