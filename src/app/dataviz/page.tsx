"use client";

import { GrowthBarChart } from "./GrowthBarChart";
import { TimeSeriesChart } from "./TimeSeriesChart";
import { DonutChart } from "./DonutChart";
import { HispanicCollegeAgeChart, HSIChart } from "./HispanicCollegeAgeChart";
import timeSeriesData from "./data.json";
import { motion } from "framer-motion";

export default function DataVizPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <header className="w-full bg-gradient-to-r from-primary/80 to-accent/70 py-16 mb-14 rounded-b-3xl shadow-lg flex flex-col items-center justify-center text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow mb-5 max-w-3xl leading-tight">
          A Decade of Progress: Minority Representation in STEM
        </h1>
        <p className="text-white text-sm md:text-base font-medium mb-3">
          Portfolio project by Andrew Gardner
        </p>
        <p className="max-w-xl mx-auto text-xl md:text-2xl text-white font-medium mb-3 leading-relaxed">
          Data-driven insights on the transformation of STEM education,
          highlighting growth, equity, and opportunity for underrepresented
          groups from 2011 to 2021.
        </p>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <section className="card narrative-section w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-center font-bold tracking-tight">
            Understanding the Changing Landscape of STEM Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-2">01</div>
              <h4 className="font-semibold mb-1 text-center">
                How has minority representation in STEM programs changed over
                the past decade?
              </h4>
              <p className="text-muted-foreground text-center">
                We'll examine time-series data showing degree attainment across
                demographics from 2011–2021.
              </p>
            </div>
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-2">02</div>
              <h4 className="font-semibold mb-1 text-center">
                Which demographic groups have experienced the most significant
                growth?
              </h4>
              <p className="text-muted-foreground text-center">
                We'll analyze comparative data to identify leaders and
                understand variations in progress.
              </p>
            </div>
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-2">03</div>
              <h4 className="font-semibold mb-1 text-center">
                What factors have contributed to the success of Hispanic
                students in STEM?
              </h4>
              <p className="text-muted-foreground text-center">
                We'll investigate Hispanic-Serving Institutions and other
                potential drivers of growth.
              </p>
            </div>
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <div className="text-2xl font-bold text-primary mb-2">04</div>
              <h4 className="font-semibold mb-1 text-center">
                How can successful strategies be adapted to benefit other
                underrepresented groups?
              </h4>
              <p className="text-muted-foreground text-center">
                We'll translate insights into actionable recommendations for
                institutions and policymakers.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <p className="mb-2 text-muted-foreground text-base max-w-lg text-center">
              Start exploring below—each section is labeled as you scroll.
            </p>
          </div>
        </section>
        <section className="card w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <div className="mb-10">
            <h2 className="font-heading text-4xl md:text-5xl mb-5 text-center font-bold tracking-tight">
              Executive Summary
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              From 2011 to 2021, minority representation in STEM programs has
              shown significant growth, with Hispanic students leading the
              advancement. This analysis explores the factors behind this
              progress and identifies opportunities to extend these successes to
              other demographics.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
            <div className="flex-1 bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-xl mb-1">Total Growth</h3>
              <p className="text-3xl font-bold text-primary mb-1">124,938</p>
              <span className="text-muted-foreground">New STEM Degrees</span>
            </div>
            <div className="flex-1 bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-xl mb-1">Leading Growth</h3>
              <p className="text-3xl font-bold text-primary mb-1">Hispanic</p>
              <span className="text-muted-foreground">106% Increase</span>
            </div>
            <div className="flex-1 bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-xl mb-1">HSI Growth</h3>
              <p className="text-3xl font-bold text-primary mb-1">60%</p>
              <span className="text-muted-foreground">
                More Hispanic-Serving Institutions
              </span>
            </div>
          </div>
        </section>
        <section className="card w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <h2 className="font-heading text-4xl md:text-5xl mb-10 text-center font-bold tracking-tight">
            Minority Growth in STEM Degrees (2011–2021)
          </h2>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1 bg-card/80 rounded-lg p-6 shadow">
              <h3 className="font-semibold text-xl mb-2 text-center">
                STEM Degrees Awarded by Race (2011–2021)
              </h3>
              <TimeSeriesChart data={timeSeriesData} title="" />
              <div className="chart-legend text-center text-muted-foreground mt-2 text-sm">
                * Hover over data points for detailed statistics
              </div>
            </div>
            <div className="flex-1 bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <DonutChart />
            </div>
          </div>
          <div className="mt-12 bg-card/80 rounded-lg p-8 shadow">
            <h3 className="font-semibold text-2xl mb-4 text-center">
              Total Growth by Demographic (2011–2021)
            </h3>
            <GrowthBarChart
              data={[
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
              ]}
              title=""
            />
            <div className="chart-legend text-center text-muted-foreground mt-3 text-base max-w-xl mx-auto">
              * Bar height represents total growth, labels show percentage
              increase
            </div>
          </div>
        </section>
        <section className="card w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <h2 className="font-heading text-4xl md:text-5xl mb-10 text-center font-bold tracking-tight">
            Understanding Hispanic Student Success in STEM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col">
              <h3 className="font-semibold text-xl mb-2 text-center">
                Population Growth vs. STEM Growth
              </h3>
              <div className="mb-4">
                <HispanicCollegeAgeChart />
              </div>
              <div className="insight-box bg-accent/10 border-l-4 border-accent p-4 rounded">
                <h5 className="font-semibold mb-1">Key Insight</h5>
                <p className="text-muted-foreground text-sm">
                  Population growth (9%) accounts for only a small portion of
                  the 106% increase in STEM degrees, suggesting institutional
                  and policy changes as primary drivers.
                </p>
              </div>
            </div>
            <div className="bg-card/80 rounded-lg p-6 shadow flex flex-col">
              <h3 className="font-semibold text-xl mb-2 text-center">
                Impact of Hispanic-Serving Institutions (HSIs)
              </h3>
              <div className="mb-4">
                <HSIChart />
              </div>
              <div className="insight-box bg-accent/10 border-l-4 border-accent p-4 rounded">
                <h5 className="font-semibold mb-1">Key Findings</h5>
                <ul className="list-disc pl-6 text-muted-foreground text-sm">
                  <li>60% increase in HSIs over the decade</li>
                  <li>Increased NSF funding for STEM programs at HSIs</li>
                  <li>Enhanced accessibility and support systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="card w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <h2 className="font-heading text-4xl md:text-5xl mb-10 text-center font-bold tracking-tight">
            Recommendations for Broader Impact
          </h2>
          <div className="mb-8 text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            <p>
              Based on our analysis, these actionable recommendations could help
              extend the success of Hispanic students to other underrepresented
              groups in STEM education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="recommendation bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">
                Institutional Support
              </h3>
              <p className="text-muted-foreground text-center mb-2">
                Expand the HSI model to other demographics, creating dedicated
                institutions with targeted support systems.
              </p>
              <div className="implementation-note text-xs bg-accent/10 rounded px-2 py-1">
                Implementation timeframe: 3-5 years
              </div>
            </div>
            <div className="recommendation bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">Funding Allocation</h3>
              <p className="text-muted-foreground text-center mb-2">
                Increase funding for STEM programs at institutions serving
                underrepresented minorities.
              </p>
              <div className="implementation-note text-xs bg-accent/10 rounded px-2 py-1">
                Potential impact: High
              </div>
            </div>
            <div className="recommendation bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">Regional Programs</h3>
              <p className="text-muted-foreground text-center mb-2">
                Implement successful regional initiatives nationwide, focusing
                on areas with high minority populations.
              </p>
              <div className="implementation-note text-xs bg-accent/10 rounded px-2 py-1">
                Complexity: Medium
              </div>
            </div>
            <div className="recommendation bg-card/80 rounded-lg p-6 shadow flex flex-col items-center">
              <h3 className="font-semibold text-lg mb-2">Support Systems</h3>
              <p className="text-muted-foreground text-center mb-2">
                Develop comprehensive support systems including mentorship,
                scholarships, and career guidance.
              </p>
            </div>
          </div>
        </section>
        <section className="card w-full max-w-7xl mx-auto my-16 p-12 rounded-2xl shadow-lg bg-background/90 border border-primary/20">
          <h2 className="font-heading text-4xl md:text-5xl mb-10 text-center font-bold tracking-tight">
            The Path Forward: Building on a Decade of Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="key-takeaways">
              <h3 className="font-semibold text-xl mb-2">Key Takeaways</h3>
              <ul className="list-disc pl-6 text-muted-foreground text-base">
                <li>
                  Hispanic student representation in STEM has more than doubled
                  over the past decade, demonstrating that significant change is
                  possible
                </li>
                <li>
                  Targeted institutional support and dedicated funding have
                  proven effective in boosting minority participation
                </li>
                <li>
                  Population growth alone does not explain the dramatic
                  increases; policy and institutional changes matter
                </li>
                <li>
                  The success seen in Hispanic students can inform efforts for
                  other underrepresented groups
                </li>
              </ul>
            </div>
            <div className="societal-impact">
              <h3 className="font-semibold text-xl mb-2">
                Broader Societal Impact
              </h3>
              <p className="text-muted-foreground mb-2">
                The diversification of STEM fields over the past decade
                represents more than just numbers on a chart. As these graduates
                enter the workforce, they bring diverse perspectives that drive
                innovation, economic growth, and societal advancement. Research
                consistently shows that diverse teams produce more creative
                solutions and better outcomes across sectors.
              </p>
              <p className="text-muted-foreground">
                By continuing to build on the progress documented here,
                educational institutions and policymakers can help create a STEM
                workforce that truly reflects America's diverse population,
                ultimately strengthening our nation's competitive position and
                ensuring that the benefits of technological advancement are more
                equitably distributed.
              </p>
            </div>
          </div>
          <div className="call-to-action mt-12 flex flex-col items-center">
            <h3 className="font-semibold text-2xl mb-4">
              Moving From Data to Action
            </h3>
            <p className="text-muted-foreground mb-5 max-w-2xl text-center text-lg">
              This data story demonstrates what's possible when targeted support
              systems and institutional commitment align. The challenge now is
              to extend these successes across demographics and institutions
              nationwide.
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl text-center text-lg">
              By implementing the recommendations outlined in this analysis,
              stakeholders at all levels can contribute to creating a more
              inclusive and dynamic STEM education ecosystem that serves all
              students and strengthens America's future.
            </p>
            <button
              className="action-button bg-primary text-primary-foreground px-8 py-3 rounded font-semibold shadow hover:bg-primary/90 transition text-lg"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Explore Again ↑
            </button>
          </div>
        </section>
        <footer className="w-full max-w-7xl mx-auto mt-16 mb-6 text-center text-muted-foreground text-base">
          <p>
            Data Sources: IPEDS, US Census Bureau, HACU | Last Updated: April
            2025
          </p>
          <p className="disclaimer mt-2">
            <strong>Disclaimer:</strong> Interactive data charts in this
            dashboard use synthetic data for educational purposes only.
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
