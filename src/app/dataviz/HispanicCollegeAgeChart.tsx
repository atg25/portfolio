import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for Hispanic college-age population (from data2.csv)
const hispanicCollegeAgeData = [
  { year: 2011, amount: 6296608 },
  { year: 2012, amount: 6413174 },
  { year: 2013, amount: 6510385 },
  { year: 2014, amount: 6595399 },
  { year: 2015, amount: 6643574 },
  { year: 2016, amount: 6685435 },
  { year: 2017, amount: 6721074 },
  { year: 2018, amount: 6795346 },
  { year: 2019, amount: 6858822 },
  { year: 2020, amount: 6861800 },
  { year: 2021, amount: 6881000 },
];

export function HispanicCollegeAgeChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart
        data={hispanicCollegeAgeData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
        <YAxis
          tickFormatter={(v) => v.toLocaleString()}
          tick={{ fontSize: 12 }}
          domain={[6000000, 7000000]}
        />
        <Tooltip formatter={(v) => v.toLocaleString()} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#ffc658"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// Data for HSI growth (from data3.csv)
const hsiGrowthData = [
  { year: 2011, amount: 356 },
  { year: 2012, amount: 370 },
  { year: 2013, amount: 409 },
  { year: 2014, amount: 435 },
  { year: 2015, amount: 472 },
  { year: 2016, amount: 492 },
  { year: 2017, amount: 523 },
  { year: 2018, amount: 539 },
  { year: 2019, amount: 569 },
  { year: 2020, amount: 559 },
];

export function HSIChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart
        data={hsiGrowthData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
        <YAxis
          tickFormatter={(v) => v.toLocaleString()}
          tick={{ fontSize: 12 }}
          domain={[0, 600]}
        />
        <Tooltip formatter={(v) => v.toLocaleString()} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#FFD700"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
