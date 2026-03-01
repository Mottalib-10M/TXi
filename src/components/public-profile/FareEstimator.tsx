"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";

interface FareEstimatorProps {
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
}

interface LocationState {
  address: string;
  lat?: number;
  lng?: number;
}

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function FareEstimator({
  baseFare,
  pricePerKm,
  pricePerMinute,
  minimumFare,
}: FareEstimatorProps) {
  const [origin, setOrigin] = useState<LocationState>({ address: "" });
  const [destination, setDestination] = useState<LocationState>({ address: "" });

  const canEstimate = origin.lat != null && destination.lat != null;

  let estimate: { distance: number; duration: number; price: number } | null = null;

  if (canEstimate) {
    const straightLine = haversineDistance(
      origin.lat!,
      origin.lng!,
      destination.lat!,
      destination.lng!
    );
    const distance = straightLine * 1.3; // Road factor
    const duration = (distance / 30) * 60; // 30 km/h average → minutes
    const calculated = baseFare + distance * pricePerKm + duration * pricePerMinute;
    const price = Math.max(calculated, minimumFare);
    estimate = { distance, duration, price };
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:calculator-linear" className="text-neutral-400" />
        Estimer le tarif
      </h2>

      <div className="space-y-3 mb-4">
        <PlacesAutocomplete
          placeholder="Point de depart"
          value={origin.address}
          onChange={(value, lat, lng) =>
            setOrigin({ address: value, lat, lng })
          }
          icon="solar:map-point-linear"
          showGeolocation
        />
        <PlacesAutocomplete
          placeholder="Destination"
          value={destination.address}
          onChange={(value, lat, lng) =>
            setDestination({ address: value, lat, lng })
          }
          icon="solar:flag-linear"
        />
      </div>

      {estimate && (
        <div className="bg-neutral-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Icon icon="solar:route-linear" className="text-neutral-400" />
              Distance estimee
            </span>
            <span className="font-medium">{estimate.distance.toFixed(1)} km</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Icon icon="solar:clock-circle-linear" className="text-neutral-400" />
              Duree estimee
            </span>
            <span className="font-medium">{Math.round(estimate.duration)} min</span>
          </div>
          <div className="border-t border-neutral-200 pt-3 flex items-center justify-between">
            <span className="text-sm font-medium">Prix estime</span>
            <span className="text-lg font-semibold">{estimate.price.toFixed(2)} &euro;</span>
          </div>
          <p className="text-[10px] text-neutral-400 font-light">
            Estimation indicative basee sur la distance a vol d&apos;oiseau. Le prix reel peut varier.
          </p>
        </div>
      )}

      {!canEstimate && origin.address && destination.address && (
        <p className="text-xs text-neutral-400 text-center py-2">
          Selectionnez des adresses dans les suggestions pour estimer le tarif
        </p>
      )}
    </div>
  );
}
