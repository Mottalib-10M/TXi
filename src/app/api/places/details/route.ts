import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const placeId = request.nextUrl.searchParams.get("place_id");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ lat: 0, lng: 0 });
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${apiKey}`
    );
    const data = await res.json();

    if (data.result?.geometry?.location) {
      return NextResponse.json({
        lat: data.result.geometry.location.lat,
        lng: data.result.geometry.location.lng,
      });
    }

    return NextResponse.json({ lat: 0, lng: 0 });
  } catch {
    return NextResponse.json({ lat: 0, lng: 0 });
  }
}
