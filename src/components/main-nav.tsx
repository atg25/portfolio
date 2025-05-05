"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const routes = [
  {
    href: "/projects",
    label: "Playground",
  },
  {
    href: "/movie-search",
    label: "Movie Search",
  },
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
  {
    href: "/rag-demo",
    label: "LLM Chat",
  },
];

export function MainNav() {
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
