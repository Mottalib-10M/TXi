import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const placeId = request.nextUrl.searchParams.get("place_id");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json({ lat: 0, lng: 0 });
  }

  const sessiontoken = request.nextUrl.searchParams.get("sessiontoken") || "";

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: "geometry",
      key: apiKey,
      ...(sessiontoken && { sessiontoken }),
    });
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`
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
