"use client";

import { useTranslations } from "next-intl";
import { FaqSection } from "@/components/seo/FaqSection";

/**
 * FAQ des pages de compte (§7).
 *
 * Les pages de connexion et d'inscription doivent elles aussi répondre aux
 * questions qu'un visiteur se pose avant de laisser ses coordonnées : compte
 * obligatoire ou non, devenir du numéro de téléphone, suppression du compte.
 * Ces deux pages sont des composants client, d'où le `useTranslations`.
 */
export function FaqAuth() {
  const t = useTranslations("auth");
  return (
    <FaqSection
      titre={t("faqTitle")}
      faq={[1, 2, 3].map((i) => ({ q: t(`faq${i}Q`), a: t(`faq${i}A`) }))}
    />
  );
}
