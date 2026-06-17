import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";
import { applyModerateRateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

const devisTaxiMedicalSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  date: z.string().min(1),
  transportType: z.string().min(1),
  medicalReason: z.string().min(1),
  vehicleType: z.string().optional(),
  companion: z.boolean().optional(),
  reducedMobility: z.boolean().optional(),
  pickup: z.string().min(1),
  hospital: z.string().min(1),
  message: z.string().optional(),
  city: z.string().optional(),
});

const transportLabels: Record<string, string> = {
  "aller-simple": "Aller simple",
  "aller-retour": "Aller-retour",
  "serie-5": "Forfait 5 aller-retour",
  "serie-10": "Forfait 10 aller-retour",
};

const reasonLabels: Record<string, string> = {
  dialyse: "Dialyse",
  chimio: "Chimiothérapie",
  consult: "Consultation spécialiste",
  kine: "Rééducation / Kinésithérapie",
  hospitalisation: "Hospitalisation programmée",
  autre: "Autre",
};

export async function POST(req: Request) {
  try {
    const rateLimited = await applyModerateRateLimit();
    if (rateLimited) return rateLimited;

    const body = await req.json();

    if (body._hp) {
      return NextResponse.json({ success: true });
    }
    if (!(await verifyTurnstileToken(body.turnstileToken))) {
      return NextResponse.json({ error: "Vérification anti-bot échouée" }, { status: 403 });
    }

    const data = devisTaxiMedicalSchema.parse(body);

    const transportLabel = transportLabels[data.transportType] || data.transportType;
    const reasonLabel = reasonLabels[data.medicalReason] || data.medicalReason;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "support@taxineo.fr",
      subject: `Demande taxi médical${data.city ? ` — ${data.city}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Nouveau devis taxi médical</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date souhaitée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Type de transport</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${transportLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Motif médical</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${reasonLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Prise en charge</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.pickup}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Établissement</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.hospital}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">PMR</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.reducedMobility ? "Oui" : "Non"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Accompagnant</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.companion ? "Oui" : "Non"}</td></tr>
            ${data.city ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Ville</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.city}</td></tr>` : ""}
            <tr><td style="padding: 8px; color: #737373;">Message</td><td style="padding: 8px; font-weight: 500;">${data.message || "—"}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo Taxi Médical</p>
        </div>
      `,
    });

    createNotification({
      type: "CONTACT_FORM",
      title: `Devis taxi médical`,
      body: `${data.name}${data.city ? ` (${data.city})` : ""} — ${transportLabel}, ${reasonLabel}`,
      metadata: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        transportType: data.transportType,
        medicalReason: data.medicalReason,
        pickup: data.pickup,
        hospital: data.hospital,
        reducedMobility: data.reducedMobility,
        companion: data.companion,
        city: data.city,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
