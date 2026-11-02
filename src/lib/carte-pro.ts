// Dépôt de la carte professionnelle (inscription et écran Courses) et attente de 24 h :
// une décision de l'administration (validée ou refusée) l'emporte ; sans réponse, le compte
// est autorisé par le passage toutes les 10 minutes (/api/cron/escalate-bookings).

import { prisma } from "@/lib/prisma";
import { buildCarteProDecisionEmail, buildCarteProReminderEmail, sendEmail } from "@/lib/email";
import { driverPool } from "@/lib/demo";
import { notifyDriver } from "@/lib/push";

export const CARTE_PRO_WAIT_MS = 24 * 60 * 60 * 1000;
const FIRST_REMINDER_MS = 24 * 60 * 60 * 1000;
const SECOND_REMINDER_MS = 3 * 24 * 60 * 60 * 1000;
/** Les relances ne concernent que les chauffeurs inscrits à partir de cette date. */
const REMINDERS_FROM = new Date("2026-11-02T00:00:00+01:00");

const PDF_PREFIX = "data:application/pdf;base64,";
const IMAGE_PREFIXES = ["data:image/jpeg;base64,", "data:image/png;base64,", "data:image/webp;base64,"];
const MAX_LENGTH = 14 * 1024 * 1024;

/** Message d'erreur si le fichier n'est pas accepté, sinon null. */
export function carteProError(dataUrl: string): string | null {
  if (!dataUrl.startsWith(PDF_PREFIX) && !IMAGE_PREFIXES.some((p) => dataUrl.startsWith(p))) {
    return "Format de carte pro invalide";
  }
  if (dataUrl.length > MAX_LENGTH) return "Fichier carte pro trop volumineux";
  return null;
}

/** Envoie la carte sur Cloudinary et renvoie son adresse ; sans Cloudinary, le fichier lui-même (développement). */
export async function storeCartePro(dataUrl: string): Promise<string> {
  if (process.env.CLOUDINARY_URL) {
    try {
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_URL.split("@")[1];
      const apiKey = process.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_URL.split("://")[1].split(":")[0];
      const apiSecret = process.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_URL.split(":")[2].split("@")[0];
      const timestamp = Math.floor(Date.now() / 1000).toString();

      const { createHash } = await import("crypto");
      const signature = createHash("sha1")
        .update(`folder=carte-pro&timestamp=${timestamp}&upload_preset=ml_default${apiSecret}`)
        .digest("hex");

      const formData = new FormData();
      formData.append("file", dataUrl);
      formData.append("upload_preset", "ml_default");
      formData.append("folder", "carte-pro");
      formData.append("timestamp", timestamp);
      formData.append("api_key", apiKey);
      formData.append("signature", signature);

      const kind = dataUrl.startsWith(PDF_PREFIX) ? "raw" : "image";
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${kind}/upload`, { method: "POST", body: formData });
      if (res.ok) return (await res.json()).secure_url;
    } catch (err) {
      console.error("Cloudinary carte pro upload failed:", err);
    }
  }
  return dataUrl;
}

/** Prévient l'administration qu'une carte attend sa décision. */
export async function notifyAdminsCartePro(driverId: string, autoApproval: boolean) {
  const baseUrl = process.env.NEXTAUTH_URL || "https://www.taxineo.fr";
  const adminEmails = (process.env.ADMIN_EMAILS || "support@taxineo.fr,sni.taxi@outlook.fr").split(",").map((e) => e.trim());
  const notice = autoApproval
    ? "Sans décision de votre part sous 24 h, le chauffeur sera autorisé automatiquement."
    : "Sa carte précédente a été refusée : ce compte attend votre décision, sans autorisation automatique.";
  await Promise.all(
    adminEmails.map((to) =>
      sendEmail({
        to,
        subject: "Carte professionnelle à vérifier",
        html: `<p>Un chauffeur a envoyé sa carte professionnelle.</p><p>${notice}</p><p><a href="${baseUrl}/fr/admin/chauffeurs/${driverId}">Voir la fiche du chauffeur</a></p>`,
      }).catch((err) => console.error("Carte pro admin email failed:", err))
    )
  );
}

/** Annonce la décision au chauffeur : notification de l'app et e-mail, l'échec de l'un n'empêche pas l'autre. */
export async function notifyCarteProDecision(driverId: string, decision: "verified" | "refused") {
  await notifyDriver(driverId, decision === "verified" ? "carteVerified" : "carteRefused", {}).catch((err) =>
    console.error("Carte pro push failed:", err)
  );
  const driver = await prisma.driver.findUnique({ where: { id: driverId }, select: { email: true, firstName: true } });
  if (!driver) return;
  const baseUrl = process.env.NEXTAUTH_URL || "https://www.taxineo.fr";
  const { subject, html } = buildCarteProDecisionEmail(driver.firstName, decision, `${baseUrl}/dashboard/reservations`);
  await sendEmail({ to: driver.email, subject, html }).catch((err) => console.error("Carte pro email failed:", err));
}

/** Autorise les chauffeurs dont la carte attend depuis 24 h sans décision de l'administration. */
export async function approveExpiredCartes() {
  const limit = new Date(Date.now() - CARTE_PRO_WAIT_MS);
  const where = {
    isVerified: false,
    isActive: true,
    emailVerified: true,
    suspendedAt: null,
    carteProUrl: { not: null },
    carteProSubmittedAt: { lte: limit },
  };
  const due = await prisma.driver.findMany({ where, select: { id: true } });
  let approved = 0;
  for (const { id } of due) {
    // Condition répétée : une décision prise entre-temps n'est jamais écrasée.
    const { count } = await prisma.driver.updateMany({
      where: { ...where, id },
      data: { isVerified: true, carteProSubmittedAt: null, carteProAutoApprovedAt: new Date() },
    });
    if (count) {
      approved++;
      await notifyCarteProDecision(id, "verified");
    }
  }
  return approved;
}

/** Relance par e-mail les nouveaux inscrits sans carte, en journée : 24 h après l'inscription, puis 3 jours plus tard. */
export async function sendCarteProReminders(now = new Date()) {
  const hour = Number(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone: "Europe/Paris" }).format(now));
  if (hour < 9 || hour >= 20) return 0;

  const base = {
    ...driverPool(),
    isActive: true,
    isVerified: false,
    emailVerified: true,
    suspendedAt: null,
    notifyEmail: true,
    carteProUrl: null,
    carteProRefusedAt: null,
    createdAt: { gte: REMINDERS_FROM },
  };
  const due = await prisma.driver.findMany({
    where: {
      OR: [
        { ...base, carteProReminderCount: 0, createdAt: { gte: REMINDERS_FROM, lte: new Date(now.getTime() - FIRST_REMINDER_MS) } },
        { ...base, carteProReminderCount: 1, carteProReminderAt: { lte: new Date(now.getTime() - SECOND_REMINDER_MS) } },
      ],
    },
    select: { id: true, email: true, firstName: true, zoneAddress: true, carteProReminderCount: true },
  });

  const baseUrl = process.env.NEXTAUTH_URL || "https://www.taxineo.fr";
  let sent = 0;
  for (const d of due) {
    // Réservé avant l'envoi : deux passages ne relancent jamais deux fois.
    const { count } = await prisma.driver.updateMany({
      where: { id: d.id, carteProReminderCount: d.carteProReminderCount, carteProUrl: null },
      data: { carteProReminderCount: d.carteProReminderCount + 1, carteProReminderAt: now },
    });
    if (!count) continue;
    const step = d.carteProReminderCount === 0 ? 1 : 2;
    const { subject, html } = buildCarteProReminderEmail({ firstName: d.firstName, zoneAddress: d.zoneAddress }, step, `${baseUrl}/dashboard/reservations`);
    await sendEmail({ to: d.email, subject, html }).catch((err) => console.error("Carte pro reminder failed:", err));
    sent++;
  }
  return sent;
}
