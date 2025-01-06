import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./Charts.css";

const COLORS = ["#0088FE", "#FFBB28"];

const Charts = ({ jobData, trendData, pieChartData }) => {
  const [filteredTrendData, setFilteredTrendData] = useState(trendData);

  // Function to filter trend data
  const filterTrendData = (range) => {
    const now = new Date();
    let filteredData;

    if (range === "7days") {
      const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7));
      filteredData = trendData.filter((d) => new Date(d.date) >= sevenDaysAgo);
    } else if (range === "1month") {
      const oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
      filteredData = trendData.filter((d) => new Date(d.date) >= oneMonthAgo);
    } else {
      filteredData = trendData; // Default case for all data
    }

    setFilteredTrendData(filteredData); // Update state with filtered data
  };

  return (
    <div className="charts">
      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={jobData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            formatter={(value, name, props) => [
              `Applications: ${value}`,
              `Status: ${props.payload.status}`,
            ]}
          />
          <Legend
            payload={[
              { value: "Open", type: "square", color: "#4CAF50" },
              { value: "Closed", type: "square", color: "#B0BEC5" },
            ]}
          />
          <Bar dataKey="applications" barSize={40}>
            {jobData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.status === "Open" ? "#4CAF50" : "#B0BEC5"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={filteredTrendData} // Use filtered data here
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date) =>
              new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }
          />
          <YAxis />
          <Tooltip
            formatter={(value, name) => [`Applications: ${value}`, "Date"]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="applications"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* Buttons for filtering */}
      <div style={{ marginTop: "10px" }}>
        <button className="dashbtn" onClick={() => filterTrendData("7days")}>
          Last 7 Days
        </button>
        <button className="dashbtn" onClick={() => filterTrendData("1month")}>
          Last Month
        </button>
        <button className="dashbtn" onClick={() => filterTrendData("all")}>
          All Data
        </button>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
