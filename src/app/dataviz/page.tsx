"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Placeholder: You can replace this with real data or API integration
const sampleData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 70 },
  { name: "Apr", value: 60 },
  { name: "May", value: 80 },
  { name: "Jun", value: 65 },
];

const pieData = [
  { name: "Design", value: 30 },
  { name: "Development", value: 45 },
  { name: "Testing", value: 15 },
  { name: "Docs", value: 10 },
];

const brandColors = [
  "#0ea5e9", // primary
  "#a855f7", // accent
  "#22c55e", // success
  "#f59e0b", // warning
];

export default function DataVizPage() {
  // Placeholder for chart filter state
  const [filter, setFilter] = useState("2025");

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <main className="container mx-auto px-4 space-y-12">
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl text-gradient-brand">
            Data Visualization Dashboard
          </h1>
          <p className="text-lg text-muted-foreground/80">
            Explore interactive charts and insights, fully branded for the
            Creator portfolio. All data and visuals follow the design system for
            clarity and accessibility.
          </p>
        </section>
        <section className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <Card className="w-full md:w-1/2 bg-card/80 border-primary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading">Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={sampleData} style={{ fontFamily: "inherit" }}>
                  <XAxis dataKey="name" stroke="#888" tick={{ fontSize: 14 }} />
                  <YAxis stroke="#888" tick={{ fontSize: 14 }} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                  />
                  <Bar dataKey="value" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/2 bg-card/80 border-accent/30 shadow-lg">
            <CardHeader>
              <CardTitle className="font-heading">Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={brandColors[idx % brandColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      borderRadius: 8,
                      fontSize: 14,
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-heading text-gradient-brand">
            Insights
          </h2>
          <p className="text-base text-muted-foreground">
            This dashboard demonstrates how data can be presented clearly and
            accessibly, using the Creator brand’s color, typography, and layout
            system. Charts will be interactive and filterable in the next
            sprint.
          </p>
        </section>
      </main>
    </div>
  );
}
