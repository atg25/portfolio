import { NextRequest, NextResponse } from 'next/server';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id || !TMDB_API_KEY) {
    return NextResponse.json({}, { status: 400 });
  }
  try {
    const tmdbRes = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`);
    const data = await tmdbRes.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({}, { status: 500 });
  }
}
