"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 block">
              <Logo />
            </Link>
            <p className="text-xs text-neutral-500 font-light pr-4 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">{t("services")}</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/#reserver" className="hover:text-neutral-900 transition-colors">
                  {t("orderTaxi")}
                </Link>
              </li>
              <li>
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
                <Link href="/#business" className="hover:text-neutral-900 transition-colors">
                  {t("taxinoirBusiness")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-tight">{t("driversSection")}</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
              <li>
                <Link href="/inscription" className="hover:text-neutral-900 transition-colors">
                  {t("becomePartner")}
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
            <h4 className="text-sm font-medium mb-4 tracking-tight">{t("contactSection")}</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-light">
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
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-100 gap-4">
          <p className="text-xs text-neutral-400 font-light">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
