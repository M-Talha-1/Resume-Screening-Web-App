import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Sidebar({ openSidebarToggle, handleSidebarToggle, setActiveSection }) {
  const handleLinkClick = (section) => {
    setActiveSection(section); // Track the active section
    // Sidebar will remain open, no need to close it here
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
        <span className="Hire"><Link to="/dashboard">Hire</Link></span>
        <span className="Me"><Link to="/dashboard">Me</Link></span>
        </div>
        <span className="icon close_icon" onClick={handleSidebarToggle}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard" >
            <BsGrid1X2Fill className="icon" /> Analytics
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/jobmanagement" >
            <BsFillArchiveFill className="icon" /> Job Management
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/resumescreening">
            <BsFillGrid3X3GapFill className="icon" /> Resume Screening
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/applicants">
            <BsPeopleFill className="icon" /> Applicants
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/helpsupport">
            <BsMenuButtonWideFill className="icon" /> Help & Support
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/setting" >
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
