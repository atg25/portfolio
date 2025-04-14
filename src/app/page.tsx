"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-[800px] mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            Andrew Gardner
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Digital Explorer & Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Charting new territories in web development, exploring innovative
            solutions and pushing the boundaries of what's possible.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button variant="default" size="lg" className="text-base" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <a href="mailto:agard1205@gmail.com">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="py-12">
          <h2 className="text-3xl font-heading text-center mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Core Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript/TypeScript</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Development Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full Stack Development</li>
                  <li>UI/UX Design</li>
                  <li>Testing & Debugging</li>
                  <li>System Architecture</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Project Management</li>
                  <li>Problem Solving</li>
                  <li>Technical Leadership</li>
                  <li>Client Communication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12" id="projects">
          <h2 className="text-3xl font-heading text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="expedition">
              <CardHeader>
                <CardTitle className="font-heading">
                  Athletics Management System
                </CardTitle>
                <CardDescription>System Design & Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Developed a comprehensive athletics management system,
                  focusing on innovative user experience design and efficient
                  system architecture.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                  <li>Enhanced user experience design</li>
                  <li>Optimized system architecture</li>
                  <li>Led cross-functional development</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="terrain">
              <CardHeader>
                <CardTitle className="font-heading">
                  Professional Network Platform
                </CardTitle>
                <CardDescription>Web Development & Design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Created an innovative web platform for professional
                  networking, implementing responsive design patterns and modern
                  development practices.
                </p>
                <ul className="list-disc list-inside mb-4 text-sm text-muted-foreground">
                  <li>Responsive design implementation</li>
                  <li>Modern JavaScript architecture</li>
                  <li>Performance optimization</li>
                </ul>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://atg25.github.io/LinksPage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-12">
          <h2 className="text-3xl font-heading text-center mb-8">
            Professional Experience
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Technical Operations Lead
                </CardTitle>
                <CardDescription>
                  NJIT Office of Admissions | Oct 2024 - Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Streamlined data processing workflows</li>
                  <li>Coordinated cross-functional teams</li>
                  <li>Implemented process improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">
                  Systems Administrator
                </CardTitle>
                <CardDescription>
                  American Campus Communities | Oct 2023 - May 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Leveraged CRM systems for optimization</li>
                  <li>Developed automated solutions</li>
                  <li>Maintained high customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12">
          <h2 className="text-3xl font-heading text-center mb-8">Education</h2>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="font-heading">
                NJIT - Ying Wu College of Computing
              </CardTitle>
              <CardDescription>
                B.S. in Web & Information Systems | Minor in Computer Science
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>GPA:</strong> 3.64 | Dean's List
                </p>
                <div>
                  <p className="font-medium mb-2">Key Areas of Study:</p>
                  <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                    <li>System Architecture</li>
                    <li>User Experience Design</li>
                    <li>Software Development</li>
                    <li>Database Management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-8 py-16">
          <h2 className="text-3xl font-heading">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or want to discuss potential
            opportunities? Let's start a conversation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" size="lg" className="text-base" asChild>
              <a href="mailto:agard1205@gmail.com">Email</a>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <a
                href="https://linkedin.com/in/andrew-gardner2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <a
                href="https://github.com/atg25"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
