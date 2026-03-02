import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { FranceMapStations } from "@/components/station/FranceMapStations";
import { stations } from "@/data/stations";

export const metadata: Metadata = {
  title: "Taxi Gare - Transferts vers les 50 gares de France | TaxiNoir",
  description: "Réservez votre transfert taxi vers et depuis les 50 principales gares de France. Tarifs forfaitaires, suivi de train, accueil personnalisé. Disponible 24h/24.",
  openGraph: {
    title: "Taxi Gare - Transferts vers les 50 gares de France | TaxiNoir",
    description: "Réservez votre transfert taxi vers et depuis les 50 principales gares de France. Tarifs forfaitaires, suivi de train.",
    url: "https://www.taxinoir.fr/gares",
  },
  alternates: { canonical: "https://www.taxinoir.fr/gares" },
};

export default function GaresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-neutral-500 font-light mb-6">
            <ol className="flex items-center gap-1.5">
              <li><Link href="/" className="hover:text-neutral-900 transition-colors">Accueil</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">Taxi Gare</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {stations.length} gares · 12 régions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              Transfert taxi gare
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              Tarifs forfaitaires, suivi de train en temps réel, accueil à la sortie de la gare.
              Survolez une région pour localiser ses gares sur la carte.
            </p>
          </div>

          <FranceMapStations />
        </div>
      </main>

      <Footer />
    </div>
  );
}
