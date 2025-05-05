import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const TMDB_API_KEY = process.env.TMDB_API_KEY;

async function fetchMovieDetailsFromTMDB(title: string) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`;
  const res = await fetch(url);
  const data = await res.json();
  // Return the first result if available
  return data.results && data.results[0] ? data.results[0] : null;
}

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  if (!prompt || !OPENAI_API_KEY) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }

  // Step 1: Ask OpenAI for movie recommendations
  const systemPrompt = `You are a helpful movie expert. Given a user's description, suggest 5 movies (title only, comma separated, no extra text).`;
  const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      max_tokens: 100,
      temperature: 0.8,
    }),
  });
  const openaiData = await openaiRes.json();
  const text = openaiData.choices?.[0]?.message?.content || '';
  // Parse movie titles from OpenAI response
  const titles = text.split(',').map(t => t.trim()).filter(Boolean);

  // Step 2: Fetch details for each movie from TMDB
  const results = [];
  for (const title of titles) {
    const movie = await fetchMovieDetailsFromTMDB(title);
    if (movie) {
      results.push({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        genres: movie.genre_ids ? movie.genre_ids : [],
        overview: movie.overview,
      });
    } else {
      results.push({ title });
    }
  }

  return NextResponse.json({ results });
}
