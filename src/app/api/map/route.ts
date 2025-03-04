import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const polyline = searchParams.get("polyline");

  if (!polyline) {
    return NextResponse.json(
      { error: "Missing polyline parameter" },
      { status: 400 }
    );
  }

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=weight:3%7Ccolor:blue%7Cenc:${polyline}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const response = await fetch(mapUrl);
  const buffer = await response.arrayBuffer();

  return new NextResponse(Buffer.from(buffer), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate"
    }
  });
}
