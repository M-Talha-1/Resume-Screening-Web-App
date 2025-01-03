import React, { useState, useEffect } from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [jobData, setJobData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [progressValues, setProgressValues] = useState({
    applications: 75,
    rejected: 20,
    shortlisted: 50,
    alerts: 30,
  });

  // Dummy fetch simulation for job and trend data
  useEffect(() => {
    const fetchJobData = () => {
      // Replace this with real API fetching logic
      setJobData([
        { name: "Job 1", applications: 120, status: "Open" },
        { name: "Job 2", applications: 80, status: "Closed" },
        { name: "Job 3", applications: 150, status: "Open" },
        { name: "Job 4", applications: 60, status: "Closed" },
      ]);
    };

    const fetchTrendData = () => {
      // Replace this with real API fetching logic
      setTrendData([
        { date: "2024-12-28", applications: 200 },
        { date: "2024-12-29", applications: 180 },
        { date: "2024-12-30", applications: 160 },
        { date: "2024-12-31", applications: 220 },
        { date: "2025-01-01", applications: 210 },
        { date: "2025-01-02", applications: 230 },
        { date: "2025-01-03", applications: 240 },
      ]);
    };

    fetchJobData();
    fetchTrendData();
  }, []);

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      {/* Sidebar */}
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
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
            <a href="#">
              <BsGrid1X2Fill className="icon" /> Analytics
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillArchiveFill className="icon" /> Job Management
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillGrid3X3GapFill className="icon" /> Resume Screening
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsPeopleFill className="icon" /> Applicants
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsMenuButtonWideFill className="icon" /> Help & Support
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillGearFill className="icon" /> Setting
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-container">
        <div className="header">
          <h3>Dashboard</h3>
          <span className="menu-icon" onClick={handleSidebarToggle}>
            ☰
          </span>
        </div>

        <div className="main-title">
          <h3>Dashboard Overview</h3>
        </div>

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
              <h3>Shortlisted Application</h3>
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

        <div className="charts">
          {/* Bar Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                formatter={(value, name, props) => [`Applications: ${value}`, `Status: ${props.payload.status}`]}
              />
              <Legend />
              <Bar
                dataKey="applications"
                fill={(entry) => (entry.status === "Open" ? "#4CAF50" : "#B0BEC5")}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
