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

type Locale = "fr" | "en";

const t = {
  fr: {
    hello: "Bonjour",
    team: "— L'équipe TaxiNoir",
    buttonFallback: "Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :",
    verifySubject: "Confirmez votre adresse email",
    verifyTitle: "Confirmez votre adresse email",
    verifyBody: "Merci de vous être inscrit sur TaxiNoir. Cliquez sur le bouton ci-dessous pour confirmer votre adresse email :",
    verifyButton: "Confirmer mon email",
    verifyExpires: "Ce lien expire dans 24 heures.",
    resetSubject: "Réinitialisation de votre mot de passe",
    resetTitle: "Réinitialisation du mot de passe",
    resetBody: "Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe :",
    resetButton: "Réinitialiser mon mot de passe",
    resetExpires: "Ce lien expire dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.",
    newBookingSubject: (ref: string) => `Nouvelle réservation #${ref}`,
    newBookingTitle: "Nouvelle demande de réservation",
    newBookingBody: "Vous avez reçu une nouvelle demande de réservation :",
    newBookingAction: "Connectez-vous à votre tableau de bord pour accepter ou refuser cette demande.",
    client: "Client",
    departure: "Départ",
    arrival: "Arrivée",
    date: "Date",
    dateTime: "Date & heure",
    reference: "Référence",
    driver: "Chauffeur",
    name: "Nom",
    phone: "Téléphone",
    confirmSubject: (ref: string) => `Confirmation de réservation #${ref}`,
    confirmTitle: "Réservation confirmée",
    confirmBody: "Votre demande de réservation a bien été enregistrée.",
    confirmContact: "Votre chauffeur vous contactera sous peu pour confirmer la course.",
    acceptedClientSubject: (ref: string) => `Course confirmée — #${ref}`,
    acceptedClientTitle: "Votre course est confirmée !",
    acceptedClientBody: "Bonne nouvelle ! Votre chauffeur a accepté votre demande de course. Voici le récapitulatif :",
    yourDriver: "Votre chauffeur",
    viewBookings: "Voir mes réservations",
    contactDriver: "N'hésitez pas à contacter votre chauffeur pour toute question.",
    rejectedSubject: (ref: string) => `Réservation #${ref} — non disponible`,
    rejectedTitle: "Mise à jour de votre réservation",
    rejectedBody: "Malheureusement, le chauffeur n'est pas disponible pour votre demande de course :",
    rejectedAction: "Nous vous invitons à effectuer une nouvelle recherche sur",
    rejectedActionEnd: "pour trouver un autre chauffeur disponible.",
    acceptedDriverSubject: (ref: string) => `Course confirmée — #${ref}`,
    acceptedDriverTitle: "Course confirmée",
    acceptedDriverBody: (ref: string) => `Vous avez accepté la course <strong>#${ref}</strong>. Voici le récapitulatif :`,
    addToCalendar: "Ajouter à mon calendrier",
    viewBooking: "Voir la réservation",
    clientDetails: "Coordonnées du client",
    estimatedPrice: "Prix estimé",
    viewDashboard: "Voir dans mon tableau de bord",
    searchAgain: "Rechercher un chauffeur",
    viewMyBookings: "Voir mes réservations",
  },
  en: {
    hello: "Hello",
    team: "— The TaxiNoir Team",
    buttonFallback: "If the button doesn't work, copy this link into your browser:",
    verifySubject: "Confirm your email address",
    verifyTitle: "Confirm your email address",
    verifyBody: "Thank you for signing up on TaxiNoir. Click the button below to confirm your email address:",
    verifyButton: "Confirm my email",
    verifyExpires: "This link expires in 24 hours.",
    resetSubject: "Reset your password",
    resetTitle: "Password reset",
    resetBody: "You requested a password reset. Click the button below to choose a new password:",
    resetButton: "Reset my password",
    resetExpires: "This link expires in 1 hour. If you didn't request this reset, please ignore this email.",
    newBookingSubject: (ref: string) => `New booking #${ref}`,
    newBookingTitle: "New booking request",
    newBookingBody: "You have received a new booking request:",
    newBookingAction: "Log in to your dashboard to accept or decline this request.",
    client: "Client",
    departure: "Pickup",
    arrival: "Drop-off",
    date: "Date",
    dateTime: "Date & time",
    reference: "Reference",
    driver: "Driver",
    name: "Name",
    phone: "Phone",
    confirmSubject: (ref: string) => `Booking confirmation #${ref}`,
    confirmTitle: "Booking confirmed",
    confirmBody: "Your booking request has been recorded.",
    confirmContact: "Your driver will contact you shortly to confirm the ride.",
    acceptedClientSubject: (ref: string) => `Ride confirmed — #${ref}`,
    acceptedClientTitle: "Your ride is confirmed!",
    acceptedClientBody: "Great news! Your driver has accepted your ride request. Here's the summary:",
    yourDriver: "Your driver",
    viewBookings: "View my bookings",
    contactDriver: "Don't hesitate to contact your driver for any questions.",
    rejectedSubject: (ref: string) => `Booking #${ref} — unavailable`,
    rejectedTitle: "Update on your booking",
    rejectedBody: "Unfortunately, the driver is not available for your ride request:",
    rejectedAction: "We invite you to search again on",
    rejectedActionEnd: "to find another available driver.",
    acceptedDriverSubject: (ref: string) => `Ride confirmed — #${ref}`,
    acceptedDriverTitle: "Ride confirmed",
    acceptedDriverBody: (ref: string) => `You have accepted ride <strong>#${ref}</strong>. Here's the summary:`,
    addToCalendar: "Add to my calendar",
    viewBooking: "View booking",
    clientDetails: "Client details",
    estimatedPrice: "Estimated price",
    viewDashboard: "View in my dashboard",
    searchAgain: "Search for a driver",
    viewMyBookings: "View my bookings",
  },
} as const;

function formatEmailPrice(price: number, locale: Locale): string {
  return locale === "en" ? `€${price.toFixed(2)}` : `${price.toFixed(2).replace(".", ",")} €`;
}

export function buildVerificationEmail(name: string, verifyUrl: string, locale: Locale = "fr") {
  const l = t[locale];
  return {
    subject: l.verifySubject,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.verifyTitle}</h2>
        <p>${l.hello} ${name},</p>
        <p>${l.verifyBody}</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.verifyButton}
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">${l.buttonFallback}</p>
        <p style="color: #737373; font-size: 13px; word-break: break-all;">${verifyUrl}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.verifyExpires}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

export function buildPasswordResetEmail(name: string, resetUrl: string, locale: Locale = "fr") {
  const l = t[locale];
  return {
    subject: l.resetSubject,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.resetTitle}</h2>
        <p>${l.hello} ${name},</p>
        <p>${l.resetBody}</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.resetButton}
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">${l.buttonFallback}</p>
        <p style="color: #737373; font-size: 13px; word-break: break-all;">${resetUrl}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.resetExpires}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
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
  bookingId: string;
  price?: number | null;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const dashboardUrl = `${baseUrl}/dashboard/reservations?id=${data.bookingId}`;
  return {
    subject: l.newBookingSubject(data.reference),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.newBookingTitle}</h2>
        <p>${l.hello} ${data.driverName},</p>
        <p>${l.newBookingBody}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.client}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.date}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">${l.reference}</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${dashboardUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.viewDashboard}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
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
  price?: number | null;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const reservationsUrl = `${baseUrl}/mes-reservations`;
  return {
    subject: l.confirmSubject(data.reference),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.confirmTitle}</h2>
        <p>${l.hello} ${data.clientName},</p>
        <p>${l.confirmBody}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.date}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.driverName ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.driver}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.driverName}</td></tr>` : ""}
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">${l.reference}</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <p>${l.confirmContact}</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${reservationsUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.viewMyBookings}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

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
  price?: number | null;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const reservationsUrl = `${baseUrl}/mes-reservations`;
  return {
    subject: l.acceptedClientSubject(data.reference),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.acceptedClientTitle}</h2>
        <p>${l.hello} ${data.clientName},</p>
        <p>${l.acceptedClientBody}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.dateTime}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.reference}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <h3 style="color: #171717; font-size: 15px; margin-top: 24px;">${l.yourDriver}</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.name}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.driverName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.phone}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;"><a href="tel:${data.driverPhone}" style="color: #171717; text-decoration: none;">${data.driverPhone}</a></td></tr>
          <tr><td style="padding: 8px; color: #737373;">Email</td><td style="padding: 8px; font-weight: 500;"><a href="mailto:${data.driverEmail}" style="color: #171717; text-decoration: none;">${data.driverEmail}</a></td></tr>
        </table>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${reservationsUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.viewBookings}
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">${l.contactDriver}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

export function buildBookingRejectedClientEmail(data: {
  clientName: string;
  departure: string;
  arrival: string;
  date: string;
  reference: string;
  price?: number | null;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  return {
    subject: l.rejectedSubject(data.reference),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.rejectedTitle}</h2>
        <p>${l.hello} ${data.clientName},</p>
        <p>${l.rejectedBody}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.date}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">${l.reference}</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <p>${l.rejectedAction} ${l.rejectedActionEnd}</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="https://taxinoir.fr" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.searchAgain}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
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
  price?: number | null;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxinoir.fr";
  const calendarUrl = `${baseUrl}/api/calendar?id=${data.bookingId}`;
  const reservationUrl = `${baseUrl}/dashboard/reservations?id=${data.bookingId}`;

  return {
    subject: l.acceptedDriverSubject(data.reference),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.acceptedDriverTitle}</h2>
        <p>${l.hello} ${data.driverName},</p>
        <p>${l.acceptedDriverBody(data.reference)}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.dateTime}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">${l.reference}</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>

        <div style="text-align: center; margin: 24px 0;">
          <a href="${calendarUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.addToCalendar}
          </a>
        </div>
        <div style="text-align: center; margin: 0 0 24px;">
          <a href="${reservationUrl}" style="background-color: #ffffff; color: #171717; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block; border: 1px solid #e5e5e5;">
            ${l.viewBooking}
          </a>
        </div>

        <h3 style="color: #171717; font-size: 15px; margin-top: 24px;">${l.clientDetails}</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.name}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.clientName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.phone}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;"><a href="tel:${data.clientPhone}" style="color: #171717; text-decoration: none;">${data.clientPhone}</a></td></tr>
          <tr><td style="padding: 8px; color: #737373;">Email</td><td style="padding: 8px; font-weight: 500;"><a href="mailto:${data.clientEmail}" style="color: #171717; text-decoration: none;">${data.clientEmail}</a></td></tr>
        </table>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}
