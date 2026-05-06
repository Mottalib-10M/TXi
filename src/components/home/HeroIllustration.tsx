"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/lib/validation";

interface BookingData {
  departure: string;
  arrival: string;
  tripDuration: number;
  price?: number;
  driverName: string;
  driverPhoto: string | null;
}

function shortenAddress(address: string): string {
  const parts = address.split(",").map((p) => p.trim());
  if (parts.length >= 3) {
    // "1c Rte de Vichy, 63430 Les Martres-d'Artière, France" → "Les Martres-d'Artière"
    return parts[1].replace(/^\d{5}\s*/, "");
  }
  // "Moulins, France" → "Moulins"
  return parts[0];
}

function formatDuration(minutes: number): string {
  const rounded = Math.round(minutes);
  if (rounded >= 60) {
    const h = Math.floor(rounded / 60);
    const m = rounded % 60;
    return m > 0 ? `${h}h ${m} min` : `${h}h`;
  }
  return `${rounded} min`;
}

export function HeroIllustration() {
  const t = useTranslations("home");
  const [data, setData] = useState<BookingData | null>(null);

  useEffect(() => {
    function handleResults(e: Event) {
      setData((e as CustomEvent<BookingData>).detail);
    }
    window.addEventListener("booking-results", handleResults);
    return () => window.removeEventListener("booking-results", handleResults);
  }, []);

  const driverName = data?.driverName || t("driverName");
  const departureLabel = data ? shortenAddress(data.departure) : t("departure");
  const arrivalLabel = data ? shortenAddress(data.arrival) : t("arrival");
  const priceDisplay = data?.price ? formatPrice(data.price) : "18,50 \u20AC";
  const durationDisplay = data?.tripDuration ? formatDuration(data.tripDuration) : null;

  return (
    <div
      className="hidden md:flex h-full min-h-[520px] rounded-3xl bg-neutral-50 border border-neutral-100 relative overflow-hidden items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="absolute w-80 h-80 bg-white/60 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Route line */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
        <path
          d="M160 170 Q 250 220 300 300 Q 340 360 350 380"
          stroke="#d4d4d4"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
        />
      </svg>

      {/* Driver card */}
      <div className="relative bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl shadow-black/5 w-64 animate-float z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
            {data?.driverPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.driverPhoto} alt={driverName} className="w-full h-full object-cover" />
            ) : (
              <Icon icon="solar:user-linear" className="text-neutral-400 text-xl" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium">{driverName}</p>
            <div className="flex items-center text-xs text-neutral-500 gap-1 font-light">
              <Icon icon="solar:star-bold" className="text-amber-500" /> {t("driverRating")}{" "}
              <span className="text-neutral-300">|</span> {t("driverSubtitle")}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-neutral-500 font-light">{t("estimatedArrival")}</span>
          <span className="font-semibold text-neutral-900">12 min</span>
        </div>
        {durationDisplay && (
          <div className="flex justify-between items-center text-sm mt-1.5">
            <span className="text-neutral-500 font-light">{t("tripDuration")}</span>
            <span className="font-semibold text-neutral-900">{durationDisplay}</span>
          </div>
        )}
        <div className="w-full bg-neutral-100 h-1.5 rounded-full mt-2 overflow-hidden">
          <div className="bg-neutral-900 h-full w-2/3 rounded-full transition-all duration-1000" />
        </div>
      </div>

      {/* Price badge */}
      <div className="absolute bottom-24 right-12 bg-white border border-neutral-200 rounded-xl p-3 shadow-lg shadow-black/5 animate-float-delayed z-10">
        <div className="flex items-center gap-2">
          <Icon icon="solar:tag-price-linear" className="text-neutral-600" />
          <div>
            <p className="text-xs text-neutral-500 font-light">{t("estimate")}</p>
            <p className="text-sm font-semibold">{priceDisplay}</p>
          </div>
        </div>
      </div>

      {/* Location Pins */}
      <div className="absolute top-[33%] left-[30%] z-10">
        <div className="w-4 h-4 bg-neutral-900 rounded-full border-4 border-white shadow-md relative">
          <div className="absolute inset-0 bg-neutral-900 rounded-full animate-ping-slow" />
        </div>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 whitespace-nowrap bg-white/80 px-1.5 py-0.5 rounded">
          {departureLabel}
        </span>
      </div>

      <div className="absolute bottom-[22%] right-[28%] z-10">
        <div className="w-4 h-4 bg-neutral-900 rounded-sm border-4 border-white shadow-md" />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 whitespace-nowrap bg-white/80 px-1.5 py-0.5 rounded">
          {arrivalLabel}
        </span>
      </div>
    </div>
  );
}
