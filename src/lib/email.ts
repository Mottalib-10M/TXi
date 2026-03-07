interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || "noreply@taxineo.fr";

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
    team: "— L'équipe TaxiNeo",
    buttonFallback: "Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :",
    verifySubject: "Confirmez votre adresse email",
    verifyTitle: "Confirmez votre adresse email",
    verifyBody: "Merci de vous être inscrit sur TaxiNeo. Cliquez sur le bouton ci-dessous pour confirmer votre adresse email :",
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
    rejectedBody: (driverName: string) => `Nous sommes désolés, mais <strong>${driverName}</strong> est actuellement occupé(e) sur une autre course et ne peut pas accepter votre demande :`,
    rejectedApology: "Nous vous prions de bien vouloir refaire une demande et choisir un autre taxi disponible.",
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
    sharedTaxiJoinSubject: (route: string) => `Réservation confirmée — ${route}`,
    sharedTaxiJoinTitle: "Votre taxi partagé est confirmé !",
    sharedTaxiJoinBody: "Vous avez rejoint un trajet en taxi partagé avec succès. Voici les détails :",
    sharedTaxiRoute: "Trajet",
    sharedTaxiDeparture: "Départ",
    sharedTaxiSeats: "Places",
    sharedTaxiLuggage: "Bagage",
    sharedTaxiDriver: "Chauffeur",
    sharedTaxiContact: "Votre chauffeur vous attendra au point de départ. Bon trajet !",
    sharedTaxiCancelSubject: (route: string) => `Trajet annulé — ${route}`,
    sharedTaxiCancelTitle: "Trajet en taxi partagé annulé",
    sharedTaxiCancelBody: (driverName: string) => `Nous sommes désolés, mais <strong>${driverName}</strong> a annulé le trajet en taxi partagé suivant :`,
    sharedTaxiCancelApology: "Nous vous prions de nous excuser pour la gêne occasionnée. Vous pouvez rechercher un autre taxi partagé sur notre plateforme.",
    sharedTaxiSearch: "Rechercher un trajet",
    luggageNone: "Aucun bagage",
    luggageSmall: "Petit (sac à dos)",
    luggageLarge: "Grand (valise)",
    sharedTaxiNewPassengerPhone: "Téléphone",
    sharedTaxiNewPassengerLuggage: "Bagage",
    sharedTaxiProposalSubject: (route: string) => `Nouveau trajet proposé — ${route}`,
    sharedTaxiProposalTitle: "Nouveau trajet proposé par un voyageur",
    sharedTaxiProposalBody: (proposerName: string) => `<strong>${proposerName}</strong> a proposé un trajet en taxi partagé. Soyez le premier à l'accepter :`,
    sharedTaxiProposalSeats: "Places souhaitées",
    sharedTaxiProposalAccept: "Accepter ce trajet",
    sharedTaxiDriverFoundSubject: (route: string) => `Chauffeur trouvé — ${route}`,
    sharedTaxiDriverFoundTitle: "Votre chauffeur est trouvé !",
    sharedTaxiDriverFoundBody: (driverName: string) => `Bonne nouvelle ! <strong>${driverName}</strong> sera votre chauffeur pour ce trajet partagé.`,
    sharedTaxiDriverFoundVehicle: "Véhicule",
    sharedTaxiDriverFoundReminder: "Pour que le trajet soit définitivement confirmé, 3 passagers au total doivent réserver.",
    sharedTaxiDriverFoundCta: "Voir les trajets partagés",
    sharedTaxiProposalComment: "Commentaire",
  },
  en: {
    hello: "Hello",
    team: "— The TaxiNeo Team",
    buttonFallback: "If the button doesn't work, copy this link into your browser:",
    verifySubject: "Confirm your email address",
    verifyTitle: "Confirm your email address",
    verifyBody: "Thank you for signing up on TaxiNeo. Click the button below to confirm your email address:",
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
    rejectedBody: (driverName: string) => `We are sorry, but <strong>${driverName}</strong> is currently busy with another ride and cannot accept your request:`,
    rejectedApology: "Please submit a new request and choose another available taxi.",
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
    sharedTaxiJoinSubject: (route: string) => `Booking confirmed — ${route}`,
    sharedTaxiJoinTitle: "Your shared taxi is confirmed!",
    sharedTaxiJoinBody: "You have successfully joined a shared taxi ride. Here are the details:",
    sharedTaxiRoute: "Route",
    sharedTaxiDeparture: "Departure",
    sharedTaxiSeats: "Seats",
    sharedTaxiLuggage: "Luggage",
    sharedTaxiDriver: "Driver",
    sharedTaxiContact: "Your driver will be waiting for you at the departure point. Have a great ride!",
    sharedTaxiCancelSubject: (route: string) => `Ride cancelled — ${route}`,
    sharedTaxiCancelTitle: "Shared taxi ride cancelled",
    sharedTaxiCancelBody: (driverName: string) => `We're sorry, but <strong>${driverName}</strong> has cancelled the following shared taxi ride:`,
    sharedTaxiCancelApology: "We apologise for the inconvenience. You can search for another shared taxi on our platform.",
    sharedTaxiSearch: "Find another ride",
    luggageNone: "No luggage",
    luggageSmall: "Small (backpack)",
    luggageLarge: "Large (suitcase)",
    sharedTaxiNewPassengerPhone: "Phone",
    sharedTaxiNewPassengerLuggage: "Luggage",
    sharedTaxiProposalSubject: (route: string) => `New ride proposed — ${route}`,
    sharedTaxiProposalTitle: "New ride proposed by a traveller",
    sharedTaxiProposalBody: (proposerName: string) => `<strong>${proposerName}</strong> has proposed a shared taxi ride. Be the first to accept:`,
    sharedTaxiProposalSeats: "Seats requested",
    sharedTaxiProposalAccept: "Accept this ride",
    sharedTaxiDriverFoundSubject: (route: string) => `Driver found — ${route}`,
    sharedTaxiDriverFoundTitle: "Your driver has been found!",
    sharedTaxiDriverFoundBody: (driverName: string) => `Great news! <strong>${driverName}</strong> will be your driver for this shared ride.`,
    sharedTaxiDriverFoundVehicle: "Vehicle",
    sharedTaxiDriverFoundReminder: "The ride will be confirmed once 3 passengers in total have booked.",
    sharedTaxiDriverFoundCta: "View shared rides",
    sharedTaxiProposalComment: "Comment",
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
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";
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
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";
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
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";
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
  driverName: string;
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
        <p>${l.rejectedBody(data.driverName)}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.departure}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departure}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.arrival}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.arrival}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.date}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.date}</td></tr>
          ${data.price ? `<tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.estimatedPrice}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${formatEmailPrice(data.price, locale)}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #737373;">${l.reference}</td><td style="padding: 8px; font-weight: 500;">#${data.reference}</td></tr>
        </table>
        <p>${l.rejectedApology}</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="https://taxineo.fr" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
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
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";
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

// --- Shared Taxi email builders ---

function luggageLabel(type: string, locale: Locale): string {
  const l = t[locale];
  const map: Record<string, string> = { NONE: l.luggageNone, SMALL: l.luggageSmall, LARGE: l.luggageLarge };
  return map[type] || type;
}

export function buildSharedTaxiPassengerConfirmEmail(data: {
  passengerName: string;
  departure: string;
  destination: string;
  departureDate: string;
  seatCount: number;
  luggageType: string;
  driverName: string;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const locale = data.locale || "fr";
  const routeLabel = `${data.departure} → ${data.destination}`;
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";

  return {
    subject: l.sharedTaxiJoinSubject(routeLabel),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.sharedTaxiJoinTitle}</h2>
        <p>${l.hello} ${data.passengerName},</p>
        <p>${l.sharedTaxiJoinBody}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiRoute}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${routeLabel}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiDeparture}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departureDate}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiSeats}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.seatCount}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiLuggage}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${luggageLabel(data.luggageType, locale)}</td></tr>
          <tr><td style="padding: 8px; color: #737373;">${l.sharedTaxiDriver}</td><td style="padding: 8px; font-weight: 500;">${data.driverName}</td></tr>
        </table>
        <p>${l.sharedTaxiContact}</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${baseUrl}/taxi-partage" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.sharedTaxiSearch}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

export function buildSharedTaxiCancelEmail(data: {
  passengerName: string;
  driverName: string;
  departure: string;
  destination: string;
  departureDate: string;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const routeLabel = `${data.departure} → ${data.destination}`;
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";

  return {
    subject: l.sharedTaxiCancelSubject(routeLabel),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.sharedTaxiCancelTitle}</h2>
        <p>${l.hello} ${data.passengerName},</p>
        <p>${l.sharedTaxiCancelBody(data.driverName)}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiRoute}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${routeLabel}</td></tr>
          <tr><td style="padding: 8px; color: #737373;">${l.sharedTaxiDeparture}</td><td style="padding: 8px; font-weight: 500;">${data.departureDate}</td></tr>
        </table>
        <p>${l.sharedTaxiCancelApology}</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${baseUrl}/taxi-partage" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.sharedTaxiSearch}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

export function buildSharedTaxiProposalEmail(data: {
  driverName: string;
  proposerName: string;
  departure: string;
  destination: string;
  departureDate: string;
  totalSeats: number;
  routeId: string;
  comment?: string;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const routeLabel = `${data.departure} → ${data.destination}`;
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";
  const acceptUrl = `${baseUrl}/dashboard/taxi-partage?accept=${data.routeId}`;

  return {
    subject: l.sharedTaxiProposalSubject(routeLabel),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.sharedTaxiProposalTitle}</h2>
        <p>${l.hello} ${data.driverName},</p>
        <p>${l.sharedTaxiProposalBody(data.proposerName)}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiRoute}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${routeLabel}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiDeparture}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departureDate}</td></tr>
          <tr><td style="padding: 8px; ${data.comment ? 'border-bottom: 1px solid #e5e5e5; ' : ''}color: #737373;">${l.sharedTaxiProposalSeats}</td><td style="padding: 8px; ${data.comment ? 'border-bottom: 1px solid #e5e5e5; ' : ''}font-weight: 500;">${data.totalSeats}</td></tr>
          ${data.comment ? `<tr><td style="padding: 8px; color: #737373;">${l.sharedTaxiProposalComment}</td><td style="padding: 8px; font-weight: 500;">${data.comment}</td></tr>` : ''}
        </table>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${acceptUrl}" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.sharedTaxiProposalAccept}
          </a>
        </div>
        <p style="color: #737373; font-size: 13px;">${l.buttonFallback}</p>
        <p style="color: #737373; font-size: 13px; word-break: break-all;">${acceptUrl}</p>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}

export function buildSharedTaxiDriverFoundEmail(data: {
  proposerName: string;
  driverName: string;
  driverPhone: string;
  vehicleDescription: string;
  departure: string;
  destination: string;
  departureDate: string;
  locale?: Locale;
}) {
  const l = t[data.locale || "fr"];
  const routeLabel = `${data.departure} → ${data.destination}`;
  const baseUrl = process.env.NEXTAUTH_URL || "https://taxineo.fr";

  return {
    subject: l.sharedTaxiDriverFoundSubject(routeLabel),
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #171717;">${l.sharedTaxiDriverFoundTitle}</h2>
        <p>${l.hello} ${data.proposerName},</p>
        <p>${l.sharedTaxiDriverFoundBody(data.driverName)}</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiRoute}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${routeLabel}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiDeparture}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.departureDate}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.sharedTaxiDriver}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.driverName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">${l.phone}</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;"><a href="tel:${data.driverPhone}" style="color: #171717; text-decoration: none;">${data.driverPhone}</a></td></tr>
          <tr><td style="padding: 8px; color: #737373;">${l.sharedTaxiDriverFoundVehicle}</td><td style="padding: 8px; font-weight: 500;">${data.vehicleDescription}</td></tr>
        </table>
        <p style="background-color: #fef3c7; padding: 12px 16px; border-radius: 12px; font-size: 13px; color: #92400e;">
          ${l.sharedTaxiDriverFoundReminder}
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${baseUrl}/taxi-partage" style="background-color: #171717; color: #ffffff; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
            ${l.sharedTaxiDriverFoundCta}
          </a>
        </div>
        <p style="color: #a3a3a3; font-size: 12px;">${l.team}</p>
      </div>
    `,
  };
}
