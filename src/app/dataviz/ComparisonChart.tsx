import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import timeSeriesData from "./data.json";

const demographicOptions = ["Hispanic", "Black", "Asian", "Other"] as const;
type Demographic = (typeof demographicOptions)[number];
const metricOptions = [
  { value: "total", label: "Total Degrees (2020)" },
  { value: "growth", label: "Numeric Growth (2011–2020)" },
  { value: "percentage", label: "Percentage Growth (2011–2020)" },
];
const demographicColors: Record<string, string> = {
  Black: "#82ca9d",
  Hispanic: "#ffc658",
  Asian: "#ff8042",
  Other: "#8ba3d1",
};

function calculateComparisonData(
  metric: string,
  selected: Demographic[],
  startYear: number,
  endYear: number
) {
  const start = timeSeriesData.find((d) => d.year === startYear);
  const end = timeSeriesData.find((d) => d.year === endYear);
  if (!start || !end) return [];
  return selected.map((demo) => {
    const startValue = start[demo as keyof typeof start] as number;
    const endValue = end[demo as keyof typeof end] as number;
    const growth = endValue - startValue;
    const percentage = startValue > 0 ? (growth / startValue) * 100 : 0;
    return {
      demographic: demo,
      total: endValue,
      growth,
      percentage,
    };
  });
}

export function ComparisonChart({ className }: { className?: string }) {
  const [selected, setSelected] = useState<Demographic[]>([
    "Hispanic",
    "Black",
  ]);
  const [metric, setMetric] = useState("total");
  const [startYear, setStartYear] = useState(2011);
  const [endYear, setEndYear] = useState(2020);

  const data = calculateComparisonData(metric, selected, startYear, endYear);

  return (
    <Card className={cn("bg-card/80 border-primary/30 shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="font-heading flex flex-col md:flex-row md:items-center gap-2">
          <span>Demographic Comparison</span>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {demographicOptions.map((demo) => (
              <Button
                key={demo}
                variant={selected.includes(demo) ? "default" : "outline"}
                size="sm"
                className="px-3"
                style={{ borderColor: demographicColors[demo] }}
                onClick={() =>
                  setSelected((cur) =>
                    cur.includes(demo)
                      ? cur.filter((d) => d !== demo)
                      : cur.length < 3
                      ? [...cur, demo]
                      : cur
                  )
                }
                aria-pressed={selected.includes(demo)}
              >
                {demo}
              </Button>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <label className="text-sm font-medium">Metric:</label>
          <select
            className="px-2 py-1 rounded border text-base bg-background border-border"
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            aria-label="Select metric"
          >
            {metricOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <label className="text-sm font-medium ml-4">Year Range:</label>
          <select
            className="px-2 py-1 rounded border text-base bg-background border-border"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
            aria-label="Select start year"
          >
            {timeSeriesData.map((d) => (
              <option key={d.year} value={d.year} disabled={d.year >= endYear}>
                {d.year}
              </option>
            ))}
          </select>
          <span>-</span>
          <select
            className="px-2 py-1 rounded border text-base bg-background border-border"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
            aria-label="Select end year"
          >
            {timeSeriesData.map((d) => (
              <option
                key={d.year}
                value={d.year}
                disabled={d.year <= startYear}
              >
                {d.year}
              </option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} style={{ fontFamily: "inherit" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="demographic"
              stroke="#888"
              tick={{ fontSize: 14 }}
            />
            <YAxis
              stroke="#888"
              tick={{ fontSize: 14 }}
              tickFormatter={
                metric === "percentage"
                  ? (v) => `${v.toFixed(1)}%`
                  : (v) => v.toLocaleString()
              }
            />
            <Tooltip
              formatter={(value: number) =>
                metric === "percentage"
                  ? `${value.toFixed(1)}%`
                  : value.toLocaleString()
              }
            />
            <Legend />
            {selected.map((demo) => (
              <Bar
                key={demo}
                dataKey={metric}
                name={demo}
                fill={demographicColors[demo]}
                isAnimationActive
                barSize={40}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Key Observations</h4>
          <ul className="list-disc pl-6 text-muted-foreground/90">
            {data.map((d) => (
              <li
                key={d.demographic}
                style={{
                  borderLeft: `3px solid ${demographicColors[d.demographic]}`,
                  paddingLeft: 6,
                }}
              >
                <span className="font-medium">{d.demographic}:</span>{" "}
                {metric === "total" &&
                  `${d.total.toLocaleString()} degrees in ${endYear}`}
                {metric === "growth" &&
                  `Increased by ${d.growth.toLocaleString()} degrees`}
                {metric === "percentage" &&
                  `${d.percentage.toFixed(
                    1
                  )}% growth from ${startYear} to ${endYear}`}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
