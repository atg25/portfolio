"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  no: string;
  year: string;
  category: string;
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
      no: "01",
      year: "2025",
      category: "AUTOMATION",
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
      no: "02",
      year: "2025",
      category: "DESIGN",
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
      no: "03",
      year: "2025",
      category: "WEB",
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
      no: "04",
      year: "2024",
      category: "APP",
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
      no: "05",
      year: "2024",
      category: "EDUCATION",
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
        "What I learned: A good hub is search + structure + naming conventions—without those, it's just a folder.",
    },
    {
      id: "ainspire",
      no: "06",
      year: "2024",
      category: "AI",
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
      no: "07",
      year: "2024",
      category: "TOOLING",
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
      no: "08",
      year: "2024",
      category: "AUTOMATION",
      title: "Newsletter Webscrapers",
      description:
        "A set of web scraping utilities for collecting newsletter content in a structured way—useful for downstream analysis, summaries, or internal search.",
      cardDescription: "Automation & Data Collection",
      features: ["TBD (sources, parsing, and scheduling)", "TBD", "TBD", "TBD"],
      technologies: ["TBD (share stack + I'll update)", "TBD", "TBD"],
      github: undefined,
      demo: undefined,
      whatILearned:
        "What I learned: Scraping is mostly about reliability—selectors, fallbacks, and monitoring.",
    },
    {
      id: "movie-search",
      no: "09",
      year: "2024",
      category: "API",
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
      no: "10",
      year: "2024",
      category: "DATA",
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
      no: "11",
      year: "2023",
      category: "WEB",
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
      no: "12",
      year: "2023",
      category: "WEB",
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

  useEffect(() => {
    setShowDetails(false);
  }, [activeProject?.id]);

  return (
    <div className="min-h-screen bg-background">
      <main className="px-8 md:px-12 lg:px-16 pt-32 pb-24 space-y-16">
        {/* HEADER — Swiss archival label */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="swiss-label text-brand">
            WORK ARCHIVE — {projects.length} PROJECTS
          </div>
          <h1 className="font-heading font-black uppercase text-5xl md:text-7xl tracking-swiss leading-[0.92]">
            PROJECT<br />PLAYGROUND
          </h1>
        </motion.div>

        {/* PROJECT SELECTOR — Archival labeled cards */}
        <div className="space-y-4">
          <div className="swiss-label text-muted-foreground">
            SELECT PROJECT
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto pb-4"
          >
            <div className="flex gap-4 min-w-max">
              {projects.map((p) => {
                const isActive = p.id === activeProject?.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveId(p.id)}
                    className={`w-[280px] border-2 transition-all duration-100 ${
                      isActive
                        ? "border-brand"
                        : "border-muted hover:border-brand"
                    }`}
                  >
                    {/* Archival label block — brand-invert */}
                    <div className="bg-brand text-black p-3 flex items-center justify-between border-b-2 border-black">
                      <span className="font-mono text-xs font-bold uppercase tracking-label">
                        NO. {p.no}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-label">
                        {p.year}
                      </span>
                    </div>

                    {/* Content area */}
                    <div className="p-4 text-left space-y-2 bg-background">
                      <div className="font-mono text-xs uppercase tracking-label text-brand">
                        {p.category}
                      </div>
                      <div className="font-bold text-sm uppercase">
                        {p.title}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {p.cardDescription ?? p.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ACTIVE PROJECT STAGE */}
        <motion.div
          key={activeProject?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {!showDetails ? (
            // PREVIEW MODE
            <div className="border-2 border-muted bg-card">
              {/* Browser chrome — archival label header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted border-b-2 border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block size-3 bg-[hsl(var(--mac-red))] border-2 border-border" />
                    <span className="inline-block size-3 bg-[hsl(var(--mac-yellow))] border-2 border-border" />
                    <span className="inline-block size-3 bg-[hsl(var(--mac-green))] border-2 border-border" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-label truncate max-w-[50vw]">
                    {activeProject?.title}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                  >
                    Details
                  </button>
                  {activeProject?.demo &&
                    activeProject.demo.startsWith("http") && (
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
                      >
                        Open
                      </a>
                    )}
                </div>
              </div>

              {/* Preview iframe or fallback */}
              <div className="bg-background">
                {activeProject?.preview &&
                activeProject.preview.embeddable !== false ? (
                  <div className="h-[70vh] min-h-[540px]">
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
                  <div className="h-[70vh] min-h-[540px] grid place-items-center p-8">
                    <div className="text-center max-w-xl space-y-4">
                      <div className="font-bold uppercase">
                        Preview blocked
                      </div>
                      <div className="text-sm text-muted-foreground">
                        This site blocks embedded previews. Open it in a new tab
                        to view the full experience.
                      </div>
                      <a
                        href={activeProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
                      >
                        Open live site
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="font-bold uppercase">
                      Preview not available
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Add a live URL or internal route for embedded demo.
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // DETAILS MODE
            <div className="border-2 border-muted bg-card">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted border-b-2 border-border">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block size-3 bg-[hsl(var(--mac-red))] border-2 border-border" />
                    <span className="inline-block size-3 bg-[hsl(var(--mac-yellow))] border-2 border-border" />
                    <span className="inline-block size-3 bg-[hsl(var(--mac-green))] border-2 border-border" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-label truncate max-w-[50vw]">
                    {activeProject?.title}
                  </div>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                >
                  Back
                </button>
              </div>

              {/* Details content */}
              <div className="p-8 space-y-8 overflow-auto max-h-[70vh]">
                {/* Metadata grid — archival labels */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="border-2 border-muted p-3">
                    <div className="swiss-label text-brand mb-2">NO.</div>
                    <div className="font-bold">{activeProject?.no}</div>
                  </div>
                  <div className="border-2 border-muted p-3">
                    <div className="swiss-label text-brand mb-2">YEAR</div>
                    <div className="font-bold">{activeProject?.year}</div>
                  </div>
                  <div className="border-2 border-muted p-3">
                    <div className="swiss-label text-brand mb-2">
                      CATEGORY
                    </div>
                    <div className="font-bold">{activeProject?.category}</div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  {activeProject?.cardDescription && (
                    <div className="swiss-label text-muted-foreground">
                      {activeProject.cardDescription}
                    </div>
                  )}
                  <p className="text-base leading-relaxed">
                    {activeProject?.description}
                  </p>
                </div>

                {/* Key takeaway — brand-invert block */}
                {activeProject?.whatILearned && (
                  <div className="border-l-4 border-brand bg-muted p-4">
                    <div className="swiss-label text-brand mb-2">
                      KEY TAKEAWAY
                    </div>
                    <div className="text-sm">{activeProject.whatILearned}</div>
                  </div>
                )}

                {/* Features & Tech grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-muted p-4 space-y-3">
                    <div className="swiss-label text-brand">WHAT IT DOES</div>
                    <ul className="space-y-2 text-sm">
                      {activeProject?.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-brand">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-2 border-muted p-4 space-y-3">
                    <div className="swiss-label text-brand">BUILT WITH</div>
                    <div className="flex flex-wrap gap-2">
                      {activeProject?.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="border-2 border-muted px-2 py-1 text-xs font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="border-2 border-muted p-4 space-y-3">
                  <div className="swiss-label text-brand">QUICK LINKS</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject?.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                      >
                        GitHub
                      </a>
                    )}
                    {activeProject?.figma && (
                      <a
                        href={activeProject.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                      >
                        Figma
                      </a>
                    )}
                    {activeProject?.demo &&
                      activeProject.demo.startsWith("http") && (
                        <a
                          href={activeProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
                        >
                          Open live site
                        </a>
                      )}
                    {activeProject?.demo &&
                      activeProject.demo.startsWith("/") && (
                        <Link
                          href={activeProject.demo}
                          className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                        >
                          Open route
                        </Link>
                      )}
                    {activeProject?.quickLinks?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 border-2 border-muted text-xs font-bold uppercase tracking-label hover:border-brand hover:text-brand transition-all duration-100"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
