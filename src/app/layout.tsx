import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import React from "react";
import { MainNav } from "@/components/main-nav";

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
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#14141a" },
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
      <body className="min-h-screen bg-background font-sans antialiased">
        <MainNav />
        {children}
      </body>
    </html>
  );
}
