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
        <motion.div
          className="text-center space-y-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Experience
          </h1>
          <p className="text-lg text-muted-foreground/80">
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
                      Technical Operations Lead
                    </CardTitle>
                    <CardDescription>
                      NJIT Office of Admissions | Oct 2024 - Present
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Led technical operations and process improvements for
                        the admissions department. I learned how important it is
                        to listen, adapt, and make things easier for everyone.
                      </p>
                      <div className="italic text-accent-foreground text-sm pb-2">
                        What I learned: The best solutions come from working
                        with others and being open to change.
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">
                          Key Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Worked with a great team to streamline data
                            processing workflows, making things easier for
                            everyone.
                          </li>
                          <li>
                            Helped coordinate cross-functional teams for system
                            improvements.
                          </li>
                          <li>
                            Supported process improvements across departments.
                          </li>
                          <li>Built automated solutions for everyday tasks.</li>
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
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-gradient-brand">
                      Systems Administrator
                    </CardTitle>
                    <CardDescription>
                      American Campus Communities | Oct 2023 - May 2024
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Managed and improved system operations for campus
                        housing. I focused on making things run smoothly and
                        supporting residents and staff.
                      </p>
                      <div className="italic text-accent-foreground text-sm pb-2">
                        What I learned: Small improvements can make a big
                        difference for people’s day-to-day experience.
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Key Achievements:</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>
                            Used CRM systems to improve resident communication
                            and support.
                          </li>
                          <li>
                            Built simple automated solutions for maintenance
                            requests.
                          </li>
                          <li>
                            Maintained high customer satisfaction ratings by
                            listening and responding to feedback.
                          </li>
                          <li>
                            Helped implement new security protocols and
                            procedures.
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
                    B.S. in Web & Information Systems | Minor in Computer
                    Science
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
