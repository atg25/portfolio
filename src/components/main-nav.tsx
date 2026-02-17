"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/projects",
    label: "Playground",
  },
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

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClass = (active: boolean) =>
    cn(
      "px-4 py-2 border-2 text-xs font-bold uppercase tracking-label transition-all duration-100",
      active
        ? "border-brand bg-brand text-black"
        : "border-transparent text-foreground hover:border-brand hover:text-brand",
    );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b-2 border-muted">
      <div className="h-16 px-8 md:px-12 lg:px-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-sm font-black uppercase tracking-label text-brand hover:text-foreground transition-colors duration-100"
          aria-label="Home"
        >
          Andrew Gardner
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {routes.map((route) =>
            route.external ? (
              <a
                key={route.href}
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass(false)}
                aria-label={route.label}
              >
                {route.label}
              </a>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                scroll={false}
                aria-current={isActiveRoute(route.href) ? "page" : undefined}
                className={navLinkClass(isActiveRoute(route.href))}
                aria-label={route.label}
              >
                {route.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="size-10 border-2 border-muted flex items-center justify-center text-foreground hover:border-brand hover:text-brand transition-all duration-100"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-background border-l-2 border-muted p-0">
              <nav className="mt-16 px-6 pb-6 flex flex-col gap-2">
                {routes.map((route) =>
                  route.external ? (
                    <a
                      key={route.href}
                      href={route.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 border-2 border-muted text-xs font-bold uppercase tracking-label transition-all duration-100 hover:border-brand hover:text-brand"
                    >
                      {route.label}
                    </a>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      scroll={false}
                      aria-current={
                        isActiveRoute(route.href) ? "page" : undefined
                      }
                      className={cn(
                        "px-4 py-3 border-2 text-xs font-bold uppercase tracking-label transition-all duration-100",
                        isActiveRoute(route.href)
                          ? "border-brand bg-brand text-black"
                          : "border-muted text-foreground hover:border-brand hover:text-brand",
                      )}
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
