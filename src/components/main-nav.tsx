"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const routes = [
  {
    href: "/experience",
    label: "About Me",
  },
  {
    href: "/contact",
    label: "Contact & Support",
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    external: true,
  },
];

export function MainNav() {
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const playgroundRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        playgroundRef.current &&
        !playgroundRef.current.contains(event.target as Node)
      ) {
        setPlaygroundOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading text-lg hover:text-primary transition-colors"
          aria-label="Home"
        >
          AG
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Projects Dropdown */}
          <div className="relative" ref={playgroundRef}>
            <Button
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setPlaygroundOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={playgroundOpen}
              aria-label="Projects"
            >
              Projects
              <svg
                className="ml-1 w-4 h-4 inline"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            {playgroundOpen && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-background border border-border z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/rag-demo"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      LLM Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/movie-search"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      Movie Search
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dataviz"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      Data Visualization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      All Projects
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Other routes */}
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-primary"
              asChild
              aria-label={route.label}
            >
              {route.external ? (
                <a href={route.href} target="_blank" rel="noopener noreferrer">
                  {route.label}
                </a>
              ) : (
                <Link href={route.href} scroll={false}>
                  {route.label}
                </Link>
              )}
            </Button>
          ))}
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-2 mt-8">
                {/* Projects Dropdown for Mobile */}
                <details className="group">
                  <summary className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-muted focus:bg-muted transition-colors cursor-pointer select-none">
                    Projects
                  </summary>
                  <ul className="pl-4 pb-2">
                    <li>
                      <Link
                        href="/rag-demo"
                        className="block px-2 py-2 rounded hover:bg-muted transition-colors"
                      >
                        LLM Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/movie-search"
                        className="block px-2 py-2 rounded hover:bg-muted transition-colors"
                      >
                        Movie Search
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dataviz"
                        className="block px-2 py-2 rounded hover:bg-muted transition-colors"
                      >
                        Data Visualization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className="block px-2 py-2 rounded hover:bg-muted transition-colors"
                      >
                        All Projects
                      </Link>
                    </li>
                  </ul>
                </details>
                {routes.map((route) =>
                  route.external ? (
                    <a
                      key={route.href}
                      href={route.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-muted focus:bg-muted transition-colors"
                    >
                      {route.label}
                    </a>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      scroll={false}
                      className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-muted focus:bg-muted transition-colors"
                    >
                      {route.label}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
