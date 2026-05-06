import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";

const contactRequestSchema = z.object({
  clientName: z.string().min(1),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(1),
  departure: z.string().min(1),
  arrival: z.string().min(1),
  scheduledDate: z.string().optional(),
  passengers: z.number().int().min(1).max(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactRequestSchema.parse(body);

    const dateLabel = data.scheduledDate
      ? new Date(data.scheduledDate).toLocaleString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "Dès que possible";

    const adminEmail = (process.env.ADMIN_EMAILS || "amradif@gmail.com").split(",")[0].trim();
    await sendEmail({
      to: adminEmail,
      subject: "Trajet sans chauffeur dispo !",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Trajet sans chauffeur disponible</h2>
          <p>Un client a recherché un trajet mais aucun chauffeur n'était disponible dans la zone.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Client</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientPhone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Email</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientEmail}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date souhaitée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${dateLabel}</td></tr>
            <tr><td style="padding: 8px; color: #737373;">Passagers</td><td style="padding: 8px; font-weight: 500;">${data.passengers}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo (demande automatique)</p>
        </div>
      `,
    });

    createNotification({
      type: "CONTACT_REQUEST",
      title: `Demande sans chauffeur`,
      body: `${data.clientName} — ${data.departure} → ${data.arrival}`,
      metadata: { clientName: data.clientName, clientEmail: data.clientEmail, clientPhone: data.clientPhone },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", issues: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
