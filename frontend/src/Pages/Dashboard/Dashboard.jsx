import React, { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
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

  const handleSidebarToggle = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const data = [
    { name: "Jan", Job_View: 2000, Job_Applied: 2400, amt: 2400 },
    { name: "Feb", Job_View: 3000, Job_Applied: 2500, amt: 2210 },
    { name: "Mar", Job_View: 2000, Job_Applied: 9800, amt: 2290 },
    { name: "Apr", Job_View: 2780, Job_Applied: 3908, amt: 2000 },
    { name: "May", Job_View: 1890, Job_Applied: 4800, amt: 2181 },
    { name: "jun", Job_View: 2390, Job_Applied: 3800, amt: 2500 },
    { name: "Jul", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
    { name: "Aug", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
    { name: "Spt", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
    { name: "Oct", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
    { name: "Nov", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
    { name: "Dec", Job_View: 3490, Job_Applied: 4300, amt: 2100 },
  ];

  const progressValues = {
    applications: 75,
    rejected: 20,
    shortlisted: 50,
    alerts: 30,
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
              <BsGrid1X2Fill className="icon" /> Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillArchiveFill className="icon" /> Applicants
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsFillGrid3X3GapFill className="icon" /> Assessments
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsPeopleFill className="icon" /> Hiring
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsListCheck className="icon" /> Schedule
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <BsMenuButtonWideFill className="icon" /> Profile
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
              <h3>Total Application</h3>
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
              <h3>Rejected Application</h3>
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
              <h3>ALERTS</h3>
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
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Job_View" fill="#8884d8" />
              <Bar dataKey="Job_Applied" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          {/* Line Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Job_Applied"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Job_View"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
