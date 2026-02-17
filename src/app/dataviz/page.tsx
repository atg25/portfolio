"use client";

import { motion } from "framer-motion";
import { DonutChart } from "./DonutChart";
import { GrowthBarChart } from "./GrowthBarChart";
import { HispanicCollegeAgeChart, HSIChart } from "./HispanicCollegeAgeChart";
import { TimeSeriesChart } from "./TimeSeriesChart";
import timeSeriesData from "./data.json";
import { SwissArchivalCard } from "@/components/swiss/archival-card";
import { SwissPageHeader } from "@/components/swiss/page-header";
import { SwissPageShell } from "@/components/swiss/page-shell";

export default function DataVizPage() {
  const growthData = [
    {
      name: "Black",
      value:
        timeSeriesData[timeSeriesData.length - 1].Black -
        timeSeriesData[0].Black,
    },
    {
      name: "Hispanic",
      value:
        timeSeriesData[timeSeriesData.length - 1].Hispanic -
        timeSeriesData[0].Hispanic,
    },
    {
      name: "Asian",
      value:
        timeSeriesData[timeSeriesData.length - 1].Asian -
        timeSeriesData[0].Asian,
    },
    {
      name: "Other",
      value:
        timeSeriesData[timeSeriesData.length - 1].Other -
        timeSeriesData[0].Other,
    },
  ];

  return (
    <SwissPageShell mainClassName="gap-y-12">
      <SwissPageHeader
        label="DATA STORY — 2026"
        title={
          <>
            MINORITY
            <br />
            STEM PROGRESS
          </>
        }
        description="A decade view of representation trends, growth drivers, and practical recommendations."
      />

      <section className="col-span-12 lg:col-span-10 space-y-6">
        <SwissArchivalCard no="01" year="2026" category="QUESTIONS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">Q1</div>
              How has minority representation in STEM changed over the decade?
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">Q2</div>
              Which groups saw the strongest growth?
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">Q3</div>
              What drove Hispanic student momentum?
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">Q4</div>
              How can these gains be replicated broadly?
            </div>
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="02" year="2026" category="EXECUTIVE SUMMARY">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-muted p-4 text-center">
              <div className="swiss-label text-brand">TOTAL GROWTH</div>
              <div className="font-heading text-3xl mt-2">124,938</div>
              <p className="text-xs text-muted-foreground mt-1">
                New STEM Degrees
              </p>
            </div>
            <div className="border-2 border-muted p-4 text-center">
              <div className="swiss-label text-brand">LEADING GROUP</div>
              <div className="font-heading text-3xl mt-2">HISPANIC</div>
              <p className="text-xs text-muted-foreground mt-1">
                106% Increase
              </p>
            </div>
            <div className="border-2 border-muted p-4 text-center">
              <div className="swiss-label text-brand">HSI EXPANSION</div>
              <div className="font-heading text-3xl mt-2">60%</div>
              <p className="text-xs text-muted-foreground mt-1">
                More Institutions
              </p>
            </div>
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="03" year="2026" category="TRENDS">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-3">
                STEM DEGREES BY RACE
              </div>
              <TimeSeriesChart data={timeSeriesData} title="" />
              <p className="text-xs text-muted-foreground mt-2">
                Hover points for details.
              </p>
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-3">
                SHARE DISTRIBUTION
              </div>
              <DonutChart />
            </div>
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="04" year="2026" category="GROWTH COMPARISON">
          <div className="border-2 border-muted p-4">
            <div className="swiss-label text-brand mb-3">
              TOTAL GROWTH BY GROUP
            </div>
            <GrowthBarChart data={growthData} title="" />
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="05" year="2026" category="DRIVERS">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-muted p-4 space-y-3">
              <div className="swiss-label text-brand">
                POPULATION VS STEM GROWTH
              </div>
              <HispanicCollegeAgeChart />
              <div className="border-l-4 border-brand pl-3 text-sm">
                Population growth (9%) explains only part of the 106% STEM
                increase.
              </div>
            </div>
            <div className="border-2 border-muted p-4 space-y-3">
              <div className="swiss-label text-brand">HSI IMPACT</div>
              <HSIChart />
              <ul className="text-sm space-y-1">
                <li>60% increase in HSIs over the decade</li>
                <li>Higher STEM funding and support infrastructure</li>
                <li>Improved accessibility and retention pathways</li>
              </ul>
            </div>
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="06" year="2026" category="RECOMMENDATIONS">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm">
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">
                INSTITUTIONAL SUPPORT
              </div>
              Expand targeted support models for additional underrepresented
              groups.
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">
                FUNDING ALLOCATION
              </div>
              Increase STEM investment where underrepresented learners are
              concentrated.
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">
                REGIONAL SCALING
              </div>
              Scale high-performing local strategies into national initiatives.
            </div>
            <div className="border-2 border-muted p-4">
              <div className="swiss-label text-brand mb-2">SUPPORT SYSTEMS</div>
              Strengthen mentorship, scholarships, and career-guidance
              pipelines.
            </div>
          </div>
        </SwissArchivalCard>

        <SwissArchivalCard no="07" year="2026" category="CLOSING">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm md:text-base leading-relaxed">
              The strongest takeaway is that policy and institutional design can
              move outcomes faster than demographic shifts alone. The next phase
              is execution: make these supports durable and transferable.
            </p>
            <button
              className="px-6 py-3 border-2 border-brand bg-brand text-black text-xs font-bold uppercase tracking-label hover:bg-black hover:text-brand transition-all duration-100"
              onClick={() => {
                if (typeof globalThis.window !== "undefined") {
                  globalThis.window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Explore Again ↑
            </button>
            <div className="text-xs text-muted-foreground pt-2 border-t-2 border-muted">
              Data Sources: IPEDS, US Census Bureau, HACU — Updated April 2025.
            </div>
          </motion.div>
        </SwissArchivalCard>
      </section>
    </SwissPageShell>
  );
}
