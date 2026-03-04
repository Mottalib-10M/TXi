"use client";

interface Pricing {
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  airportSupplement: number;
  nightSupplement: number;
}

interface PricingGridProps {
  pricing: Pricing;
  onChange: (pricing: Pricing) => void;
}

const pricingFields = [
  { key: "baseFare" as const, label: "Prise en charge", suffix: "€", description: "Montant au démarrage du compteur" },
  { key: "pricePerKm" as const, label: "Prix au km", suffix: "€/km", description: "Tarif kilométrique" },
  { key: "pricePerMinute" as const, label: "Prix à la minute", suffix: "€/min", description: "Tarif d'attente/embouteillage" },
  { key: "minimumFare" as const, label: "Course minimum", suffix: "€", description: "Montant minimum facturé" },
  { key: "airportSupplement" as const, label: "Supplément aéroport", suffix: "€", description: "Supplément prise en charge aéroport" },
  { key: "nightSupplement" as const, label: "Supplément nuit", suffix: "€", description: "Supplément horaire de nuit (19h-7h)" },
];

export function PricingGrid({ pricing, onChange }: PricingGridProps) {
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
                value={pricing[field.key]}
                onChange={(e) =>
                  onChange({ ...pricing, [field.key]: parseFloat(e.target.value) || 0 })
                }
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
