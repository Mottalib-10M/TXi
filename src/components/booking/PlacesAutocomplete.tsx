"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";

interface PlacesAutocompleteProps {
  placeholder: string;
  value: string;
  onChange: (value: string, lat?: number, lng?: number) => void;
  icon: string;
  showGeolocation?: boolean;
}

interface Prediction {
  description: string;
  place_id: string;
}

export function PlacesAutocomplete({
  placeholder,
  value,
  onChange,
  icon,
  showGeolocation = false,
}: PlacesAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Prediction[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      // Fallback suggestions for dev without API key
      setSuggestions([
        { description: input, place_id: "manual" },
      ]);
      return;
    }

    try {
      const res = await fetch(
        `/api/places/autocomplete?input=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      setSuggestions(data.predictions || []);
    } catch {
      setSuggestions([]);
    }
  }, []);

  function handleInputChange(input: string) {
    onChange(input);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(input), 300);
    setShowSuggestions(true);
  }

  async function handleSelect(prediction: Prediction) {
    onChange(prediction.description);
    setShowSuggestions(false);
    setSuggestions([]);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (apiKey && prediction.place_id !== "manual") {
      try {
        const res = await fetch(
          `/api/places/details?place_id=${prediction.place_id}`
        );
        const data = await res.json();
        if (data.lat && data.lng) {
          onChange(prediction.description, data.lat, data.lng);
        }
      } catch {
        // Ignore geocoding errors
      }
    }
  }

  function handleGeolocation() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
        if (apiKey) {
          try {
            const res = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
            );
            const data = await res.json();
            if (data.results?.[0]) {
              onChange(data.results[0].formatted_address, latitude, longitude);
              return;
            }
          } catch {
            // Fallback below
          }
        }

        onChange(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, latitude, longitude);
      },
      () => {
        // Geolocation error
      }
    );
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative ${showSuggestions && suggestions.length > 0 ? "z-50" : "z-10"}`}>
      <div className="flex items-center bg-neutral-100 rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-neutral-900 focus-within:bg-white transition-all">
        <Icon icon={icon} className="text-neutral-400 text-lg mr-3 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="bg-transparent w-full text-sm font-medium outline-none text-neutral-900 placeholder:text-neutral-500 placeholder:font-light"
        />
        {showGeolocation && (
          <button
            type="button"
            onClick={handleGeolocation}
            className="p-1.5 hover:bg-neutral-200 rounded-lg transition-colors"
            title="Ma position"
          >
            <Icon icon="solar:crosshair-linear" className="text-neutral-500 block" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden z-50">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.place_id}
              type="button"
              onClick={() => handleSelect(suggestion)}
              className="w-full text-left px-4 py-3 text-sm hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0"
            >
              <div className="flex items-center gap-2">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0" />
                <span className="truncate">{suggestion.description}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
