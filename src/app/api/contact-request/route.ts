import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendEmail, buildNoDriverConfirmEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";
import { generateUniqueReference } from "@/lib/reference";
import { getRoutingDistance, estimateDefaultPrice, isValidCoords, geocodeAddress } from "@/lib/geo";

const contactRequestSchema = z.object({
  clientName: z.string().min(1),
  clientEmail: z.string().email(),
  clientPhone: z.string().min(1),
  departure: z.string().min(1),
  arrival: z.string().min(1),
  departureLat: z.number().optional().default(0),
  departureLng: z.number().optional().default(0),
  arrivalLat: z.number().optional().default(0),
  arrivalLng: z.number().optional().default(0),
  scheduledDate: z.string().optional(),
  passengers: z.number().int().min(1).max(8),
  locale: z.enum(["fr", "en"]).optional().default("fr"),
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

    // --- Create booking in DB ---
    const reference = await generateUniqueReference();
    const requestedDate = data.scheduledDate ? new Date(data.scheduledDate) : new Date();

    let depLat = data.departureLat;
    let depLng = data.departureLng;
    let arrLat = data.arrivalLat;
    let arrLng = data.arrivalLng;

    if (!isValidCoords(depLat, depLng)) {
      const geo = await geocodeAddress(data.departure);
      if (geo) { depLat = geo.lat; depLng = geo.lng; }
    }
    if (!isValidCoords(arrLat, arrLng)) {
      const geo = await geocodeAddress(data.arrival);
      if (geo) { arrLat = geo.lat; arrLng = geo.lng; }
    }

    let estimatedDistance: number | undefined;
    let estimatedPrice: number | undefined;

    if (isValidCoords(depLat, depLng) && isValidCoords(arrLat, arrLng)) {
      const routing = await getRoutingDistance(depLat, depLng, arrLat, arrLng);
      estimatedDistance = routing.distanceKm;
    }

    if (estimatedDistance) {
      estimatedPrice = estimateDefaultPrice(estimatedDistance);
    }

    await prisma.booking.create({
      data: {
        reference,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        departureName: data.departure,
        departureLat: depLat,
        departureLng: depLng,
        arrivalName: data.arrival,
        arrivalLat: arrLat,
        arrivalLng: arrLng,
        requestedDate,
        passengerCount: data.passengers,
        estimatedDistance,
        estimatedPrice,
        lockedPrice: estimatedPrice || null,
        driverId: null,
        source: "LANDING",
        clientLocale: data.locale || "fr",
      },
    });

    // --- Send admin notification email ---
    const adminEmails = (process.env.ADMIN_EMAILS || "amradif@gmail.com,sni.taxi@outlook.fr").split(",").map((e) => e.trim()).filter(Boolean);
    const adminHtml = `
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
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Référence</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">#${reference}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Passagers</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.passengers}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Distance estimée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${estimatedDistance ? `${estimatedDistance.toFixed(1)} km` : "—"}</td></tr>
            <tr><td style="padding: 8px; color: #737373;">Prix estimé</td><td style="padding: 8px; font-weight: 500; color: #059669;">${estimatedPrice ? `${estimatedPrice.toFixed(2).replace(".", ",")} €` : "—"}</td></tr>
          </table>
          <p style="color: #a3a3a3; font-size: 12px;">— TaxiNeo (demande automatique)</p>
        </div>
      `;
    for (const adminEmail of adminEmails) {
      await sendEmail({
        to: adminEmail,
        subject: "Trajet sans chauffeur dispo !",
        html: adminHtml,
      });
    }

    // --- Send confirmation email to client ---
    const clientEmailData = buildNoDriverConfirmEmail({
      clientName: data.clientName,
      locale: "fr",
    });
    await sendEmail({ to: data.clientEmail, ...clientEmailData });

    createNotification({
      type: "CONTACT_REQUEST",
      title: `Demande sans chauffeur #${reference}`,
      body: `${data.clientName} — ${data.departure} → ${data.arrival}`,
      metadata: { clientName: data.clientName, clientEmail: data.clientEmail, clientPhone: data.clientPhone, reference },
    });

    return NextResponse.json({ success: true, reference });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Données invalides", issues: error.issues }, { status: 400 });
    }
    console.error("Contact request error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
