const BASE = "https://www.taxineo.fr";

/**
 * Build the canonical URL for a page, respecting localePrefix: "as-needed".
 * French (default locale) pages are served without /fr prefix.
 */
export function canonicalUrl(locale: string, path = "") {
  return locale === "fr" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;
}

/**
 * Build hreflang alternate URLs for a page.
 * French URLs have no prefix; other locales are prefixed.
 */
export function alternateUrls(path = "") {
  return {
    fr: `${BASE}${path}`,
    en: `${BASE}/en${path}`,
  };
}
