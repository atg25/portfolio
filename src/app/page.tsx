"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Project data for carousel
  const projects = [
    {
      title: "NextGen Wallcovering",
      description:
        "Executed the end-to-end digital establishment for NGwallcovering.com, including custom site development and a luxury Art Deco brand identity, resulting in a seamless, high-conversion user experience.",
      border: "border-blue-400/30",
      demo: "https://ngwallcovering.com",
      whatILearned:
        "I learned how to translate a premium brand into a fast, conversion-focused web experience through consistent typography, spacing, and clear calls-to-action.",
    },
    {
      title: "OpenAI LLM Chat",
      description:
        "A real-time chat application powered by WebSockets and a Large Language Model (LLM) backend. Enables interactive conversations and demonstrates modern AI integration in web apps.",
      border: "border-purple-400/30",
      demo: "/rag-demo",
      whatILearned:
        "I learned how to integrate OpenAI APIs, manage real-time communication with WebSockets, and handle prompt engineering for better AI responses.",
    },
    {
      title: "Movie Search (TMDB API)",
      description:
        "A movie search app that lets you find movies by title using the TMDB API. See posters, release years, and more in a clean, creative UI.",
      border: "border-accent/30",
      demo: "/movie-search",
      whatILearned:
        "I learned how to work with third-party APIs, manage asynchronous data fetching in Next.js, and improve user experience with responsive design.",
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* SVG/Gradient Background Accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-64 md:h-96 animate-pathfinder"
        >
          <defs>
            <linearGradient id="bg-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <path
            fill="url(#bg-gradient)"
            fillOpacity="0.18"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <main className="container mx-auto space-y-20 pt-20 px-4 sm:px-6 lg:px-8">
        {/* Hero/Intro Section */}
        <section className="text-center space-y-8 px-2 sm:px-0">
          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-gradient-brand"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.from("Hi, I'm Andrew.").map((letter, index) => (
              <motion.span key={`name-${index}`} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Full-stack engineer & A.I. orchestrator building usable, slightly
            different web apps. Here’s some of my work—take a look, and if you
            have an idea, let’s talk.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
            <Button
              asChild
              className="rounded-full px-6 py-3 text-base shadow-md bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Link href="/contact" aria-label="Contact Andrew Gardner">
                Let’s chat
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 py-3 text-base shadow-md border-primary hover:bg-primary/10"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                View Resume
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="rounded-full px-6 py-3 text-base shadow-md text-primary hover:bg-accent/10"
            >
              <Link href="#process" aria-label="See My Approach">
                See how I work
              </Link>
            </Button>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/andrew-gardner2026/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-full p-2 border border-border bg-background/50 hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
                </svg>
              </a>
              <a
                href="https://github.com/atg25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-full p-2 border border-border bg-background/50 hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Email link removed for privacy */}
            </div>
          </div>
        </section>

        {/* Skills Section - Two Columns with Icons */}
        <section className="max-w-5xl mx-auto px-2 sm:px-0">
          <motion.h2
            className="text-3xl font-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="h-full rounded-2xl shadow-lg border-2 border-primary/30 bg-card/80">
                <CardHeader className="flex flex-row items-center gap-3">
                  <span className="inline-block p-2 rounded-full bg-primary/20">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M3 5h18M3 12h18M3 19h18"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <CardTitle className="font-heading focus:outline-none focus:ring-0">
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>UI/UX Design</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="h-full rounded-2xl shadow-lg border-2 border-accent/30 bg-card/80">
                <CardHeader className="flex flex-row items-center gap-3">
                  <span className="inline-block p-2 rounded-full bg-accent/20">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 4v16m8-8H4"
                        stroke="#a855f7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <CardTitle className="font-heading focus:outline-none focus:ring-0">
                    Backend & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Node.js, Java, Python, SQL</li>
                    <li>Git & GitHub</li>
                    <li>Salesforce CRM</li>
                    <li>Autonomous Development</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section
          className="max-w-3xl mx-auto text-center space-y-6 py-12 px-2 sm:px-0"
          id="process"
        >
          <h2 className="text-3xl font-heading text-gradient-brand">
            My Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            I build practical, creative web experiences with real users in mind.
            I seek feedback early, keep interfaces clear, and ship accessible
            solutions that feel good to use. If you have an idea, let’s connect.
          </p>
        </section>

        {/* Featured Projects - Single Card Carousel */}
        <section className="max-w-6xl mx-auto pb-20 px-2 sm:px-0">
          <motion.h2
            className="text-3xl font-heading text-center mb-12 text-gradient-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Projects I'm Proud Of
          </motion.h2>
          <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md border border-primary hover:bg-primary/10 transition"
              onClick={handlePrev}
              type="button"
            >
              <FaChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="w-full flex justify-center"
            >
              <Card
                className={`rounded-2xl shadow-lg border-2 bg-card min-w-[90vw] max-w-md mx-auto sm:min-w-[340px] ${projects[currentProject].border}`}
              >
                <CardHeader>
                  <CardTitle className="font-heading focus:outline-none focus:ring-0">
                    {projects[currentProject].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {projects[currentProject].description}
                  </p>
                  <div className="italic text-muted-foreground text-sm pb-2">
                    {projects[currentProject].whatILearned}
                  </div>
                  <div className="flex gap-4">
                    {projects[currentProject].demo && (
                      <Button
                        variant="default"
                        asChild
                        className="rounded-full"
                      >
                        <a
                          href={projects[currentProject].demo}
                          target={
                            projects[currentProject].demo.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            projects[currentProject].demo.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <button
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md border border-primary hover:bg-primary/10 transition"
              onClick={handleNext}
              type="button"
            >
              <FaChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button
              asChild
              className="rounded-full px-8 py-3 text-lg shadow-md bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Link href="/projects">Explore All Projects</Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
