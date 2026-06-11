import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";
import { applyModerateRateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

const devisAssistanceSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  breakdownType: z.string().min(1),
  location: z.string().min(1),
  destination: z.string().min(1),
  passengers: z.string().optional(),
  direction: z.string().optional(),
  position: z.string().optional(),
  message: z.string().optional(),
  city: z.string().optional(),
});

const breakdownLabels: Record<string, string> = {
  batterie: "Batterie à plat",
  pneu: "Pneu crevé",
  moteur: "Panne moteur",
  essence: "Panne d'essence",
  accident: "Accident / accrochage",
  autoroute: "Panne autoroute",
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

    const data = devisAssistanceSchema.parse(body);

    const breakdownLabel = breakdownLabels[data.breakdownType] || data.breakdownType;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "support@taxineo.fr",
      subject: `Demande assistance dépannage${data.city ? ` — ${data.city}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Nouveau devis assistance dépannage</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Type de panne</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${breakdownLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Localisation</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.location}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Destination</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.destination}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Passagers</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.passengers || "1"}</td></tr>
            ${data.city ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Ville / Autoroute</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.city}</td></tr>` : ""}
            <tr><td style="padding: 8px; color: #737373;">Message</td><td style="padding: 8px; font-weight: 500;">${data.message || "—"}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo Assistance Dépannage</p>
        </div>
      `,
    });

    createNotification({
      type: "CONTACT_FORM",
      title: `Devis assistance dépannage`,
      body: `${data.name}${data.city ? ` (${data.city})` : ""} — ${breakdownLabel}, ${data.location} → ${data.destination}`,
      metadata: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        breakdownType: data.breakdownType,
        location: data.location,
        destination: data.destination,
        passengers: data.passengers,
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
