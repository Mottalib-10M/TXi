import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LogoutButton } from "@/components/layout/LogoutButton";
import { MenuRows } from "@/components/layout/MenuRows";
import { initials } from "@/lib/initials";

// Onglet « Compte » de l'organisation : favoris, cagnotte (sauf particulier),
// paramètres, langue et déconnexion.

export default async function OrgComptePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const org = await prisma.organization.findUnique({
    where: { id: session.user.id },
    select: { name: true, type: true, email: true },
  });
  if (!org) redirect("/connexion");

  const t = await getTranslations("org.account");

  const rows = [
    { href: "/org/favoris", label: t("favorites"), desc: t("favoritesDesc"), icon: "solar:star-linear" },
    ...(org.type === "INDIVIDUAL" ? [] : [{ href: "/org/cagnotte", label: t("wallet"), desc: t("walletDesc"), icon: "solar:wallet-linear" }]),
    { href: "/org/parametres", label: t("settings"), desc: t("settingsDesc"), icon: "solar:settings-linear" },
  ];

  return (
    <div className="min-w-0 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 min-w-0">
          <div className="flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl p-4">
            <span className="w-14 h-14 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-bold shrink-0">
              {initials(org.name)}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-lg font-semibold truncate">{org.name}</span>
              <span className="block text-sm text-neutral-500 truncate">{org.email}</span>
            </span>
          </div>
          <MenuRows rows={rows} />
        </div>
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="p-3">
            <LanguageSwitcher variant="full" />
          </div>
          <div className="border-t border-neutral-100">
            <LogoutButton label={t("logout")} />
          </div>
        </div>
      </div>
    </div>
  );
}
