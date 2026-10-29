import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";

// Liste de liens des pages Moi (chauffeur) et Compte (organisation).

export type MenuRow = { href: string; label: string; desc?: string; icon: string };

export function MenuRows({ rows }: { rows: MenuRow[] }) {
  return (
    <ul className="bg-white border border-neutral-200 rounded-2xl divide-y divide-neutral-100 overflow-hidden">
      {rows.map((row) => (
        <li key={row.href}>
          <Link
            href={row.href as "/dashboard"}
            className="flex items-center gap-3 px-4 py-3 min-h-[60px] hover:bg-neutral-50 transition-colors"
          >
            <span className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
              <Icon icon={row.icon} className="text-lg text-neutral-700" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-semibold text-neutral-900">{row.label}</span>
              {row.desc && <span className="block text-xs text-neutral-500 truncate">{row.desc}</span>}
            </span>
            <Icon icon="solar:alt-arrow-right-linear" className="text-neutral-400 shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
