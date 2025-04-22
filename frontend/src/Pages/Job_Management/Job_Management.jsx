import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Job_Management.css";
import Sidebar from "../Dashboard/Sidebar";

const Job_Management = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]); // Store jobs from API
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [editingJob, setEditingJob] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedStatus, setEditedStatus] = useState("");

  const location = useLocation();
  const isJobManagementPage = location.pathname === "/jobmanagement";

  // 🔹 Fetch Jobs from FastAPI on Page Load
  useEffect(() => {
    fetch("http://127.0.0.1:8000/job/")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const handleCreateJobClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  // 🔹 Handle New Job Submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newJob = {
      title: form.title.value,
      description: form.description.value,
      status: form.status.value,
      admin_id: 1,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/job/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      });

      if (response.ok) {
        const jobData = await response.json();
        setJobs([...jobs, { ...newJob, id: jobData.job_id }]); // Update UI
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  // 🔹 Delete Job
  const deleteJob = async (jobId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/job/${jobId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setJobs(jobs.filter((job) => job.id !== jobId));
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // 🔹 Search & Sort
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "status") return a.status.localeCompare(b.status);
    return 0;
  });

  return (
    <div className="job-management-container">
      {isJobManagementPage && <Sidebar className="sidebar" />}

      <div className="job-management-content">
        {/* 🔹 Job Stats */}
        <div className="top-section">
          <div className="stats-container">
            <div className="stat-box">
              <h3>Total Jobs</h3>
              <p>{jobs.length}</p>
            </div>
            <div className="stat-box">
              <h3>Open Jobs</h3>
              <p>{jobs.filter((job) => job.status === "Open").length}</p>
            </div>
            <div className="stat-box">
              <h3>Closed Jobs</h3>
              <p>{jobs.filter((job) => job.status === "Closed").length}</p>
            </div>
          </div>
          <button onClick={handleCreateJobClick} className="create-job-button">
            Create Job
          </button>
        </div>

        {/* 🔹 Job Creation Form */}
        {showForm && (
          <div className="popup-overlay">
            <div className="popup-form">
              <button onClick={handleCloseForm} className="close-button">
                &times;
              </button>
              <h3>Create Job</h3>
              <form onSubmit={handleFormSubmit} className="form-container">
                <div className="form-group">
                  <label>Job Title:</label>
                  <input type="text" name="title" required />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <textarea name="description" required />
                </div>
                <div className="form-group">
                  <label>Status:</label>
                  <select name="status" required>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <button type="submit" className="submit-button">
                  Save
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 🔹 Search & Sort */}
        <div className="search-sort-section">
          <input
            type="text"
            placeholder="Search Jobs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="status">Status</option>
          </select>
        </div>

        {/* 🔹 Job Table */}
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.status}</td>
                <td>
                  <button onClick={() => deleteJob(job.id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Job_Management;
