"use client";

import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Navbar({ minimal = false }: { minimal?: boolean }) {
  const t = useTranslations("nav");
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const discoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const isLoggedIn = status === "authenticated" && session?.user;
  const initials = session?.user?.name
    ?.split(" ")
    .filter((n) => /^[a-zA-ZÀ-ÿ]/.test(n))
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full border-b border-neutral-100 z-50 transition-all duration-300 ${
        mobileOpen ? "bg-white" : "bg-white/80 backdrop-blur-md"
      } ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Logo />
          </Link>
          {!minimal && (
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/#reserver" className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
                {t("taxiFixedTitle")}
              </Link>
              <Link
                href="/comment-ca-marche"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {t("howItWorks")}
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {t("blog")}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {t("contact")}
              </Link>
              <div
                className="relative"
                onMouseEnter={() => {
                  if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
                  setSolutionsOpen(true);
                }}
                onMouseLeave={() => {
                  solutionsTimeoutRef.current = setTimeout(() => setSolutionsOpen(false), 150);
                }}
              >
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {t("solutions")}
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-xs transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {solutionsOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 z-50 py-2 overflow-hidden">
                    {[
                      { href: "/solutions/hotel", icon: "solar:buildings-2-linear", label: t("solutionHotel"), desc: t("solutionHotelDesc") },
                      { href: "/solutions/hopital", icon: "solar:health-linear", label: t("solutionHospital"), desc: t("solutionHospitalDesc") },
                      { href: "/solutions/entreprise", icon: "solar:case-linear", label: t("solutionEnterprise"), desc: t("solutionEnterpriseDesc") },
                      { href: "/solutions/particulier", icon: "solar:user-linear", label: t("solutionParticulier"), desc: t("solutionParticulierDesc") },
                      { href: "/solutions/mise-a-disposition", icon: "solar:clock-circle-linear", label: t("solutionMiseADispo"), desc: t("solutionMiseADispoDesc") },
                      { href: "/solutions/assistance", icon: "solar:shield-warning-linear", label: t("solutionAssistance"), desc: t("solutionAssistanceDesc") },
                      { href: "/devenir-chauffeur", icon: "solar:steering-wheel-linear", label: t("becomeDriver"), desc: t("becomeDriverDesc") },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-neutral-50 transition-colors"
                      >
                        <Icon icon={item.icon} className="text-neutral-400 text-lg mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{item.label}</p>
                          <p className="text-xs text-neutral-400 font-light">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => {
                  if (discoverTimeoutRef.current) clearTimeout(discoverTimeoutRef.current);
                  setDiscoverOpen(true);
                }}
                onMouseLeave={() => {
                  discoverTimeoutRef.current = setTimeout(() => setDiscoverOpen(false), 150);
                }}
              >
                <button
                  onClick={() => setDiscoverOpen(!discoverOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {t("discover")}
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-xs transition-transform ${discoverOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {discoverOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 z-50 py-2 overflow-hidden">
                    {[
                      { href: "/trajets", icon: "solar:routing-linear", label: t("discoverTrajets"), desc: t("discoverTrajetsDesc") },
                      { href: "/tarifs", icon: "solar:tag-price-linear", label: t("discoverTarifs"), desc: t("discoverTarifsDesc") },
                      { href: "/guides", icon: "solar:book-linear", label: t("discoverGuides"), desc: t("discoverGuidesDesc") },
                      { href: "/departements", icon: "solar:map-linear", label: t("discoverDepartements"), desc: t("discoverDepartementsDesc") },
                      { href: "/services", icon: "solar:settings-linear", label: t("discoverServices"), desc: t("discoverServicesDesc") },
                      { href: "/villes", icon: "solar:city-linear", label: t("discoverVilles"), desc: t("discoverVillesDesc") },
                      { href: "/aeroports", icon: "mdi:airplane", label: t("discoverAeroports"), desc: t("discoverAeroportsDesc") },
                      { href: "/gares", icon: "mdi:train", label: t("discoverGares"), desc: t("discoverGaresDesc") },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDiscoverOpen(false)}
                        className="flex items-start gap-3 px-4 py-2.5 hover:bg-neutral-50 transition-colors"
                      >
                        <Icon icon={item.icon} className="text-neutral-400 text-lg mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{item.label}</p>
                          <p className="text-xs text-neutral-400 font-light">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:0759592934"
            className="hidden md:flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <Icon icon="solar:phone-linear" className="text-base" />
            07 59 59 29 34
          </a>
          <LanguageSwitcher />
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2.5 hover:bg-neutral-100 rounded-full pl-3 pr-1.5 py-1.5 transition-colors"
              >
                <span className="hidden md:block text-sm font-medium text-neutral-700">
                  {session.user?.name}
                </span>
                <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-xs font-semibold text-white">
                  {initials}
                </div>
              </button>

              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 z-50 py-1.5 overflow-hidden">
                    <div className="px-4 py-2.5 border-b border-neutral-100">
                      <p className="text-sm font-medium truncate">{session.user?.name}</p>
                      <p className="text-xs text-neutral-500 truncate">{session.user?.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <Icon icon="solar:chart-square-linear" className="text-lg text-neutral-400" />
                      {t("dashboard")}
                    </Link>
                    <Link
                      href="/dashboard/profil"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <Icon icon="solar:user-linear" className="text-lg text-neutral-400" />
                      {t("myProfile")}
                    </Link>
                    <Link
                      href="/dashboard/reservations"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <Icon icon="solar:calendar-linear" className="text-lg text-neutral-400" />
                      {t("reservations")}
                    </Link>
                    <div className="border-t border-neutral-100 mt-1.5 pt-1.5">
                      <button
                        onClick={() => { setMenuOpen(false); signOut({ callbackUrl: "/" }); }}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                      >
                        <Icon icon="solar:logout-2-linear" className="text-lg" />
                        {t("logout")}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/connexion"
                className="hidden md:block text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                {t("login")}
              </Link>
              <Link
                href="/inscription"
                className="hidden md:inline-flex bg-neutral-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("signup")}
              </Link>
            </>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label={t("menu")}
          >
            <Icon
              icon={mobileOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
              className="text-2xl"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden bg-white border-t border-neutral-100 ${
          mobileOpen ? "open" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
          {!minimal && (
            <>
              <Link
                href="/#reserver"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg px-3 transition-colors"
              >
                {t("taxiFixedTitle")}
              </Link>
              <Link
                href="/comment-ca-marche"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("howItWorks")}
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("blog")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("contact")}
              </Link>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("solutions")}
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`text-xs transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 space-y-0.5">
                  {[
                    { href: "/solutions/hotel", label: t("solutionHotel") },
                    { href: "/solutions/hopital", label: t("solutionHospital") },
                    { href: "/solutions/entreprise", label: t("solutionEnterprise") },
                    { href: "/solutions/particulier", label: t("solutionParticulier") },
                    { href: "/solutions/mise-a-disposition", label: t("solutionMiseADispo") },
                    { href: "/solutions/assistance", label: t("solutionAssistance") },
                    { href: "/devenir-chauffeur", label: t("becomeDriver") },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
              <button
                onClick={() => setMobileDiscoverOpen(!mobileDiscoverOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("discover")}
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`text-xs transition-transform ${mobileDiscoverOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDiscoverOpen && (
                <div className="pl-4 space-y-0.5">
                  {[
                    { href: "/trajets", label: t("discoverTrajets") },
                    { href: "/tarifs", label: t("discoverTarifs") },
                    { href: "/guides", label: t("discoverGuides") },
                    { href: "/departements", label: t("discoverDepartements") },
                    { href: "/services", label: t("discoverServices") },
                    { href: "/villes", label: t("discoverVilles") },
                    { href: "/aeroports", label: t("discoverAeroports") },
                    { href: "/gares", label: t("discoverGares") },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
          {isLoggedIn ? (
            <div className="pt-3 border-t border-neutral-100 space-y-1">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg px-3 transition-colors"
              >
                {t("dashboard")}
              </Link>
              <Link
                href="/dashboard/profil"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("myProfile")}
              </Link>
              <Link
                href="/dashboard/reservations"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("reservations")}
              </Link>
              <button
                onClick={() => { setMobileOpen(false); signOut({ callbackUrl: "/" }); }}
                className="block w-full text-left py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg px-3 transition-colors"
              >
                {t("logout")}
              </button>
            </div>
          ) : (
            <div className="pt-4 pb-2 border-t border-neutral-100 space-y-3">
              <Link
                href="/connexion"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                {t("login")}
              </Link>
              <Link
                href="/inscription"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3 text-sm font-medium text-white bg-neutral-950 rounded-xl hover:bg-neutral-800 transition-colors"
              >
                {t("signup")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
