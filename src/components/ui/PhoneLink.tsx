"use client";

import { Icon } from "@iconify/react";

export function PhoneLink({
  phone,
  label,
  className = "",
}: {
  phone: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      onClick={(e) => e.stopPropagation()}
      className={`inline-flex items-center gap-1 text-xs font-medium transition-colors ${className}`}
      title={label}
    >
      <Icon icon="solar:phone-bold" className="text-sm" />
      {phone}
    </a>
  );
}
