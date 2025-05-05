"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function Playground() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and built this portfolio to share my work and process. It’s always a work in progress, and I’m always learning new ways to make it better.",
      cardDescription: "Frontend Development",
      features: [
        "Responsive design across all devices",
        "Dark mode support",
        "Project showcase with detailed information",
        "Contact form integration",
      ],
      technologies: [
        "Next.js 14 with App Router",
        "TailwindCSS for styling",
        "Shadcn UI components",
        "TypeScript for type safety",
      ],
      github: "https://github.com/atg25/portfolio",
      whatILearned:
        "What I learned: Sharing my process helps others and keeps me honest about what works and what doesn’t.",
    },
    {
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
      whatILearned:
        "What I learned: Building visualizations that are both powerful and easy to use takes careful design and lots of user feedback.",
    },
    {
      title: "Athletics Management System",
      description:
        "Built a system for tracking athlete performance, scheduling events, and managing team resources. I learned a lot about working with real users and making things simple for everyone.",
      cardDescription: "System Design & Teamwork",
      features: [
        "Athlete performance tracking and analytics",
        "Event scheduling and facility management",
        "Team communication portal",
        "Resource allocation system",
      ],
      technologies: [
        "React.js for frontend development",
        "Node.js and Express for backend API",
        "MongoDB for data storage",
        "WebSocket for real-time updates",
      ],
      figma:
        "https://www.figma.com/design/ff5kroo7lHROkYmJXkTkBP/Highlander-Hustle-Prototype?node-id=0-1&p=f&t=ZIXnxrQZQi20nhp7-0",
      demo: "https://www.figma.com/proto/ff5kroo7lHROkYmJXkTkBP/Highlander-Hustle-Prototype?node-id=148-223&p=f&t=ZIXnxrQZQi20nhp7-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=148%3A223",
      variant: "expedition",
      whatILearned:
        "What I learned: Listening to feedback early made the system better for coaches and athletes. Collaboration really matters.",
    },
    {
      title: "Professional Network Platform",
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
      variant: "terrain",
      whatILearned:
        "What I learned: The best features came from talking to users and trying out ideas quickly.",
    },
    {
      title: "First Portfolio Website",
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
      whatILearned:
        "What I learned: This project taught me the basics of HTML, CSS, and JavaScript, and how to deploy a site for the first time.",
    },
    {
      title: "Programming Languages Ancestry Graph",
      description:
        "An interactive force-directed graph visualizing the relationships and ancestry of modern and historical programming languages. Explore how languages have influenced each other over time.",
      cardDescription: "Data Visualization & React Force Graph",
      features: [
        "Force-directed graph visualization",
        "Interactive exploration of language ancestry",
        "Hover to see details about each language",
        "Responsive and accessible UI",
      ],
      technologies: [
        "React.js",
        "react-force-graph",
        "TypeScript",
        "Tailwind CSS",
      ],
      whatILearned:
        "What I learned: Visualizing relationships helps reveal the rich history and evolution of programming languages.",
    },
    {
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
      whatILearned:
        "What I learned: Integrating third-party APIs and designing a delightful search experience.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        <motion.div
          className="text-center space-y-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Playground
          </h1>
          <p className="text-lg text-muted-foreground/80">
            Here’s a look at some things I’ve built. Each project taught me
            something new—if you want to know more about how I made any of
            these, just ask!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
