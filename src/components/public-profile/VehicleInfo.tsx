import { Icon } from "@iconify/react";
import type { Vehicle } from "@/types/vehicle";
import { VehicleMiniature } from "@/components/ui/VehicleMiniature";

interface VehicleInfoProps {
  vehicles: Vehicle[];
}

export function VehicleInfo({ vehicles }: VehicleInfoProps) {
  if (vehicles.length === 0) return null;

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <h2 className="text-base font-semibold tracking-tight mb-4 flex items-center gap-2">
        <Icon icon="solar:car-linear" className="text-neutral-400" />
        {vehicles.length > 1 ? "Véhicules" : "Véhicule"}
      </h2>

      <div className="space-y-6">
        {vehicles.map((vehicle, index) => (
          <div key={index}>
            {vehicles.length > 1 && (
              <p className="text-xs text-neutral-400 uppercase tracking-wider mb-3 font-medium">
                Véhicule {index + 1}
              </p>
            )}

            {/* Vehicle badge */}
            <VehicleMiniature
              brand={vehicle.brand}
              model={vehicle.model}
              color={vehicle.color}
              year={vehicle.year}
              capacity={vehicle.capacity}
              size="lg"
              className="mb-4"
            />

            {vehicle.features.length > 0 && (
              <div>
                <p className="text-xs text-neutral-400 mb-2">Options</p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {index < vehicles.length - 1 && (
              <div className="border-b border-neutral-100 mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
