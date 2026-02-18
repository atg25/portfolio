"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

const EMAILJS_SERVICE_ID = "service_lmznzhf";
const EMAILJS_TEMPLATE_ID = "template_cpxuw1m";
const EMAILJS_USER_ID = "m5LmsQGrHiaAvPfuH";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID,
      );
      setStatus("Thank you for reaching out! I'll reply as soon as I can.");
      formRef.current.reset();
    } catch {
      setStatus("Sorry, something went wrong. Please try again later.");
    }
  };

  return (
    <SwissPageShell mainClassName="pt-20 pb-24">
      <SwissPageHeader
        label="CONTACT — 2026"
        title={
          <>
            LET'S TALK
            <br />
            PROJECTS
          </>
        }
        description="Questions, collaborations, or build requests — send a message and I’ll respond quickly."
      />

      <section className="col-span-12 lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <SwissArchivalCard
            no="01"
            year="2026"
            category="DIRECT LINKS"
            interactive
          >
            <div className="space-y-4 text-sm">
              <div>
                <div className="swiss-label text-brand mb-1">LINKEDIN</div>
                <a
                  href="https://linkedin.com/in/andrew-gardner2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors duration-100"
                >
                  linkedin.com/in/andrew-gardner2026/
                </a>
              </div>
              <div>
                <div className="swiss-label text-brand mb-1">GITHUB</div>
                <a
                  href="https://github.com/atg25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand transition-colors duration-100"
                >
                  github.com/atg25
                </a>
              </div>
            </div>
          </SwissArchivalCard>
        </div>

        <div className="lg:col-span-8">
          <SwissArchivalCard no="02" year="2026" category="MESSAGE FORM">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-label mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full p-3 border-2 border-muted bg-background text-foreground focus:border-brand focus:outline-none transition-all duration-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-label mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 border-2 border-muted bg-background text-foreground focus:border-brand focus:outline-none transition-all duration-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-label mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full p-3 border-2 border-muted bg-background text-foreground resize-none focus:border-brand focus:outline-none transition-all duration-100"
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-3 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
              >
                Send Message
              </button>

              {status ? (
                <div
                  className={`p-3 border-2 text-sm ${
                    status.includes("Thank")
                      ? "border-brand text-brand"
                      : "border-muted text-foreground"
                  }`}
                  aria-live="polite"
                >
                  {status}
                </div>
              ) : null}
            </form>
          </SwissArchivalCard>
        </div>
      </section>
    </SwissPageShell>
  );
}
