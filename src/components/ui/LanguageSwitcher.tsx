"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const nextLocale = locale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: nextLocale });
  }

  const otherLocale = locale === "fr" ? "EN" : "FR";

  return (
    <button
      onClick={switchLocale}
      className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1.5 rounded-lg"
      title={locale === "fr" ? "Switch to English" : "Passer en français"}
    >
      {otherLocale}
    </button>
  );
}
