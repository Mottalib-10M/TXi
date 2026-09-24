"use client";

import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { LigneMaj } from "@/components/shared/LigneMaj";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 block">
              <Logo />
            </Link>
            <p className="text-xs text-neutral-500 font-light pr-4 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 tracking-tight">{t("services")}</h3>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/#reserver" className="hover:text-neutral-900 transition-colors font-medium text-neutral-700">
                  {t("taxiFixed")}
                </Link>
              </li>
              <li className="border-t border-neutral-100 pt-3">
                <Link href="/gares" className="hover:text-neutral-900 transition-colors">
                  {t("stations")}
                </Link>
              </li>
              <li>
                <Link href="/aeroports" className="hover:text-neutral-900 transition-colors">
                  {t("airports")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/particulier" className="hover:text-neutral-900 transition-colors">
                  {t("solutionParticulier")}
                </Link>
              </li>
              <li>
                <Link href="/solutions/taxi-medical" className="hover:text-neutral-900 transition-colors">
                  {t("solutionTaxiMedical")}
                </Link>
              </li>
              <li className="border-t border-neutral-100 pt-3">
                <Link href="/taxi-vs-vtc" className="hover:text-neutral-900 transition-colors">
                  {t("taxiVsVtc")}
                </Link>
              </li>
              <li>
                <Link href="/chauffeur-prive" className="hover:text-neutral-900 transition-colors">
                  {t("chauffeurPrive")}
                </Link>
              </li>
              <li>
                <Link href="/alternative-vtc-prix-fixe" className="hover:text-neutral-900 transition-colors">
                  {t("alternativeVtc")}
                </Link>
              </li>
              <li>
                <Link href="/taxi-partage" className="hover:text-neutral-900 transition-colors">
                  {t("taxiPartage")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 tracking-tight">{t("driversSection")}</h3>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/inscription" className="hover:text-neutral-900 transition-colors">
                  {t("becomePartner")}
                </Link>
              </li>
              <li>
                <Link href="/devenir-chauffeur" className="hover:text-neutral-900 transition-colors">
                  {t("whyTaxineo")}
                </Link>
              </li>
              <li>
                <Link href="/#chauffeurs" className="hover:text-neutral-900 transition-colors">
                  {t("advantages")}
                </Link>
              </li>
              <li>
                <Link href="/connexion" className="hover:text-neutral-900 transition-colors">
                  {t("driverApp")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 tracking-tight">{t("contactSection")}</h3>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <a href="tel:0759592934" className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                  <Icon icon="solar:phone-linear" className="text-base" />
                  {t("phone")}
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-900 transition-colors">
                  {t("contactUs")}
                </Link>
              </li>
              <li>
                <Link href="/contact?sujet=demo" className="hover:text-neutral-900 transition-colors">
                  {t("requestDemo")}
                </Link>
              </li>
              <li>
                <Link href="/contact?sujet=aide" className="hover:text-neutral-900 transition-colors">
                  {t("support")}
                </Link>
              </li>
              <li className="border-t border-neutral-100 pt-3">
                <Link href="/blog" className="hover:text-neutral-900 transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 tracking-tight">{t("discover")}</h3>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/trajets" className="hover:text-neutral-900 transition-colors">
                  {t("trajets")}
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-neutral-900 transition-colors">
                  {t("tarifs")}
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-neutral-900 transition-colors">
                  {t("guides")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-neutral-900 transition-colors">
                  {t("services2")}
                </Link>
              </li>
              <li className="border-t border-neutral-100 pt-3">
                <Link href="/villes" className="hover:text-neutral-900 transition-colors">
                  {t("villes")}
                </Link>
              </li>
              <li>
                <Link href="/aeroports" className="hover:text-neutral-900 transition-colors">
                  {t("aeroports2")}
                </Link>
              </li>
              <li>
                <Link href="/gares" className="hover:text-neutral-900 transition-colors">
                  {t("gares")}
                </Link>
              </li>
              <li>
                <Link href="/glossaire" className="hover:text-neutral-900 transition-colors">
                  {t("glossaire")}
                </Link>
              </li>
              <li>
                <Link href="/plan-du-site" className="hover:text-neutral-900 transition-colors">
                  {t("sitemap")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* §8.4 : l'avertissement doit être lisible sur chaque page, car chaque
            page affiche des prix qui sont des estimations, pas des devis. */}
        <p className="pt-8 border-t border-neutral-100 text-xs text-neutral-500 font-light leading-relaxed">
          {t("disclaimer")}
        </p>
        {/* §7 : les montants affichés viennent de textes publics ; les nommer sur
            chaque page permet au lecteur de les vérifier à la source. */}
        <p className="mt-2 text-xs text-neutral-500 font-light leading-relaxed">
          {t("sources")}{" "}
          <a className="underline" href="https://www.legifrance.gouv.fr/" rel="noopener">
            Légifrance
          </a>
          {" · "}
          <a className="underline" href="https://www.economie.gouv.fr/dgccrf" rel="noopener">
            DGCCRF
          </a>
          {" · "}
          <a
            className="underline"
            href="https://www.service-public.fr/particuliers/vosdroits/F2287"
            rel="noopener"
          >
            Service-Public.fr
          </a>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-xs text-neutral-500 font-light">
              {t("copyright")}
            </p>
            <LigneMaj position="bas" />
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-light">
              <Link href="/a-propos" className="hover:text-neutral-600 transition-colors">
                {t("about")}
              </Link>
              <span className="text-neutral-300">|</span>
              <Link href="/mentions-legales" className="hover:text-neutral-600 transition-colors">
                {t("legal")}
              </Link>
              <span className="text-neutral-300">|</span>
              {/* §8 : confidentialité et méthodologie doivent être joignables
                  depuis n'importe quelle page, pas seulement depuis l'accueil. */}
              <Link href="/confidentialite" className="hover:text-neutral-600 transition-colors">
                {t("privacy")}
              </Link>
              <span className="text-neutral-300">|</span>
              <Link href="/methodologie" className="hover:text-neutral-600 transition-colors">
                {t("methodology")}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 font-light">{t("paymentMethods")}</span>
            <div className="flex items-center gap-2 text-neutral-500">
              <Icon icon="logos:visa" className="text-2xl" />
              <Icon icon="logos:mastercard" className="text-2xl" />
              <Icon icon="logos:apple-pay" className="text-2xl" />
              <Icon icon="logos:google-pay" className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
