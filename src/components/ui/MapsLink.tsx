"use client";

import { Icon } from "@iconify/react";

export function MapsLink({
  origin,
  destination,
  className = "w-7 h-7 flex items-center justify-center rounded-lg text-neutral-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",
}: {
  origin: string;
  destination: string;
  className?: string;
}) {
  return (
    <a
      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title="Google Maps"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon icon="solar:map-point-wave-linear" className="text-base" />
    </a>
  );
}
