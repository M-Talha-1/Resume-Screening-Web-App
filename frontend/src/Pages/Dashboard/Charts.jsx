import React, { useState, useEffect } from "react";

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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";

function Charts({ jobData, filteredTrendData, pieChartData, COLORS, filterTrendData }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [trendData, setTrendData] = useState([]);


  const [resumeData, setResumeData] = useState({
    screened: 60, // Dummy data for screened resumes
    unscreened: 40, // Dummy data for unscreened resumes
  });

  const COLORS = ["#0088FE", "#FFBB28"]; // Pie chart segment colors

  // Dummy fetch simulation for job and trend data
  useEffect(() => {
    const fetchJobData = () => {
      setJobData([
        { name: "Job 1", applications: 240, status: "Open" },
        { name: "Job 2", applications: 180, status: "Closed" },
        { name: "Job 3", applications: 120, status: "Open" },
        { name: "Job 4", applications: 60, status: "Closed" },
      ]);
    };

    const fetchTrendData = () => {
      setTrendData([
        // October Data
        { date: "2024-10-01", applications: 100 },
        { date: "2024-10-02", applications: 150 },
        { date: "2024-10-03", applications: 200 },
        { date: "2024-10-04", applications: 180 },
        { date: "2024-10-05", applications: 220 },
        { date: "2024-10-06", applications: 240 },
        { date: "2024-10-07", applications: 210 },
        { date: "2024-10-08", applications: 180 },
        { date: "2024-10-09", applications: 190 },
        { date: "2024-10-10", applications: 210 },
        { date: "2024-10-11", applications: 220 },
        { date: "2024-10-12", applications: 250 },
        { date: "2024-10-13", applications: 230 },
        { date: "2024-10-14", applications: 200 },
        { date: "2024-10-15", applications: 220 },

        // November Data
        { date: "2024-11-01", applications: 400 },
        { date: "2024-11-02", applications: 370 },
        { date: "2024-11-03", applications: 320 },
        { date: "2024-11-04", applications: 450 },
        { date: "2024-11-05", applications: 460 },
        { date: "2024-11-06", applications: 480 },
        { date: "2024-11-07", applications: 510 },
        { date: "2024-11-08", applications: 550 },
        { date: "2024-11-09", applications: 590 },
        { date: "2024-11-10", applications: 600 },
        { date: "2024-11-11", applications: 620 },
        { date: "2024-11-12", applications: 640 },
        { date: "2024-11-13", applications: 630 },
        { date: "2024-11-14", applications: 670 },
        { date: "2024-11-15", applications: 690 },

        // December Data
        { date: "2024-12-15", applications: 900 },
        { date: "2024-12-16", applications: 800 },
        { date: "2024-12-17", applications: 360 },
        { date: "2024-12-18", applications: 650 },
        { date: "2024-12-19", applications: 550 },
        { date: "2024-12-20", applications: 700 },
        { date: "2024-12-21", applications: 600 },
        { date: "2024-12-22", applications: 500 },
        { date: "2024-12-23", applications: 190 },
        { date: "2024-12-24", applications: 165 },
        { date: "2024-12-25", applications: 175 },
        { date: "2024-12-26", applications: 280 },
        { date: "2024-12-27", applications: 300 },
        { date: "2024-12-28", applications: 170 },
        { date: "2024-12-29", applications: 180 },
        { date: "2024-12-30", applications: 160 },
        { date: "2024-12-31", applications: 220 },
        { date: "2025-01-01", applications: 210 },
        { date: "2025-01-02", applications: 230 },
        { date: "2025-01-03", applications: 240 },
      ]);
    };

    fetchJobData();
    fetchTrendData();
  }, []);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

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
  const pieChartData = [
    { name: "Screened Resumes", value: resumeData.screened },
    { name: "Unscreened Resumes", value: resumeData.unscreened },
  ];
 
  return (
   <div>
      <div className="charts">
          {/* Bar Chart */}
          {/* Bar Chart */}
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

            {/* Buttons for filtering */}
            <div style={{ marginTop: "10px" }}>
              <button className="dashbtn" onClick={() => filterTrendData("7days")}>Last 7 Days</button>
              <button className="dashbtn" onClick={() => filterTrendData("1month")}>Last Month</button>
              <button className="dashbtn" onClick={() => filterTrendData("all")}>All Data</button>
            </div>
          </ResponsiveContainer>



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
   </div>
  );
}

export default Charts;
