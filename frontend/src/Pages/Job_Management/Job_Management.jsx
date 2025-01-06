import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./Job_Management.css";

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "Open", applications: 50, datePosted: "2025-01-01" },
    { id: 2, title: "Backend Developer", status: "Closed", applications: 40, datePosted: "2024-12-15" },
    { id: 3, title: "Project Manager", status: "Open", applications: 70, datePosted: "2024-12-20" },
  ]);

  const [jobAnalytics] = useState([
    { name: "Open Jobs", value: jobs.filter((job) => job.status === "Open").length },
    { name: "Closed Jobs", value: jobs.filter((job) => job.status === "Closed").length },
  ]);

  const COLORS = ["#4CAF50", "#B0BEC5"]; // Colors for Pie Chart

  const addNewJob = () => {
    const newJob = {
      id: jobs.length + 1,
      title: `New Job ${jobs.length + 1}`,
      status: "Open",
      applications: 0,
      datePosted: new Date().toISOString().split("T")[0],
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="job-management-container">
      <header className="page-header">
        <h1>Job Management</h1>
        <p>Manage and track your job postings and applications efficiently.</p>
      </header>

      {/* Summary Section */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Jobs</h3>
          <h1>{jobs.length}</h1>
        </div>
        <div className="card">
          <h3>Open Jobs</h3>
          <h1>{jobs.filter((job) => job.status === "Open").length}</h1>
        </div>
        <div className="card">
          <h3>Applications</h3>
          <h1>{jobs.reduce((total, job) => total + job.applications, 0)}</h1>
        </div>
      </div>

      {/* Job Listings Table */}
      <div className="job-listings">
        <h2>Job Listings</h2>
        <button className="add-job-btn" onClick={addNewJob}>
          + Add New Job
        </button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Date Posted</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.status}</td>
                <td>{job.applications}</td>
                <td>{job.datePosted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics Section */}
      <div className="analytics">
        <h2>Job Analytics</h2>
        <div className="charts">
          {/* Pie Chart */}
          <div className="chart-container">
            <h3>Job Status Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jobAnalytics}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {jobAnalytics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="chart-container">
            <h3>Applications per Job</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobs}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="applications" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
