"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface PricingDisplayProps {
  baseFare: number;
  pricePerKm: number;
  pricePerKmNight: number;
  pricePerMinute: number;
  minimumFare: number;
}

export function PricingDisplay({
  baseFare,
  pricePerKm,
  pricePerKmNight,
  pricePerMinute,
  minimumFare,
}: PricingDisplayProps) {
  const t = useTranslations("pricingGrid");

  const items = [
    { label: t("baseFare"), value: `${baseFare.toFixed(2).replace(".", ",")} €` },
    { label: t("dayRate"), value: `${pricePerKm.toFixed(2).replace(".", ",")} €/km` },
    { label: t("nightRate"), value: `${pricePerKmNight.toFixed(2).replace(".", ",")} €/km` },
    { label: t("waitRate"), value: `${pricePerMinute.toFixed(2).replace(".", ",")} €/min` },
    { label: t("minFare"), value: `${minimumFare.toFixed(2).replace(".", ",")} €` },
  ];

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:tag-price-linear" className="text-neutral-400" />
        {t("title")}
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
          >
            <span className="text-sm text-neutral-500 font-light">{item.label}</span>
            <span className="text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
