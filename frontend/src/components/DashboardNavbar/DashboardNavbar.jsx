import React from "react";
import './DashboardNavbar.css'
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
         <div className="DashNav">
         <span className="Hire"><Link to="/dashboard">Hire</Link></span>
        <span className="Me"><Link to="/dashboard">Me</Link></span>
          </div>
      <div className="dashboard-navbar-container">
        <ul className="dashboard-nav-links">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <button className="logout-button" onClick={() => handleLogout()}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const handleLogout = () => {
  // Logic for logout, e.g., clearing tokens and redirecting to login
  localStorage.removeItem("token"); // Example
  window.location.href = "/signin";
};

export default DashboardNavbar;
