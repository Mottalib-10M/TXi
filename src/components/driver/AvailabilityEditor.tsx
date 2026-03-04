"use client";

import { Icon } from "@iconify/react";

interface Slot {
  day: number;
  startTime: string;
  endTime: string;
}

const dayNames = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const DEFAULT_SLOTS: Slot[] = dayNames.map((_, i) => ({
  day: i,
  startTime: "07:00",
  endTime: "20:00",
}));

export function AvailabilityEditor({
  availability,
  onChange,
}: {
  availability: Slot[];
  onChange: (slots: Slot[]) => void;
}) {
  const allActive = availability.length === 7;

  function toggleDay(dayIndex: number) {
    const existing = availability.find((s) => s.day === dayIndex);
    if (existing) {
      onChange(availability.filter((s) => s.day !== dayIndex));
    } else {
      onChange([...availability, { day: dayIndex, startTime: "07:00", endTime: "20:00" }]);
    }
  }

  function updateSlot(dayIndex: number, field: "startTime" | "endTime", value: string) {
    onChange(
      availability.map((s) => (s.day === dayIndex ? { ...s, [field]: value } : s))
    );
  }

  function toggleAll() {
    if (allActive) {
      onChange([]);
    } else {
      onChange([...DEFAULT_SLOTS]);
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight mb-4">Disponibilités</h2>
      <p className="text-sm text-neutral-500 font-light mb-6">
        Indiquez vos créneaux de disponibilité habituels.
      </p>

      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={toggleAll}
          className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5"
        >
          <Icon icon={allActive ? "solar:close-circle-linear" : "solar:check-read-linear"} className="text-sm" />
          {allActive ? "Tout désactiver" : "Tout activer"}
        </button>
      </div>

      <div className="space-y-2">
        {dayNames.map((day, index) => {
          const slot = availability.find((s) => s.day === index);
          const isActive = !!slot;

          return (
            <div
              key={day}
              className={`flex flex-wrap items-center gap-2 sm:gap-4 p-3 rounded-xl border transition-colors ${
                isActive ? "border-neutral-200 bg-white" : "border-neutral-100 bg-neutral-50"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleDay(index)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200 text-neutral-400"
                }`}
              >
                <Icon icon={isActive ? "solar:check-read-linear" : "solar:close-circle-linear"} className="text-sm" />
              </button>

              <span className={`text-sm w-20 sm:w-24 ${isActive ? "font-medium" : "text-neutral-400"}`}>
                {day}
              </span>

              {isActive && slot ? (
                <div className="flex items-center gap-2 ml-auto">
                  <input
                    type="time"
                    value={slot.startTime}
                    onChange={(e) => updateSlot(index, "startTime", e.target.value)}
                    className="bg-neutral-100 rounded-lg px-2 sm:px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 w-[5.5rem]"
                  />
                  <span className="text-neutral-400 text-xs">→</span>
                  <input
                    type="time"
                    value={slot.endTime}
                    onChange={(e) => updateSlot(index, "endTime", e.target.value)}
                    className="bg-neutral-100 rounded-lg px-2 sm:px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 w-[5.5rem]"
                  />
                </div>
              ) : (
                <span className="text-xs text-neutral-400 font-light ml-auto">Indisponible</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
