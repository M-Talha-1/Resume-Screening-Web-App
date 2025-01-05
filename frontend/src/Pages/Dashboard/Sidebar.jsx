import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import "./Dashboard.css";
function Sidebar({ openSidebarToggle, handleSidebarToggle, setActiveSection }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span className="Hire">Hire</span>
          <span className="Me">Me</span>
        </div>
        <span className="icon close_icon" onClick={handleSidebarToggle}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("analytics")}>
            <BsGrid1X2Fill className="icon" /> Analytics
          </button>
        </li>
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("Job_Management")}>
            <BsFillArchiveFill className="icon" /> Job Management
          </button>
        </li>
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("resumeScreening")}>
            <BsFillGrid3X3GapFill className="icon" /> Resume Screening
          </button>
        </li>
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("applicants")}>
            <BsPeopleFill className="icon" /> Applicants
          </button>
        </li>
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("helpSupport")}>
            <BsMenuButtonWideFill className="icon" /> Help & Support
          </button>
        </li>
        <li className="sidebar-list-item">
          <button onClick={() => setActiveSection("settings")}>
            <BsFillGearFill className="icon" /> Setting
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
