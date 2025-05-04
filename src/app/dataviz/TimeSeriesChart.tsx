import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

export interface TimeSeriesDatum {
  year: number;
  Black: number;
  Hispanic: number;
  Asian: number;
  Other: number;
}

interface TimeSeriesChartProps {
  data: TimeSeriesDatum[];
  title?: string;
  className?: string;
}

const demographicColors: Record<string, string> = {
  Black: "#82ca9d",
  Hispanic: "#ffc658",
  Asian: "#ff8042",
  Other: "#8ba3d1",
};

export function TimeSeriesChart({
  data,
  title = "Demographic Enrollment Over Time",
  className,
}: TimeSeriesChartProps) {
  return (
    <Card className={cn("bg-card/80 border-primary/30 shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} style={{ fontFamily: "inherit" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              stroke="#888"
              tick={{ fontSize: 14 }}
              domain={["dataMin", "dataMax"]}
            />
            <YAxis stroke="#888" tick={{ fontSize: 14 }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                borderRadius: 8,
                fontSize: 15,
                color: "#222",
              }}
              cursor={{ fill: "#e0e7ef", opacity: 0.3 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: 12, fontSize: 15 }}
              iconType="circle"
            />
            <Line
              type="monotone"
              dataKey="Black"
              stroke={demographicColors.Black}
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />
            <Line
              type="monotone"
              dataKey="Hispanic"
              stroke={demographicColors.Hispanic}
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />
            <Line
              type="monotone"
              dataKey="Asian"
              stroke={demographicColors.Asian}
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />
            <Line
              type="monotone"
              dataKey="Other"
              stroke={demographicColors.Other}
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
