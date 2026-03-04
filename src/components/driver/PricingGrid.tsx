"use client";

import { useState } from "react";

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

const pricingFields = [
  { key: "baseFare" as const, label: "Prise en charge", suffix: "€", description: "Montant au démarrage du compteur" },
  { key: "pricePerKm" as const, label: "Prix au km jour", suffix: "€/km", description: "Tarif kilométrique en journée" },
  { key: "pricePerKmNight" as const, label: "Prix au km nuit", suffix: "€/km", description: "Tarif kilométrique de nuit (19h-7h)" },
  { key: "pricePerMinute" as const, label: "Prix à la minute", suffix: "€/min", description: "Tarif d'attente/embouteillage" },
  { key: "minimumFare" as const, label: "Course minimum", suffix: "€", description: "Montant minimum facturé" },
];

export function PricingGrid({ pricing, onChange }: PricingGridProps) {
  const [rawValues, setRawValues] = useState<Record<string, string>>({});

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight mb-4">Tarification</h2>
      <p className="text-sm text-neutral-500 font-light mb-6">
        Définissez vos tarifs. Ces informations seront visibles sur votre profil public.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pricingFields.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <p className="text-xs text-neutral-400 mb-1.5">{field.description}</p>
            <div className="relative">
              <input
                type="number"
                min={0}
                step={0.1}
                value={rawValues[field.key] ?? pricing[field.key]}
                onChange={(e) => {
                  const val = e.target.value;
                  setRawValues((prev) => ({ ...prev, [field.key]: val }));
                  const num = parseFloat(val);
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
