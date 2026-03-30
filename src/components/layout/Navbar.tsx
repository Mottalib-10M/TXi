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
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    .map((n) => n[0])
    .join("")
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
                href="/devenir-chauffeur"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {t("drivers")}
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {t("blog")}
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
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg shadow-black/5 z-50 py-1.5 overflow-hidden">
                    <Link
                      href="/solutions/hotel"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionHotel")}
                    </Link>
                    <Link
                      href="/solutions/hopital"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionHospital")}
                    </Link>
                    <Link
                      href="/solutions/entreprise"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionEnterprise")}
                    </Link>
                    <Link
                      href="/solutions/particulier"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionParticulier")}
                    </Link>
                    <Link
                      href="/solutions/mise-a-disposition"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionMiseADispo")}
                    </Link>
                    <Link
                      href="/solutions/assistance"
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      {t("solutionAssistance")}
                    </Link>
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
                href="/devenir-chauffeur"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("drivers")}
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
              >
                {t("blog")}
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
                  <Link
                    href="/solutions/hotel"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionHotel")}
                  </Link>
                  <Link
                    href="/solutions/hopital"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionHospital")}
                  </Link>
                  <Link
                    href="/solutions/entreprise"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionEnterprise")}
                  </Link>
                  <Link
                    href="/solutions/particulier"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionParticulier")}
                  </Link>
                  <Link
                    href="/solutions/mise-a-disposition"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionMiseADispo")}
                  </Link>
                  <Link
                    href="/solutions/assistance"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
                  >
                    {t("solutionAssistance")}
                  </Link>
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
