import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 block">
              <Logo />
            </Link>
            <p className="text-xs text-neutral-500 font-light pr-4 leading-relaxed">
              L&apos;application qui remet les professionnels de la route au centre de la
              mobilité urbaine.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/#reserver" className="hover:text-neutral-900 transition-colors">
                  Commander un taxi
                </Link>
              </li>
              <li>
                <Link href="/gares" className="hover:text-neutral-900 transition-colors">
                  Gares
                </Link>
              </li>
              <li>
                <Link href="/aeroports" className="hover:text-neutral-900 transition-colors">
                  Aéroports
                </Link>
              </li>
              <li>
                <Link href="/#business" className="hover:text-neutral-900 transition-colors">
                  TaxiNoir Business
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">Chauffeurs</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/inscription" className="hover:text-neutral-900 transition-colors">
                  Devenir partenaire
                </Link>
              </li>
              <li>
                <Link href="/#chauffeurs" className="hover:text-neutral-900 transition-colors">
                  Avantages
                </Link>
              </li>
              <li>
                <Link href="/connexion" className="hover:text-neutral-900 transition-colors">
                  Application Chauffeur
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/contact" className="hover:text-neutral-900 transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/contact?sujet=demo" className="hover:text-neutral-900 transition-colors">
                  Demander une démo
                </Link>
              </li>
              <li>
                <Link href="/contact?sujet=aide" className="hover:text-neutral-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-100 gap-4">
          <p className="text-xs text-neutral-400 font-light">
            &copy; 2026 TaxiNoir. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
