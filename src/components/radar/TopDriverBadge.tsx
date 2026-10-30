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
        className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-semibold"
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

            {/* La même alerte sur une frise de 5 minutes : vous la recevez au début, les autres à la fin. */}
            <div className="mt-5 rounded-2xl border border-neutral-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{t("chartTitle")}</p>

              <div className="mt-4 grid grid-cols-[5.5rem_1fr] items-center gap-x-3 gap-y-3">
                <span className="text-sm font-semibold text-neutral-900">{t("you")}</span>
                <span className="relative flex items-center h-9 rounded-full bg-amber-100">
                  <span className="absolute left-0 w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center" aria-label={t("alert")}>
                    <Icon icon="solar:bell-bing-bold" className="text-lg" />
                  </span>
                  <span className="w-full pl-10 pr-3 text-center text-xs font-bold text-amber-900">{t("lead")}</span>
                </span>

                <span className="text-sm leading-tight text-neutral-600">{t("others")}</span>
                <span className="relative flex items-center h-9">
                  <span className="absolute left-0 right-9 border-t-2 border-dashed border-neutral-300" />
                  <span className="relative w-full pr-10 text-center text-xs text-neutral-500"><span className="bg-white px-1.5">{t("wait")}</span></span>
                  <span className="absolute right-0 w-9 h-9 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center" aria-label={t("alert")}>
                    <Icon icon="solar:bell-bing-bold" className="text-lg" />
                  </span>
                </span>

                <span />
                <span className="flex justify-between text-xs font-semibold tabular-nums">
                  <span className="w-9 text-center text-amber-800">{t("now")}</span>
                  <span className="w-9 text-center text-neutral-500 whitespace-nowrap">{t("later")}</span>
                </span>
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
