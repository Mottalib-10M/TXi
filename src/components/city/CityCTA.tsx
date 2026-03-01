import Link from "next/link";
import { Icon } from "@iconify/react";

export function CityCTA({ cityName }: { cityName: string }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-neutral-950 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-800 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-20" />
          <div className="relative z-10 fade-up">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Réservez votre taxi à {cityName}
            </h2>
            <p className="text-neutral-400 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">
              Chauffeurs professionnels, tarifs réglementés, disponible 24h/24.
              Votre taxi en quelques clics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#reserver"
                className="inline-flex items-center gap-2 bg-white text-neutral-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors btn-lift"
              >
                Réserver maintenant
                <Icon icon="solar:arrow-right-linear" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-neutral-800 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors border border-neutral-700 btn-lift"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
