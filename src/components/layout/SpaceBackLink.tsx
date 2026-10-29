"use client";

// Lien « ‹ Moi » (chauffeur) ou « ‹ Compte » (organisation) en haut des pages
// ouvertes depuis ces onglets, pour y revenir d'un appui.

import { Icon } from "@iconify/react";
import { Link, usePathname } from "@/i18n/navigation";

export function SpaceBackLink({ href, label, pages }: { href: string; label: string; pages: string[] }) {
  const pathname = usePathname();
  if (!pages.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  return (
    <Link
      href={href as "/dashboard"}
      className="inline-flex items-center gap-1 -ml-1 mb-3 px-1 py-1 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
    >
      <Icon icon="solar:alt-arrow-left-linear" className="text-base" />
      {label}
    </Link>
  );
}
