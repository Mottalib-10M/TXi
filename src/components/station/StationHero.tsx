import type { Station } from "@/data/stations";
import { BookingForm } from "@/components/booking/BookingForm";

export function StationHero({ station }: { station: Station }) {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                Transfert 24h/24 · {station.lines[0]}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              {station.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-neutral-500 mb-6 max-w-md font-light leading-relaxed">
              {station.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-neutral-500 font-light mb-2">
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                {station.distanceFromCity}
              </span>
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                Forfait dès {station.transferPrice}
              </span>
              <span className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1">
                {station.annualPassengers} voyageurs/an
              </span>
            </div>
          </div>
          <div className="fade-up fade-up-delay-1">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
