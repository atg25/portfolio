import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Barlow, REM } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import { MainNav } from "@/components/main-nav";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const rem = REM({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Andrew Gardner | Developer Portfolio",
    template: "%s | Andrew Gardner",
  },
  description:
    "Front-end developer & digital explorer crafting thoughtful web experiences.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1729" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          barlow.variable,
          rem.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <MainNav />
        {children}
      </body>
    </html>
  );
}
