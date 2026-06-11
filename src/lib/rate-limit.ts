import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const isProd = process.env.NODE_ENV === "production";

// Lazy-init: only create Redis client when env vars are present
let redis: Redis | null = null;
let redisChecked = false;

function getRedis(): Redis | null {
  if (redis) return redis;
  if (redisChecked) return null;
  redisChecked = true;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    if (isProd) {
      console.error("[RateLimit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set in production — rate limiting will BLOCK all requests");
    }
    return null;
  }
  redis = new Redis({ url, token });
  return redis;
}

// --- Presets ---

// Strict: auth endpoints (login, register, reset, check-email)
// 5 requests per 15-minute window per IP
function createStrictLimiter() {
  const r = getRedis();
  if (!r) return null;
  return new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    prefix: "rl:strict",
    analytics: true,
  });
}

// Moderate: public forms (bookings, contact, devis)
// 5 requests per hour per IP
function createModerateLimiter() {
  const r = getRedis();
  if (!r) return null;
  return new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    prefix: "rl:moderate",
    analytics: true,
  });
}

// Email: per-recipient limit
// 10 emails per hour per recipient address
function createEmailLimiter() {
  const r = getRedis();
  if (!r) return null;
  return new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(10, "1 h"),
    prefix: "rl:email",
  });
}

// Global email: total emails per hour across all recipients
// 100 emails per hour globally
function createEmailGlobalLimiter() {
  const r = getRedis();
  if (!r) return null;
  return new Ratelimit({
    redis: r,
    limiter: Ratelimit.slidingWindow(100, "1 h"),
    prefix: "rl:email-global",
  });
}

// Singletons (created on first use)
let strictLimiter: Ratelimit | null | undefined;
let moderateLimiter: Ratelimit | null | undefined;
let emailLimiter: Ratelimit | null | undefined;
let emailGlobalLimiter: Ratelimit | null | undefined;

function getStrictLimiter() {
  if (strictLimiter === undefined) strictLimiter = createStrictLimiter();
  return strictLimiter;
}

function getModerateLimiter() {
  if (moderateLimiter === undefined) moderateLimiter = createModerateLimiter();
  return moderateLimiter;
}

function getEmailLimiter() {
  if (emailLimiter === undefined) emailLimiter = createEmailLimiter();
  return emailLimiter;
}

function getEmailGlobalLimiter() {
  if (emailGlobalLimiter === undefined) emailGlobalLimiter = createEmailGlobalLimiter();
  return emailGlobalLimiter;
}

// --- IP extraction ---

export async function getClientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown"
  );
}

// --- Public API ---

const RATE_LIMIT_RESPONSE = NextResponse.json(
  { error: "Trop de requêtes. Réessayez plus tard." },
  { status: 429 }
);

/**
 * Apply strict rate limit (auth endpoints).
 * Returns a 429 NextResponse if over limit, or null if allowed.
 * If Redis is not configured, allows all requests (dev/graceful degradation).
 */
export async function applyStrictRateLimit(
  identifier?: string
): Promise<NextResponse | null> {
  const limiter = getStrictLimiter();
  if (!limiter) {
    // Fail-closed in production, fail-open in dev
    return isProd ? RATE_LIMIT_RESPONSE : null;
  }
  const ip = identifier || (await getClientIp());
  const result = await limiter.limit(ip);
  if (!result.success) return RATE_LIMIT_RESPONSE;
  return null;
}

/**
 * Apply moderate rate limit (public forms).
 * Returns a 429 NextResponse if over limit, or null if allowed.
 */
export async function applyModerateRateLimit(
  identifier?: string
): Promise<NextResponse | null> {
  const limiter = getModerateLimiter();
  if (!limiter) {
    return isProd ? RATE_LIMIT_RESPONSE : null;
  }
  const ip = identifier || (await getClientIp());
  const result = await limiter.limit(ip);
  if (!result.success) return RATE_LIMIT_RESPONSE;
  return null;
}

/**
 * Check email rate limits (per-recipient + global).
 * Returns true if email can be sent, false if rate limited.
 */
export async function checkEmailRateLimit(
  recipientEmail: string
): Promise<boolean> {
  const perRecipient = getEmailLimiter();
  const global = getEmailGlobalLimiter();

  // No Redis — allow all
  if (!perRecipient || !global) return true;

  const [recipientResult, globalResult] = await Promise.all([
    perRecipient.limit(recipientEmail),
    global.limit("global"),
  ]);

  return recipientResult.success && globalResult.success;
}
