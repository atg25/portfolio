"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  description: string;
  cardDescription?: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  figma?: string;
  whatILearned?: string;
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
  preview?: {
    src: string;
    label: string;
    embeddable?: boolean;
  };
};

export default function Playground() {
  const projects: Project[] = [
    {
      id: "autoconsult",
      title: "AutoConsult",
      description:
        "An autonomous, zero-maintenance consulting portfolio where plain-language owner prompts trigger a GitHub-native AI workflow that validates structured content updates and publishes automatically.",
      cardDescription: "Autonomous Content Ops",
      features: [
        "Owner admin console dispatches updates with natural-language instructions",
        "Strict JSON schema guardrails block malformed or out-of-policy AI output",
        "Automated GitHub commit pipeline updates content source of truth and publishes live",
        "Public portfolio renders fully from structured content.json data",
      ],
      technologies: [
        "GitHub Actions workflow_dispatch",
        "GitHub Pages",
        "JavaScript + HTML/CSS",
        "OpenAI API integration",
        "JSON schema validation",
      ],
      github: "https://github.com/atg25/AutoConsulting",
      demo: "https://atg25.github.io/AutoConsulting/portfolio/",
      preview: {
        src: "https://atg25.github.io/AutoConsulting/portfolio/",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: Reliable AI systems need hard guardrails, deterministic validation, and a deployment path that is simple enough to trust.",
    },
    {
      id: "nextgen-wallcovering",
      title: "NextGen Wallcovering",
      description:
        "End-to-end digital launch for NGwallcovering.com, including custom site work and a luxury Art Deco brand identity focused on a clean, high-conversion experience.",
      cardDescription: "Brand Identity & Web Presence",
      features: [
        "Launch-ready marketing site and core pages",
        "Luxury Art Deco brand direction and visual system",
        "Mobile-first, responsive layout",
        "Conversion-focused UX (clear CTAs and messaging)",
      ],
      technologies: [
        "Vite 7.3",
        "React 19",
        "TypeScript 5.9",
        "Tailwind CSS v4",
        "Framer Motion",
      ],
      demo: "https://ngwallcovering.com",
      quickLinks: [
        {
          label: "Design brief",
          href: "https://github.com/atg25/NextGenWP/blob/main/docs/design-brief.md",
        },
      ],
      preview: {
        src: "https://ngwallcovering.com",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: A premium brand feel comes from consistent type, spacing, and restraint—not just visuals.",
    },
    {
      id: "pure-home-inspections",
      title: "Pure Home Inspections",
      description:
        "A business web presence for a home inspection company—built to make services clear, establish trust quickly, and drive straightforward booking/contact actions.",
      cardDescription: "Small Business Website",
      features: [
        "Service and pricing/coverage information",
        "Contact + inquiry funnel",
        "Trust signals (reviews, certifications, FAQs)",
        "Mobile-friendly performance and accessibility focus",
      ],
      technologies: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "ESLint",
      ],
      demo: "https://njpurehome.com",
      quickLinks: [
        {
          label: "GitHub repo",
          href: "https://github.com/atg25/PHI_Website",
        },
      ],
      preview: {
        src: "https://njpurehome.com",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: For service businesses, clarity beats cleverness—users want answers fast.",
    },
    {
      id: "study-hive",
      title: "Study Hive",
      description:
        "A study/productivity project aimed at helping learners organize work, stay consistent, and track progress in a simple, motivating interface.",
      cardDescription: "Productivity App",
      features: ["TBD (core features)", "TBD", "TBD", "TBD"],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Redux / Context API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Bcrypt.js",
      ],
      github: "https://github.com/atg25/StudyHiveSuper",
      demo: "https://studyhivesuper.onrender.com/",
      preview: {
        src: "https://studyhivesuper.onrender.com/",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: The best productivity tools reduce choices and make the next step obvious.",
    },
    {
      id: "mcm-design-hub",
      title: "MCM Design Hub",
      description:
        "An educational web platform focused on Mid-Century Modern design, combining curated learning content with interactive tools and a custom design system.",
      cardDescription: "Design Systems & Workflow",
      features: [
        "Split-hero landing page with clear Learn / Explore / Practice pathways",
        "Interactive color palette generator (6 presets) with click-to-copy hex values",
        "Newsletter signup flow with client-side validation",
        "Responsive, accessibility-focused experience (WCAG 2.1 AA)",
      ],
      technologies: [
        "Eleventy",
        "Nunjucks",
        "Vanilla CSS",
        "Vanilla JavaScript (ES6+)",
      ],
      github: "https://github.com/atg25/DesignStyle",
      demo: "https://atg25.github.io/DesignStyle/",
      preview: {
        src: "https://atg25.github.io/DesignStyle/",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: A good hub is search + structure + naming conventions—without those, it’s just a folder.",
    },
    {
      id: "ainspire",
      title: "AInspire",
      description:
        "An AI-enabled project focused on helping users generate ideas, refine concepts, or get unstuck with structured prompts and useful outputs.",
      cardDescription: "AI Product Prototype",
      features: ["TBD (prompt flows and outputs)", "TBD", "TBD", "TBD"],
      technologies: [
        "React 19",
        "TypeScript 5.9",
        "Vite 7",
        "React Router 7",
        "Tailwind CSS 3.4",
        "Headless UI 2",
        "Custom Glass Morphism design system",
        "Sanity CMS",
        "Portable Text",
        "Zustand 5",
        "React.lazy()",
        "Error Boundaries",
        "Vitest 4",
        "Playwright 1.57",
        "Testing Library",
        "ESLint 9",
        "Google Analytics 4",
        "Cookie Consent",
      ],
      github: "https://github.com/atg25/JobClubAi.com",
      demo: "https://ainspire.vercel.app/",
      preview: {
        src: "https://ainspire.vercel.app/",
        label: "Live site preview",
        embeddable: true,
      },
      whatILearned:
        "What I learned: The UX around the model matters as much as the model itself.",
    },
    {
      id: "autonomous-dev-cli",
      title: "Autonomous Development CLI",
      description:
        "solid-cli is a SOLID-inspired Python CLI toolkit for autonomous research (OpenAI), multimodal AI review (Gemini), and self-organizing knowledge management.",
      cardDescription: "Developer Tooling",
      features: [
        "Autonomous research workflow with source synthesis and markdown report generation",
        "Multimodal architecture review mode with SOLID-focused recommendations",
        "Self-organizing knowledge_base output structure for reusable team context",
        "Interactive terminal simulation embedded directly in portfolio playground",
      ],
      technologies: [
        "Python CLI architecture",
        "OpenAI Responses API",
        "Gemini multimodal analysis",
        "Markdown knowledge base generation",
      ],
      github: "https://github.com/atg25/AutonomousTools",
      demo: "https://pypi.org/project/solid-cli/",
      preview: {
        src: "/autonomous-cli-demo?embed=1",
        label: "Interactive simulation",
      },
      whatILearned:
        "What I learned: Dev tools live or die on defaults, ergonomics, and great error messages.",
    },
    {
      id: "newsletter-webscrapers",
      title: "Newsletter Webscrapers",
      description:
        "A set of web scraping utilities for collecting newsletter content in a structured way—useful for downstream analysis, summaries, or internal search.",
      cardDescription: "Automation & Data Collection",
      features: ["TBD (sources, parsing, and scheduling)", "TBD", "TBD", "TBD"],
      technologies: ["TBD (share stack + I’ll update)", "TBD", "TBD"],
      github: undefined,
      demo: undefined,
      whatILearned:
        "What I learned: Scraping is mostly about reliability—selectors, fallbacks, and monitoring.",
    },
    {
      id: "movie-search",
      title: "Movie Search (TMDB API)",
      description:
        "A movie search app that lets you find movies by title using the TMDB API. See posters, release years, and more in a clean, creative UI.",
      cardDescription: "API Integration & Search UI",
      features: [
        "Search for movies by title",
        "View posters, release years, and overviews",
        "Responsive, accessible, and on-brand UI",
        "Live search with loading and error states",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TMDB API",
        "Tailwind CSS",
      ],
      demo: "/movie-search",
      preview: {
        src: "/movie-search?embed=1",
        label: "Interactive preview",
      },
      whatILearned:
        "What I learned: Integrating third-party APIs and designing a delightful search experience.",
    },
    {
      id: "dataviz",
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with charts and graphs. Built to help users explore and understand data trends easily.",
      cardDescription: "Data Analytics & Visualization",
      features: [
        "Interactive charts and graphs",
        "Real-time data updates",
        "Customizable dashboards",
        "Responsive and accessible UI",
      ],
      technologies: [
        "React.js & TypeScript",
        "D3.js for data visualization",
        "Tailwind CSS for styling",
        "Chart.js and Recharts",
      ],
      github: "https://github.com/atg25/219dashboard",
      demo: "/dataviz",
      preview: {
        src: "/dataviz?embed=1",
        label: "Interactive preview",
      },
      whatILearned:
        "What I learned: Building visualizations that are both powerful and easy to use takes careful design and lots of user feedback.",
    },
    {
      id: "links-page",
      title: "First Portfolio Website",
      description:
        "Created a web platform for professional networking. I focused on making it easy to connect and share, and learned how important it is to keep things simple and welcoming.",
      cardDescription: "Web Development & Community",
      features: [
        "Professional profile creation and management",
        "Connection and networking tools",
        "Content sharing capabilities",
        "Job opportunity posting and discovery",
      ],
      technologies: [
        "Next.js for frontend and routing",
        "TailwindCSS for styling",
        "Prisma for database management",
        "NextAuth.js for authentication",
      ],
      github: "https://github.com/atg25/LinksPage",
      demo: "https://atg25.github.io/LinksPage/",
      preview: {
        src: "https://atg25.github.io/LinksPage/",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: The best features came from talking to users and trying out ideas quickly.",
    },
    {
      id: "pinelands",
      title: "Pinelands Info Website",
      description:
        "My first major website project, where I learned the fundamentals of web development, design, and deployment. Built with care and lots of late nights!",
      cardDescription: "Web Development Foundations",
      features: [
        "Hand-coded HTML & CSS",
        "Responsive layout",
        "Personal branding and content",
        "Deployed with GitHub Pages",
      ],
      technologies: ["HTML5 & CSS3", "JavaScript", "GitHub Pages"],
      github: "https://github.com/atg25/P4",
      demo: "https://atg25.github.io/P4/",
      preview: {
        src: "https://atg25.github.io/P4/",
        label: "Live site preview",
      },
      whatILearned:
        "What I learned: This project taught me the basics of HTML, CSS, and JavaScript, and how to deploy a site for the first time.",
    },
  ];

  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeId) ?? projects[0],
    [activeId, projects],
  );

  const [showDetails, setShowDetails] = useState(false);

  const isInternalPreview = (src: string) => src.startsWith("/");

  const projectBadge = (title: string) => {
    const cleaned = title
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-zA-Z0-9\s]/g, " ")
      .trim();
    const words = cleaned.split(/\s+/).filter(Boolean);
    if (words.length === 0) return "PR";
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const selectorCardTones = [
    {
      shell: "bg-gradient-to-br from-primary/10 via-accent/5 to-background",
      badge: "bg-primary/10 text-primary border-primary/30",
      shine: "from-primary/20 via-accent/10 to-transparent",
    },
    {
      shell: "bg-gradient-to-br from-accent/10 via-secondary/5 to-background",
      badge: "bg-accent/10 text-accent border-accent/30",
      shine: "from-accent/20 via-secondary/10 to-transparent",
    },
    {
      shell: "bg-gradient-to-br from-secondary/10 via-primary/5 to-background",
      badge: "bg-secondary/10 text-secondary border-secondary/30",
      shine: "from-secondary/20 via-primary/10 to-transparent",
    },
  ] as const;

  useEffect(() => {
    setShowDetails(false);
  }, [activeProject?.id]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-10 pt-20 px-4 pb-24">
        <motion.div
          className="text-center space-y-4 max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Projects Playground
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore one project at a time—without leaving the site.
          </p>
        </motion.div>

        {/* Selector Bar */}
        <div className="w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="w-full rounded-2xl border-2 border-input bg-card/80 backdrop-blur-sm shadow-lg"
            role="menu"
            aria-label="Project selector"
          >
            <div className="p-4">
              <div className="overflow-x-auto">
                <div className="flex gap-3 min-w-max pb-2">
                  {projects.map((p, idx) => {
                    const isActive = p.id === activeProject?.id;
                    const tone =
                      selectorCardTones[idx % selectorCardTones.length];
                    return (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveId(p.id);
                        }}
                        className={[
                          "relative w-[260px] sm:w-[320px] rounded-2xl border-2 p-4 text-left",
                          "transition-colors duration-200",
                          "hover:border-accent/60",
                          tone.shell,
                          isActive
                            ? "border-accent shadow-md shadow-foreground/5"
                            : "border-input",
                        ].join(" ")}
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        aria-label={`Select project: ${p.title}`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={[
                              "mt-0.5 size-11 rounded-2xl border-2 flex items-center justify-center",
                              "transition-colors duration-200",
                              tone.badge,
                              isActive ? "border-accent/60" : "border-input",
                            ].join(" ")}
                          >
                            <span className="text-xs font-semibold tracking-wide">
                              {projectBadge(p.title)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">
                              {p.title}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              {p.cardDescription ?? p.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Active project stage */}
        <motion.div
          key={activeProject?.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-6"
        >
          <div className="relative [perspective:1200px]">
            <div
              className={
                "relative transition-transform duration-500 [transform-style:preserve-3d] " +
                (showDetails ? "[transform:rotateY(180deg)]" : "")
              }
            >
              {/* Front: Live demo */}
              <Card
                className={
                  "border-2 border-input bg-card rounded-2xl overflow-hidden [backface-visibility:hidden] " +
                  (showDetails ? "pointer-events-none" : "pointer-events-auto")
                }
                aria-hidden={showDetails}
              >
                <CardHeader className="flex items-center justify-between gap-3 px-4 py-3 border-b border-input bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-1.5"
                      aria-hidden="true"
                    >
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-red))] border border-border" />
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-yellow))] border border-border" />
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-green))] border border-border" />
                    </div>
                    <CardTitle className="font-heading text-sm md:text-base text-foreground ml-2 truncate max-w-[40vw] sm:max-w-[55vw]">
                      {activeProject?.title}
                    </CardTitle>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowDetails(true)}
                      aria-label="Show project details"
                    >
                      Details
                    </Button>
                    {activeProject?.demo &&
                      activeProject.demo.startsWith("http") && (
                        <Button asChild variant="default" size="sm">
                          <a
                            href={activeProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open
                          </a>
                        </Button>
                      )}
                  </div>
                </CardHeader>

                <CardContent className="px-0 py-0">
                  {activeProject?.preview &&
                  activeProject.preview.embeddable !== false ? (
                    <div className="bg-background overflow-hidden h-[78vh] min-h-[540px]">
                      <iframe
                        title={`${activeProject.title} preview`}
                        src={activeProject.preview.src}
                        className="w-full h-full"
                        sandbox={
                          isInternalPreview(activeProject.preview.src)
                            ? undefined
                            : "allow-scripts allow-same-origin allow-forms allow-popups"
                        }
                      />
                    </div>
                  ) : activeProject?.demo &&
                    activeProject.demo.startsWith("http") ? (
                    <div className="bg-background h-[78vh] min-h-[540px] grid place-items-center p-8">
                      <div className="text-center max-w-xl space-y-4">
                        <div className="font-medium text-lg">Live demo</div>
                        <div className="text-sm text-muted-foreground">
                          This site blocks embedded previews. Open it in a new
                          tab to view the full experience.
                        </div>
                        <Button asChild variant="default" size="sm">
                          <a
                            href={activeProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open live site
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-background p-6">
                      <div className="font-medium">
                        Preview not available yet
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Add a live URL or an internal route for an embedded
                        demo.
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Back: Details */}
              <Card
                className={
                  "absolute inset-0 border-2 border-input bg-card rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] " +
                  (!showDetails ? "pointer-events-none" : "pointer-events-auto")
                }
                aria-hidden={!showDetails}
              >
                <CardHeader className="flex items-center justify-between gap-3 px-4 py-3 border-b border-input bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div
                      className="flex items-center gap-1.5"
                      aria-hidden="true"
                    >
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-red))] border border-border" />
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-yellow))] border border-border" />
                      <span className="inline-block size-3 rounded-full bg-[hsl(var(--mac-green))] border border-border" />
                    </div>
                    <CardTitle className="font-heading text-sm md:text-base text-foreground ml-2 truncate max-w-[45vw] sm:max-w-[60vw]">
                      {activeProject?.title}
                    </CardTitle>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowDetails(false)}
                    aria-label="Back to preview"
                  >
                    Back
                  </Button>
                </CardHeader>
                <CardContent className="space-y-5 overflow-auto h-[70vh] min-h-[460px]">
                  <div className="space-y-2">
                    {activeProject?.cardDescription && (
                      <div className="text-xs text-muted-foreground">
                        {activeProject.cardDescription}
                      </div>
                    )}
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                      {activeProject?.description}
                    </p>
                  </div>

                  {activeProject?.whatILearned && (
                    <div className="rounded-2xl border-2 border-accent/30 bg-accent/10 p-4">
                      <div className="text-xs font-semibold text-accent mb-1">
                        Key takeaway
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground">
                        {activeProject.whatILearned}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-2 border-input bg-background/40 p-4">
                      <div className="font-medium mb-3">What it does</div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {activeProject?.features.map((f, i) => (
                          <li
                            key={`${activeProject.id}-feature-${i}`}
                            className="flex gap-2"
                          >
                            <span className="mt-0.5 text-primary">✓</span>
                            <span className="leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border-2 border-input bg-background/40 p-4">
                      <div className="font-medium mb-3">Built with</div>
                      <div className="flex flex-wrap gap-2">
                        {activeProject?.technologies.map((t, i) => (
                          <span
                            key={`${activeProject.id}-tech-${i}`}
                            className="inline-flex items-center rounded-full border-2 border-input bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">
                        Use the menu to switch projects.
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border-2 border-input bg-background/40 p-4">
                    <div className="font-medium mb-3">Quick links</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject?.github && (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </Button>
                      )}
                      {activeProject?.figma && (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={activeProject.figma}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Figma
                          </a>
                        </Button>
                      )}

                      {activeProject?.demo &&
                        activeProject.demo.startsWith("http") && (
                          <Button asChild variant="default" size="sm">
                            <a
                              href={activeProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open live site
                            </a>
                          </Button>
                        )}

                      {activeProject?.demo &&
                        activeProject.demo.startsWith("/") && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={activeProject.demo}>Open route</Link>
                          </Button>
                        )}

                      {activeProject?.quickLinks?.map((l) => (
                        <Button
                          key={l.href}
                          asChild
                          variant="outline"
                          size="sm"
                        >
                          <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {l.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
