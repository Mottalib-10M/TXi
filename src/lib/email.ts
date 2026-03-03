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

export function buildVerificationEmail(name: string, verifyUrl: string) {
  return {
    subject: "Confirmez votre adresse email",
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Confirmez votre adresse email</h2>
        <p>Bonjour ${name},</p>
        <p>Merci de vous être inscrit sur TaxiNoir. Cliquez sur le bouton ci-dessous pour confirmer votre adresse email :</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            Confirmer mon email
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p>
        <p style="color: #737373; font-size: 13px; word-break: break-all;">${verifyUrl}</p>
        <p style="color: #a3a3a3; font-size: 12px;">Ce lien expire dans 24 heures.</p>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
}

export function buildPasswordResetEmail(name: string, resetUrl: string) {
  return {
    subject: "Réinitialisation de votre mot de passe",
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Réinitialisation du mot de passe</h2>
        <p>Bonjour ${name},</p>
        <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            Réinitialiser mon mot de passe
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p>
        <p style="color: #737373; font-size: 13px; word-break: break-all;">${resetUrl}</p>
        <p style="color: #a3a3a3; font-size: 12px;">Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</p>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
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

// --- Emails envoyés quand une course est ACCEPTÉE ---

export function buildBookingAcceptedClientEmail(data: {
  clientName: string;
  departure: string;
  arrival: string;
  date: string;
  reference: string;
  driverName: string;
  driverPhone: string;
  driverEmail: string;
  bookingId: string;
  isOrgBooking?: boolean;
}) {
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const reservationsUrl = `${baseUrl}/mes-reservations`;
  return {
    subject: `Course confirmée — #${data.reference}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Votre course est confirmée !</h2>
        <p>Bonjour ${data.clientName},</p>
        <p>Bonne nouvelle ! Votre chauffeur a accepté votre demande de course. Voici le récapitulatif :</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date & heure</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Référence</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <h3 style="color: #171717; font-size: 15px; margin-top: 24px;">Votre chauffeur</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.driverName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;"><a href="tel:${data.driverPhone}" style="color: #171717; text-decoration: none;">${data.driverPhone}</a></td></tr>
          <tr><td style="padding: 8px; color: #737373;">Email</td><td style="padding: 8px; font-weight: 500;"><a href="mailto:${data.driverEmail}" style="color: #171717; text-decoration: none;">${data.driverEmail}</a></td></tr>
        </table>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${reservationsUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            Voir mes réservations
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">N'hésitez pas à contacter votre chauffeur pour toute question.</p>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
}

export function buildBookingAcceptedDriverEmail(data: {
  driverName: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  departure: string;
  arrival: string;
  date: string;
  reference: string;
  bookingId: string;
}) {
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const calendarUrl = `${baseUrl}/api/calendar?id=${data.bookingId}`;
  const reservationUrl = `${baseUrl}/dashboard/reservations?id=${data.bookingId}`;

  return {
    subject: `Course confirmée — #${data.reference}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">Course confirmée</h2>
        <p>Bonjour ${data.driverName},</p>
        <p>Vous avez accepté la course <strong>#${data.reference}</strong>. Voici le récapitulatif :</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Arrivée</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Date & heure</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          <tr><td style="padding: 8px; color: #737373;">Référence</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>

        <div style="text-align: center; margin: 24px 0;">
          <a href="${calendarUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            Ajouter à mon calendrier
          </a>
        </div>
        <div style="text-align: center; margin: 0 0 24px;">
          <a href="${reservationUrl}" style="background-color: #ffffff; color: #171717; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block; border: 1px solid #e5e5e5;">
            Voir la réservation
          </a>
        </div>

        <h3 style="color: #171717; font-size: 15px; margin-top: 24px;">Coordonnées du client</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Nom</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Téléphone</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;"><a href="tel:${data.clientPhone}" style="color: #171717; text-decoration: none;">${data.clientPhone}</a></td></tr>
          <tr><td style="padding: 8px; color: #737373;">Email</td><td style="padding: 8px; font-weight: 500;"><a href="mailto:${data.clientEmail}" style="color: #171717; text-decoration: none;">${data.clientEmail}</a></td></tr>
        </table>
        <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNoir</p>
      </div>
    `,
  };
}
