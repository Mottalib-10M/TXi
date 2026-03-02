"use client";

import { useState } from "react";
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

// Brand → simple-icons slug
const BRAND_ICONS: Record<string, string> = {
  mercedes: "simple-icons:mercedes",
  "mercedes-benz": "simple-icons:mercedes",
  bmw: "simple-icons:bmw",
  audi: "simple-icons:audi",
  volkswagen: "simple-icons:volkswagen",
  toyota: "simple-icons:toyota",
  peugeot: "simple-icons:peugeot",
  renault: "simple-icons:renault",
  citroen: "simple-icons:citroen",
  citroën: "simple-icons:citroen",
  tesla: "simple-icons:tesla",
  volvo: "simple-icons:volvo",
  porsche: "simple-icons:porsche",
  ford: "simple-icons:ford",
  opel: "simple-icons:opel",
  fiat: "simple-icons:fiat",
  nissan: "simple-icons:nissan",
  honda: "simple-icons:honda",
  hyundai: "simple-icons:hyundai",
  kia: "simple-icons:kia",
  mazda: "simple-icons:mazda",
  skoda: "simple-icons:skoda",
  škoda: "simple-icons:skoda",
  seat: "simple-icons:seat",
  dacia: "simple-icons:dacia",
  byd: "simple-icons:byd",
  lexus: "simple-icons:lexus",
  jaguar: "simple-icons:jaguar",
  mini: "simple-icons:mini",
  jeep: "simple-icons:jeep",
  suzuki: "simple-icons:suzuki",
  subaru: "simple-icons:subaru",
  "alfa romeo": "simple-icons:alfaromeo",
  "land rover": "simple-icons:landrover",
  ds: "simple-icons:dsautomobiles",
  mitsubishi: "simple-icons:mitsubishi",
  chevrolet: "simple-icons:chevrolet",
  genesis: "simple-icons:genesis",
  cupra: "simple-icons:cupra",
  bentley: "simple-icons:bentley",
  "rolls-royce": "simple-icons:rollsroyce",
  "rolls royce": "simple-icons:rollsroyce",
  maserati: "simple-icons:maserati",
  ferrari: "simple-icons:ferrari",
  lamborghini: "simple-icons:lamborghini",
  bugatti: "simple-icons:bugatti",
  alpine: "simple-icons:alpine",
};

function getBrandIcon(brand: string): string | null {
  const key = brand.toLowerCase().trim();
  return BRAND_ICONS[key] || null;
}

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

const TYPE_CONFIG: Record<VehicleType, { icon: string; label: string }> = {
  sedan:  { icon: "ph:car-profile-fill", label: "Berline" },
  luxury: { icon: "ph:car-profile-fill", label: "Premium" },
  suv:    { icon: "tabler:car-suv", label: "SUV" },
  van:    { icon: "fluent:vehicle-bus-20-filled", label: "Van" },
};

function VehicleCard({ vehicle, index, total, onPhotoClick }: { vehicle: Vehicle; index: number; total: number; onPhotoClick: (url: string) => void }) {
  const type = detectType(vehicle.brand, vehicle.model);
  const config = TYPE_CONFIG[type];
  const colorHex = COLOR_MAP[vehicle.color.toLowerCase().trim()] || "#525252";
  const fullName = `${vehicle.brand} ${vehicle.model}`.trim();
  const hasPhotos = vehicle.photos && vehicle.photos.length > 0;
  const brandIcon = getBrandIcon(vehicle.brand);

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
        <div className="flex justify-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {vehicle.photos.map((url, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onPhotoClick(url)}
              className="w-36 h-28 rounded-xl overflow-hidden bg-neutral-100 shrink-0 cursor-zoom-in hover:opacity-90 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`${fullName} - ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Vehicle card */}
      <div className="flex flex-col items-center gap-3 text-center">
        {/* Brand logo or car type icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative"
          style={{ backgroundColor: `${colorHex}20` }}
        >
          {brandIcon ? (
            <Icon icon={brandIcon} className="text-2xl" style={{ color: colorHex }} />
          ) : (
            <Icon icon={config.icon} className="text-2xl" style={{ color: colorHex }} />
          )}
        </div>

        {/* Info */}
        <div className="min-w-0">
          <p className="text-base font-semibold text-neutral-900 tracking-tight">
            {fullName}
          </p>
          <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500">
              <Icon icon={config.icon} className="text-xs text-neutral-400" />
              {config.label}
            </span>
            {details.length > 0 && (
              <>
                <span className="text-neutral-300">·</span>
                <span className="text-[11px] text-neutral-400">
                  {details.join(" · ")}
                </span>
              </>
            )}
            {vehicle.color && (
              <>
                <span className="text-neutral-300">·</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-neutral-200"
                    style={{ backgroundColor: colorHex }}
                  />
                  <span className="capitalize">{vehicle.color}</span>
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features */}
      {vehicle.features.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
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
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  if (vehicles.length === 0) return null;

  return (
    <>
      <div className="bg-white border border-neutral-200 rounded-2xl p-6">
        <div className="space-y-5">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              vehicle={vehicle}
              index={index}
              total={vehicles.length}
              onPhotoClick={setLightboxUrl}
            />
          ))}
        </div>
      </div>

      {/* Photo lightbox */}
      {lightboxUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxUrl(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxUrl(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <Icon icon="solar:close-circle-bold" className="text-2xl" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxUrl}
            alt="Photo du véhicule"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
