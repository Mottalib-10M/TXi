"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";

interface FareEstimatorProps {
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  onLocationsChange?: (locations: {
    originAddress: string;
    originLat: number | undefined;
    originLng: number | undefined;
    destinationAddress: string;
    destinationLat: number | undefined;
    destinationLng: number | undefined;
  }) => void;
  children?: React.ReactNode;
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

function formatDuration(minutes: number): string {
  const rounded = Math.round(minutes);
  if (rounded < 60) return `${rounded} min`;
  const h = Math.floor(rounded / 60);
  const m = rounded % 60;
  return m > 0 ? `${h}h${m.toString().padStart(2, "0")}` : `${h}h`;
}

export function FareEstimator({
  baseFare,
  pricePerKm,
  pricePerMinute,
  minimumFare,
  onLocationsChange,
  children,
}: FareEstimatorProps) {
  const [origin, setOrigin] = useState<LocationState>({ address: "" });
  const [destination, setDestination] = useState<LocationState>({ address: "" });

  function handleOriginChange(address: string, lat?: number, lng?: number) {
    const newOrigin = { address, lat, lng };
    setOrigin(newOrigin);
    onLocationsChange?.({
      originAddress: address,
      originLat: lat,
      originLng: lng,
      destinationAddress: destination.address,
      destinationLat: destination.lat,
      destinationLng: destination.lng,
    });
  }

  function handleDestinationChange(address: string, lat?: number, lng?: number) {
    const newDest = { address, lat, lng };
    setDestination(newDest);
    onLocationsChange?.({
      originAddress: origin.address,
      originLat: origin.lat,
      originLng: origin.lng,
      destinationAddress: address,
      destinationLat: lat,
      destinationLng: lng,
    });
  }

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
    // Variable speed: city (short) → highway (long distance)
    const avgSpeed = distance < 10 ? 25 : distance < 30 ? 40 : distance < 80 ? 60 : 80;
    const duration = (distance / avgSpeed) * 60; // minutes
    const calculated = baseFare + distance * pricePerKm + duration * pricePerMinute;
    const price = Math.max(calculated, minimumFare);
    estimate = { distance, duration, price };
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:calculator-linear" className="text-neutral-400" />
        Estimation tarif et réservation
      </h2>

      <div className="space-y-3 mb-4">
        <PlacesAutocomplete
          placeholder="Point de depart"
          value={origin.address}
          onChange={handleOriginChange}
          icon="solar:map-point-linear"
          showGeolocation
        />
        <PlacesAutocomplete
          placeholder="Destination"
          value={destination.address}
          onChange={handleDestinationChange}
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
            <span className="font-medium">{formatDuration(estimate.duration)}</span>
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

      {estimate && children && (
        <div className="border-t border-neutral-200 mt-5 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}
