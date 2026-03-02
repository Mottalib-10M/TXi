"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";

interface CoverageZoneEditorProps {
  lat: number | null;
  lng: number | null;
  radius: number;
  address: string;
  onChange: (data: { lat: number; lng: number; radius: number; address: string }) => void;
}

export function CoverageZoneEditor({
  lat,
  lng,
  radius,
  address,
  onChange,
}: CoverageZoneEditorProps) {
  const [localAddress, setLocalAddress] = useState(address);
  const [localRadius, setLocalRadius] = useState(radius);

  function handlePlaceChange(value: string, newLat?: number, newLng?: number) {
    setLocalAddress(value);
    if (newLat !== undefined && newLng !== undefined) {
      onChange({
        lat: newLat,
        lng: newLng,
        radius: localRadius,
        address: value,
      });
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight mb-4">Zone de couverture</h2>

      <div>
        <label className="block text-sm font-medium mb-1.5">Adresse du centre</label>
        <PlacesAutocomplete
          placeholder="Ex: Paris 9e, Gare du Nord..."
          value={localAddress}
          onChange={handlePlaceChange}
          icon="solar:map-point-search-linear"
        />
      </div>

      {lat && lng && address && (
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Icon icon="solar:map-point-linear" className="text-neutral-400" />
            <span>{address}</span>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Rayon de couverture : {localRadius} km
        </label>
        <input
          type="range"
          min={1}
          max={50}
          value={localRadius}
          onChange={(e) => {
            const newRadius = parseInt(e.target.value);
            setLocalRadius(newRadius);
            if (lat && lng) {
              onChange({ lat, lng, radius: newRadius, address: localAddress });
            }
          }}
          className="w-full accent-neutral-900"
        />
        <div className="flex justify-between text-xs text-neutral-400 mt-1">
          <span>1 km</span>
          <span>25 km</span>
          <span>50 km</span>
        </div>
      </div>
    </div>
  );
}
