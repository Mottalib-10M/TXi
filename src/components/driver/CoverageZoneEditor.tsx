"use client";

import { useState } from "react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("coverageZone");
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
    <div className="space-y-3">
      <h2 className="text-lg font-semibold tracking-tight mb-2">{t("title")}</h2>

      <div>
        <label className="block text-sm font-medium mb-1.5">{t("centerAddress")}</label>
        <PlacesAutocomplete
          placeholder={t("centerPlaceholder")}
          value={localAddress}
          onChange={handlePlaceChange}
          icon="solar:map-point-search-linear"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          {t("radius", { radius: localRadius })}
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
