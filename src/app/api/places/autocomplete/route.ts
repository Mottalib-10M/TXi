import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const input = request.nextUrl.searchParams.get("input");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!input) {
    return NextResponse.json({ predictions: [] });
  }

  if (!apiKey) {
    // Return mock suggestions for development
    return NextResponse.json({
      predictions: [
        { description: input, place_id: "mock_1" },
      ],
    });
  }

  const sessiontoken = request.nextUrl.searchParams.get("sessiontoken") || "";

  try {
    const params = new URLSearchParams({
      input,
      components: "country:fr",
      language: "fr",
      key: apiKey,
      ...(sessiontoken && { sessiontoken }),
    });
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ predictions: [] });
  }
}
