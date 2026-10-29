"use client";

import { signOut } from "next-auth/react";
import { Icon } from "@iconify/react";
import { trackLogout } from "@/lib/analytics";

export function LogoutButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => { trackLogout(); signOut({ callbackUrl: "/" }); }}
      className="w-full flex items-center gap-3 px-4 min-h-[52px] text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
    >
      <Icon icon="solar:logout-2-linear" className="text-xl" />
      {label}
    </button>
  );
}
