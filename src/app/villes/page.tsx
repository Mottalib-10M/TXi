import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { FranceMapSection } from "@/components/city/FranceMapSection";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Taxi dans les 50 plus grandes villes de France | TaxiNoir",
  description: "Réservez votre taxi dans les 50 plus grandes villes françaises. Chauffeurs professionnels, tarifs réglementés, disponible 24h/24 partout en France.",
  openGraph: {
    title: "Taxi dans les 50 plus grandes villes de France | TaxiNoir",
    description: "Réservez votre taxi dans les 50 plus grandes villes françaises. Chauffeurs professionnels, tarifs réglementés, disponible 24h/24.",
    url: "https://www.taxinoir.fr/villes",
  },
  alternates: { canonical: "https://www.taxinoir.fr/villes" },
};

export default function VillesPage() {
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
              <li className="text-neutral-900 font-medium">Taxi en France</li>
            </ol>
          </nav>

          <div className="text-center mb-16 fade-up">
            <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-neutral-600">
                {cities.length} villes · 13 régions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4">
              Votre taxi partout en France
            </h1>
            <p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto">
              TaxiNoir est présent dans les {cities.length} plus grandes villes de France,
              réparties dans 13 régions. Survolez une région pour la localiser sur la carte.
            </p>
          </div>

          <FranceMapSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
