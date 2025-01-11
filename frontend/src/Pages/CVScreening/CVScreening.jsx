import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import './CVScreening.css';

const CVScreening = () => {
  const location = useLocation();
  const isCVScreeningPage = location.pathname === '/cvscreening';

  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [results, setResults] = useState([]);
  const [screeningInProgress, setScreeningInProgress] = useState(false);
  const [filterSkills, setFilterSkills] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [screeningComplete, setScreeningComplete] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleStartScreening = () => {
    if (!uploadedFiles.length || !selectedJob) {
      alert('Please upload resumes and select a job first.');
      return;
    }
    
    setScreeningInProgress(true);
    setProgress(0);
    setScreeningComplete(false);
    const totalResumes = uploadedFiles.length;
    let completedResumes = 0;
    
    const interval = setInterval(() => {
      completedResumes += 1;
      const progressPercentage = Math.min((completedResumes / totalResumes) * 100, 100);
      setProgress(progressPercentage);
      
      if (completedResumes === totalResumes) {
        clearInterval(interval);
        setScreeningComplete(true);
        setResults([
          { name: 'John Doe', score: 90, skills: ['React', 'Node.js'], resume: 'resume1.pdf' },
          { name: 'Jane Smith', score: 80, skills: ['Python', 'Django'], resume: 'resume2.pdf' },
        ]);
        setScreeningInProgress(false);
      }
    }, 500); // Simulate progress every 500ms
  };

  const handleFilterChange = (e) => {
    setFilterSkills(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const filteredResults = results
    .filter((result) => {
      if (!filterSkills) return true;
      return result.skills.some((skill) => skill.toLowerCase().includes(filterSkills.toLowerCase()));
    })
    .sort((a, b) => {
      if (selectedSort === 'high-to-low') {
        return b.score - a.score;
      }
      if (selectedSort === 'low-to-high') {
        return a.score - b.score;
      }
      return 0;
    });

  return (
    <div className="job-management-container">
      {/* Sidebar */}
      {isCVScreeningPage && <Sidebar className="sidebar" />}

      {/* Content Section */}
      <div className="job-management-content">
        {/* Resume Upload Section */}
        <section className="resume-upload-section">
          <h2>Upload Resumes</h2>
          <div
            className="upload-container"
            onDragOver={handleDragOver} // Handle drag over event
            onDrop={handleDrop} // Handle drop event
          >
            <input
              type="file"
              multiple
              accept=".pdf,.docx"
              onChange={handleFileUpload}
              id="file-input"
              style={{ display: 'none' }} // Hide the file input
            />
            <label htmlFor="file-input" className="file-upload-label">
              Drag and drop files here or click to upload (PDF, DOCX)
            </label>
          </div>
          {uploadedFiles.length > 0 && (
            <p>{uploadedFiles.length} {uploadedFiles.length === 1 ? 'resume' : 'resumes'} uploaded</p>
          )}
          <div className="job-selection">
            <label>Select Job:</label>
            <select
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
            >
              <option value="">Select a job</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
            </select>
          </div>
        </section>

        {/* Screening Process Section */}
        <section className="screening-process-section">
          <h2>Screening Process</h2>
          <button
            onClick={handleStartScreening}
            className="start-screening-button"
            disabled={screeningInProgress || screeningComplete}
          >
            {screeningComplete ? 'Screening Complete' : screeningInProgress ? 'Screening in Progress...' : 'Start Screening'}
          </button>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{`Screening ${Math.round(progress)}% completed`}</p>
          <p>Estimated Time: {Math.max(0, Math.round((results.length - Math.round(progress / 100 * results.length)) * 2))} seconds remaining</p>
        </section>

        {/* Screening Results Section */}
        <section className="screening-results-section">
          <h2>Screening Results</h2>
          <div className="filters">
            <select value={selectedSort} onChange={handleSortChange}>
              <option value="">Sort by Score</option>
              <option value="high-to-low">Highest to Lowest</option>
              <option value="low-to-high">Lowest to Highest</option>
            </select>
            <input
              type="text"
              value={filterSkills}
              onChange={handleFilterChange}
              placeholder="Filter by skills"
            />
          </div>
          <table className="results-table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Matching Score</th>
                <th>Key Matching Skills</th>
                <th>Actions</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.name}</td>
                  <td>{result.score}%</td>
                  <td>{result.skills.join(', ')}</td>
                  <td>
                    <button>View</button>
                    <button>Shortlist</button>
                    <button>Reject</button>
                  </td>
                  <td>
                    <a href={`/${result.resume}`} download>
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default CVScreening;
