import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Sidebar from '../Dashboard/Sidebar';
import './Applicants.css';

const Applicants = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('name');
  const [editStatusId, setEditStatusId] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const [applicants, setApplicants] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', status: 'Shortlisted' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', status: 'Rejected' },
    { id: 3, name: 'Mike Johnson', position: 'Data Analyst', status: 'Pending' },
    { id: 4, name: 'Emily White', position: 'UX Designer', status: 'Shortlisted' },
  ]);

  // Filtered Applicants Based on Search
  const filteredApplicants = applicants.filter((applicant) =>
    applicant[filterCriteria].toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Delete Action
  const handleDelete = (id) => {
    const updatedApplicants = applicants.filter((applicant) => applicant.id !== id);
    setApplicants(updatedApplicants);
  };

  // Handle Edit Status
  const handleEdit = (id, currentStatus) => {
    setEditStatusId(id);
    setNewStatus(currentStatus);
  };

  // Save Edited Status
  const handleSaveStatus = (id) => {
    setApplicants(
      applicants.map((applicant) =>
        applicant.id === id ? { ...applicant, status: newStatus } : applicant
      )
    );
    setEditStatusId(null);
  };

  return (
    <div className="applicant-container">
      {/* Sidebar */}
      <Sidebar className="sidebar" />

      {/* Content Section */}
      <div className="content">
        <h2>Applicants</h2>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search by ${filterCriteria}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select onChange={(e) => setFilterCriteria(e.target.value)}>
            <option value="name">Name</option>
            <option value="position">Position</option>
            <option value="status">Status</option>
          </select>
          <button className="search-btn">
            <BsSearch /> Search
          </button>
        </div>

        {/* Applicant Table */}
        <table className="applicant-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant) => (
              <tr key={applicant.id}>
                <td>{applicant.name}</td>
                <td>{applicant.position}</td>
                <td className={`status-${applicant.status.toLowerCase()}`}>
                  {editStatusId === applicant.id ? (
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                    >
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Pending">Pending</option>
                    </select>
                  ) : (
                    applicant.status
                  )}
                </td>
                <td>
                  {editStatusId === applicant.id ? (
                    <button className="action-btn edit-btn" onClick={() => handleSaveStatus(applicant.id)}>
                      Save
                    </button>
                  ) : (
                    <button className="action-btn edit-btn" onClick={() => handleEdit(applicant.id, applicant.status)}>
                      Edit
                    </button>
                  )}
                  <button className="action-btn delete-btn" onClick={() => handleDelete(applicant.id)}>
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

export default Applicants;
