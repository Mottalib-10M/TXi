import { prisma } from "@/lib/prisma";
import { AdminNotificationsFeed } from "@/components/admin/AdminNotificationsFeed";

export const dynamic = "force-dynamic";

export default async function AdminNotificationsPage() {
  const notifications = await prisma.adminNotification.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const serialized = notifications.map((n) => ({
    ...n,
    createdAt: n.createdAt.toISOString(),
  }));

  return <AdminNotificationsFeed initialItems={serialized} />;
}
