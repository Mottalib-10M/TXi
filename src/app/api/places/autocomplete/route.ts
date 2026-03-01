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

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&components=country:fr&language=fr&key=${apiKey}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ predictions: [] });
  }
}
