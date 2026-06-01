/* ─── Google Analytics 4 – event helpers ─────────────────────────── */

type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...(args as Parameters<typeof window.gtag>));
  }
}

function event({ action, category, label, value, ...rest }: GtagEvent) {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

/* ─── Booking funnel ─────────────────────────────────────────────── */

export function trackSearch(params: { departure: string; arrival: string; passengers?: number }) {
  event({
    action: "search",
    category: "booking",
    label: `${params.departure} → ${params.arrival}`,
    search_term: `${params.departure} → ${params.arrival}`,
    passengers: params.passengers,
  });
}

export function trackViewResults(params: { departure: string; arrival: string; resultCount: number }) {
  event({
    action: "view_search_results",
    category: "booking",
    label: `${params.departure} → ${params.arrival}`,
    result_count: params.resultCount,
  });
}

export function trackSearchHasResults(params: { departure: string; arrival: string; resultCount: number }) {
  event({
    action: "search_has_results",
    category: "booking",
    label: `${params.departure} → ${params.arrival}`,
    result_count: params.resultCount,
  });
}

export function trackSearchNoResults(params: { departure: string; arrival: string }) {
  event({
    action: "search_no_results",
    category: "booking",
    label: `${params.departure} → ${params.arrival}`,
  });
}

export function trackSelectTaxi(params: { driverName: string; price?: number; slug: string }) {
  event({
    action: "select_item",
    category: "booking",
    label: params.driverName,
    value: params.price,
    driver_slug: params.slug,
  });
}

export function trackBeginBooking(params: { driverName: string; departure: string; arrival: string; price?: number }) {
  event({
    action: "begin_checkout",
    category: "booking",
    label: `${params.departure} → ${params.arrival}`,
    value: params.price,
    driver_name: params.driverName,
  });
}

export function trackBookingComplete(params: { reference: string; price?: number; driverName: string; source: string }) {
  gtag("event", "purchase", {
    transaction_id: params.reference,
    value: params.price,
    currency: "EUR",
    items: [
      {
        item_name: `Taxi ${params.driverName}`,
        item_category: "booking",
        price: params.price,
        quantity: 1,
      },
    ],
    booking_source: params.source,
    driver_name: params.driverName,
  });
}

/* ─── Driver profile ─────────────────────────────────────────────── */

export function trackViewDriverProfile(params: { slug: string; driverName: string }) {
  event({
    action: "view_item",
    category: "driver_profile",
    label: params.driverName,
    driver_slug: params.slug,
  });
}

/* ─── Auth ────────────────────────────────────────────────────────── */

export function trackLogin(method: string) {
  event({ action: "login", category: "auth", method });
}

export function trackSignUp(params: { method: string; role: string }) {
  event({ action: "sign_up", category: "auth", method: params.method, role: params.role });
}

export function trackLogout() {
  event({ action: "logout", category: "auth" });
}

/* ─── Contact ─────────────────────────────────────────────────────── */

export function trackContact(params: { formName: string; subject?: string }) {
  event({ action: "generate_lead", category: "contact", label: params.formName, subject: params.subject });
}

/* ─── Phone call clicks ──────────────────────────────────────────── */

export function trackPhoneClick(params: { phone: string; context: string }) {
  event({ action: "click_phone", category: "engagement", label: params.phone, context: params.context });
}

/* ─── Driver dashboard actions ────────────────────────────────────── */

export function trackBookingAction(params: { action: "accept" | "reject" | "complete" | "cancel"; bookingId: string }) {
  event({
    action: `booking_${params.action}`,
    category: "driver",
    label: params.bookingId,
  });
}

export function trackProfileUpdate(section: string) {
  event({ action: "profile_update", category: "driver", label: section });
}

/* ─── Shared rides ────────────────────────────────────────────────── */

export function trackSharedRideSearch(params: { departure: string }) {
  event({ action: "shared_ride_search", category: "shared_rides", label: params.departure });
}

export function trackJoinSharedRide(params: { routeId: string; seats: number }) {
  event({ action: "join_shared_ride", category: "shared_rides", label: params.routeId, value: params.seats });
}

export function trackProposeSharedRide() {
  event({ action: "propose_shared_ride", category: "shared_rides" });
}

/* ─── CTA / engagement ────────────────────────────────────────────── */

export function trackCTA(params: { name: string; location: string }) {
  event({ action: "cta_click", category: "engagement", label: params.name, location: params.location });
}

export function trackDownloadCard(params: { driverName: string }) {
  event({ action: "download_card", category: "engagement", label: params.driverName });
}

/* ─── Organization ────────────────────────────────────────────────── */

export function trackOrgBooking(params: { driverName: string; departure: string; arrival: string }) {
  event({ action: "org_booking", category: "organization", label: `${params.departure} → ${params.arrival}`, driver_name: params.driverName });
}

/* ─── Devis (quotes) ─────────────────────────────────────────────── */

export function trackDevisSubmission(params: { formType: string; city: string; transportType?: string; vehicleType?: string; duration?: string }) {
  event({
    action: "generate_lead",
    category: "devis",
    label: params.formType,
    form_type: params.formType,
    city: params.city,
    transport_type: params.transportType,
    vehicle_type: params.vehicleType,
    duration: params.duration,
  });
}

/* ─── Contact request (no drivers) ───────────────────────────────── */

export function trackContactRequest(params: { departure: string; arrival: string; passengers: number }) {
  event({
    action: "generate_lead",
    category: "contact_request",
    label: `${params.departure} → ${params.arrival}`,
    passengers: params.passengers,
  });
}

/* ─── WhatsApp clicks ────────────────────────────────────────────── */

export function trackWhatsAppClick(params: { context: string; bookingId?: string }) {
  event({
    action: "click_whatsapp",
    category: "engagement",
    label: params.bookingId,
    context: params.context,
  });
}

/* ─── Error tracking ─────────────────────────────────────────────── */

export function trackError(params: { errorType: string; errorMessage?: string; context: string }) {
  event({
    action: "exception",
    category: "error",
    label: params.errorType,
    error_type: params.errorType,
    error_message: params.errorMessage,
    context: params.context,
  });
}

/* ─── User properties ────────────────────────────────────────────── */

export function setUserProperties(props: { user_role?: string; org_type?: string; city?: string }) {
  gtag("set", "user_properties", props);
}
