import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";

const devisMadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  date: z.string().min(1),
  duration: z.string().min(1),
  vehicleType: z.string().min(1),
  passengers: z.coerce.number().int().min(1).max(7),
  pickup: z.string().min(1),
  message: z.string().optional(),
  city: z.string().optional(),
});

const durationLabels: Record<string, string> = {
  journee: "Journée complète (8h)",
  "demi-journee": "Demi-journée (4h)",
  soiree: "Soirée (4h, à partir de 19h)",
  "1h": "1 heure",
  personnalisee: "Personnalisée",
};

const vehicleLabels: Record<string, string> = {
  berline: "Berline (Mercedes Classe E / BMW Série 5)",
  suv: "SUV (Mercedes GLC / BMW X5)",
  van: "Van (Mercedes Classe V, 1-7 passagers)",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = devisMadSchema.parse(body);

    const durationLabel = durationLabels[data.duration] || data.duration;
    const vehicleLabel = vehicleLabels[data.vehicleType] || data.vehicleType;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "Radif.mottalib@gmail.com",
      subject: `Demande de devis mise à disposition${data.city ? ` — ${data.city}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Nouveau devis mise à disposition</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date souhaitée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Durée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${durationLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Véhicule</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${vehicleLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Passagers</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.passengers}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Prise en charge</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.pickup}</td></tr>
            ${data.city ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Ville</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.city}</td></tr>` : ""}
            <tr><td style="padding: 8px; color: #737373;">Message</td><td style="padding: 8px; font-weight: 500;">${data.message || "—"}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo Mise à disposition</p>
        </div>
      `,
    });

    createNotification({
      type: "CONTACT_FORM",
      title: `Devis mise à disposition`,
      body: `${data.name}${data.city ? ` (${data.city})` : ""} — ${durationLabel}, ${vehicleLabel}`,
      metadata: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        duration: data.duration,
        vehicleType: data.vehicleType,
        passengers: data.passengers,
        pickup: data.pickup,
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
