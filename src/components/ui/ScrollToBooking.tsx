"use client";

import { Icon } from "@iconify/react";

export function ScrollToBooking({ label }: { label: string }) {
  function handleClick() {
    const section = document.getElementById("reserver");
    const input = document.getElementById("departure-input") as HTMLInputElement | null;
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Focus after scroll animation
    setTimeout(() => input?.focus(), 600);
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
    >
      {label}
      <Icon icon="solar:arrow-right-linear" />
    </button>
  );
}
