import { isAdmin } from "@/lib/admin";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { escalateIfDue } from "@/lib/escalation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await isAdmin();
  // Course sans réponse (transmise : 30 min) : proposée aux chauffeurs proches, au plus une fois par minute.
  await escalateIfDue();

  if (!authenticated) {
    // Middleware handles redirecting non-login admin pages to /admin/login.
    // If we reach here without auth, we're on the login page — render bare.
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminSidebar userName="Admin" />
      <div className="lg:pl-64">
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
