"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLoggedIn = status === "authenticated" && session?.user;
  const initials = session?.user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase() || "?";

  return (
    <header
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#reserver" className="text-sm font-medium text-neutral-900">
              Commander
            </a>
            <a
              href="#comment-ca-marche"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Comment ça marche
            </a>
            <a
              href="#chauffeurs"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Chauffeurs
            </a>
            <a
              href="#business"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Business
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
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
                      Tableau de bord
                    </Link>
                    <Link
                      href="/dashboard/profil"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <Icon icon="solar:user-linear" className="text-lg text-neutral-400" />
                      Mon profil
                    </Link>
                    <Link
                      href="/dashboard/reservations"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                    >
                      <Icon icon="solar:calendar-linear" className="text-lg text-neutral-400" />
                      Réservations
                    </Link>
                    <div className="border-t border-neutral-100 mt-1.5 pt-1.5">
                      <button
                        onClick={() => { setMenuOpen(false); signOut({ callbackUrl: "/" }); }}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                      >
                        <Icon icon="solar:logout-2-linear" className="text-lg" />
                        Déconnexion
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
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="hidden md:inline-flex bg-neutral-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                S&apos;inscrire
              </Link>
            </>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Menu"
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
          <a
            href="#reserver"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg px-3 transition-colors"
          >
            Commander
          </a>
          <a
            href="#comment-ca-marche"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
          >
            Comment ça marche
          </a>
          <a
            href="#chauffeurs"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
          >
            Chauffeurs
          </a>
          <a
            href="#business"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-sm font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 transition-colors"
          >
            Business
          </a>
          {isLoggedIn ? (
            <div className="pt-3 border-t border-neutral-100 space-y-1">
              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 rounded-lg px-3 transition-colors"
              >
                Tableau de bord
              </Link>
              <button
                onClick={() => { setMobileOpen(false); signOut({ callbackUrl: "/" }); }}
                className="block w-full text-left py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg px-3 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <div className="pt-3 border-t border-neutral-100 flex gap-3">
              <Link
                href="/connexion"
                className="flex-1 text-center py-3 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
              >
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="flex-1 text-center py-3 text-sm font-medium text-white bg-neutral-950 rounded-full hover:bg-neutral-800 transition-colors"
              >
                S&apos;inscrire
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
