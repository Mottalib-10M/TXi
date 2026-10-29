"use client";

// Navigation des espaces chauffeur et organisation, sur le site comme dans l'app :
// - ordinateur : menu latéral court (les onglets, puis nom, langue, déconnexion) ;
// - mobile : en-tête (logo, pastille du compte) et barre d'onglets en bas.
// Tant que cette barre est affichée, <html data-space-nav> masque la barre
// générale de l'app (AppTabBar), voir globals.css.

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { trackLogout } from "@/lib/analytics";
import { initials } from "@/lib/initials";

export type SpaceTab = {
  href: string;
  label: string;
  icon: string;
  active: boolean;
  badge?: number;
};

export function SpaceNav({
  tabs,
  accountHref,
  userName,
  tag,
  navLabel,
  logoutLabel,
}: {
  tabs: SpaceTab[];
  accountHref: string;
  userName: string;
  tag: React.ReactNode;
  navLabel: string;
  logoutLabel: string;
}) {
  useEffect(() => {
    document.documentElement.setAttribute("data-space-nav", "");
    return () => document.documentElement.removeAttribute("data-space-nav");
  }, []);

  const badge = (count?: number) =>
    count ? (
      <span className="min-w-[20px] h-5 px-1.5 rounded-full bg-amber-500 text-neutral-950 text-[11px] font-bold flex items-center justify-center">
        {count}
      </span>
    ) : null;

  return (
    <>
      {/* En-tête mobile */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-50 flex items-center justify-between px-4">
        <span className="flex items-center gap-2">
          <Link href="/">
            <Logo />
          </Link>
          {tag}
        </span>
        <Link
          href={accountHref as "/dashboard"}
          aria-label={userName}
          className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold"
        >
          {initials(userName) || <Icon icon="solar:user-linear" />}
        </Link>
      </div>
      <div className="lg:hidden h-16" />

      {/* Menu latéral ordinateur */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-white border-r border-neutral-200 z-40 flex-col">
        <div className="h-16 flex items-center px-6 border-b border-neutral-100">
          <Link href="/">
            <Logo />
          </Link>
          <span className="ml-2">{tag}</span>
        </div>
        <nav className="flex-1 py-4 px-3" aria-label={navLabel}>
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href as "/dashboard"}
              aria-current={tab.active ? "page" : undefined}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] mb-1 transition-colors ${
                tab.active
                  ? "bg-neutral-900 text-white font-medium"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <Icon icon={tab.icon} className="text-xl" />
              <span className="flex-1">{tab.label}</span>
              {badge(tab.badge)}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-neutral-100">
          <Link href={accountHref as "/dashboard"} className="flex items-center gap-3 mb-3 px-2 rounded-xl hover:bg-neutral-50 py-1">
            <span className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-xs font-semibold text-neutral-600">
              {initials(userName)}
            </span>
            <span className="text-sm font-medium truncate flex-1 min-w-0">{userName}</span>
          </Link>
          <LanguageSwitcher variant="full" />
          <button
            onClick={() => { trackLogout(); signOut({ callbackUrl: "/" }); }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <Icon icon="solar:logout-2-linear" className="text-lg" />
            {logoutLabel}
          </button>
        </div>
      </aside>

      {/* Barre d'onglets mobile */}
      <nav
        aria-label={navLabel}
        className="space-tabbar lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-neutral-200 grid pb-[env(safe-area-inset-bottom)]"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href as "/dashboard"}
            aria-current={tab.active ? "page" : undefined}
            className={`relative flex flex-col items-center justify-center gap-1 h-16 text-xs ${
              tab.active ? "text-neutral-950 font-semibold" : "text-neutral-500 font-medium"
            }`}
          >
            <span className="relative">
              <Icon icon={tab.icon} className="text-2xl" />
              {tab.badge ? (
                <span className="absolute -top-1.5 -right-3">{badge(tab.badge)}</span>
              ) : null}
            </span>
            {tab.label}
            {tab.active ? <span className="absolute top-0 h-0.5 w-8 rounded-full bg-amber-500" /> : null}
          </Link>
        ))}
      </nav>
    </>
  );
}
