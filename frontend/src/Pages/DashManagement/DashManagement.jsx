import React, { useState } from 'react';

const DashManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    skills: '',
    location: '',
    experience: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleFormSubmit = () => {
    const date = new Date().toLocaleDateString();
    setJobs([
      ...jobs,
      {
        ...newJob,
        date,
        status: 'Open',
        applicants: 0,
        progress: 0,
      },
    ]);
    setNewJob({ title: '', description: '', skills: '', location: '', experience: '' });
    setShowForm(false);
  };

  const handleDeleteJob = (index) => {
    setJobs(jobs.filter((_, i) => i !== index));
  };

  const handleEditJob = (index) => {
    const job = jobs[index];
    setNewJob(job);
    handleDeleteJob(index);
    setShowForm(true);
  };

  const handleCloseJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = 'Closed';
    setJobs(updatedJobs);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>Total Jobs: {jobs.length}</div>
        <div>Open Jobs: {jobs.filter((job) => job.status === 'Open').length}</div>
        <div>Closed Jobs: {jobs.filter((job) => job.status === 'Closed').length}</div>
        <button onClick={() => setShowForm(true)}>Create New Job</button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
          <h3>Create Job</h3>
          <input
            name="title"
            placeholder="Job Title"
            value={newJob.title}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Job Description"
            value={newJob.description}
            onChange={handleInputChange}
          />
          <input
            name="skills"
            placeholder="Required Skills"
            value={newJob.skills}
            onChange={handleInputChange}
          />
          <input
            name="location"
            placeholder="Job Location"
            value={newJob.location}
            onChange={handleInputChange}
          />
          <input
            name="experience"
            placeholder="Experience Level"
            value={newJob.experience}
            onChange={handleInputChange}
          />
          <button onClick={handleFormSubmit}>Save</button>
        </div>
      )}

      {/* Table Section */}
      <table border="1" style={{ width: '100%' }}>
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
              <td>{job.date}</td>
              <td>{job.status}</td>
              <td>{job.applicants}</td>
              <td>{job.progress}</td>
              <td>
                <button onClick={() => handleEditJob(index)}>Edit</button>
                <button onClick={() => handleCloseJob(index)}>Close</button>
                <button onClick={() => handleDeleteJob(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashManagement;
