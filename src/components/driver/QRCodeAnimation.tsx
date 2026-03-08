"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const STEP_DURATION = 2500;
const TOTAL_STEPS = 4;

export function QRCodeAnimation() {
  const t = useTranslations("whyJoin");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % TOTAL_STEPS);
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: "solar:qr-code-linear", label: t("qrStep1") },
    { icon: "solar:smartphone-linear", label: t("qrStep2") },
    { icon: "solar:user-check-rounded-linear", label: t("qrStep3") },
    { icon: "solar:calendar-mark-linear", label: t("qrStep4") },
  ];

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="w-[260px] h-[460px] bg-neutral-950 rounded-[40px] p-3 mx-auto shadow-2xl shadow-black/20 relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-950 rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden relative">
          {/* Step 0 — QR code on card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700"
            style={{
              opacity: step === 0 ? 1 : 0,
              transform: step === 0 ? "scale(1)" : "scale(0.9)",
            }}
          >
            <div className="w-40 h-48 bg-white border-2 border-neutral-200 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center mb-3">
                <Icon icon="solar:qr-code-bold" className="text-neutral-800 text-4xl" />
              </div>
              <p className="text-[10px] font-semibold text-neutral-900">Jean-Marc D.</p>
              <p className="text-[8px] text-neutral-400 font-light">Taxi Premium Paris</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] text-neutral-500 font-light">{t("qrStep1Short")}</p>
            </div>
          </div>

          {/* Step 1 — Scanning */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700"
            style={{
              opacity: step === 1 ? 1 : 0,
              transform: step === 1 ? "scale(1)" : "scale(0.9)",
            }}
          >
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="w-32 h-32 bg-neutral-50 rounded-xl flex items-center justify-center">
                <Icon icon="solar:qr-code-bold" className="text-neutral-300 text-5xl" />
              </div>
              {/* Scan line */}
              <div
                className="absolute left-2 right-2 h-0.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                style={{
                  animation: step === 1 ? "scanLine 1.5s ease-in-out infinite" : "none",
                }}
              />
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-500 rounded-br-lg" />
            </div>
            <p className="text-xs text-neutral-500 font-light mt-4">{t("qrStep2Short")}</p>
          </div>

          {/* Step 2 — Profile displayed */}
          <div
            className="absolute inset-0 flex flex-col transition-all duration-700"
            style={{
              opacity: step === 2 ? 1 : 0,
              transform: step === 2 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="bg-neutral-950 px-5 pt-10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-neutral-800 flex items-center justify-center">
                  <Icon icon="solar:user-linear" className="text-neutral-400 text-lg" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Jean-Marc D.</p>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                    <Icon icon="solar:star-bold" className="text-amber-500 text-xs" />
                    4.9 — Paris
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-5 py-4 space-y-3">
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                <Icon icon="solar:shield-check-linear" className="text-green-600 text-sm" />
                <span className="text-[10px] font-medium text-green-700">{t("qrMockVerified")}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Icon icon="solar:car-linear" className="text-neutral-400" />
                <span className="text-neutral-600 font-light">Mercedes Classe E</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                <span className="text-neutral-600 font-light">Paris &amp; Ile-de-France</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <Icon icon="solar:phone-linear" className="text-neutral-400" />
                <span className="text-neutral-600 font-light">06 12 34 56 78</span>
              </div>
              <button className="w-full bg-neutral-950 text-white text-[11px] font-medium py-2.5 rounded-xl mt-2">
                {t("qrMockBook")}
              </button>
            </div>
          </div>

          {/* Step 3 — Booking confirmed */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-700"
            style={{
              opacity: step === 3 ? 1 : 0,
              transform: step === 3 ? "scale(1)" : "scale(0.8)",
            }}
          >
            <div
              className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mb-4"
              style={{
                animation: step === 3 ? "popIn 0.4s ease-out" : "none",
              }}
            >
              <Icon icon="solar:check-circle-bold" className="text-green-600 text-3xl" />
            </div>
            <p className="text-sm font-semibold text-neutral-900 mb-1">{t("qrMockConfirmed")}</p>
            <p className="text-[10px] text-neutral-500 font-light text-center">{t("qrMockConfirmedDesc")}</p>
            <div className="mt-5 bg-neutral-50 border border-neutral-200 rounded-xl p-3 w-full">
              <div className="flex items-center gap-2 text-[10px] mb-1.5">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 text-sm" />
                <span className="text-neutral-600">12 Rue de Rivoli, Paris</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <Icon icon="solar:clock-circle-linear" className="text-neutral-400 text-sm" />
                <span className="text-neutral-600">{t("qrMockTime")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-medium transition-all duration-300 ${
              step === i
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            <Icon icon={s.icon} className="text-sm" />
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes scanLine {
          0%, 100% { top: 15%; }
          50% { top: 80%; }
        }
        @keyframes popIn {
          0% { transform: scale(0); }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
