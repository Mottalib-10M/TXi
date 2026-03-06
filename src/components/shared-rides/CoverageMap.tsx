"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface Location {
  id: string;
  label: string;
  shortLabel?: string;
  category: "airport" | "station" | "business" | "school";
  x: number;
  y: number;
}

const locations: Location[] = [
  { id: "cdg", label: "Aéroport Charles de Gaulle", shortLabel: "CDG", category: "airport", x: 340, y: 52 },
  { id: "defense", label: "La Défense", category: "business", x: 100, y: 120 },
  { id: "champs", label: "Paris Champs-Élysées", shortLabel: "Champs-Élysées", category: "business", x: 215, y: 150 },
  { id: "louvre", label: "Paris Louvre", shortLabel: "Louvre", category: "business", x: 330, y: 165 },
  { id: "gare-lyon", label: "Gare de Lyon", category: "station", x: 440, y: 200 },
  { id: "orly", label: "Aéroport d'Orly", shortLabel: "Orly", category: "airport", x: 120, y: 275 },
  { id: "gare-fbleau", label: "Gare de Fontainebleau-Avon", shortLabel: "Gare Fontainebleau", category: "station", x: 340, y: 330 },
  { id: "insead", label: "INSEAD Fontainebleau", shortLabel: "INSEAD", category: "school", x: 250, y: 400 },
];

/** Map CoverageMap location IDs to predefinedLocations IDs */
const locationIdMap: Record<string, string> = {
  cdg: "aeroport-cdg",
  defense: "la-defense",
  champs: "paris-champs-elysees",
  louvre: "paris-louvre",
  "gare-lyon": "gare-de-lyon",
  orly: "aeroport-orly",
  "gare-fbleau": "gare-fontainebleau-avon",
  insead: "insead-fontainebleau",
};

const categoryStyle: Record<string, { color: string; bg: string }> = {
  airport: { color: "#3b82f6", bg: "#dbeafe" },
  station: { color: "#f59e0b", bg: "#fef3c7" },
  business: { color: "#171717", bg: "#f5f5f5" },
  school: { color: "#10b981", bg: "#d1fae5" },
};

export function CoverageMap({ onLocationClick }: { onLocationClick?: (predefinedLocationId: string) => void } = {}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const t = useTranslations("sharedRides");

  const hoveredLoc = locations.find((l) => l.id === hovered);

  return (
    <div className="relative">
      {/* Subtle badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
        <span className="bg-white border border-neutral-200 text-neutral-500 text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
          {t("coverageTitle")}
        </span>
      </div>

      <div
        className="bg-neutral-50/80 border border-neutral-200 rounded-3xl p-5 md:p-8 relative overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 0.8px, transparent 0.8px)",
          backgroundSize: "16px 16px",
        }}
      >
        <svg viewBox="0 0 520 460" className="w-full h-auto">
          {/* Connecting curves from hovered point to all others */}
          {hoveredLoc &&
            locations
              .filter((l) => l.id !== hoveredLoc.id)
              .map((target) => {
                const midX = (hoveredLoc.x + target.x) / 2;
                const midY = (hoveredLoc.y + target.y) / 2 - 20;
                return (
                  <path
                    key={`path-${target.id}`}
                    d={`M${hoveredLoc.x},${hoveredLoc.y} Q${midX},${midY} ${target.x},${target.y}`}
                    fill="none"
                    stroke="#171717"
                    strokeWidth={1.5}
                    opacity={0.25}
                    className="transition-all duration-300"
                  />
                );
              })}

          {/* Location nodes */}
          {locations.map((loc) => {
            const style = categoryStyle[loc.category];
            const isActive = hovered === loc.id;
            const r = isActive ? 26 : 22;
            const displayName = loc.shortLabel || loc.label;

            return (
              <g
                key={loc.id}
                className={onLocationClick ? "cursor-pointer" : "cursor-default"}
                onMouseEnter={() => setHovered(loc.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  const predefinedId = locationIdMap[loc.id];
                  if (predefinedId && onLocationClick) onLocationClick(predefinedId);
                }}
              >
                {/* Pulse ring on hover */}
                {isActive && (
                  <>
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={36}
                      fill={style.color}
                      opacity={0.06}
                    />
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={30}
                      fill="none"
                      stroke={style.color}
                      strokeWidth={1}
                      opacity={0.15}
                    />
                  </>
                )}

                {/* White shadow circle */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={r + 2}
                  fill="white"
                  opacity={0.9}
                />

                {/* Main circle */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={r}
                  fill={isActive ? style.color : style.bg}
                  stroke={style.color}
                  strokeWidth={isActive ? 2 : 1.5}
                  className="transition-all duration-200"
                />

                {/* Icon */}
                <CategoryIcon
                  category={loc.category}
                  x={loc.x}
                  y={loc.y}
                  active={isActive}
                  color={style.color}
                />

                {/* Label pill */}
                <foreignObject
                  x={loc.x - 65}
                  y={loc.y + r + 6}
                  width={130}
                  height={24}
                  className="pointer-events-none"
                >
                  <div className="flex justify-center">
                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-neutral-900 text-white shadow-lg"
                          : "bg-white text-neutral-600 border border-neutral-200"
                      }`}
                    >
                      {displayName}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function CategoryIcon({
  category,
  x,
  y,
  active,
  color,
}: {
  category: string;
  x: number;
  y: number;
  active: boolean;
  color: string;
}) {
  const fill = active ? "white" : color;

  switch (category) {
    case "airport":
      return (
        <g transform={`translate(${x - 8.5}, ${y - 8.5}) scale(0.7)`}>
          <path
            d="M21 16v-2l-8-5V3.5a1.5 1.5 0 10-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill={fill}
          />
        </g>
      );
    case "station":
      return (
        <g transform={`translate(${x - 8.5}, ${y - 8.5}) scale(0.7)`}>
          <path
            d="M12 2C8 2 4 2.5 4 6v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3.5-6H6V7h5v4zm2 0V7h5v4h-5zm3.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            fill={fill}
          />
        </g>
      );
    case "business":
      return (
        <g transform={`translate(${x - 8.5}, ${y - 8.5}) scale(0.7)`}>
          <path
            d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"
            fill={fill}
          />
        </g>
      );
    case "school":
      return (
        <g transform={`translate(${x - 8.5}, ${y - 8.5}) scale(0.7)`}>
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" fill={fill} />
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill={fill} />
        </g>
      );
    default:
      return null;
  }
}
