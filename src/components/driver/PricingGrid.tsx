"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import { NATIONAL_TARIFFS, type AirportFareGroup } from "@/data/departmental-tariffs";

interface Pricing {
  baseFare: number;
  pricePerKm: number;
  pricePerKmNight: number;
  pricePerMinute: number;
  minimumFare: number;
}

type PricingKey = keyof Pricing;

interface PricingGridProps {
  pricing: Pricing;
  onChange: (pricing: Pricing) => void;
  departmentName?: string | null;
  zoneAddress?: string;
  onGoToZone?: () => void;
  airportFares?: AirportFareGroup[];
}

// National ceilings mapped to our pricing fields
const CEILINGS: Record<PricingKey, number> = {
  baseFare: NATIONAL_TARIFFS.priseEnCharge,
  pricePerKm: NATIONAL_TARIFFS.tarifKm,
  pricePerKmNight: NATIONAL_TARIFFS.tarifKm,
  pricePerMinute: Math.round((NATIONAL_TARIFFS.tarifHoraire / 60) * 100) / 100,
  minimumFare: NATIONAL_TARIFFS.minimumCourse,
};

export function PricingGrid({ pricing, onChange, departmentName, zoneAddress, onGoToZone, airportFares }: PricingGridProps) {
  const t = useTranslations("pricingGrid");
  const [rawValues, setRawValues] = useState<Record<string, string>>({});

  const pricingFields: { key: PricingKey; label: string; suffix: string; description: string }[] = [
    { key: "baseFare", label: t("baseFare"), suffix: "\u20AC", description: t("baseFareDesc") },
    { key: "pricePerKm", label: t("dayRate"), suffix: "\u20AC/km", description: t("dayRateDesc") },
    { key: "pricePerKmNight", label: t("nightRate"), suffix: "\u20AC/km", description: t("nightRateDesc") },
    { key: "pricePerMinute", label: t("waitRate"), suffix: "\u20AC/min", description: t("waitRateDesc") },
    { key: "minimumFare", label: t("minFare"), suffix: "\u20AC", description: t("minFareDesc") },
  ];

  function applyOfficialRates() {
    onChange({ ...CEILINGS });
    setRawValues({});
  }

  return (
    <div className="space-y-3">
      <div className="mb-2">
        <h2 className="text-lg font-semibold tracking-tight">{t("title")}</h2>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {pricingFields.map((field) => {
          const ceiling = CEILINGS[field.key];
          return (
            <div key={field.key}>
              <label className="block text-sm font-medium mb-1">{field.label}</label>
              <p className="text-xs text-neutral-400 mb-1.5">{field.description}</p>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={rawValues[field.key] ?? pricing[field.key].toString().replace(".", ",")}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val !== "" && !/^\d*[.,]?\d*$/.test(val)) return;
                    setRawValues((prev) => ({ ...prev, [field.key]: val }));
                    const num = parseFloat(val.replace(",", "."));
                    if (!isNaN(num)) {
                      onChange({ ...pricing, [field.key]: num });
                    } else if (val === "") {
                      onChange({ ...pricing, [field.key]: 0 });
                    }
                  }}
                  onBlur={() => {
                    setRawValues((prev) => {
                      const next = { ...prev };
                      delete next[field.key];
                      return next;
                    });
                  }}
                  className="w-full bg-neutral-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all pr-16"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                  {field.suffix}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                {t("officialRate")} {ceiling.toFixed(2).replace(".", ",")} {field.suffix}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bandeau réglementaire — en bas, après les champs */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mt-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Icon icon="solar:shield-check-linear" className="text-blue-600 text-lg mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-900">
                {t("officialRatesTitle", { year: NATIONAL_TARIFFS.year })}
                {departmentName && ` — ${departmentName}`}
              </p>
              {zoneAddress && (
                <p className="text-xs text-blue-600 mt-0.5 flex items-center gap-1">
                  <Icon icon="solar:map-point-linear" className="text-sm shrink-0" />
                  {zoneAddress}
                  {onGoToZone && (
                    <button type="button" onClick={onGoToZone} className="underline hover:text-blue-800 ml-1">
                      {t("editZone")}
                    </button>
                  )}
                </p>
              )}
              {!zoneAddress && onGoToZone && (
                <button type="button" onClick={onGoToZone} className="text-xs text-blue-600 underline hover:text-blue-800 mt-0.5">
                  {t("setZone")}
                </button>
              )}
              <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                {t("officialRatesInfo")}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span className="text-xs text-blue-800 font-medium">{t("baseFare")} : {CEILINGS.baseFare.toFixed(2).replace(".", ",")} €</span>
                <span className="text-xs text-blue-800 font-medium">{t("dayRate")} : {CEILINGS.pricePerKm.toFixed(2).replace(".", ",")} €/km</span>
                <span className="text-xs text-blue-800 font-medium">{t("waitRate")} : {CEILINGS.pricePerMinute.toFixed(2).replace(".", ",")} €/min</span>
                <span className="text-xs text-blue-800 font-medium">{t("minFare")} : {CEILINGS.minimumFare.toFixed(2).replace(".", ",")} €</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={applyOfficialRates}
            className="shrink-0 bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t("applyOfficialRates")}
          </button>
        </div>
      </div>

      {/* Forfaits aéroports — affiché uniquement si pertinent */}
      {airportFares && airportFares.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
          <div className="flex items-start gap-2.5">
            <Icon icon="solar:airplane-linear" className="text-amber-600 text-lg mt-0.5 shrink-0" />
            <div className="w-full">
              <p className="text-sm font-medium text-amber-900 mb-2">
                {t("airportFaresTitle")}
              </p>
              <p className="text-xs text-amber-700 mb-3">
                {t("airportFaresInfo")}
              </p>
              {airportFares.map((group) => (
                <div key={group.airport} className="mb-2 last:mb-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                    {group.fares.map((fare) => (
                      <div key={fare.route} className="flex items-center justify-between text-xs">
                        <span className="text-amber-800">{fare.route}</span>
                        <span className="text-amber-900 font-semibold ml-2">{fare.price} €</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
