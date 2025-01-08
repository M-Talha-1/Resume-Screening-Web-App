import React, { useState } from 'react';
import './Job_Management.css';

const Job_Management = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [editingJob, setEditingJob] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [jobs, setJobs] = useState([
    {
      title: 'Software Engineer',
      dateCreated: '2025-01-01',
      status: 'Open',
      applicants: 10,
      progress: 50,
    },
    {
      title: 'Product Manager',
      dateCreated: '2025-01-02',
      status: 'Closed',
      applicants: 5,
      progress: 100,
    },
  ]);

  const handleCreateJobClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newJob = {
      title: form.title.value,
      dateCreated: new Date().toISOString().split('T')[0],
      status: form.status.value,
      applicants: 0,
      progress: 0,
    };

    setJobs([...jobs, newJob]);
    setShowForm(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredJobs = jobs.filter((job) => {
    const searchQueryLower = searchQuery.toLowerCase();
    const matchesTitle = job.title.toLowerCase().includes(searchQueryLower);
    const matchesDate = job.dateCreated.includes(searchQuery);
    return matchesTitle || matchesDate;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'date') {
      return new Date(a.dateCreated) - new Date(b.dateCreated);
    }
    if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  const totalJobs = sortedJobs.length;
  const openJobs = sortedJobs.filter((job) => job.status === 'Open').length;
  const closedJobs = sortedJobs.filter((job) => job.status === 'Closed').length;

  // Handle job edit
  const handleEditClick = (index) => {
    setEditingJob(index);
    setEditedTitle(jobs[index].title);
    setEditedStatus(jobs[index].status);
  };

  const handleEditSave = (event) => {
    event.preventDefault();
    const updatedJob = {
      ...jobs[editingJob],
      title: editedTitle,
      status: editedStatus,
    };

    const updatedJobs = [...jobs];
    updatedJobs[editingJob] = updatedJob;
    setJobs(updatedJobs);

    setEditingJob(null); // Exit edit mode
  };

  const handleEditCancel = () => {
    setEditingJob(null);
  };

  // Delete job function
  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, jobIndex) => jobIndex !== index);
    setJobs(updatedJobs);
  };

  return (
    <div className="job-management-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="stats-container">
          <div className="stat-box">
            <h3>Total Jobs</h3>
            <p>{totalJobs}</p>
          </div>
          <div className="stat-box">
            <h3>Open Jobs</h3>
            <p>{openJobs}</p>
          </div>
          <div className="stat-box">
            <h3>Closed Jobs</h3>
            <p>{closedJobs}</p>
          </div>
        </div>
        <button onClick={handleCreateJobClick} className="create-job-button">Create Job</button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-form">
            <button onClick={handleCloseForm} className="close-button">&times;</button>
            <h3>Create Job</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Job Title:</label>
                <input type="text" name="title" required className="form-input" />
              </div>
              <div className="form-group">
                <label>Job Description:</label>
                <textarea name="description" required className="form-input textarea"></textarea>
              </div>
              <div className="form-group">
                <label>Upload Description (PDF/DOCX):</label>
                <input type="file" accept=".pdf,.docx" className="form-input-file" />
              </div>
              <div className="form-group">
                <label>Required Skills:</label>
                <input type="text" name="skills" placeholder="Enter skills separated by commas" className="form-input" />
              </div>
              <div className="form-group">
                <label>Job Location (Optional):</label>
                <input type="text" name="location" className="form-input" />
              </div>
              <div className="form-group">
                <label>Status:</label>
                <select name="status" required className="form-input">
                  <option value="">Select Status</option>
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <button type="submit" className="submit-button">Save</button>
            </form>
          </div>
        </div>
      )}

      {/* Search and Sort Section */}
      <div className="search-sort-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Jobs by Title or Date"
            className="search-bar"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="search-button">Search</button>
        </div>
        <select className="sort-dropdown" onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="title">Job Title</option>
          <option value="date">Date Created</option>
          <option value="status">Status (Open/Closed)</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Date Created</th>
              <th>Status</th>
              <th>Number of Applicants</th>
              <th>Screening Progress (%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedJobs.map((job, index) => (
              <tr key={index}>
                <td>
                  {editingJob === index ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="form-input"
                    />
                  ) : (
                    job.title
                  )}
                </td>
                <td>{job.dateCreated}</td>
                <td>
                  {editingJob === index ? (
                    <select
                      value={editedStatus}
                      onChange={(e) => setEditedStatus(e.target.value)}
                      className="form-input"
                    >
                      <option value="Open">Open</option>
                      <option value="Closed">Closed</option>
                    </select>
                  ) : (
                    job.status
                  )}
                </td>
                <td>{job.applicants}</td>
                <td>{job.progress}%</td>
                <td>
                  {editingJob === index ? (
                    <>
                      <button onClick={handleEditSave} className="save-button">Save</button>
                      <button onClick={handleEditCancel} className="cancel-button">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(index)} className="edit-button">Edit</button>
                      <button onClick={() => deleteJob(index)} className="delete-button">Delete</button>
                    </>
                  )}
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
