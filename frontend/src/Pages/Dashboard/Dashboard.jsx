import React, { useState, useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Charts from "./Charts"; // Import the Charts component

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [progressValues, setProgressValues] = useState({
    applications: 75,
    rejected: 20,
    shortlisted: 50,
    alerts: 30,
  });

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main-container">
       

        <div className="main-cards">
          {/* Card 1 */}
          <div className="card" style={{ backgroundColor: "#2962ff" }}>
            <div className="card-inner">
              <h3>Total Job Posted</h3>
              <div style={{ width: "55px", height: "55px", margin: "10px 20px" }}>
                <CircularProgressbar
                  value={progressValues.applications}
                  text={`${progressValues.applications}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h1>300</h1>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ backgroundColor: "#ff6d00" }}>
            <div className="card-inner">
              <h3>Total Applicants</h3>
              <div style={{ width: "65px", height: "65px", margin: "10px 20px" }}>
                <CircularProgressbar
                  value={progressValues.rejected}
                  text={`${progressValues.rejected}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1>12</h1>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ backgroundColor: "#2e7d32" }}>
            <div className="card-inner">
              <h3>Shortlisted Applicants</h3>
              <div style={{ width: "70px", height: "70px", margin: "10px 20px" }}>
                <CircularProgressbar
                  value={progressValues.shortlisted}
                  text={`${progressValues.shortlisted}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>33</h1>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ backgroundColor: "#d50000" }}>
            <div className="card-inner">
              <h3>Rejected Applicants</h3>
              <div style={{ width: "50px", height: "50px", margin: "10px 20px" }}>
                <CircularProgressbar
                  value={progressValues.alerts}
                  text={`${progressValues.alerts}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <BsFillBellFill className="card_icon" />
            </div>
            <h1>42</h1>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-container">
          <Charts /> {/* Add the Charts component here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
