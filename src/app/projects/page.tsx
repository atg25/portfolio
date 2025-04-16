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
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground/80">
            Here’s a look at some things I’ve built. Each project taught me
            something new—if you want to know more about how I made any of
            these, just ask!
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
                  <CardTitle className="font-heading text-gradient-brand">
                    Athletics Management System
                  </CardTitle>
                  <CardDescription>System Design & Teamwork</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Built a system for tracking athlete performance, scheduling
                    events, and managing team resources. I learned a lot about
                    working with real users and making things simple for
                    everyone.
                  </p>
                  <div className="italic text-accent-foreground text-sm pb-2">
                    What I learned: Listening to feedback early made the system
                    better for coaches and athletes. Collaboration really
                    matters.
                  </div>
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
                  <CardTitle className="font-heading text-gradient-brand">
                    Professional Network Platform
                  </CardTitle>
                  <CardDescription>Web Development & Community</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Created a web platform for professional networking. I
                    focused on making it easy to connect and share, and learned
                    how important it is to keep things simple and welcoming.
                  </p>
                  <div className="italic text-accent-foreground text-sm pb-2">
                    What I learned: The best features came from talking to users
                    and trying out ideas quickly.
                  </div>
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
                  <CardTitle className="font-heading text-gradient-brand">
                    Personal Portfolio Website
                  </CardTitle>
                  <CardDescription>Frontend Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-muted-foreground">
                    Designed and built this portfolio to share my work and
                    process. It’s always a work in progress, and I’m always
                    learning new ways to make it better.
                  </p>
                  <div className="italic text-accent-foreground text-sm pb-2">
                    What I learned: Sharing my process helps others and keeps me
                    honest about what works and what doesn’t.
                  </div>
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
