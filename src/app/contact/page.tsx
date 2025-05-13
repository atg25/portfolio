"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Use hardcoded env values for EmailJS (as a workaround for Next.js client env issues)
const EMAILJS_SERVICE_ID = "service_lmznzhf";
const EMAILJS_TEMPLATE_ID = "template_cpxuw1m";
const EMAILJS_USER_ID = "m5LmsQGrHiaAvPfuH";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID
      );
      setStatus("Thank you for reaching out! I’ll reply as soon as I can.");
      formRef.current.reset();
    } catch {
      setStatus("Sorry, something went wrong. Please try again later.");
    }
  };

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
            Let’s chat about your idea
          </h1>
          <p className="text-lg text-muted-foreground/80">
            Got a question, want to work together, or just want to say hi? I’d
            love to hear from you. Drop me a message and I’ll get back to you
            soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="font-heading text-gradient-brand">
                    Contact Information
                  </CardTitle>
                  <CardDescription>Ways to reach me directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">LinkedIn</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://linkedin.com/in/andrew-gardner2026/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/andrew-gardner2026/
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">GitHub</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://github.com/atg25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/atg25
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="font-heading text-gradient-brand">
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I’ll get back to you soon. Your
                    message matters!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    ref={formRef}
                    className="space-y-4"
                    onSubmit={sendEmail}
                  >
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email (for reply)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        required
                        autoComplete="off"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 rounded-md border border-input bg-background resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                    >
                      Send Message
                    </Button>
                    <p
                      className={`text-center pt-2 ${
                        status.includes("Thank")
                          ? "text-green-600"
                          : status
                          ? "text-red-600"
                          : ""
                      }`}
                      aria-live="polite"
                    >
                      {status}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
