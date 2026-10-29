// Notifications de l'app iPhone et Android, envoyées en même temps que les
// e-mails : aux téléphones inscrits d'un chauffeur, d'une organisation, ou du
// client sans compte qui a réservé depuis l'app (table DeviceToken, remplie par
// /api/push/register ; Booking.clientDeviceId relie la course au téléphone).
// - iPhone : APNs, avec la clé .p8 du compte développeur Apple
//   (APNS_KEY_ID, APNS_TEAM_ID, APNS_KEY = contenu du fichier .p8) ;
//   le serveur de production d'Apple d'abord, celui de test si le jeton vient
//   d'une version lancée depuis Xcode.
// - Android : Firebase Cloud Messaging v1, avec le compte de service du projet
//   Firebase (FCM_SERVICE_ACCOUNT = le JSON téléchargé).
// Sans ces variables, rien ne part et rien ne casse : l'e-mail reste le canal
// principal. Un jeton refusé par Apple ou Google est supprimé. Repris de CCC
// (lib/push.ts).

import http2 from "node:http2";
import { SignJWT, importPKCS8 } from "jose";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { prisma } from "@/lib/prisma";

const BUNDLE_ID = process.env.APNS_BUNDLE_ID || "com.taxineo.app";

type Locale = "fr" | "en";
type Text = { title: string; body: string };

// {from} → {to} : le trajet ; {date} : le jour et l'heure ; {driver} : le chauffeur ;
// {rides} et {amount} : le bilan de la semaine du chauffeur (déjà mis en forme).
const TEXTS: Record<Locale, Record<string, Text>> = {
  fr: {
    newRide: { title: "Nouvelle demande de course", body: "{from} → {to}, {date}. Ouvrez l'app pour l'accepter." },
    rideConfirmed: { title: "Course confirmée", body: "{from} → {to}, {date}." },
    rideCancelledByClient: { title: "Course annulée par le client", body: "{from} → {to}, {date}." },
    rideCancelledByAdmin: { title: "Course retirée par Taxineo", body: "{from} → {to}, {date}." },
    timeout: { title: "Délai de réponse dépassé", body: "{from} → {to}, {date} : la course est proposée à d'autres chauffeurs." },
    reminder: { title: "Une demande attend votre réponse", body: "{from} → {to}, {date}." },
    sharedProposal: { title: "Proposition de taxi partagé", body: "{from} → {to}, {date}." },
    p2pAccepted: { title: "Course transmise acceptée", body: "{driver} prend en charge {from} → {to}, {date}." },
    sharedTaken: { title: "Course reprise par un collègue", body: "{driver} prend {from} → {to}, {date}. Merci pour le coup de main." },
    p2pOpened: { title: "Course transmise proposée aux chauffeurs proches", body: "Personne ne l'a acceptée en 30 minutes : {from} → {to}, {date}. Vous restez le contact et gardez votre commission." },
    accepted: { title: "Votre taxi est confirmé", body: "{driver} assure votre course {from} → {to}, {date}." },
    rejected: { title: "Course non assurée", body: "Le chauffeur ne peut pas assurer {from} → {to}, {date}." },
    cancelledByDriver: { title: "Course annulée par le chauffeur", body: "{from} → {to}, {date}." },
    cancelled: { title: "Course annulée", body: "{from} → {to}, {date}." },
    noDriver: { title: "Aucun taxi disponible", body: "Personne n'a pu prendre {from} → {to}, {date}. Nous vous recontactons." },
    sharedJoined: { title: "Nouveau passager pour votre taxi partagé", body: "{from} → {to}, {date}." },
    reminderEveDriver: { title: "Rappel : course demain", body: "{from} → {to}, {date}." },
    reminderHourDriver: { title: "Course dans une heure", body: "{from} → {to}, {date}." },
    reminderEveClient: { title: "Rappel : votre taxi demain", body: "{driver} · {from} → {to}, {date}." },
    reminderHourClient: { title: "Votre taxi dans une heure", body: "{driver} · {from} → {to}, {date}." },
    weekly: { title: "Votre bilan de la semaine", body: "{rides} pour {amount}. Ouvrez l'app pour voir le détail de vos courses." },
    weeklyEmpty: { title: "Votre bilan de la semaine", body: "Vos courses, vos demandes et votre profil en un coup d'œil : ouvrez votre tableau de bord." },
  },
  en: {
    newRide: { title: "New ride request", body: "{from} → {to}, {date}. Open the app to accept it." },
    rideConfirmed: { title: "Ride confirmed", body: "{from} → {to}, {date}." },
    rideCancelledByClient: { title: "Ride cancelled by the client", body: "{from} → {to}, {date}." },
    rideCancelledByAdmin: { title: "Ride withdrawn by Taxineo", body: "{from} → {to}, {date}." },
    timeout: { title: "Response time expired", body: "{from} → {to}, {date}: the ride is offered to other drivers." },
    reminder: { title: "A request is waiting for you", body: "{from} → {to}, {date}." },
    sharedProposal: { title: "Shared taxi proposal", body: "{from} → {to}, {date}." },
    p2pAccepted: { title: "Shared ride accepted", body: "{driver} is taking {from} → {to}, {date}." },
    sharedTaken: { title: "A colleague took the ride", body: "{driver} is taking {from} → {to}, {date}. Thanks for passing it on." },
    p2pOpened: { title: "Shared ride offered to nearby drivers", body: "Nobody accepted it within 30 minutes: {from} → {to}, {date}. You remain the contact and keep your commission." },
    accepted: { title: "Your taxi is confirmed", body: "{driver} will drive you {from} → {to}, {date}." },
    rejected: { title: "Ride not available", body: "The driver cannot take {from} → {to}, {date}." },
    cancelledByDriver: { title: "Ride cancelled by the driver", body: "{from} → {to}, {date}." },
    cancelled: { title: "Ride cancelled", body: "{from} → {to}, {date}." },
    noDriver: { title: "No taxi available", body: "Nobody could take {from} → {to}, {date}. We will get back to you." },
    sharedJoined: { title: "New passenger for your shared taxi", body: "{from} → {to}, {date}." },
    reminderEveDriver: { title: "Reminder: ride tomorrow", body: "{from} → {to}, {date}." },
    reminderHourDriver: { title: "Ride in one hour", body: "{from} → {to}, {date}." },
    reminderEveClient: { title: "Reminder: your taxi tomorrow", body: "{driver} · {from} → {to}, {date}." },
    reminderHourClient: { title: "Your taxi in one hour", body: "{driver} · {from} → {to}, {date}." },
    weekly: { title: "Your week in review", body: "{rides} for {amount}. Open the app to see all your rides." },
    weeklyEmpty: { title: "Your week in review", body: "Your rides, requests and profile at a glance: open your dashboard." },
  },
};

export type PushKind = keyof (typeof TEXTS)["fr"];
export type PushVars = { from?: string; to?: string; date?: Date | string; driver?: string; rides?: string; amount?: string };
type Message = { title: string; body: string; path: string };
type Device = { id: string; token: string; platform: string; locale: string };

/** Ville ou début d'adresse : la notification reste courte. */
function place(name = "") {
  const first = name.split(",")[0].trim();
  return first.length > 40 ? `${first.slice(0, 38)}…` : first;
}

function render(kind: PushKind, locale: string, vars: PushVars): Text {
  const l: Locale = locale === "en" ? "en" : "fr";
  const date =
    vars.date instanceof Date
      ? format(vars.date, l === "en" ? "MMM d 'at' h:mm a" : "d MMM 'à' HH:mm", { locale: l === "en" ? enUS : fr })
      : vars.date ?? "";
  const values: Record<string, string> = { from: place(vars.from), to: place(vars.to), date, driver: vars.driver ?? "", rides: vars.rides ?? "", amount: vars.amount ?? "" };
  const fill = (s: string) => s.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? "");
  const text = TEXTS[l][kind];
  return { title: fill(text.title), body: fill(text.body) };
}

async function deliver(devices: Device[], kind: PushKind, vars: PushVars, path: string) {
  await Promise.all(
    devices.map(async (d) => {
      const text = render(kind, d.locale, vars);
      const localized = d.locale === "en" && !path.startsWith("/en") ? `/en${path}` : path;
      const m = { ...text, path: localized };
      const result = d.platform === "android" ? await sendFcm(d.token, m) : await sendApns(d.token, m);
      if (result === "gone") await prisma.deviceToken.delete({ where: { id: d.id } }).catch(() => undefined);
    }),
  );
}

const SELECT = { id: true, token: true, platform: true, locale: true } as const;

/** Téléphones d'un chauffeur, sauf s'il a coupé les notifications de l'app (Moi › Notifications). */
async function driverDevices(driverId: string): Promise<Device[]> {
  const driver = await prisma.driver.findUnique({ where: { id: driverId }, select: { notifyPush: true } });
  if (!driver?.notifyPush) return [];
  return prisma.deviceToken.findMany({ where: { driverId }, select: SELECT });
}

/** Chauffeur : tous ses téléphones. Ne lève jamais d'erreur. */
export async function notifyDriver(driverId: string | null | undefined, kind: PushKind, vars: PushVars, path = "/dashboard/reservations") {
  if (!driverId) return;
  try {
    await deliver(await driverDevices(driverId), kind, vars, path);
  } catch (error) {
    console.error("[push]", error);
  }
}

/**
 * Bilan de la semaine d'un chauffeur (tâche du dimanche soir) : nombre de
 * courses et montant, mis en forme dans la langue de chaque téléphone.
 */
export async function notifyDriverWeekly(driverId: string, rides: number, amount: number) {
  try {
    const devices = await driverDevices(driverId);
    for (const locale of ["fr", "en"] as const) {
      const group = devices.filter((d) => (d.locale === "en" ? "en" : "fr") === locale);
      if (!group.length) continue;
      const euros = new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(amount);
      const label = locale === "en" ? `${rides} ride${rides > 1 ? "s" : ""}` : `${rides} course${rides > 1 ? "s" : ""}`;
      await deliver(group, rides > 0 ? "weekly" : "weeklyEmpty", { rides: label, amount: euros }, "/dashboard");
    }
  } catch (error) {
    console.error("[push]", error);
  }
}

/** Qui a demandé la course : l'organisation, sinon le téléphone du client qui a réservé dans l'app. */
export async function notifyBookingClient(
  booking: { organizationId?: string | null; clientDeviceId?: string | null; reference: string },
  kind: PushKind,
  vars: PushVars,
) {
  try {
    if (booking.organizationId) {
      const devices = await prisma.deviceToken.findMany({ where: { organizationId: booking.organizationId }, select: SELECT });
      await deliver(devices, kind, vars, "/org/courses");
    } else if (booking.clientDeviceId) {
      const devices = await prisma.deviceToken.findMany({ where: { id: booking.clientDeviceId }, select: SELECT });
      await deliver(devices, kind, vars, `/confirmation?ref=${encodeURIComponent(booking.reference)}`);
    }
  } catch (error) {
    console.error("[push]", error);
  }
}

// ------------------------------------------------------------------ APNs

let apnsJwt: { token: string; at: number } | null = null;

async function apnsToken(): Promise<string | null> {
  const { APNS_KEY_ID: kid, APNS_TEAM_ID: iss, APNS_KEY: key } = process.env;
  if (!kid || !iss || !key) return null;
  // Apple veut un jeton de moins d'une heure, et pas renouvelé plus d'une fois toutes les 20 minutes.
  if (apnsJwt && Date.now() - apnsJwt.at < 40 * 60 * 1000) return apnsJwt.token;
  const pk = await importPKCS8(key.replace(/\\n/g, "\n"), "ES256");
  const token = await new SignJWT({}).setProtectedHeader({ alg: "ES256", kid }).setIssuer(iss).setIssuedAt().sign(pk);
  apnsJwt = { token, at: Date.now() };
  return token;
}

function apnsRequest(host: string, deviceToken: string, jwt: string, body: string): Promise<{ status: number; reason?: string }> {
  return new Promise((resolve) => {
    const client = http2.connect(`https://${host}`);
    client.on("error", () => resolve({ status: 0 }));
    const req = client.request({ ":method": "POST", ":path": `/3/device/${deviceToken}`, authorization: `bearer ${jwt}`, "apns-topic": BUNDLE_ID, "apns-push-type": "alert", "apns-priority": "10", "content-type": "application/json" });
    let status = 0;
    let data = "";
    req.on("response", (h) => (status = Number(h[":status"])));
    req.on("data", (c) => (data += c));
    req.on("end", () => {
      client.close();
      let reason: string | undefined;
      try {
        reason = data ? (JSON.parse(data) as { reason?: string }).reason : undefined;
      } catch {
        reason = undefined;
      }
      resolve({ status, reason });
    });
    req.on("error", () => {
      client.close();
      resolve({ status: 0 });
    });
    req.setTimeout(8000, () => req.close());
    req.end(body);
  });
}

async function sendApns(deviceToken: string, m: Message): Promise<"ok" | "gone" | "skip"> {
  const jwt = await apnsToken();
  if (!jwt) return "skip";
  const body = JSON.stringify({ aps: { alert: { title: m.title, body: m.body }, sound: "default" }, path: m.path });
  let res = await apnsRequest("api.push.apple.com", deviceToken, jwt, body);
  // Jeton d'une version de test (lancée depuis Xcode) : serveur de test d'Apple.
  if (res.status === 400 && res.reason === "BadDeviceToken") res = await apnsRequest("api.sandbox.push.apple.com", deviceToken, jwt, body);
  if (res.status !== 200) console.error("[push] APNs", res.status, res.reason ?? "");
  if (res.status === 410 || (res.status === 400 && (res.reason === "BadDeviceToken" || res.reason === "DeviceTokenNotForTopic"))) return "gone";
  return "ok";
}

// ------------------------------------------------------------------- FCM

let fcmAuth: { token: string; until: number; project: string } | null = null;

async function fcmAccess(): Promise<{ token: string; project: string } | null> {
  const raw = process.env.FCM_SERVICE_ACCOUNT;
  if (!raw) return null;
  if (fcmAuth && Date.now() < fcmAuth.until) return fcmAuth;
  const sa = JSON.parse(raw) as { client_email: string; private_key: string; project_id: string };
  const pk = await importPKCS8(sa.private_key, "RS256");
  const assertion = await new SignJWT({ scope: "https://www.googleapis.com/auth/firebase.messaging" })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .setIssuer(sa.client_email)
    .setAudience("https://oauth2.googleapis.com/token")
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(pk);
  const res = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion }) });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token: string; expires_in: number };
  fcmAuth = { token: json.access_token, until: Date.now() + (json.expires_in - 300) * 1000, project: sa.project_id };
  return fcmAuth;
}

async function sendFcm(deviceToken: string, m: Message): Promise<"ok" | "gone" | "skip"> {
  const auth = await fcmAccess();
  if (!auth) return "skip";
  const res = await fetch(`https://fcm.googleapis.com/v1/projects/${auth.project}/messages:send`, {
    method: "POST",
    headers: { authorization: `Bearer ${auth.token}`, "content-type": "application/json" },
    body: JSON.stringify({ message: { token: deviceToken, notification: { title: m.title, body: m.body }, data: { path: m.path }, android: { priority: "high" } } }),
  });
  if (res.status === 404 || res.status === 400) {
    const text = await res.text();
    if (text.includes("UNREGISTERED") || text.includes("INVALID_ARGUMENT")) return "gone";
  }
  return "ok";
}
