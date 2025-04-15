"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-20 pt-20 px-4">
        {/* Hero/Intro Section */}
        <section className="text-center space-y-8">
          <motion.h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.from("Andrew Gardner").map((letter, index) => (
              <motion.span key={`name-${index}`} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Web Developer & Tech Consultant specializing in creating modern,
            efficient, and user-friendly digital solutions.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="h-full transition-colors hover:bg-muted duration-300"
                variant="default"
              >
                <CardHeader>
                  <CardTitle className="font-heading">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>HTML5 & CSS3</li>
                    <li>UI/UX Design</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="h-full transition-colors hover:bg-muted duration-300"
                variant="default"
              >
                <CardHeader>
                  <CardTitle className="font-heading">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>C++</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="h-full transition-colors hover:bg-muted duration-300"
                variant="default"
              >
                <CardHeader>
                  <CardTitle className="font-heading">Tools & Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>Salesforce CRM</li>
                    <li>Docker</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-5xl mx-auto pb-20">
          <motion.h2
            className="text-3xl font-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="transition-colors hover:bg-muted duration-300"
                variant="default"
              >
                <CardHeader>
                  <CardTitle className="font-heading">
                    Highlander Hustle Prototype
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A comprehensive system for managing athletic programs,
                    featuring performance tracking, event scheduling, and team
                    communication tools.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link href="/projects">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card
                className="transition-colors hover:bg-muted duration-300"
                variant="default"
              >
                <CardHeader>
                  <CardTitle className="font-heading">
                    Professional Network Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A modern web platform enabling professionals to connect,
                    share experiences, and discover opportunities.
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" asChild>
                      <Link href="/projects">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
