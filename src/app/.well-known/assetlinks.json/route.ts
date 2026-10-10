// Liens universels Android : l'app Taxineo est autorisée à ouvrir les adresses
// du site. ANDROID_CERT_SHA256 = empreinte du certificat de signature (Play
// Console > Intégrité de l'app) ; tant qu'elle manque, la liste est vide.

export const dynamic = "force-dynamic";

export function GET() {
  const prints = (process.env.ANDROID_CERT_SHA256 ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const body = prints.length ? [{ relation: ["delegate_permission/common.handle_all_urls"], target: { namespace: "android_app", package_name: "com.taxineo.app", sha256_cert_fingerprints: prints } }] : [];
  return Response.json(body, { headers: { "cache-control": "public, max-age=3600" } });
}
