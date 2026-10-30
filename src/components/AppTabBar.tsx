"use client";

// Barre d'onglets en bas de l'écran, seulement dans l'app iPhone et Android
// (masquée sur le site par globals.css tant que <html data-app> est absent).
// Sans compte : Menu (les autres pages, par la gauche), ses courses, RÉSERVER
// au centre, les tarifs, l'espace pro.
// Chauffeur ou organisation connecté : leurs 3 onglets habituels, ceux de
// SpaceNav, aussi hors de leur espace (fiche d'un chauffeur, Signaler…) ;
// dans leur espace, SpaceNav s'affiche à la place.

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

type Tab = { href: string; label: string; icon: string; active: boolean };

export function AppTabBar() {
  const t = useTranslations("appTabs");
  const to = useTranslations("org.sidebar");
  const td = useTranslations("dashboard.sidebar");
  const pathname = usePathname();
  const { data } = useSession();
  const role = data?.user?.role;
  const [drawer, setDrawer] = useState(false);

  useEffect(() => setDrawer(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle("sheet-open", drawer);
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const is = (href: string) => pathname === href;
  const under = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Compte connecté hors de son espace : ses 3 onglets habituels, sans onglet actif.
  if (role === "driver" || role === "organization") {
    const tabs = role === "driver"
      ? [
          { href: "/dashboard", label: td("requests"), icon: "solar:bell-linear" },
          { href: "/dashboard/reservations", label: td("rides"), icon: "solar:list-check-linear" },
          { href: "/dashboard/moi", label: td("me"), icon: "solar:user-circle-linear" },
        ]
      : [
          { href: "/org/nouvelle-course", label: to("order"), icon: "solar:add-circle-linear" },
          { href: "/org", label: to("rides"), icon: "solar:list-check-linear" },
          { href: "/org/compte", label: to("account"), icon: "solar:user-circle-linear" },
        ];
    return (
      <nav aria-label={t("nav")} className="app-role-tabbar fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-neutral-200 grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href as "/dashboard"} className="flex flex-col items-center justify-center gap-1 h-16 text-xs text-neutral-500 font-medium">
            <Icon icon={tab.icon} className="text-2xl" />
            {tab.label}
          </Link>
        ))}
      </nav>
    );
  }

  const side: Tab[] = [
    { href: "/mes-reservations", label: t("rides"), icon: "solar:calendar-linear", active: under("/mes-reservations") },
    { href: "/tarifs", label: t("prices"), icon: "solar:tag-price-linear", active: under("/tarifs") },
    { href: "/connexion", label: t("pro"), icon: "solar:user-circle-linear", active: under("/connexion") || under("/inscription") },
  ];
  const main: Tab = { href: "/app", label: t("book"), icon: "solar:map-point-wave-bold", active: is("/app") || is("/") };

  const openMenu = () => {
    // Un menu latéral (chauffeur, organisation) a répondu : il s'ouvre lui-même.
    const handled = !window.dispatchEvent(new Event("app:menu", { cancelable: true }));
    if (!handled) setDrawer((open) => !open);
  };

  const tabLink = (tab: Tab) => (
    <Link key={tab.href} href={tab.href} className={tab.active ? "is-active" : undefined} aria-current={tab.active ? "page" : undefined}>
      <Icon icon={tab.icon} className="text-[22px]" />
      <span>{tab.label}</span>
    </Link>
  );

  const links = [
    { href: "/app", label: t("book"), icon: "solar:map-point-wave-linear" },
    { href: "/mes-reservations", label: t("myRides"), icon: "solar:calendar-linear" },
    { href: "/tarifs", label: t("prices"), icon: "solar:tag-price-linear" },
    { href: "/comment-ca-marche", label: t("howItWorks"), icon: "solar:question-circle-linear" },
    { href: "/contact", label: t("help"), icon: "solar:chat-round-line-linear" },
    { href: "/inscription?type=driver", label: t("becomeDriver"), icon: "solar:wheel-linear" },
    { href: "/connexion", label: t("pro"), icon: "solar:user-circle-linear" },
  ];

  return (
    <>
      <nav className="app-tabbar" aria-label={t("nav")}>
        <button type="button" onClick={openMenu} aria-label={t("menu")}>
          <Icon icon="solar:hamburger-menu-linear" className="text-[22px]" />
          <span>{t("menu")}</span>
        </button>
        {tabLink(side[0])}
        <Link href={main.href} className={`app-tab-main${main.active ? " is-active" : ""}`} aria-current={main.active ? "page" : undefined}>
          <span className="app-tab-main-icon">
            <Icon icon={main.icon} className="text-[24px]" />
          </span>
          <span>{main.label}</span>
        </Link>
        {tabLink(side[1])}
        {tabLink(side[2])}
      </nav>

      {drawer ? <div className="app-drawer-backdrop" onClick={() => setDrawer(false)} /> : null}
      <aside className={`app-drawer${drawer ? " is-open" : ""}`} aria-hidden={!drawer}>
        <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-5">
          <Logo />
          <button type="button" onClick={() => setDrawer(false)} className="rounded-lg p-2" aria-label={t("close")}>
            <Icon icon="solar:close-circle-linear" className="text-2xl text-neutral-500" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] ${under(link.href) ? "bg-neutral-900 font-medium text-white" : "text-neutral-700"}`}
            >
              <Icon icon={link.icon} className="text-xl" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-neutral-100 p-4">
          <LanguageSwitcher variant="full" />
          {data?.user ? (
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/app" })}
              className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-neutral-500"
            >
              <Icon icon="solar:logout-2-linear" className="text-lg" />
              {t("logout")}
            </button>
          ) : null}
        </div>
      </aside>
    </>
  );
}
