"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

const GENRE_MAP: Record<number, string> = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

interface Genre {
  id?: number;
  name: string;
}

interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path?: string;
  link?: string;
}

interface MovieDetails {
  id: number;
  title: string;
  release_date?: string;
  runtime?: number;
  genres?: Genre[];
  overview?: string;
  poster_path?: string;
  genre_ids?: number[];
}

function ExpandedMovieDetails({
  movie,
  expanded,
}: {
  movie: MovieDetails;
  expanded: boolean;
}) {
  const [details, setDetails] = React.useState<MovieDetails | null>(null);
  const [providers, setProviders] = React.useState<Provider[] | null>(null);
  React.useEffect(() => {
    if (expanded) {
      fetch(`/api/tmdb/details?id=${movie.id}`)
        .then((r) => r.json())
        .then(setDetails);
      fetch(`/api/tmdb/providers?id=${movie.id}`)
        .then((r) => r.json())
        .then(setProviders);
    }
  }, [movie.id, expanded]);

  if (!expanded) return null;
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 mt-2 opacity-0 animate-fade-in-expanded">
      <div className="flex-1 space-y-2">
        <div className="text-muted-foreground text-sm">
          {details?.release_date ? details.release_date.slice(0, 4) : ""} •{" "}
          {details?.runtime ?? ""} min
        </div>
        <div className="text-sm text-muted-foreground">
          {Array.isArray(details?.genres)
            ? details.genres.map((g) => g.name).join(", ")
            : ""}
        </div>
        <div className="mt-2 text-base line-clamp-5">{details?.overview}</div>
        {providers && providers.length > 0 && (
          <div className="mt-4">
            <div className="font-semibold mb-1">Available on:</div>
            <div className="flex flex-wrap gap-2">
              {providers.map((prov) => (
                <a
                  key={prov.provider_id}
                  href={prov.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded bg-muted hover:bg-accent transition"
                >
                  {prov.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w45${prov.logo_path}`}
                      alt={prov.provider_name}
                      className="w-6 h-6 rounded"
                    />
                  )}
                  <span className="text-sm">{prov.provider_name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MovieSearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MovieDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [tab, setTab] = useState<"search" | "recommend">("search");
  const [recInput, setRecInput] = useState("");
  const [recLoading, setRecLoading] = useState(false);
  const [recError, setRecError] = useState("");
  const [recResults, setRecResults] = useState<MovieDetails[]>([]);
  const [showInfo, setShowInfo] = useState(true);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResults([]);
    try {
      const res = await fetch(`/api/tmdb?query=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setResults(data.results || []);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleRecommend(e: React.FormEvent) {
    e.preventDefault();
    if (!recInput.trim()) return;
    setRecLoading(true);
    setRecError("");
    setRecResults([]);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: recInput }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setRecResults(data.results || []);
    } catch {
      setRecError("Something went wrong. Please try again.");
    } finally {
      setRecLoading(false);
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 pt-24 pb-12">
        <main className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-center mb-4 gap-2">
            <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand font-bold text-center m-0">
              Movie Search
            </h1>
            <button
              className={`flex items-center justify-center rounded-full p-1 bg-transparent text-accent hover:bg-accent/10 focus:bg-accent/20 focus:outline-none transition ${
                showInfo ? "" : "opacity-60"
              }`}
              onClick={() => setShowInfo((v) => !v)}
              aria-label={
                showInfo
                  ? "Hide info & instructions"
                  : "Show info & instructions"
              }
              aria-expanded={showInfo}
              aria-controls="movie-info-section"
              type="button"
              style={{ height: "2rem", width: "2rem", marginTop: "2px" }}
            >
              <FaInfoCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="max-w-2xl mx-auto mb-8 flex flex-col items-center">
            {showInfo && (
              <div
                id="movie-info-section"
                className="bg-card/80 border border-accent/20 rounded-2xl shadow p-6 text-center animate-fade-slide-in-card mt-1"
              >
                <h2 className="font-heading text-2xl mb-2 text-accent">
                  How this works
                </h2>
                <p className="mb-2 text-base text-muted-foreground">
                  Search for any movie by title, or get AI-powered
                  recommendations based on your mood or interests. Hover or
                  focus on a movie card to see more details, including genres,
                  runtime, overview, and streaming providers.
                </p>
                <ul className="text-sm text-muted-foreground mb-2 list-disc list-inside text-left inline-block">
                  <li>
                    Use the{" "}
                    <span className="font-semibold text-primary">Search</span>{" "}
                    tab to find movies by name.
                  </li>
                  <li>
                    Use the{" "}
                    <span className="font-semibold text-primary">
                      Recommendations
                    </span>{" "}
                    tab to describe what you want and get suggestions.
                  </li>
                  <li>
                    Expand a card for more info, including where to watch.
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">
                  Powered by TMDB and OpenAI. Data may not be complete for all
                  movies.
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full font-semibold transition border ${
                tab === "search"
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-primary border-primary/30 hover:bg-primary/10"
              }`}
              onClick={() => setTab("search")}
            >
              Search
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold transition border ${
                tab === "recommend"
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-primary border-primary/30 hover:bg-primary/10"
              }`}
              onClick={() => setTab("recommend")}
            >
              Recommendations
            </button>
          </div>
          {tab === "search" && (
            <>
              <form
                onSubmit={handleSearch}
                className="flex gap-2 mb-6 justify-center"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for a movie..."
                  className="flex-1 p-3 rounded-full border-2 border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/30 transition text-lg font-medium shadow-sm"
                  aria-label="Movie title"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  disabled={loading || !query.trim()}
                  className="rounded-full px-5 py-3 text-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:opacity-90 focus:ring-2 focus:ring-accent/40 transition"
                >
                  Search
                </Button>
              </form>
              {loading && (
                <div className="text-center text-accent-foreground">
                  Loading...
                </div>
              )}
              {error && (
                <div className="text-center text-red-500 mb-4">{error}</div>
              )}
              <div className="flex flex-col gap-6 mt-6">
                {results.map((movie, idx) => {
                  const expanded = expandedIdx === idx;
                  return (
                    <div
                      key={movie.id}
                      tabIndex={0}
                      className={`group rounded-xl bg-muted/30 shadow p-3 flex flex-col items-center cursor-pointer hover:bg-accent/20 focus:bg-accent/20 focus:outline-none focus:ring-0 transition-all duration-300 relative overflow-visible outline-none ${
                        expanded
                          ? "z-30 scale-105 shadow-2xl bg-background"
                          : ""
                      }`}
                      aria-label={`Show details for ${movie.title}`}
                      onMouseEnter={() => setExpandedIdx(idx)}
                      onFocus={() => setExpandedIdx(idx)}
                      onMouseLeave={() => setExpandedIdx(null)}
                      onBlur={() => setExpandedIdx(null)}
                      style={{
                        minHeight: expanded ? 340 : undefined,
                        transition: "min-height 1.2s cubic-bezier(.4,2,.6,1)",
                      }}
                    >
                      <div className="transition-all duration-[1200ms] w-full flex flex-row items-center rounded-xl p-2 gap-4">
                        {movie.poster_path ? (
                          <img
                            src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-24 h-36 object-cover rounded shadow"
                          />
                        ) : (
                          <div className="w-24 h-36 flex items-center justify-center bg-muted rounded text-muted-foreground text-sm">
                            No Image
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="font-semibold text-lg mb-1 focus:outline-none focus:ring-0 hover:outline-none active:outline-none">
                            {movie.title}
                          </div>
                          {!expanded && (
                            <>
                              <div className="text-sm text-muted-foreground mb-1">
                                {movie.release_date
                                  ? movie.release_date.slice(0, 4)
                                  : "N/A"}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {movie.genre_ids &&
                                Array.isArray(movie.genre_ids) &&
                                movie.genre_ids.length > 0
                                  ? movie.genre_ids
                                      .map((id) => GENRE_MAP[id])
                                      .filter(Boolean)
                                      .join(", ")
                                  : ""}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <ExpandedMovieDetails movie={movie} expanded={expanded} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {tab === "recommend" && (
            <div className="flex flex-col gap-6 items-center">
              <form
                onSubmit={handleRecommend}
                className="w-full max-w-xl flex flex-col gap-4 items-center"
              >
                <textarea
                  value={recInput}
                  onChange={(e) => setRecInput(e.target.value)}
                  placeholder="Describe what kind of movie you want, your mood, or what you typically like..."
                  className="w-full p-3 rounded-lg border-2 border-input bg-background focus:border-accent focus:ring-2 focus:ring-accent/30 transition text-base font-medium shadow-sm min-h-[80px]"
                  disabled={recLoading}
                />
                <Button
                  type="submit"
                  disabled={recLoading || !recInput.trim()}
                  className="rounded-full px-6 py-3 text-lg"
                >
                  {recLoading ? "Finding..." : "Get Recommendations"}
                </Button>
              </form>
              {recError && (
                <div className="text-center text-red-500 mb-4">{recError}</div>
              )}
              <div className="flex flex-col gap-6 w-full max-w-xl">
                {recResults.map((movie, idx) => {
                  const expanded = !!(
                    recResults.length > 0 &&
                    recResults[idx]?.id &&
                    expandedIdx === idx
                  );
                  return (
                    <div
                      key={movie.id || idx}
                      tabIndex={0}
                      className={`group rounded-xl bg-muted/30 shadow p-3 flex flex-col items-center cursor-pointer hover:bg-accent/20 focus:bg-accent/20 focus:outline-none focus:ring-0 transition-all duration-300 relative overflow-visible outline-none ${
                        expanded
                          ? "z-30 scale-105 shadow-2xl bg-background"
                          : ""
                      }`}
                      aria-label={`Show details for ${movie.title}`}
                      onMouseEnter={() =>
                        typeof movie.id === "number" && setExpandedIdx(idx)
                      }
                      onFocus={() =>
                        typeof movie.id === "number" && setExpandedIdx(idx)
                      }
                      onMouseLeave={() => setExpandedIdx(null)}
                      onBlur={() => setExpandedIdx(null)}
                      style={{
                        minHeight: expanded ? 340 : undefined,
                        transition: "min-height 1.2s cubic-bezier(.4,2,.6,1)",
                      }}
                    >
                      <div className="transition-all duration-[1200ms] w-full flex flex-row items-center rounded-xl p-2 gap-4">
                        {movie.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            className="w-24 h-36 object-cover rounded shadow"
                          />
                        ) : (
                          <div className="w-24 h-36 flex items-center justify-center bg-muted rounded text-muted-foreground text-sm">
                            No Image
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="font-semibold text-lg mb-1 focus:outline-none focus:ring-0 hover:outline-none active:outline-none">
                            {movie.title}
                          </div>
                          {!expanded && (
                            <>
                              <div className="text-sm text-muted-foreground mb-1">
                                {movie.release_date
                                  ? movie.release_date.slice(0, 4)
                                  : ""}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {movie.genres &&
                                Array.isArray(movie.genres) &&
                                movie.genres.length > 0
                                  ? movie.genres
                                      .map((g) => g.name)
                                      .filter(Boolean)
                                      .join(", ")
                                  : ""}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      {movie.id && (
                        <ExpandedMovieDetails
                          movie={movie}
                          expanded={expanded}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </motion.main>
  );
}

// Add to the bottom of the file or in your global CSS:
// .animate-fade-in-expanded { opacity: 1 !important; }
