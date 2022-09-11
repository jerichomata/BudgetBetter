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
import { gmtToDate } from "../../util/date";
import "./Chart.css";

function Chart({ dates, amounts }) {
  let chartData = [];
  let currAccountBalance = 0;
  for (let i = 0; i < dates.length; i++) {
    currAccountBalance += amounts[i];
    chartData.push({ name: dates[i], "Account Balance": currAccountBalance });
  }

  let increasing = amounts[0] <= currAccountBalance || amounts.length === 0;

  let styleItem = {};
  if (!increasing) {
    styleItem = { color: "red" };
  }

  if (!dates.length) {
    let today = gmtToDate(new Date());
    chartData.push({
      name: today,
      "Account Balance": 0,
    });
  }

  let strokeColor = increasing ? "#82ca9d" : "red";

  let dotStyling = increasing
    ? { fill: "#5ebb81", stroke: "#82ca9d", strokeWidth: 2 }
    : { fill: "red", stroke: "red", strokeWidth: 2 };

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 40,
          left: 0,
          bottom: 0,
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
          stroke={strokeColor}
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={dotStyling}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
