"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

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
    if (!expanded) return;
    globalThis
      .fetch(`/api/tmdb/details?id=${movie.id}`)
      .then((r) => r.json())
      .then(setDetails);
    globalThis
      .fetch(`/api/tmdb/providers?id=${movie.id}`)
      .then((r) => r.json())
      .then(setProviders);
  }, [movie.id, expanded]);

  if (!expanded) return null;

  return (
    <div className="w-full mt-4 border-t-2 border-muted pt-4 space-y-3 animate-fade-in-expanded">
      <div className="text-sm text-muted-foreground">
        {details?.release_date ? details.release_date.slice(0, 4) : ""} •{" "}
        {details?.runtime ?? ""} min
      </div>
      <div className="text-xs text-muted-foreground">
        {Array.isArray(details?.genres)
          ? details.genres.map((g) => g.name).join(", ")
          : ""}
      </div>
      <p className="text-sm leading-relaxed">{details?.overview}</p>
      {providers && providers.length > 0 && (
        <div className="space-y-2">
          <div className="swiss-label text-brand">AVAILABLE ON</div>
          <div className="flex flex-wrap gap-2">
            {providers.map((prov) => (
              <a
                key={prov.provider_id}
                href={prov.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border-2 border-muted text-xs hover:border-brand hover:text-brand transition-all duration-100"
              >
                {prov.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w45${prov.logo_path}`}
                    alt={prov.provider_name}
                    className="w-5 h-5 object-cover"
                  />
                ) : null}
                <span>{prov.provider_name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
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
      const res = await globalThis.fetch(
        `/api/tmdb?query=${encodeURIComponent(query)}`,
      );
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
      const res = await globalThis.fetch("/api/recommend", {
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

  const activeResults = tab === "search" ? results : recResults;

  return (
    <SwissPageShell mainClassName="gap-y-12">
      <SwissPageHeader
        label="MOVIE TOOL — 2026"
        title={
          <>
            MOVIE SEARCH
            <br />& RECOMMENDER
          </>
        }
        description="Search by title or describe your mood for AI-assisted recommendations."
      />

      <section className="col-span-12 lg:col-span-10 space-y-6">
        <SwissArchivalCard no="01" year="2026" category="INSTRUCTIONS">
          <div className="flex items-center justify-between gap-4">
            <div className="swiss-label text-brand">HOW IT WORKS</div>
            <button
              className="size-8 border-2 border-muted flex items-center justify-center hover:border-brand hover:text-brand transition-all duration-100"
              onClick={() => setShowInfo((v) => !v)}
              aria-label={showInfo ? "Hide instructions" : "Show instructions"}
              aria-expanded={showInfo}
              type="button"
            >
              <FaInfoCircle className="w-4 h-4" />
            </button>
          </div>
          {showInfo ? (
            <ul className="space-y-2 text-sm">
              <li>Use SEARCH to find movies by title.</li>
              <li>Use RECOMMEND to get AI suggestions from a mood/prompt.</li>
              <li>Hover or focus a result card to reveal expanded details.</li>
            </ul>
          ) : null}
        </SwissArchivalCard>

        <div className="flex gap-2">
          <button
            className={`px-4 py-2 border-2 text-xs font-bold uppercase tracking-label transition-all duration-100 ${
              tab === "search"
                ? "border-brand bg-brand text-black"
                : "border-muted text-foreground hover:border-brand hover:text-brand"
            }`}
            onClick={() => setTab("search")}
          >
            Search
          </button>
          <button
            className={`px-4 py-2 border-2 text-xs font-bold uppercase tracking-label transition-all duration-100 ${
              tab === "recommend"
                ? "border-brand bg-brand text-black"
                : "border-muted text-foreground hover:border-brand hover:text-brand"
            }`}
            onClick={() => setTab("recommend")}
          >
            Recommend
          </button>
        </div>

        <SwissArchivalCard no="02" year="2026" category={tab.toUpperCase()}>
          {tab === "search" ? (
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-2"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="flex-1 p-3 border-2 border-muted bg-background text-sm focus:border-brand focus:outline-none transition-all duration-100"
                aria-label="Movie title"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="px-5 py-3 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label disabled:opacity-40 hover:bg-black hover:text-brand transition-all duration-100"
              >
                Search
              </button>
            </form>
          ) : (
            <form onSubmit={handleRecommend} className="space-y-2">
              <textarea
                value={recInput}
                onChange={(e) => setRecInput(e.target.value)}
                placeholder="Describe the type of movie you want..."
                className="w-full min-h-[96px] p-3 border-2 border-muted bg-background text-sm focus:border-brand focus:outline-none transition-all duration-100"
                disabled={recLoading}
              />
              <button
                type="submit"
                disabled={recLoading || !recInput.trim()}
                className="px-5 py-3 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label disabled:opacity-40 hover:bg-black hover:text-brand transition-all duration-100"
              >
                {recLoading ? "Finding..." : "Get Recommendations"}
              </button>
            </form>
          )}
          {loading || recLoading ? (
            <div className="text-sm">Loading...</div>
          ) : null}
          {error ? (
            <div className="text-sm text-destructive">{error}</div>
          ) : null}
          {recError ? (
            <div className="text-sm text-destructive">{recError}</div>
          ) : null}
        </SwissArchivalCard>

        <SwissArchivalCard no="03" year="2026" category="RESULTS">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {activeResults.map((movie, idx) => {
              const expanded = expandedIdx === idx;
              return (
                <div
                  key={movie.id || idx}
                  tabIndex={0}
                  className={`border-2 p-3 transition-all duration-100 cursor-pointer ${
                    expanded
                      ? "border-brand bg-muted"
                      : "border-muted hover:border-brand"
                  }`}
                  onMouseEnter={() =>
                    typeof movie.id === "number" && setExpandedIdx(idx)
                  }
                  onFocus={() =>
                    typeof movie.id === "number" && setExpandedIdx(idx)
                  }
                  onMouseLeave={() => setExpandedIdx(null)}
                  onBlur={() => setExpandedIdx(null)}
                >
                  <div className="w-full flex items-center gap-4">
                    {movie.poster_path ? (
                      <img
                        src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                        alt={movie.title}
                        className="w-20 h-30 object-cover"
                      />
                    ) : (
                      <div className="w-20 h-30 border-2 border-muted flex items-center justify-center text-xs text-muted-foreground">
                        No Image
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="font-bold uppercase text-sm">
                        {movie.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {movie.release_date
                          ? movie.release_date.slice(0, 4)
                          : ""}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {movie.genre_ids &&
                        Array.isArray(movie.genre_ids) &&
                        movie.genre_ids.length > 0
                          ? movie.genre_ids
                              .map((id) => GENRE_MAP[id])
                              .filter(Boolean)
                              .join(", ")
                          : movie.genres && Array.isArray(movie.genres)
                            ? movie.genres
                                .map((g) => g.name)
                                .filter(Boolean)
                                .join(", ")
                            : ""}
                      </div>
                    </div>
                  </div>
                  {movie.id ? (
                    <ExpandedMovieDetails movie={movie} expanded={expanded} />
                  ) : null}
                </div>
              );
            })}
            {!activeResults.length && !loading && !recLoading ? (
              <div className="text-sm text-muted-foreground">
                No results yet.
              </div>
            ) : null}
          </motion.div>
        </SwissArchivalCard>
      </section>
    </SwissPageShell>
  );
}
