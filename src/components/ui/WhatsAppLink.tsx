"use client";

import { Icon } from "@iconify/react";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppLink({
  href,
  context,
  bookingId,
  className = "",
  iconClassName = "text-base",
}: {
  href: string;
  context: string;
  bookingId?: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
        trackWhatsAppClick({ context, bookingId });
      }}
      className={`inline-flex items-center gap-1 text-xs text-green-600 hover:text-green-800 font-medium transition-colors ${className}`}
    >
      <Icon icon="mdi:whatsapp" className={iconClassName} />
      WhatsApp
    </a>
  );
}
