"use server";

// Onglet Signalements : décisions de l'administration (src/lib/moderation.ts).

import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

const PAGE = "/[locale]/admin/signalements";

async function guard() {
  if (!(await isAdmin())) throw new Error("Non autorisé");
}

/** Classer un signalement : traité (ACTIONED) ou sans suite (DISMISSED). */
export async function resolveReportAction(form: FormData) {
  await guard();
  const id = String(form.get("id") || "");
  const status = form.get("status") === "DISMISSED" ? "DISMISSED" : "ACTIONED";
  await prisma.driverReport.update({ where: { id }, data: { status, resolvedAt: new Date() } });
  revalidatePath(PAGE, "page");
}

/** Retirer la photo et la présentation du profil public ; les signalements ouverts de ce chauffeur sont traités. */
export async function removeContentAction(form: FormData) {
  await guard();
  const driverId = String(form.get("driverId") || "");
  await prisma.$transaction([
    prisma.driver.update({ where: { id: driverId }, data: { photoUrl: null, bio: null } }),
    prisma.driverReport.updateMany({ where: { driverId, status: "OPEN" }, data: { status: "ACTIONED", resolvedAt: new Date() } }),
  ]);
  revalidatePath(PAGE, "page");
}

/** Suspendre (plus de connexion, plus de course, profil masqué) ou rétablir un chauffeur. */
export async function suspendDriverAction(form: FormData) {
  await guard();
  const driverId = String(form.get("driverId") || "");
  const suspend = form.get("suspend") === "yes";
  await prisma.$transaction([
    prisma.driver.update({
      where: { id: driverId },
      data: suspend ? { suspendedAt: new Date(), isActive: false } : { suspendedAt: null, isActive: true },
    }),
    ...(suspend
      ? [prisma.driverReport.updateMany({ where: { driverId, status: "OPEN" }, data: { status: "ACTIONED", resolvedAt: new Date() } })]
      : []),
  ]);
  revalidatePath(PAGE, "page");
}
