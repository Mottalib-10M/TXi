import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// En tête de l'onglet Courses du chauffeur : courses reçues ou transmises,
// et le bouton pour créer une course à transmettre à un collègue.

export async function RidesSwitch({ active, children }: { active: "received" | "transmitted"; children?: React.ReactNode }) {
  const t = await getTranslations("dashboard.rides");
  const tab = (href: string, label: string, on: boolean) => (
    <Link
      href={href as "/dashboard"}
      aria-current={on ? "page" : undefined}
      className={`flex-1 h-9 rounded-lg flex items-center justify-center text-sm transition-colors ${
        on ? "bg-white text-neutral-950 font-semibold shadow-sm" : "text-neutral-600 font-medium hover:text-neutral-900"
      }`}
    >
      {label}
    </Link>
  );
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight mb-4">{t("title")}</h1>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex gap-1 p-1 bg-neutral-200/70 rounded-xl sm:w-80">
          {tab("/dashboard/reservations", t("received"), active === "received")}
          {tab("/dashboard/p2p", t("transmitted"), active === "transmitted")}
        </div>
        {active === "received" && (
          <div className="flex gap-3 sm:ml-auto">
          {children}
          <Link
            href="/dashboard/p2p#nouvelle-course"
            className="flex-1 sm:flex-none h-11 px-4 rounded-xl border border-dashed border-neutral-400 bg-white text-sm font-semibold flex items-center justify-center gap-2 hover:border-neutral-900 transition-colors"
          >
            <Icon icon="solar:add-circle-linear" className="text-lg" />
            {t("create")}
          </Link>
          </div>
        )}
      </div>
    </div>
  );
}
