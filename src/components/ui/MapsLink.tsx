"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

/** Itinéraire Google Maps ouvert directement en voiture (pas en transports en commun). */
export function mapsUrl(origin: string, destination: string) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

export function MapsLink({
  origin,
  destination,
  className = "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 active:bg-blue-800",
}: {
  origin: string;
  destination: string;
  className?: string;
}) {
  const t = useTranslations("common");
  return (
    <a
      href={mapsUrl(origin, destination)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title="Google Maps"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon icon="solar:routing-2-bold" className="text-sm" />
      {t("directions")}
    </a>
  );
}
