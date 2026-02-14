"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const routes = [
  {
    href: "/experience",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/resume.pdf",
    label: "Resume",
    external: true,
  },
];

export function MainNav() {
  const pathname = usePathname();
  const [isInIframe, setIsInIframe] = useState(false);
  const [isEmbedParam, setIsEmbedParam] = useState(false);

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
    } catch {
      setIsInIframe(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setIsEmbedParam(params.get("embed") === "1");
  }, []);

  if (isEmbedParam || isInIframe) return null;

  const isInProjects =
    pathname === "/projects" || pathname.startsWith("/projects/");

  function navButtonClassName(isActive: boolean) {
    return [
      "text-sm font-medium transition-colors",
      "hover:text-primary",
      isActive ? "text-primary" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading text-lg hover:text-primary transition-colors"
          aria-label="Home"
        >
          <span className="hidden sm:inline">Andrew Gardner</span>
          <span className="sm:hidden">AG</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            className={navButtonClassName(isInProjects)}
            asChild
            aria-label="Playground"
          >
            <Link
              href="/projects"
              aria-current={isInProjects ? "page" : undefined}
            >
              Playground
            </Link>
          </Button>
          {/* Other routes */}
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className={navButtonClassName(pathname === route.href)}
              asChild
              aria-label={route.label}
            >
              {route.external ? (
                <a href={route.href} target="_blank" rel="noopener noreferrer">
                  {route.label}
                </a>
              ) : (
                <Link
                  href={route.href}
                  scroll={false}
                  aria-current={pathname === route.href ? "page" : undefined}
                >
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
                <Link
                  href="/projects"
                  aria-current={isInProjects ? "page" : undefined}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-muted focus:bg-muted ${
                    isInProjects ? "bg-muted" : ""
                  }`}
                >
                  Playground
                </Link>
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
                      aria-current={
                        pathname === route.href ? "page" : undefined
                      }
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-muted focus:bg-muted ${
                        pathname === route.href ? "bg-muted" : ""
                      }`}
                    >
                      {route.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
