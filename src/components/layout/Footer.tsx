import Link from "next/link";
import { Icon } from "@iconify/react";
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
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Icon icon="mdi:twitter" className="text-neutral-600 text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Icon icon="mdi:instagram" className="text-neutral-600 text-sm" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors"
              >
                <Icon icon="mdi:linkedin" className="text-neutral-600 text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <a href="#reserver" className="hover:text-neutral-900 transition-colors">
                  Commander un taxi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Réserver à l&apos;avance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Gares et Aéroports
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-neutral-900 transition-colors">
                  TaxiNoir Business
                </a>
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
                <a href="#chauffeurs" className="hover:text-neutral-900 transition-colors">
                  Avantages
                </a>
              </li>
              <li>
                <Link href="/connexion" className="hover:text-neutral-900 transition-colors">
                  Application Chauffeur
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">Entreprise</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-100 gap-4">
          <p className="text-xs text-neutral-400 font-light">
            &copy; 2026 TaxiNoir. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-400 font-light">
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Conditions générales
            </a>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
