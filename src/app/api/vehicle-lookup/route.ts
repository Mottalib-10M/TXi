import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const plate = req.nextUrl.searchParams.get("plate");

  if (!plate) {
    return NextResponse.json({ error: "Plaque requise" }, { status: 400 });
  }

  // Normalize plate: remove spaces and dashes for lookup
  const cleanPlate = plate.replace(/[\s-]/g, "").toUpperCase();

  const token = process.env.VEHICLE_API_TOKEN || "TokenDemo2026B";

  try {
    const res = await fetch(
      `https://api.apiplaqueimmatriculation.com/plaque?immatriculation=${cleanPlate}&token=${token}&pays=FR`,
      { method: "POST", headers: { Accept: "application/json" } }
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Erreur API externe" }, { status: 502 });
    }

    const json = await res.json();

    if (json.data?.erreur) {
      return NextResponse.json({ error: json.data.erreur }, { status: 404 });
    }

    const data = json.data;
    const year = data.date1erCir_us
      ? parseInt(data.date1erCir_us.split("-")[0])
      : null;

    return NextResponse.json({
      brand: data.marque || "",
      model: data.sra_commercial || data.modele || "",
      year,
      color: data.couleur || "",
      capacity: data.nr_passagers || 4,
      fuel: data.energieNGC || "",
      logoUrl: data.logo_marque || "",
    });
  } catch {
    return NextResponse.json({ error: "Service indisponible" }, { status: 503 });
  }
}
