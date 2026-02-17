"use client";

import { motion } from "framer-motion";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

const experiences = [
  {
    no: "01",
    year: "2025",
    role: "Freelance Technological Consultant",
    org: "AG Media",
    period: "Aug 2025 - Present",
    bullets: [
      "Built and deployed high-performance web platforms using Next.js, TypeScript, and Tailwind.",
      "Executed full digital launch of NGwallcovering.com with custom UX and visual identity.",
      "Delivered mobile-first architecture and measurable conversion improvements.",
    ],
  },
  {
    no: "02",
    year: "2025",
    role: "Management Systems Intern",
    org: "New Jersey Transit",
    period: "June 2025 - August 2025",
    bullets: [
      "Built Streamlit and Pandas tooling for CSV/SQL comparison workflows.",
      "Reduced validation time by 40% while improving data integrity confidence.",
      "Partnered across teams to refine SQL extraction and reporting pipelines.",
    ],
  },
  {
    no: "03",
    year: "2024",
    role: "Student Ambassador",
    org: "NJIT Admissions",
    period: "Oct 2024 - Present",
    bullets: [
      "Managed applicant outreach and transcript handling at high weekly volume.",
      "Supported campus event operations and improved visitor engagement quality.",
    ],
  },
];

export default function Experience() {
  return (
    <SwissPageShell>
      <div className="col-span-12 h-24 md:h-40" aria-hidden="true" />

      <SwissPageHeader
        label="ABOUT — 2026"
        title={
          <>
            EXPERIENCE
            <br />
            TIMELINE
          </>
        }
        description="I build practical systems, improve workflows, and deliver software that people can use immediately."
      />

      <section className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 border-2 border-muted p-4">
          <div className="swiss-label text-brand mb-3">PROFILE</div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              NJIT senior focused on autonomous development and AI
              orchestration.
            </p>
            <p>
              Left-handed builder, strong collaborator, systems-first problem
              solver.
            </p>
          </div>
        </div>
        <div className="md:col-span-1 border-2 border-muted p-4">
          <div className="swiss-label text-brand mb-3">HOBBIES</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Binging sitcoms</li>
            <li>Hiking and nature</li>
            <li>Sci-fi movies</li>
            <li>Coffee shop exploration</li>
          </ul>
        </div>
        <div className="md:col-span-1 border-2 border-muted p-4">
          <div className="swiss-label text-brand mb-3">VALUES</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Creativity</li>
            <li>Inclusivity</li>
            <li>Continuous learning</li>
            <li>Kindness</li>
          </ul>
        </div>
      </section>

      <section className="col-span-12 lg:col-span-10 space-y-4">
        {experiences.map((item, index) => (
          <motion.div
            key={item.no}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            <SwissArchivalCard
              no={item.no}
              year={item.year}
              category="PROFESSIONAL"
              interactive
            >
              <h2 className="text-2xl">{item.role}</h2>
              <p className="text-xs uppercase tracking-label text-muted-foreground">
                {item.org} — {item.period}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-brand">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </SwissArchivalCard>
          </motion.div>
        ))}
      </section>

      <section className="col-span-12 lg:col-span-10">
        <SwissArchivalCard no="04" year="2026" category="EDUCATION">
          <h2 className="text-2xl">NJIT — YING WU COLLEGE OF COMPUTING</h2>
          <p className="text-sm text-muted-foreground">
            B.S. Web & Information Systems — GPA 3.64 — Expected Graduation: May
            2026
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="border-2 border-muted p-3">
              <div className="swiss-label text-brand mb-2">AREAS OF STUDY</div>
              <p className="text-sm text-muted-foreground">
                Architecture, UX, development, databases, security, networks.
              </p>
            </div>
            <div className="border-2 border-muted p-3">
              <div className="swiss-label text-brand mb-2">COURSEWORK</div>
              <p className="text-sm text-muted-foreground">
                Advanced Web Dev, Software Engineering, DBMS, Networks,
                Security.
              </p>
            </div>
          </div>
        </SwissArchivalCard>
      </section>
    </SwissPageShell>
  );
}
