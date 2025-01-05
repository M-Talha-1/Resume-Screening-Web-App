import React, { useState } from 'react';
import './Job_Management.css'
const Job_Management = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState([]);

  const handleCreateJob = (newJob) => {
    setJobs([...jobs, newJob]);
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="header-section">
        <button className="create-job-button" onClick={() => setIsModalOpen(true)}>
          Create Job
        </button>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <table>
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
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.dateCreated}</td>
                <td>{job.status}</td>
                <td>{job.applicants}</td>
                <td>{job.screeningProgress}</td>
                <td>
                  <button>Edit</button>
                  <button>Close</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Creating a Job */}
      {isModalOpen && <JobCreationModal onClose={() => setIsModalOpen(false)} onSubmit={handleCreateJob} />}
    </div>
  );
};

const JobCreationModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    experience: '',
    dateCreated: new Date().toLocaleDateString(),
    status: 'Open',
    applicants: 0,
    screeningProgress: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Job</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Job Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Required Skills:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Comma-separated skills"
              required
            />
          </label>

          <label>
            Job Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>

          <label>
            Experience Level:
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select Level</option>
              <option value="Entry-level">Entry-level</option>
              <option value="Mid-level">Mid-level</option>
              <option value="Senior-level">Senior-level</option>
            </select>
          </label>

          <button type="submit">Save/Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Job_Management;
