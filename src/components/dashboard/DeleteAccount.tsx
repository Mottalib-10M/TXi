"use client";

// Bloc « Supprimer mon compte », replié par défaut, en bas du profil chauffeur
// et des paramètres de l'organisation. La suppression demande une case cochée.

import { useState } from "react";
import { useTranslations } from "next-intl";
import { deleteMyAccountAction } from "@/lib/deleteAccountAction";

export function DeleteAccount() {
  const t = useTranslations("deleteAccount");
  const [checked, setChecked] = useState(false);
  return (
    <details className="mt-10 bg-white border border-red-100 rounded-2xl p-5">
      <summary className="cursor-pointer text-sm font-medium text-red-700">{t("title")}</summary>
      <form action={deleteMyAccountAction} className="mt-4 space-y-4">
        <p className="text-sm text-neutral-600 leading-relaxed">{t("body")}</p>
        <label className="flex items-start gap-3 text-sm text-neutral-800">
          <input type="checkbox" name="confirm" value="yes" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="mt-0.5 h-4 w-4 accent-red-600" />
          <span>{t("confirm")}</span>
        </label>
        <button type="submit" disabled={!checked} className="w-full rounded-xl bg-red-600 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40">
          {t("button")}
        </button>
      </form>
    </details>
  );
}
