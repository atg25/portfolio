import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import timeSeriesData from "./data.json";

const demographicColors: Record<string, string> = {
  Black: "#82ca9d",
  Hispanic: "#ffc658",
  Asian: "#ff8042",
  Other: "#8ba3d1",
};

const years = timeSeriesData.map((d) => d.year);

function getYearData(year: number) {
  const row = timeSeriesData.find((d) => d.year === year);
  if (!row) return [];
  return [
    { name: "Black", value: row.Black },
    { name: "Hispanic", value: row.Hispanic },
    { name: "Asian", value: row.Asian },
    { name: "Other", value: row.Other },
  ];
}

export function DonutChart({ className }: { className?: string }) {
  const [year, setYear] = useState<number>(years[years.length - 1]);
  const data = getYearData(year);
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card className={cn("bg-card/80 border-primary/30 shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="font-heading text-center">
          STEM Degree Distribution by Race
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={2}
              dataKey="value"
              isAnimationActive={false}
              labelLine={false}
              label={(props) => {
                const RADIAN = Math.PI / 180;
                const radius = 125; // increased for more distance from the donut
                const x =
                  props.cx + radius * Math.cos(-props.midAngle * RADIAN);
                const y =
                  props.cy + radius * Math.sin(-props.midAngle * RADIAN);
                const color = demographicColors[props.name] || "#0ea5e9";
                return (
                  <text
                    x={x}
                    y={y}
                    fill={color}
                    textAnchor={x > props.cx ? "start" : "end"}
                    dominantBaseline="central"
                    fontSize={15}
                    fontFamily="inherit"
                  >
                    {`${props.name}: ${(props.percent * 100).toFixed(1)}%`}
                  </text>
                );
              }}
            >
              {data.map((entry, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={demographicColors[entry.name] || "#0ea5e9"}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number, name: string, props: any) => {
                const color = demographicColors[name] || "#0ea5e9";
                return [
                  <span style={{ color }}>{`${value.toLocaleString()} (${(
                    (value / total) *
                    100
                  ).toFixed(1)}%)`}</span>,
                  <span style={{ color }}>{name}</span>,
                ];
              }}
              contentStyle={{
                background: "hsl(var(--card))",
                borderRadius: 8,
                fontSize: 15,
              }}
              cursor={{ fill: "#e0e7ef", opacity: 0.3 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: 12, fontSize: 15 }}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col items-center mt-4">
          <div className="text-center text-muted-foreground mb-2">
            <span className="font-medium">{year}:</span> Total STEM degrees:{" "}
            <span className="font-semibold">{total.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={years[0]}
            max={years[years.length - 1]}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-40 md:w-64 accent-primary"
            step={1}
            aria-label="Select year"
          />
          <span className="mt-1 font-mono text-base">{year}</span>
        </div>
      </CardContent>
    </Card>
  );
}
