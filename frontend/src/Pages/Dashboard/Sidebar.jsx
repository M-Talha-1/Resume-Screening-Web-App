import React from "react";
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, handleSidebarToggle }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span className="Hire">Hire</span>
          <span className="Me">Me</span>
        </div>
        <span className="icon close_icon" onClick={handleSidebarToggle}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item"><a href="#"><BsGrid1X2Fill className="icon" /> Analytics</a></li>
        <li className="sidebar-list-item"><a href="/job_management"><BsFillArchiveFill className="icon" /> Job Management</a></li>
        <li className="sidebar-list-item"><a href="#"><BsFillGrid3X3GapFill className="icon" /> Resume Screening</a></li>
        <li className="sidebar-list-item"><a href="#"><BsPeopleFill className="icon" /> Applicants</a></li>
        <li className="sidebar-list-item"><a href="#"><BsMenuButtonWideFill className="icon" /> Help & Support</a></li>
        <li className="sidebar-list-item"><a href="#"><BsFillGearFill className="icon" /> Setting</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
