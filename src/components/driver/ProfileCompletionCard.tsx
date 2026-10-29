// Carte « Profil rempli à N % » de l'onglet Moi : la barre de progression et,
// pour chaque information manquante, un lien direct vers la bonne section du profil.

import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { ProfileCheck } from "@/lib/driver-profile";

export async function ProfileCompletionCard({ completeness, missing }: { completeness: number; missing: ProfileCheck[] }) {
  if (missing.length === 0) return null;
  const td = await getTranslations("dashboard");

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-4">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h2 className="text-sm font-semibold">{td("profileFilled", { percent: completeness })}</h2>
        <span className="text-xs text-neutral-500">
          {missing.length === 1 ? td("missingInfo", { count: missing.length }) : td("missingInfoPlural", { count: missing.length })}
        </span>
      </div>
      <div className="w-full h-1.5 bg-neutral-100 rounded-full mb-3">
        <div className="h-1.5 bg-amber-400 rounded-full" style={{ width: `${completeness}%` }} />
      </div>
      <div className="space-y-1">
        {missing.map((check) => (
          <Link
            key={check.key}
            href={`/dashboard/profil?section=${check.section}`}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-amber-50 transition-colors"
          >
            <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
              <Icon icon={check.icon} className="text-amber-600 text-base" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm text-neutral-800 font-medium">{td(check.key)}</span>
              {check.hint && <span className="block text-xs text-neutral-500 font-light">{td(check.hint)}</span>}
            </span>
            <span className="text-xs text-amber-700 font-medium shrink-0">{td("complete")}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
