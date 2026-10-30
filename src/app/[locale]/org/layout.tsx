import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { OrgSidebar } from "@/components/layout/OrgSidebar";
import { escalateIfDue } from "@/lib/escalation";
import { getTranslations } from "next-intl/server";
import { SpaceBackLink } from "@/components/layout/SpaceBackLink";
import { UsageUser } from "@/components/analytics/UsageUser";

export default async function OrgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  // Course sans réponse (transmise : 30 min) : proposée aux chauffeurs proches, au plus une fois par minute.
  await escalateIfDue();

  if (!session?.user) {
    redirect("/connexion");
  }

  if (session.user.role === "driver") {
    redirect("/dashboard");
  }

  // Compte supprimé depuis un autre appareil : la session est fermée.
  const org = await prisma.organization.findUnique({
    where: { id: session.user.id },
    select: { type: true, createdAt: true, loginCount: true, cagnotteBalance: true },
  });
  if (!org) {
    redirect("/api/auth/end-session");
  }

  const t = await getTranslations("org.account");

  return (
    <div className="min-h-screen bg-neutral-50">
      <UsageUser
        id={session.user.id}
        traits={{ role: "organization", org_type: org.type, login_count: org.loginCount, has_cagnotte: org.cagnotteBalance > 0 }}
        once={{ signed_up_at: org.createdAt.toISOString(), signup_role: "organization" }}
      />
      <OrgSidebar userName={session.user.name || ""} orgType={session.user.orgType} />
      <div className="lg:pl-64">
        <main className="space-main p-4 sm:p-6 lg:p-8">
          <SpaceBackLink href="/org/compte" label={t("title")} pages={["/org/favoris", "/org/cagnotte", "/org/parametres"]} />
          {children}
        </main>
      </div>
    </div>
  );
}
