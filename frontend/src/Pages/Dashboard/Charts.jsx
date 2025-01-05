import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Charts({ jobData, filteredTrendData, pieChartData, COLORS, filterTrendData }) {
  return (
    <div className="charts">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={jobData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value, name, props) => [`Applications: ${value}`, `Status: ${props.payload.status}`]} />
          <Legend payload={[{ value: "Open", type: "square", color: "#4CAF50" }, { value: "Closed", type: "square", color: "#B0BEC5" }]} />
          <Bar dataKey="applications" barSize={40}>
            {jobData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.status === "Open" ? "#4CAF50" : "#B0BEC5"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} />
          <YAxis />
          <Tooltip formatter={(value) => [`Applications: ${value}`, "Date"]} />
          <Legend />
          <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <div style={{ marginTop: "10px" }}>
        <button className="dashbtn" onClick={() => filterTrendData("7days")}>Last 7 Days</button>
        <button className="dashbtn" onClick={() => filterTrendData("1month")}>Last Month</button>
        <button className="dashbtn" onClick={() => filterTrendData("all")}>All Data</button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {pieChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
