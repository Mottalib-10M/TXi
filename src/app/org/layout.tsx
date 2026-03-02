import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { OrgSidebar } from "@/components/layout/OrgSidebar";

export default async function OrgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/connexion");
  }

  if (session.user.role === "driver") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <OrgSidebar userName={session.user.name || ""} orgType={session.user.orgType} />
      <div className="lg:pl-64">
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
