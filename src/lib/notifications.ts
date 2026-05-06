import { prisma } from "@/lib/prisma";
import type { NotificationType, Prisma } from "@prisma/client";

export function createNotification({
  type,
  title,
  body,
  metadata,
}: {
  type: NotificationType;
  title: string;
  body: string;
  metadata?: Prisma.InputJsonValue;
}) {
  prisma.adminNotification
    .create({
      data: {
        type,
        title,
        body,
        metadata: metadata ?? undefined,
      },
    })
    .catch((err) => {
      console.error("[Notification] Failed to persist notification:", err);
    });
}
