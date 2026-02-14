"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type LogLevel = "system" | "info" | "action" | "agent" | "success";

type DemoScenario = {
  id: "research" | "multimodal";
  label: string;
  command: string;
  outputFile: string;
  logs: Array<{ level: LogLevel; text: string; delayMs: number }>;
  markdown: string;
};

const DEMOS: DemoScenario[] = [
  {
    id: "research",
    label: "Demo: Autonomous Research",
    command:
      '$ solid-cli research "What country is best for early AI Careers" --tag ai_career_countries',
    outputFile: "ai_career_countries.md",
    logs: [
      {
        level: "system",
        text: "[SYSTEM] solid-cli 1.1.0 initialized.",
        delayMs: 520,
      },
      {
        level: "info",
        text: "[INFO] Running research command (OpenAI-backed web search)...",
        delayMs: 900,
      },
      {
        level: "action",
        text: '[ACTION] Querying web for "What country is best for early AI Careers"... ',
        delayMs: 1200,
      },
      {
        level: "agent",
        text: "[AGENT] Collecting salary, visa, hiring-growth, and cost-of-living data...",
        delayMs: 1400,
      },
      {
        level: "action",
        text: "[ACTION] Ranking countries for early-career AI opportunities...",
        delayMs: 950,
      },
      {
        level: "action",
        text: "[ACTION] Writing Markdown artefact + updating knowledge_base/index.json...",
        delayMs: 780,
      },
      {
        level: "success",
        text: "[SUCCESS] Saved to knowledge_base/<date>/ai_career_countries.md (catalogued in knowledge_base/index.json).",
        delayMs: 460,
      },
    ],
    markdown: `# Best Country for Early AI Careers (2026)

## Short Answer
For most early-career AI developers, **Canada** is the best balance of hiring demand, immigration pathways, and quality of life.

## Top 3 Countries
1. **Canada** — strong AI hubs (Toronto, Montreal), friendlier pathways for international talent.
2. **United States** — highest salary ceilings, but tougher visa constraints for many candidates.
3. **Germany** — growing applied-AI market with good work-life balance and solid engineering culture.

## Comparison Snapshot

| Country | Early AI Demand | Salary Potential | Visa Accessibility | Cost of Living | Overall |
|---|---|---|---|---|---|
| Canada | High | High | Strong | Medium | **9.1/10** |
| United States | Very High | Very High | Moderate | High | **8.8/10** |
| Germany | Medium-High | Medium-High | Good | Medium | **8.4/10** |

## Why Canada Leads
- Strong entry-level and junior AI role growth in major cities.
- Better immigration routes for skilled technical workers.
- Healthy balance of compensation vs housing and daily costs.

## Recommendation by Profile
- **If maximizing salary:** choose the U.S.
- **If balancing growth + immigration + stability:** choose Canada.
- **If prioritizing long-term lifestyle and EU access:** choose Germany.

---

Generated via
\`solid-cli research "What country is best for early AI Careers" --tag ai_career_countries\``,
  },
  {
    id: "multimodal",
    label: "Demo: Multimodal Review",
    command:
      '$ solid-cli review unsplash_ai_workspace.jpg "Review this Unsplash image for portfolio hero quality"',
    outputFile: "unsplash_ai_workspace_review.md",
    logs: [
      {
        level: "system",
        text: "[SYSTEM] solid-cli 1.1.0 initialized.",
        delayMs: 540,
      },
      {
        level: "info",
        text: "[INFO] Running review command (Gemini multimodal pipeline)...",
        delayMs: 910,
      },
      {
        level: "action",
        text: "[ACTION] Uploading unsplash_ai_workspace.jpg and prompt context...",
        delayMs: 1180,
      },
      {
        level: "agent",
        text: "[AGENT] Detecting media type=image, evaluating composition, lighting, and focal hierarchy...",
        delayMs: 1300,
      },
      {
        level: "action",
        text: "[ACTION] Scoring image for readability, brand fit, and CTA safety zones...",
        delayMs: 1040,
      },
      {
        level: "action",
        text: "[ACTION] Writing feedback markdown and updating feedback/index.json...",
        delayMs: 870,
      },
      {
        level: "success",
        text: "[SUCCESS] Saved to feedback/<date>/images/unsplash_ai_workspace_review.md (catalogued in feedback/index.json).",
        delayMs: 420,
      },
    ],
    markdown: `# Unsplash Image Review: Portfolio Hero Candidate

## Overall Score
**8.6 / 10** — strong image for a developer portfolio hero with minor readability adjustments needed.

## What Works Well
- Clear tech-focused subject matter (workspace + screens).
- Professional, modern tone that matches AI/developer branding.
- Good depth and contrast for layered text + call-to-action overlays.

## Risks to Watch
- Bright highlights near the top-right can compete with headline text.
- Fine detail in the background can reduce readability on mobile.

## Recommended Edits
1. Add a subtle dark gradient overlay (\`20–35%\`) behind headline/CTA region.
2. Keep text inside a safe area on the left-center third of the image.
3. Slightly reduce saturation to improve consistency with UI colors.

## Best Use in Portfolio
- **Primary:** Hero section background with text overlay.
- **Secondary:** Project banner image for AI/tooling case studies.

## Final Verdict
Use this Unsplash image as a hero, with a dark overlay and controlled text placement for accessibility and conversion.

---

Generated via
\`solid-cli review unsplash_ai_workspace.jpg "Review this Unsplash image for portfolio hero quality"\``,
  },
];

function logColor(level: LogLevel) {
  if (level === "success") return "text-emerald-400";
  if (level === "info") return "text-sky-400";
  if (level === "action") return "text-amber-300";
  if (level === "agent") return "text-violet-300";
  return "text-zinc-300";
}

export function AutonomousCliShowcase() {
  const [demoId, setDemoId] = useState<DemoScenario["id"]>("research");
  const [typedCommand, setTypedCommand] = useState("");
  const [entered, setEntered] = useState(false);
  const [logs, setLogs] = useState<Array<{ level: LogLevel; text: string }>>(
    [],
  );
  const [showResult, setShowResult] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const logsRef = useRef<HTMLDivElement | null>(null);

  const activeDemo = useMemo(
    () => DEMOS.find((d) => d.id === demoId) ?? DEMOS[0],
    [demoId],
  );

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => globalThis.setTimeout(resolve, ms));

    const run = async () => {
      setIsRunning(true);
      setTypedCommand("");
      setEntered(false);
      setLogs([]);
      setShowResult(false);

      for (let i = 0; i <= activeDemo.command.length; i += 1) {
        if (cancelled) return;
        setTypedCommand(activeDemo.command.slice(0, i));
        await sleep(18 + Math.floor(Math.random() * 22));
      }

      if (cancelled) return;
      setEntered(true);
      await sleep(320);

      for (const line of activeDemo.logs) {
        if (cancelled) return;
        await sleep(line.delayMs);
        if (cancelled) return;
        setLogs((prev) => [...prev, { level: line.level, text: line.text }]);
      }

      if (cancelled) return;
      setShowResult(true);
      setIsRunning(false);
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [activeDemo]);

  useEffect(() => {
    const node = logsRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [logs]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border-2 border-input bg-card overflow-hidden">
          <div className="h-11 px-4 border-b border-input bg-muted/35 flex items-center gap-2">
            <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-red))] border border-border" />
            <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-yellow))] border border-border" />
            <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-green))] border border-border" />
            <span className="text-xs text-muted-foreground ml-2">terminal</span>
          </div>
          <div
            ref={logsRef}
            className="h-[420px] md:h-[500px] overflow-auto bg-[#0b1020] text-zinc-100 font-mono text-sm p-4"
          >
            <div className="text-zinc-200">
              <span className="text-emerald-400">$</span>{" "}
              <span>{typedCommand}</span>
              {!entered && (
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-[8px] h-[1em] bg-zinc-300 ml-1 align-middle"
                />
              )}
            </div>
            <div className="mt-3 space-y-2">
              {logs.map((line, idx) => (
                <motion.div
                  key={`${line.text}-${idx}`}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={logColor(line.level)}
                >
                  {line.text}
                </motion.div>
              ))}
              {isRunning && entered && (
                <motion.div
                  animate={{ opacity: [0.25, 0.95, 0.25] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-zinc-500"
                >
                  …
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-input bg-card overflow-hidden">
          <div className="h-11 px-4 border-b border-input bg-muted/35 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">Result</div>
            <div className="text-xs font-mono text-muted-foreground">
              {activeDemo.outputFile}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {showResult ? (
              <motion.div
                key={activeDemo.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
                className="h-[420px] md:h-[500px] overflow-auto p-5 bg-background"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }: { children?: ReactNode }) => (
                      <h2 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }: { children?: ReactNode }) => (
                      <h3 className="text-sm uppercase tracking-wide text-muted-foreground mt-5 mb-2">
                        {children}
                      </h3>
                    ),
                    p: ({ children }: { children?: ReactNode }) => (
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {children}
                      </p>
                    ),
                    ul: ({ children }: { children?: ReactNode }) => (
                      <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1 mb-3">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }: { children?: ReactNode }) => (
                      <ol className="list-decimal ml-5 text-sm text-muted-foreground space-y-1 mb-3">
                        {children}
                      </ol>
                    ),
                    code: ({
                      inline,
                      children,
                    }: {
                      inline?: boolean;
                      children?: ReactNode;
                    }) =>
                      inline ? (
                        <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
                          {children}
                        </code>
                      ) : (
                        <pre className="rounded-xl border border-input bg-[#0f172a] text-zinc-100 text-xs p-3 overflow-auto mb-3">
                          <code>{children}</code>
                        </pre>
                      ),
                  }}
                >
                  {activeDemo.markdown}
                </ReactMarkdown>
              </motion.div>
            ) : (
              <motion.div
                key="pending"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="h-[420px] md:h-[500px] grid place-items-center p-6 bg-background"
              >
                <div className="text-sm text-muted-foreground text-center">
                  Waiting for terminal run to finish…
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {DEMOS.map((demo) => {
          const isActive = demo.id === activeDemo.id;
          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => setDemoId(demo.id)}
              className={[
                "rounded-xl border-2 px-3 py-1.5 text-xs md:text-sm transition-colors",
                isActive
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-input bg-card text-muted-foreground hover:text-foreground hover:border-accent/50",
              ].join(" ")}
            >
              {demo.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
