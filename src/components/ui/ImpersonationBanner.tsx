"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export function ImpersonationBanner() {
  const t = useTranslations("impersonation");
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (!session?.user?.impersonatingFrom) return null;

  async function stopImpersonation() {
    setLoading(true);
    try {
      await fetch("/api/admin/stop-impersonation", { method: "POST" });
      router.push("/admin/chauffeurs");
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-500 text-amber-950 px-4 py-2 flex items-center justify-center gap-3 text-sm font-medium shadow-md">
      <Icon icon="solar:eye-linear" className="text-lg shrink-0" />
      <span>
        {t("loggedInAs")} <strong>{session.user.name}</strong>
      </span>
      <button
        onClick={stopImpersonation}
        disabled={loading}
        className="bg-amber-950 text-amber-100 px-3 py-1 rounded-lg text-xs font-medium hover:bg-amber-900 transition-colors disabled:opacity-50"
      >
        {loading ? "..." : t("backToAdmin")}
      </button>
    </div>
  );
}
