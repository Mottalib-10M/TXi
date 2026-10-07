import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  localeDetection: false,
  // Aucun cookie NEXT_LOCALE : la langue se lit dans l'adresse (règle « sans cookie », RECETTE §15.6).
  localeCookie: false,
});
