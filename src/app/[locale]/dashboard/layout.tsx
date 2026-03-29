import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/connexion");
  }

  if (session.user.role === "organization") {
    redirect("/org");
  }

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: { firstName: true, lastName: true, companyName: true },
  });

  const userName = driver
    ? driver.lastName
      ? `${driver.firstName} ${driver.lastName}`
      : driver.companyName
        ? `${driver.firstName} — ${driver.companyName}`
        : driver.firstName
    : session.user.name || "";

  return (
    <div className="min-h-screen bg-neutral-50">
      <DashboardSidebar userName={userName} />
      <div className="lg:pl-64 min-w-0">
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
