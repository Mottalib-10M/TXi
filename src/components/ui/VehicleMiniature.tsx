"use client";

import { Icon } from "@iconify/react";

type VehicleType = "sedan" | "suv" | "van" | "luxury";

interface VehicleMiniatureProps {
  brand?: string;
  model?: string;
  color?: string;
  year?: number;
  capacity?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const COLOR_MAP: Record<string, { hex: string; label: string }> = {
  noir:       { hex: "#171717", label: "Noir" },
  black:      { hex: "#171717", label: "Noir" },
  blanc:      { hex: "#f5f5f5", label: "Blanc" },
  white:      { hex: "#f5f5f5", label: "Blanc" },
  gris:       { hex: "#737373", label: "Gris" },
  grey:       { hex: "#737373", label: "Gris" },
  gray:       { hex: "#737373", label: "Gris" },
  argent:     { hex: "#a3a3a3", label: "Argent" },
  silver:     { hex: "#a3a3a3", label: "Argent" },
  bleu:       { hex: "#1d4ed8", label: "Bleu" },
  blue:       { hex: "#1d4ed8", label: "Bleu" },
  rouge:      { hex: "#b91c1c", label: "Rouge" },
  red:        { hex: "#b91c1c", label: "Rouge" },
  vert:       { hex: "#15803d", label: "Vert" },
  green:      { hex: "#15803d", label: "Vert" },
  beige:      { hex: "#c8a97e", label: "Beige" },
  marron:     { hex: "#6b3a1f", label: "Marron" },
  brown:      { hex: "#6b3a1f", label: "Marron" },
  bordeaux:   { hex: "#6b1d1d", label: "Bordeaux" },
  anthracite: { hex: "#363636", label: "Anthracite" },
};

const SUV_KEYWORDS = [
  "x1", "x3", "x5", "x6", "x7", "ix",
  "q3", "q5", "q7", "q8",
  "glc", "gle", "gls", "glb", "eqb", "eqc",
  "tucson", "sportage", "rav4", "cr-v", "crv",
  "tiguan", "touareg", "t-roc", "t-cross",
  "3008", "5008",
  "suv", "crossover",
  "model x", "model y",
  "duster", "captur", "kadjar", "arkana",
  "c5 aircross", "c3 aircross",
  "forester", "outback",
  "xc40", "xc60", "xc90",
  "cayenne", "macan",
  "range rover", "evoque", "defender",
];

const VAN_KEYWORDS = [
  "multivan", "transporter", "caravelle", "sharan",
  "classe v", "viano", "vito", "sprinter",
  "trafic", "master", "espace",
  "expert", "traveller",
  "spacetourer",
  "van", "minivan", "monospace",
  "scenic", "grand scenic",
  "s-max", "galaxy", "tourneo",
  "staria",
];

const LUXURY_KEYWORDS = [
  "classe s", "classe e", "maybach", "eqs", "eqe",
  "série 7", "serie 7", "série 5", "serie 5", "i7", "i5",
  "a8", "a7", "a6", "e-tron gt",
  "panamera", "taycan",
  "model s",
  "ls", "es",
  "xf", "xj",
  "s90", "s60",
  "ct6", "ct5",
  "genesis",
  "continental",
  "flying spur",
  "ghost", "phantom",
];

function detectType(brand: string, model: string): VehicleType {
  const search = `${brand} ${model}`.toLowerCase();
  for (const kw of VAN_KEYWORDS) { if (search.includes(kw)) return "van"; }
  for (const kw of SUV_KEYWORDS) { if (search.includes(kw)) return "suv"; }
  for (const kw of LUXURY_KEYWORDS) { if (search.includes(kw)) return "luxury"; }
  return "sedan";
}

const TYPE_CONFIG: Record<VehicleType, { icon: string; label: string }> = {
  sedan:  { icon: "mingcute:car-fill", label: "Berline" },
  luxury: { icon: "mingcute:car-fill", label: "Berline Premium" },
  suv:    { icon: "mingcute:car-3-fill", label: "SUV" },
  van:    { icon: "mingcute:bus-2-fill", label: "Van" },
};

export function VehicleMiniature({
  brand = "",
  model = "",
  color = "",
  year,
  capacity,
  className = "",
  size = "md",
}: VehicleMiniatureProps) {
  const type = detectType(brand, model);
  const config = TYPE_CONFIG[type];
  const colorLower = color.toLowerCase().trim();
  const colorData = COLOR_MAP[colorLower];
  const colorHex = colorData?.hex || "#525252";
  const isLight = ["blanc", "white", "beige", "argent", "silver"].includes(colorLower);

  const sizeClasses = {
    sm: "p-2.5 gap-2.5",
    md: "p-3.5 gap-3",
    lg: "p-4 gap-4",
  };

  const iconSizes = { sm: "text-lg", md: "text-2xl", lg: "text-3xl" };
  const titleSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };
  const subSizes = { sm: "text-[10px]", md: "text-xs", lg: "text-sm" };

  const fullName = `${brand} ${model}`.trim();
  if (!fullName) return null;

  const details: string[] = [];
  if (year && year > 0) details.push(String(year));
  if (capacity && capacity > 0) details.push(`${capacity} pl.`);

  return (
    <div className={`flex items-center ${sizeClasses[size]} rounded-xl bg-neutral-50 border border-neutral-100 ${className}`}>
      {/* Color dot + car icon */}
      <div className="relative shrink-0">
        <div
          className={`rounded-full flex items-center justify-center ${
            size === "sm" ? "w-9 h-9" : size === "md" ? "w-11 h-11" : "w-14 h-14"
          }`}
          style={{ backgroundColor: colorHex }}
        >
          <Icon
            icon={config.icon}
            className={`${iconSizes[size]} ${isLight ? "text-neutral-400" : "text-white/40"}`}
          />
        </div>
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className={`${titleSizes[size]} font-semibold text-neutral-900 truncate tracking-tight`}>
          {fullName}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`${subSizes[size]} text-neutral-400 font-medium`}>
            {config.label}
          </span>
          {details.length > 0 && (
            <>
              <span className={`${subSizes[size]} text-neutral-300`}>/</span>
              <span className={`${subSizes[size]} text-neutral-400`}>
                {details.join(" · ")}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
