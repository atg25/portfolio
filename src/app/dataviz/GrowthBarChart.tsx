import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

export type DemographicData = {
  name: string;
  value: number;
};

interface GrowthBarChartProps {
  data: DemographicData[];
  title?: string;
  className?: string;
}

const demographicColors: Record<string, string> = {
  Black: "#82ca9d",
  Hispanic: "#ffc658",
  Asian: "#ff8042",
  Other: "#8ba3d1",
};

export function GrowthBarChart({
  data,
  title = "Demographic Growth",
  className,
}: GrowthBarChartProps) {
  return (
    <Card className={cn("bg-card/80 border-primary/30 shadow-lg", className)}>
      <CardHeader>
        <CardTitle className="font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} style={{ fontFamily: "inherit" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#888" tick={{ fontSize: 14 }} />
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
            <Bar dataKey="value" isAnimationActive fill="#0ea5e9">
              {data.map((entry, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={demographicColors[entry.name] || "#0ea5e9"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
