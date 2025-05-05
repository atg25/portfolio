import { NextRequest, NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id || !TMDB_API_KEY) {
    return NextResponse.json([], { status: 400 });
  }
  try {
    const tmdbRes = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`
    );
    const data = await tmdbRes.json();
    // US region is most common; fallback to any region if not present
    const region = data.results?.US || Object.values(data.results || {})[0];
    const providers =
      region?.flatrate || region?.ads || region?.rent || region?.buy || [];
    // Add provider link if available
    const link = region?.link;
    const withLinks = providers.map((prov: any) => ({ ...prov, link }));
    return NextResponse.json(withLinks);
  } catch (e) {
    return NextResponse.json([], { status: 500 });
  }
}
