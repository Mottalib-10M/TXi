"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function DashboardSidebar({ userName }: { userName: string }) {
  const t = useTranslations("dashboard.sidebar");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", label: t("dashboard"), icon: "solar:chart-square-linear" },
    { href: "/dashboard/carte", label: t("freeCard"), icon: "solar:card-linear" },
    { href: "/dashboard/profil", label: t("profile"), icon: "solar:user-linear" },
    { href: "/dashboard/profil-public", label: t("publicProfile"), icon: "solar:eye-linear" },
    { href: "/dashboard/reservations", label: t("reservations"), icon: "solar:calendar-linear" },
  ];

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 z-50 flex items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 hover:bg-neutral-100 rounded-lg"
        >
          <Icon icon={mobileOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-neutral-200 z-50 transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-6 border-b border-neutral-100">
            <Link href="/">
              <Logo />
            </Link>
            <span className="ml-2 text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">
              Pro
            </span>
          </div>

          <nav className="flex-1 py-4 px-3">
            {navItems.map((item) => {
              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href as "/dashboard"}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-1 transition-colors ${
                    isActive
                      ? "bg-neutral-900 text-white font-medium"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                >
                  <Icon icon={item.icon} className="text-lg" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-neutral-100">
            <div className="flex items-center gap-3 mb-3 px-2">
              <div className="w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center text-xs font-semibold text-neutral-600">
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{userName}</p>
              </div>
            </div>
            <LanguageSwitcher variant="full" />
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <Icon icon="solar:logout-2-linear" className="text-lg" />
              {t("logout")}
            </button>
          </div>
        </div>
      </aside>

      {/* Spacer for mobile header */}
      <div className="lg:hidden h-16" />
    </>
  );
}
