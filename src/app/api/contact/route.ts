import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  callbackTime: z.string().optional(),
  city: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const callbackLabel = {
      matin: "Le matin (8h - 12h)",
      "apres-midi": "L'après-midi (12h - 18h)",
      soir: "Le soir (18h - 20h)",
    }[data.callbackTime || ""] || "Non précisé";

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "Radif.mottalib@gmail.com",
      subject: `Nouveau message de contact${data.city ? ` - Taxi ${data.city}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.phone || "Non renseigné"}</td></tr>
            ${data.city ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Ville</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.city}</td></tr>` : ""}
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Rappel souhaité</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${callbackLabel}</td></tr>
            <tr><td style="padding: 8px; color: #737373;">Message</td><td style="padding: 8px; font-weight: 500;">${data.message}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo Contact Form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
