"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Profile Hero Section */}
        <section className="flex flex-col items-center gap-12 max-w-4xl mx-auto mb-20 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <img
              src="/headShot.jpeg"
              alt="Profile photo of Andrew Gardner"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover object-center border-4 border-primary/40 shadow-xl mb-8 md:mb-0 mx-auto"
              style={{ aspectRatio: "1 / 1", objectPosition: "50% 20%" }}
            />
            <div className="text-center md:text-left space-y-8 flex-1">
              <h1 className="text-5xl md:text-6xl font-heading text-gradient-brand font-bold leading-tight">
                About Me
              </h1>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                My name's Andrew. I'm left-handed, a problem solver, and
                creative builder! Currently I'm in my Senior year at NJIT, and
                I'm diving deep into autonomous development and AI
                orchestration. I love learning new things, collaborating, and
                making tech that helps people.
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <span className="font-semibold text-primary block mb-2 text-xl">
                    Hobbies:
                  </span>
                  <ul className="inline-block list-disc list-inside ml-6 text-lg text-muted-foreground text-left">
                    <li>Binging sitcoms</li>
                    <li>Hiking and exploring nature</li>
                    <li>Watching sci-fi movies</li>
                    <li>Trying new coffee shops</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold text-primary block mb-2 text-xl">
                    Values:
                  </span>
                  <ul className="inline-block list-disc list-inside ml-6 text-lg text-muted-foreground text-left">
                    <li>Creativity</li>
                    <li>Inclusivity</li>
                    <li>Continuous learning</li>
                    <li>Kindness</li>
                    <li>Curiosity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <motion.div
          className="text-center space-y-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Here’s my journey so far—full of learning, teamwork, and growth. I’m
            grateful for every chance to solve problems and help others along
            the way.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <section>
          <motion.h2
            className="text-3xl font-heading text-center mb-8 text-gradient-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Freelance Technological Consultant */}
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
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-gradient-brand">
                      Freelance Technological Consultant
                    </CardTitle>
                    <CardDescription>
                      AG Media | Aug 2025 - Present
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Built and deployed custom websites with Next.js,
                        TypeScript, and Tailwind CSS, consistently driving 95+
                        Lighthouse performance scores through AI orchestration
                        and autonomous development workflows.
                      </p>
                      <div>
                        <h3 className="font-medium mb-2">Key Contributions:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Executed the end-to-end digital establishment for
                            NGwallcovering.com, including custom site
                            development and a luxury Art Deco brand identity,
                            resulting in a seamless, high-conversion user
                            experience.
                          </li>
                          <li>
                            Designed and developed a responsive, mobile-first
                            web presence for njpurehome.com, focusing on clean
                            UI patterns and intuitive navigation to improve
                            engagement metrics and brand trust.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Management Systems Intern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-gradient-brand">
                      Management Systems Intern
                    </CardTitle>
                    <CardDescription>
                      New Jersey Transit, Newark, NJ | June 2025 - August 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Developed a Python web application with Streamlit and
                        Pandas featuring CSV/SQL comparison workflows, reducing
                        pre-validation time by 40% and eliminating manual
                        comparison errors.
                      </p>
                      <div>
                        <h3 className="font-medium mb-2">Key Contributions:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Validated large datasets during system transitions
                            using Excel, Python, and SQL, ensuring data
                            integrity across thousands of employee records.
                          </li>
                          <li>
                            Collaborated with a 12-person team to create,
                            refine, and troubleshoot SQL queries for reliable
                            data extraction and reporting.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Student Ambassador */}
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
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-gradient-brand">
                      Student Ambassador
                    </CardTitle>
                    <CardDescription>
                      NJIT Office of Admissions | Oct 2024 - Present
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Managed and facilitated prospective student outreach by
                        preparing and mailing hundreds of admission letters
                        weekly and processing transcripts through our database
                        on Slate.
                      </p>
                      <div>
                        <h3 className="font-medium mb-2">Key Contributions:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Contributed to the coordination and execution of
                            admissions events, overseeing tours and creating a
                            hospitable atmosphere with themed decorations and
                            interactive activities.
                          </li>
                          <li>
                            Enhanced visitor experiences by boosting engagement
                            and satisfaction through efficient management of
                            front desk operations and general office tasks.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Community Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-gradient-brand">
                      Community Assistant
                    </CardTitle>
                    <CardDescription>
                      American Campus Communities | Oct 2023 - May 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Leveraged cloud software (Salesforce CRM) to analyze
                        data and optimize individualized communication
                        strategies, incorporating personalized email templates
                        and behavior-based segmented messaging for current and
                        prospective lessees.
                      </p>
                      <div>
                        <h3 className="font-medium mb-2">Key Achievements:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Utilized automation tools and AI to auto-generate
                            leases tailored to the applicant's needs and
                            preferences.
                          </li>
                          <li>
                            Utilized company databases to address residents'
                            inquiries and issues, successfully resolving 95% of
                            their concerns by applying strong customer service
                            skills.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Circulation Desk Attendant */}
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
                      Circulation Desk Attendant
                    </CardTitle>
                    <CardDescription>
                      Robert Van Houten Library, NJIT | Oct 2022 - May 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Supported students in accessing textbooks, novels, or
                        articles by tapping into library, online, and academic
                        databases to enhance resource availability.
                      </p>
                      <div>
                        <h3 className="font-medium mb-2">
                          Key Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Used scheduling software to manage study room
                            reservations and promptly notified students of
                            availability via email and in-person interactions.
                          </li>
                          <li>
                            Utilized Library of Congress training and data
                            science techniques to categorize and maintain
                            thousands of books, ensuring accurate item tracking
                            and location management.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section className="pb-16">
          <motion.h2
            className="text-3xl font-heading text-center mb-8 text-gradient-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h2>
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
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle className="font-heading text-gradient-brand">
                    NJIT - Ying Wu College of Computing
                  </CardTitle>
                  <CardDescription>
                    B.S. in Web & Information Systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <strong>GPA:</strong> 3.64 | Dean's List
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Expected Graduation:</strong> May 2026
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Key Areas of Study:</h3>
                      <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                        <li>System Architecture</li>
                        <li>User Experience Design</li>
                        <li>Software Development</li>
                        <li>Database Management</li>
                        <li>Web Technologies</li>
                        <li>Information Security</li>
                        <li>Network Programming</li>
                        <li>Data Structures</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Relevant Coursework:</h3>
                      <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                        <li>Advanced Web Development</li>
                        <li>Database Management Systems</li>
                        <li>Software Engineering</li>
                        <li>Computer Networks</li>
                        <li>Information Security</li>
                        <li>Mobile Application Development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
