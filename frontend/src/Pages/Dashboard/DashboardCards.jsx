import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";

function DashboardCards({ progressValues }) {
  return (
    <div className="main-cards">
      {["applications", "rejected", "shortlisted", "alerts"].map((type, index) => (
        <div className="card" key={index} style={{ backgroundColor: type === "applications" ? "#2962ff" : type === "rejected" ? "#ff6d00" : type === "shortlisted" ? "#2e7d32" : "#d50000" }}>
          <div className="card-inner">
            <h3>{`Total ${type.charAt(0).toUpperCase() + type.slice(1)}`}</h3>
            <div style={{ width: "55px", height: "55px", margin: "10px 20px" }}>
              <CircularProgressbar
                value={progressValues[type]}
                text={`${progressValues[type]}%`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "rgba(255, 255, 255, 0.2)",
                })}
              />
            </div>
            {type === "applications" && <BsFillArchiveFill className="card_icon" />}
            {type === "rejected" && <BsFillGrid3X3GapFill className="card_icon" />}
            {type === "shortlisted" && <BsPeopleFill className="card_icon" />}
            {type === "alerts" && <BsFillBellFill className="card_icon" />}
          </div>
          <h1>300</h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
