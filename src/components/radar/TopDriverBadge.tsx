"use client";

// Badge « Top chauffeur » : un appui ouvre une fenêtre qui explique l'avantage,
// les alertes du Radar 5 minutes avant les autres chauffeurs.

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

export function TopDriverBadge({ city }: { city: string }) {
  const t = useTranslations("radar.top");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-semibold"
      >
        <Icon icon="solar:shield-check-linear" className="text-base" />
        {t("badge")}
      </button>

      {open && mounted && createPortal(
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/35" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-label={t("badge")}
            className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl px-5 pt-3 pb-8 sm:p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span aria-hidden className="block sm:hidden mx-auto mb-4 w-10 h-1.5 rounded-full bg-neutral-300" />
            <div className="flex flex-col items-center text-center gap-2.5">
              <span className="w-14 h-14 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                <Icon icon="solar:shield-check-linear" className="text-3xl" />
              </span>
              <h2 className="text-xl font-bold tracking-tight">{t("title", { city })}</h2>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                {t.rich("intro", { b: (chunks) => <strong className="text-neutral-900">{chunks}</strong> })}
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-neutral-50 p-4 space-y-2.5">
              <div className="flex items-center gap-3">
                <span className="w-16 text-xs text-neutral-600">{t("you")}</span>
                <span className="h-1.5 flex-1 rounded-full bg-amber-500" />
                <span className="w-10 text-right text-xs font-semibold text-amber-800">0 min</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 text-xs text-neutral-600">{t("others")}</span>
                <span className="h-1.5 flex-1 flex"><span className="w-1/3" /><span className="flex-1 rounded-full bg-neutral-300" /></span>
                <span className="w-10 text-right text-xs font-semibold">+5 min</span>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <Icon icon="solar:clock-circle-linear" className="text-xl text-amber-700 shrink-0" />
                <p className="text-sm leading-relaxed text-neutral-700"><strong className="font-semibold text-neutral-900">{t("firstT")}</strong> {t("first")}</p>
              </li>
              <li className="flex gap-3">
                <Icon icon="solar:users-group-rounded-linear" className="text-xl text-amber-700 shrink-0" />
                <p className="text-sm leading-relaxed text-neutral-700"><strong className="font-semibold text-neutral-900">{t("keepT")}</strong> {t("keep")}</p>
              </li>
            </ul>

            <button type="button" onClick={() => setOpen(false)} className="mt-6 w-full h-12 rounded-2xl bg-neutral-900 text-white font-semibold">
              {t("ok")}
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
