import { Icon } from "@iconify/react";

interface PricingDisplayProps {
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  airportSupplement: number;
  nightSupplement: number;
}

export function PricingDisplay({
  baseFare,
  pricePerKm,
  pricePerMinute,
  minimumFare,
  airportSupplement,
  nightSupplement,
}: PricingDisplayProps) {
  const items = [
    { label: "Prise en charge", value: `${baseFare.toFixed(2)} EUR` },
    { label: "Prix au km", value: `${pricePerKm.toFixed(2)} EUR/km` },
    { label: "Prix à la minute", value: `${pricePerMinute.toFixed(2)} EUR/min` },
    { label: "Course minimum", value: `${minimumFare.toFixed(2)} EUR` },
    { label: "Supplément aéroport", value: `${airportSupplement.toFixed(2)} EUR` },
    ...(nightSupplement > 0
      ? [{ label: "Supplément nuit", value: `${nightSupplement.toFixed(2)} EUR` }]
      : []),
  ];

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:tag-price-linear" className="text-neutral-400" />
        Tarification
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
