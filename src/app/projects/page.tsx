"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        <motion.div
          className="text-center space-y-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl">Projects</h1>
          <p className="text-lg text-muted-foreground/80">
            A showcase of my technical projects and development work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card variant="expedition">
                <CardHeader>
                  <CardTitle className="font-heading">
                    Athletics Management System
                  </CardTitle>
                  <CardDescription>System Design & Innovation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Developed a comprehensive athletics management system for
                    tracking athlete performance, scheduling events, and
                    managing team resources. The system streamlines
                    administrative tasks and enhances communication between
                    coaches, athletes, and staff.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Athlete performance tracking and analytics</li>
                        <li>Event scheduling and facility management</li>
                        <li>Team communication portal</li>
                        <li>Resource allocation system</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Technologies Used:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>React.js for frontend development</li>
                        <li>Node.js and Express for backend API</li>
                        <li>MongoDB for data storage</li>
                        <li>WebSocket for real-time updates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card variant="terrain">
                <CardHeader>
                  <CardTitle className="font-heading">
                    Professional Network Platform
                  </CardTitle>
                  <CardDescription>Web Development & Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Created an innovative web platform for professional
                    networking, implementing responsive design patterns and
                    modern development practices. The platform enables
                    professionals to connect, share experiences, and discover
                    opportunities.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Professional profile creation and management</li>
                        <li>Connection and networking tools</li>
                        <li>Content sharing capabilities</li>
                        <li>Job opportunity posting and discovery</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Technologies Used:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Next.js for frontend and routing</li>
                        <li>TailwindCSS for styling</li>
                        <li>Prisma for database management</li>
                        <li>NextAuth.js for authentication</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Button variant="outline" size="lg" asChild>
                        <a
                          href="https://atg25.github.io/LinksPage/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">
                    Personal Portfolio Website
                  </CardTitle>
                  <CardDescription>Frontend Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Designed and developed a personal portfolio website
                    showcasing my projects and professional experience. The site
                    features a modern design, responsive layout, and smooth
                    navigation.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Responsive design across all devices</li>
                        <li>Dark mode support</li>
                        <li>Project showcase with detailed information</li>
                        <li>Contact form integration</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Technologies Used:</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Next.js 14 with App Router</li>
                        <li>TailwindCSS for styling</li>
                        <li>Shadcn UI components</li>
                        <li>TypeScript for type safety</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
