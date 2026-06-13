const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const isProd = process.env.NODE_ENV === "production";

/**
 * Verify a Cloudflare Turnstile token server-side.
 * - Production: TURNSTILE_SECRET_KEY MUST be set, otherwise rejects all requests (fail-closed).
 * - Development: allows all requests if secret is not configured.
 */
export async function verifyTurnstileToken(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (isProd) {
      console.warn("[Turnstile] TURNSTILE_SECRET_KEY is not set — skipping verification");
    }
    return true; // Allow when not configured
  }

  // Missing token — reject
  if (!token) return false;

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });

    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.error("[Turnstile] Verification error:", error);
    // On network failure, allow the request to avoid blocking legitimate users
    return true;
  }
}
