"use client";

import { Icon } from "@iconify/react";
import type { Vehicle } from "@/types/vehicle";

interface VehicleInfoProps {
  vehicles: Vehicle[];
}

const FEATURE_ICONS: Record<string, string> = {
  "Climatisation": "solar:temperature-linear",
  "WiFi": "solar:global-linear",
  "Prise USB": "solar:usb-linear",
  "Siège bébé": "solar:baby-linear",
  "Animaux acceptés": "solar:cat-linear",
  "PMR": "solar:accessibility-linear",
  "Coffre XL": "solar:box-linear",
  "Carte bancaire": "solar:card-linear",
};

const COLOR_MAP: Record<string, string> = {
  noir: "#171717", black: "#171717",
  blanc: "#d4d4d4", white: "#d4d4d4",
  gris: "#737373", grey: "#737373", gray: "#737373",
  argent: "#a3a3a3", silver: "#a3a3a3",
  bleu: "#2563eb", blue: "#2563eb",
  rouge: "#dc2626", red: "#dc2626",
  vert: "#16a34a", green: "#16a34a",
  beige: "#c8a97e",
  marron: "#78350f", brown: "#78350f",
  bordeaux: "#881337",
  anthracite: "#404040",
};

type VehicleType = "sedan" | "suv" | "van" | "luxury";

const SUV_KW = ["x1","x3","x5","x6","x7","ix","q3","q5","q7","q8","glc","gle","gls","glb","eqb","eqc","tucson","sportage","rav4","cr-v","crv","tiguan","touareg","t-roc","t-cross","3008","5008","suv","crossover","model x","model y","duster","captur","kadjar","arkana","c5 aircross","c3 aircross","forester","outback","xc40","xc60","xc90","cayenne","macan","range rover","evoque","defender"];
const VAN_KW = ["multivan","transporter","caravelle","sharan","classe v","viano","vito","sprinter","trafic","master","espace","expert","traveller","spacetourer","van","minivan","monospace","scenic","grand scenic","s-max","galaxy","tourneo","staria"];
const LUX_KW = ["classe s","classe e","maybach","eqs","eqe","série 7","serie 7","série 5","serie 5","i7","i5","a8","a7","a6","e-tron gt","panamera","taycan","model s","ls","es","xf","xj","s90","s60","ct6","ct5","genesis","continental","flying spur","ghost","phantom"];

function detectType(brand: string, model: string): VehicleType {
  const s = `${brand} ${model}`.toLowerCase();
  for (const k of VAN_KW) { if (s.includes(k)) return "van"; }
  for (const k of SUV_KW) { if (s.includes(k)) return "suv"; }
  for (const k of LUX_KW) { if (s.includes(k)) return "luxury"; }
  return "sedan";
}

const TYPE_LABEL: Record<VehicleType, string> = {
  sedan: "Berline",
  luxury: "Premium",
  suv: "SUV",
  van: "Van",
};

function CarSilhouette({ type, color }: { type: VehicleType; color: string }) {
  if (type === "van") {
    return (
      <svg viewBox="0 0 120 50" fill="none" className="w-full h-full">
        <path
          d="M10 38 C10 38 10 20 18 18 L55 14 C58 14 70 10 78 10 L95 10 C102 10 108 16 108 22 L108 34 C108 36 106 38 104 38 L10 38Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M10 38 C10 38 10 20 18 18 L55 14 C58 14 70 10 78 10 L95 10 C102 10 108 16 108 22 L108 34 C108 36 106 38 104 38 L10 38Z"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="28" cy="40" r="6" fill={color} opacity="0.25" />
        <circle cx="28" cy="40" r="3.5" fill="white" />
        <circle cx="92" cy="40" r="6" fill={color} opacity="0.25" />
        <circle cx="92" cy="40" r="3.5" fill="white" />
        <rect x="62" y="14" width="12" height="10" rx="1.5" fill={color} stroke={color} strokeWidth="0.8" opacity="0.15" />
        <rect x="78" y="14" width="12" height="10" rx="1.5" fill={color} stroke={color} strokeWidth="0.8" opacity="0.15" />
      </svg>
    );
  }

  if (type === "suv") {
    return (
      <svg viewBox="0 0 120 50" fill="none" className="w-full h-full">
        <path
          d="M12 36 C12 36 14 22 20 18 L42 12 C44 11 52 6 60 6 L88 8 C96 9 106 16 106 24 L106 32 C106 35 104 36 102 36 L12 36Z"
          fill={color}
          opacity="0.15"
        />
        <path
          d="M12 36 C12 36 14 22 20 18 L42 12 C44 11 52 6 60 6 L88 8 C96 9 106 16 106 24 L106 32 C106 35 104 36 102 36 L12 36Z"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="30" cy="39" r="7" fill={color} opacity="0.25" />
        <circle cx="30" cy="39" r="4" fill="white" />
        <circle cx="90" cy="39" r="7" fill={color} opacity="0.25" />
        <circle cx="90" cy="39" r="4" fill="white" />
        <path d="M44 12 L44 20 M68 8 L66 20" stroke={color} strokeWidth="0.8" opacity="0.2" />
      </svg>
    );
  }

  // sedan & luxury
  return (
    <svg viewBox="0 0 120 50" fill="none" className="w-full h-full">
      <path
        d="M8 36 C8 36 10 26 16 22 L38 18 C40 17 50 8 58 8 L82 10 C92 11 104 18 108 26 L110 32 C110 35 108 36 106 36 L8 36Z"
        fill={color}
        opacity="0.15"
      />
      <path
        d="M8 36 C8 36 10 26 16 22 L38 18 C40 17 50 8 58 8 L82 10 C92 11 104 18 108 26 L110 32 C110 35 108 36 106 36 L8 36Z"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle cx="28" cy="39" r="7" fill={color} opacity="0.25" />
      <circle cx="28" cy="39" r="4" fill="white" />
      <circle cx="90" cy="39" r="7" fill={color} opacity="0.25" />
      <circle cx="90" cy="39" r="4" fill="white" />
      <path d="M42 18 L44 10 M72 10 L76 18" stroke={color} strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}

function VehicleCard({ vehicle, index, total }: { vehicle: Vehicle; index: number; total: number }) {
  const type = detectType(vehicle.brand, vehicle.model);
  const colorHex = COLOR_MAP[vehicle.color.toLowerCase().trim()] || "#525252";
  const fullName = `${vehicle.brand} ${vehicle.model}`.trim();
  const hasPhotos = vehicle.photos && vehicle.photos.length > 0;

  const details: string[] = [];
  if (vehicle.year > 0) details.push(String(vehicle.year));
  if (vehicle.capacity > 0) details.push(`${vehicle.capacity} places`);

  return (
    <div>
      {total > 1 && (
        <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3 font-semibold">
          Véhicule {index + 1}
        </p>
      )}

      {/* Photos */}
      {hasPhotos && (
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {vehicle.photos.map((url, i) => (
            <div key={i} className="w-36 h-28 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`${fullName} - ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Vehicle card */}
      <div className="flex items-center gap-5">
        {/* Silhouette */}
        <div className="w-28 h-14 shrink-0">
          <CarSilhouette type={type} color={colorHex} />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-neutral-900 tracking-tight truncate">
            {fullName}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span
              className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md"
              style={{
                color: colorHex,
                backgroundColor: `${colorHex}15`,
              }}
            >
              {TYPE_LABEL[type]}
            </span>
            {details.length > 0 && (
              <span className="text-xs text-neutral-400">
                {details.join(" · ")}
              </span>
            )}
          </div>
        </div>

        {/* Color swatch */}
        {vehicle.color && (
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div
              className="w-5 h-5 rounded-full ring-2 ring-offset-2 ring-neutral-200"
              style={{ backgroundColor: colorHex }}
            />
            <span className="text-[10px] text-neutral-400 capitalize">{vehicle.color}</span>
          </div>
        )}
      </div>

      {/* Features */}
      {vehicle.features.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {vehicle.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 bg-neutral-50 border border-neutral-100 rounded-lg px-2.5 py-1.5"
            >
              <Icon
                icon={FEATURE_ICONS[feature] || "solar:check-circle-linear"}
                className="text-sm text-neutral-400"
              />
              {feature}
            </span>
          ))}
        </div>
      )}

      {index < total - 1 && (
        <div className="border-b border-neutral-100 mt-5 mb-1" />
      )}
    </div>
  );
}

export function VehicleInfo({ vehicles }: VehicleInfoProps) {
  if (vehicles.length === 0) return null;

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="space-y-5">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} index={index} total={vehicles.length} />
        ))}
      </div>
    </div>
  );
}
