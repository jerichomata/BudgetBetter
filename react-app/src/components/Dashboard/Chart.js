import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

function Chart({ dates, amounts }) {
  let chartData = [];
  let currAccountBalance = 0;
  for (let i = 0; i < dates.length; i++) {
    currAccountBalance += amounts[i];
    chartData.push({ name: dates[i], "Account Balance": currAccountBalance });
  }

  let increasing = amounts[0] <= currAccountBalance;

  let styleItem = {};
  if (!increasing) {
    styleItem = { color: "red" };
  }

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal="true" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip itemStyle={styleItem} cursor={false} />
        <Legend />
        <Line
          type="monotone"
          dataKey="Account Balance"
          stroke="#82ca9d"
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={{ fill: "#5ebb81", stroke: "#82ca9d", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
