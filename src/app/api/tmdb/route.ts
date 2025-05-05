import { NextRequest, NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3/search/movie";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  if (!query || !TMDB_API_KEY) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }
  try {
    const tmdbRes = await fetch(
      `${TMDB_BASE_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        query
      )}`,
      { next: { revalidate: 60 } }
    );
    const data = await tmdbRes.json();
    return NextResponse.json({ results: data.results || [] });
  } catch (e) {
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
