"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

const HOME_TERMINAL_LINES = [
  "mkdir PORTFOLIO-2026",
  "$ WHO AM I",
  "ANDREW GARDNER.",
] as const;

let hasPlayedHomeIntro = false;

export default function Home() {
  const shouldAnimateIntro = !hasPlayedHomeIntro;
  const [typedLines, setTypedLines] = useState<string[]>(() =>
    shouldAnimateIntro ? ["", "", ""] : [...HOME_TERMINAL_LINES],
  );
  const [activeLine, setActiveLine] = useState(() =>
    shouldAnimateIntro ? 0 : HOME_TERMINAL_LINES.length,
  );

  useEffect(() => {
    if (shouldAnimateIntro) {
      hasPlayedHomeIntro = true;
    }
  }, [shouldAnimateIntro]);

  useEffect(() => {
    if (activeLine >= HOME_TERMINAL_LINES.length) return;

    const currentTarget = HOME_TERMINAL_LINES[activeLine];
    const currentTyped = typedLines[activeLine];

    if (currentTyped.length >= currentTarget.length) {
      const nextLineTimer = globalThis.setTimeout(() => {
        setActiveLine((prev) => prev + 1);
      }, 420);
      return () => globalThis.clearTimeout(nextLineTimer);
    }

    const nextChar = currentTarget[currentTyped.length];
    const baseDelay = nextChar === " " ? 280 : 140;
    const jitter = Math.floor(Math.random() * 80);

    const timer = globalThis.setTimeout(() => {
      setTypedLines((prev) => {
        const updated = [...prev];
        updated[activeLine] = currentTarget.slice(0, currentTyped.length + 1);
        return updated;
      });
    }, baseDelay + jitter);

    return () => globalThis.clearTimeout(timer);
  }, [activeLine, typedLines]);

  const isTypingComplete = activeLine >= HOME_TERMINAL_LINES.length;

  return (
    <SwissPageShell>
      <div className="col-span-12 h-24 md:h-40" aria-hidden="true" />

      <SwissPageHeader
        label=""
        title={
          <span className="block font-mono tracking-normal leading-[1.05] text-4xl md:text-6xl lg:text-7xl normal-case">
            <span className="block text-xs md:text-sm uppercase tracking-label text-brand mb-2">
              {typedLines[0]}
              {!isTypingComplete && activeLine === 0 ? (
                <span className="inline-block ml-1 text-brand">█</span>
              ) : null}
            </span>
            <span className="block text-xs md:text-sm uppercase tracking-label text-brand mb-3">
              {typedLines[1]}
              {!isTypingComplete && activeLine === 1 ? (
                <span className="inline-block ml-1 text-brand">█</span>
              ) : null}
            </span>
            <span className="inline-block uppercase">
              {typedLines[2]}
              {!isTypingComplete && activeLine === 2 ? (
                <span className="inline-block ml-1 text-brand">█</span>
              ) : null}
            </span>
          </span>
        }
        description={
          isTypingComplete
            ? "Full-stack developer and A.I. engineer building practical software with clean interfaces, strong architecture, and measurable outcomes."
            : undefined
        }
      />

      {isTypingComplete ? (
        <motion.div
          className="col-span-12 grid grid-cols-12 gap-x-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <section className="col-span-12 md:col-span-10 lg:col-span-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-3 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
            >
              View Playground
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 border-2 border-muted text-foreground text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-muted text-foreground text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
            >
              Resume
            </a>
          </section>

          <div className="col-span-12 h-12 md:h-20" aria-hidden="true" />

          <section className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <SwissArchivalCard
              no="01"
              year="2026"
              category="FRONTEND"
              interactive
            >
              <h2 className="text-2xl">USER INTERFACES</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React, Next.js, TypeScript, and Tailwind systems focused on
                usability, accessibility, and speed.
              </p>
            </SwissArchivalCard>

            <SwissArchivalCard
              no="02"
              year="2026"
              category="BACKEND"
              interactive
            >
              <h2 className="text-2xl">SERVICES & APIS</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Node and Python services, integration-heavy workflows, and
                robust API design for production reliability.
              </p>
            </SwissArchivalCard>

            <SwissArchivalCard no="03" year="2026" category="AI" interactive>
              <h2 className="text-2xl">AUTOMATION</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prompt systems, orchestration pipelines, and practical AI
                tooling built with guardrails and repeatability.
              </p>
            </SwissArchivalCard>

            <SwissArchivalCard
              no="04"
              year="2026"
              category="DELIVERY"
              interactive
            >
              <h2 className="text-2xl">DEPLOYMENT</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CI/CD, performance tuning, and release workflows optimized for
                fast iteration and maintainability.
              </p>
            </SwissArchivalCard>
          </section>

          <div className="col-span-12 h-12 md:h-20" aria-hidden="true" />

          <motion.section
            className="col-span-12 lg:col-span-10 border-l-4 border-brand pl-6 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl">BUILD WHAT MATTERS.</h2>
            <p className="mt-4 text-sm md:text-base max-w-3xl leading-relaxed">
              I prioritize clarity, speed, and outcomes. If a feature does not
              create user value, reduce friction, or improve system quality, it
              does not ship.
            </p>
          </motion.section>
        </motion.div>
      ) : null}
    </SwissPageShell>
  );
}
