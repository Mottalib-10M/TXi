import { Icon } from "@iconify/react";

const dayNames = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

interface AvailabilityDisplayProps {
  availability: Array<{ day: number; startTime: string; endTime: string }>;
}

export function AvailabilityDisplay({ availability }: AvailabilityDisplayProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:clock-circle-linear" className="text-neutral-400" />
        Disponibilités
      </h2>

      <div className="space-y-2">
        {dayNames.map((day, index) => {
          const slot = availability.find((s) => s.day === index);

          return (
            <div
              key={day}
              className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
            >
              <span className={`text-sm ${slot ? "font-medium" : "text-neutral-400"}`}>
                {day}
              </span>
              {slot ? (
                <span className="text-sm text-neutral-600">
                  {slot.startTime} - {slot.endTime}
                </span>
              ) : (
                <span className="text-xs text-neutral-400">Indisponible</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
