import React from "react";
import "./Career.css";

const Career = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-Time" },
    { id: 2, title: "Backend Developer", location: "Lagos, Nigeria", type: "Full-Time" },
    { id: 3, title: "UI/UX Designer", location: "Hybrid", type: "Contract" },
    { id: 4, title: "Product Manager", location: "Toronto, Canada", type: "Full-Time" },
  ];

  return (
    
    <div>
        <section className="hero-section small_banner">
                    <h1 className="hero-title">Kickstart Your Career with Us</h1>
                    <p className="hero-description">
                    Explore opportunities to grow, innovate, and make an impact with a team that values your potential.                    </p>
                </section>
    <div className="career-page">
        
      {/* Main Heading */}
      <div className="career-heading">
        <h1>Explore Exciting Career Opportunities</h1>
        <p>Join a team that values innovation, collaboration, and growth.</p>
      </div>

      {/* Job Search Section */}
      <div className="job-search">
        <h2>Search for Your Dream Job</h2>
        <input
          type="text"
          placeholder="Search by job title, location, or keywords..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Available Jobs Section */}
      <div className="job-listings">
        <h2>Available Jobs</h2>
        <div className="job-cards">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Type:</strong> {job.type}
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Career