"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface Pricing {
  baseFare: number;
  pricePerKm: number;
  pricePerKmNight: number;
  pricePerMinute: number;
  minimumFare: number;
}

interface PricingGridProps {
  pricing: Pricing;
  onChange: (pricing: Pricing) => void;
}

export function PricingGrid({ pricing, onChange }: PricingGridProps) {
  const t = useTranslations("pricingGrid");
  const [rawValues, setRawValues] = useState<Record<string, string>>({});

  const pricingFields = [
    { key: "baseFare" as const, label: t("baseFare"), suffix: "\u20AC", description: t("baseFareDesc") },
    { key: "pricePerKm" as const, label: t("dayRate"), suffix: "\u20AC/km", description: t("dayRateDesc") },
    { key: "pricePerKmNight" as const, label: t("nightRate"), suffix: "\u20AC/km", description: t("nightRateDesc") },
    { key: "pricePerMinute" as const, label: t("waitRate"), suffix: "\u20AC/min", description: t("waitRateDesc") },
    { key: "minimumFare" as const, label: t("minFare"), suffix: "\u20AC", description: t("minFareDesc") },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight mb-4">{t("title")}</h2>
      <p className="text-sm text-neutral-500 font-light mb-6">
        {t("subtitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingFields.map((field) => (
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
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all pr-16"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                {field.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
