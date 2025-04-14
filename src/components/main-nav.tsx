"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const routes = [
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
  {
    href: "/resume.pdf",
    label: "Resume",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export function MainNav() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading text-lg hover:text-primary transition-colors"
        >
          AG
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant="ghost"
              className="text-sm font-medium transition-colors hover:text-primary"
              asChild
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
