import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";

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
  chimio: "Chimioth\u00e9rapie",
  consult: "Consultation sp\u00e9cialiste",
  kine: "R\u00e9\u00e9ducation / Kin\u00e9sith\u00e9rapie",
  hospitalisation: "Hospitalisation programm\u00e9e",
  autre: "Autre",
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = devisTaxiMedicalSchema.parse(body);

    const transportLabel = transportLabels[data.transportType] || data.transportType;
    const reasonLabel = reasonLabels[data.medicalReason] || data.medicalReason;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || "Radif.mottalib@gmail.com",
      subject: `Demande taxi m\u00e9dical${data.city ? ` \u2014 ${data.city}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #171717;">Nouveau devis taxi m\u00e9dical</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">T\u00e9l\u00e9phone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date souhait\u00e9e</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Type de transport</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${transportLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Motif m\u00e9dical</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${reasonLabel}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Prise en charge</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.pickup}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">\u00c9tablissement</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.hospital}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">PMR</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.reducedMobility ? "Oui" : "Non"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Accompagnant</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.companion ? "Oui" : "Non"}</td></tr>
            ${data.city ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Ville</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.city}</td></tr>` : ""}
            <tr><td style="padding: 8px; color: #737373;">Message</td><td style="padding: 8px; font-weight: 500;">${data.message || "\u2014"}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">\u2014 TaxiNeo Taxi M\u00e9dical</p>
        </div>
      `,
    });

    createNotification({
      type: "CONTACT_FORM",
      title: `Devis taxi m\u00e9dical`,
      body: `${data.name}${data.city ? ` (${data.city})` : ""} \u2014 ${transportLabel}, ${reasonLabel}`,
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
      return NextResponse.json({ error: "Donn\u00e9es invalides", issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
