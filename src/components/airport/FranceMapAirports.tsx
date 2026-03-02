"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { airports } from "@/data/airports";

const regions = [
  { name: "Île-de-France", slugs: ["paris-charles-de-gaulle", "paris-orly", "paris-beauvais"] },
  { name: "Hauts-de-France", slugs: ["lille-lesquin"] },
  { name: "Normandie", slugs: ["caen-carpiquet", "deauville-normandie"] },
  { name: "Grand Est", slugs: ["strasbourg-entzheim", "bale-mulhouse", "metz-nancy-lorraine"] },
  { name: "Bretagne", slugs: ["brest-bretagne", "rennes-bretagne", "dinard-bretagne", "lorient-bretagne-sud", "lannion-cote-de-granit-rose", "quimper-cornouaille"] },
  { name: "Pays de la Loire", slugs: ["nantes-atlantique"] },
  { name: "Centre-Val de Loire", slugs: ["tours-val-de-loire"] },
  { name: "Bourgogne-Franche-Comté", slugs: ["dole-jura"] },
  { name: "Nouvelle-Aquitaine", slugs: ["bordeaux-merignac", "limoges-bellegarde", "poitiers-biard", "pau-pyrenees", "la-rochelle-ile-de-re", "biarritz-pays-basque", "bergerac-dordogne-perigord", "angouleme-cognac", "agen-la-garenne"] },
  { name: "Auvergne-Rhône-Alpes", slugs: ["lyon-saint-exupery", "grenoble-isere", "clermont-ferrand-auvergne", "chambery-savoie-mont-blanc", "annecy-haute-savoie", "aurillac-tronquieres", "le-puy-loudes"] },
  { name: "Occitanie", slugs: ["toulouse-blagnac", "montpellier-mediterranee", "perpignan-rivesaltes", "tarbes-lourdes-pyrenees", "carcassonne-salvaza", "rodez-aveyron", "castres-mazamet", "nimes-garons"] },
  { name: "Provence-Alpes-Côte d'Azur", slugs: ["marseille-provence", "nice-cote-d-azur", "toulon-hyeres", "avignon-provence"] },
  { name: "Corse", slugs: ["ajaccio-napoleon-bonaparte", "bastia-poretta", "figari-sud-corse", "calvi-sainte-catherine"] },
];

function latLngToSvg(lat: number, lng: number): [number, number] {
  return [
    30 + ((lng + 5.1) / 13.3) * 440,
    30 + ((51.1 - lat) / 8.8) * 490,
  ];
}

// Corse : projection décalée pour visibilité
function latLngToSvgCorse(lat: number, lng: number): [number, number] {
  return [
    380 + ((lng - 8.5) / 1.5) * 60,
    380 + ((42.6 - lat) / 1.5) * 80,
  ];
}

const franceOutline =
  "277,33 251,39 233,97 202,119 145,109 136,166 50,178 60,211 106,222 119,243 124,258 161,305 164,336 159,389 146,454 140,461 176,486 222,500 268,512 300,498 321,459 377,466 395,475 422,456 447,439 448,417 422,370 427,322 402,303 425,258 448,228 457,170 462,144 430,133 409,116 357,86 329,75 300,55";

const corseOutline = "395,380 385,395 383,420 388,445 400,455 410,445 412,420 408,395";

export function FranceMapAirports() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const airportRegionMap = new Map<string, string>();
  regions.forEach((r) => r.slugs.forEach((s) => airportRegionMap.set(s, r.name)));

  function isCorse(slug: string) {
    return regions.find((r) => r.name === "Corse")?.slugs.includes(slug) ?? false;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Map */}
      <div className="lg:sticky lg:top-28">
        <div
          className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <svg viewBox="0 0 500 550" className="w-full h-auto relative z-10">
            <polygon
              points={franceOutline}
              fill="white"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points={corseOutline}
              fill="white"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {airports.map((ap) => {
              const isCors = isCorse(ap.slug);
              const [cx, cy] = isCors
                ? latLngToSvgCorse(ap.lat, ap.lng)
                : latLngToSvg(ap.lat, ap.lng);
              const region = airportRegionMap.get(ap.slug);
              const isHighlighted = activeRegion === null || activeRegion === region;
              const isActiveRegion = activeRegion === region;

              return (
                <g
                  key={ap.slug}
                  className="cursor-pointer"
                  onClick={() => router.push(`/taxi-aeroport-${ap.slug}`)}
                >
                  {isActiveRegion && (
                    <circle cx={cx} cy={cy} r={14} fill="#171717" opacity={0.06} />
                  )}
                  <circle cx={cx} cy={cy} r={12} fill="transparent" />
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={isActiveRegion ? 14 : 11}
                    fill={isHighlighted ? "#171717" : "#d4d4d4"}
                    className="transition-all duration-300 pointer-events-none select-none"
                  >
                    ✈
                  </text>
                  {isActiveRegion && (
                    <text
                      x={cx}
                      y={cy - 12}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#404040"
                      fontWeight="500"
                      className="pointer-events-none select-none"
                    >
                      {ap.iata}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Regions list */}
      <div className="space-y-3">
        {regions.map((region) => {
          const isActive = activeRegion === region.name;

          return (
            <div
              key={region.name}
              className={`border rounded-2xl p-5 transition-all duration-200 ${
                isActive
                  ? "bg-neutral-950 border-neutral-950 shadow-xl shadow-neutral-950/10"
                  : "bg-white border-neutral-200 hover:border-neutral-300"
              }`}
              onMouseEnter={() => setActiveRegion(region.name)}
              onMouseLeave={() => setActiveRegion(null)}
              onClick={() => setActiveRegion(isActive ? null : region.name)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`text-sm font-medium tracking-tight flex items-center gap-2 ${
                    isActive ? "text-white" : "text-neutral-900"
                  }`}
                >
                  <Icon icon="solar:airplane-linear" className={`text-base ${isActive ? "text-neutral-400" : "text-neutral-400"}`} />
                  {region.name}
                </h3>
                <span
                  className={`text-xs font-light ${
                    isActive ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {region.slugs.length} aéroport{region.slugs.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.slugs.map((slug) => {
                  const ap = airports.find((a) => a.slug === slug);
                  if (!ap) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/taxi-aeroport-${slug}`}
                      className={`text-xs font-light rounded-full px-3 py-1.5 transition-colors ${
                        isActive
                          ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                          : "bg-neutral-50 text-neutral-500 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-400"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {ap.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
