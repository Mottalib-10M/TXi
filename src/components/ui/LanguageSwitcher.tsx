"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";

export function LanguageSwitcher({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const nextLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: nextLocale });
  }

  const otherLocale = locale === "fr" ? "EN" : "FR";
  const label = locale === "fr" ? "Switch to English" : "Passer en français";

  if (variant === "full") {
    return (
      <button
        onClick={switchLocale}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl transition-colors"
        title={label}
      >
        <Icon icon="solar:global-linear" className="text-lg" />
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={switchLocale}
      className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1.5 rounded-lg"
      title={label}
    >
      {otherLocale}
    </button>
  );
}
