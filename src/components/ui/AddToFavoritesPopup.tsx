"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

type Platform = "ios" | "android" | "desktop-mac" | "desktop-other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "desktop-other";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  if (/Macintosh|MacIntel/.test(ua)) return "desktop-mac";
  return "desktop-other";
}

const STORAGE_KEY = "taxineo_favorites_dismissed";

export function AddToFavoritesPopup() {
  const t = useTranslations("favorites");
  const [dismissed, setDismissed] = useState(true);
  const [open, setOpen] = useState(false);
  const [platform, setPlatform] = useState<Platform>("desktop-other");

  useEffect(() => {
    const wasDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(wasDismissed);
    setPlatform(detectPlatform());
  }, []);

  if (dismissed) return null;

  const instructions: Record<Platform, { icon: string; steps: string[] }> = {
    ios: {
      icon: "solar:share-linear",
      steps: [
        t("iosStep1"),
        t("iosStep2"),
        t("iosStep3"),
      ],
    },
    android: {
      icon: "solar:menu-dots-bold",
      steps: [
        t("androidStep1"),
        t("androidStep2"),
        t("androidStep3"),
      ],
    },
    "desktop-mac": {
      icon: "solar:bookmark-linear",
      steps: [
        t("desktopMacStep1"),
        t("desktopMacStep2"),
      ],
    },
    "desktop-other": {
      icon: "solar:bookmark-linear",
      steps: [
        t("desktopOtherStep1"),
        t("desktopOtherStep2"),
      ],
    },
  };

  const info = instructions[platform];

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-white border border-neutral-200 shadow-lg rounded-full p-3 hover:bg-neutral-50 transition-colors"
          aria-label={t("title")}
        >
          <Icon icon="solar:star-linear" className="text-neutral-600 text-xl" />
        </button>
      )}

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-lg max-w-sm w-full p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
            >
              <Icon icon="solar:close-circle-linear" className="text-xl" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                <Icon icon={info.icon} className="text-neutral-700 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t("title")}</h3>
                <p className="text-xs text-neutral-500 font-light">
                  {t("description")}
                </p>
              </div>
            </div>

            <ol className="space-y-3 mb-6">
              {info.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-neutral-600 font-light">{step}</span>
                </li>
              ))}
            </ol>

            <button
              onClick={() => {
                localStorage.setItem(STORAGE_KEY, "true");
                setDismissed(true);
                setOpen(false);
              }}
              className="w-full bg-neutral-950 text-white rounded-xl py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              {t("gotIt")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
