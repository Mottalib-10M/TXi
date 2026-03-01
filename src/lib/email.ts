interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "noreply@taxinoir.fr";

  if (!apiKey) {
    console.log(`[Email] Would send to ${to}: ${subject}`);
    console.log(`[Email] Content: ${html.substring(0, 200)}...`);
    return;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("[Email] Send failed:", error);
    }
  } catch (error) {
    console.error("[Email] Error:", error);
  }
}

export function buildDriverNotificationEmail(data: {
  driverName: string;
  clientName: string;
  departure: string;
  arrival: string;
  date: string;
  reference: string;
}) {
  return {
    subject: `Nouvelle réservation #${data.reference}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Nouvelle demande de réservation</h2>
        <p>Bonjour ${data.driverName},</p>
        <p>Vous avez reçu une nouvelle demande de réservation :</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Client</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          <tr><td style="padding: 8px; color: #737373;">Référence</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <p>Connectez-vous à votre tableau de bord pour accepter ou refuser cette demande.</p>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
}

export function buildClientConfirmationEmail(data: {
  clientName: string;
  departure: string;
  arrival: string;
  date: string;
  reference: string;
  driverName?: string;
}) {
  return {
    subject: `Confirmation de réservation #${data.reference}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Réservation confirmée</h2>
        <p>Bonjour ${data.clientName},</p>
        <p>Votre demande de réservation a bien été enregistrée.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.driverName ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Chauffeur</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.driverName}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">Référence</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <p>Votre chauffeur vous contactera sous peu pour confirmer la course.</p>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
}
