import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/nevbar/Navbar";
import DashboardNavbar from "./components/DashboardNavbar/DashboardNavbar";
import Footer from "./components/Footer/Footer";
import Routing from "./components/RouterFiles/Routing";
import Job_Management from "./Pages/Job_Management/Job_Management";

const App = () => {
  const ShouldShowNavbarAndFooter = () => {
    const location = useLocation();
    const dashboardPaths = ["/dashboard"]; // Add dashboard-related paths here
    const jobManagementPaths = ["/jobmanagement"]; // Add job management paths here
    return {
      isDashboard: dashboardPaths.includes(location.pathname),
      isJob_Management: jobManagementPaths.includes(location.pathname),
    };
  };

  return (
    <Router>
      <MainApp ShouldShowNavbarAndFooter={ShouldShowNavbarAndFooter} />
    </Router>
  );
};

const MainApp = ({ ShouldShowNavbarAndFooter }) => {
  const { isDashboard, isJob_Management } = ShouldShowNavbarAndFooter();

  return (
    <>
      {/* Show DashboardNavbar for both Dashboard and Job Management */}
      {isDashboard || isJob_Management ? <DashboardNavbar /> : <Navbar />}
      
      <div className="main-content">
        <Routing />
      </div>
      
      {/* Render Footer only if not on the dashboard or job management page */}
      {!isDashboard && !isJob_Management && <Footer />}
    </>
  );
};

export default App;











// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/nevbar/Navbar';
// import Footer from './components/Footer/Footer';
// import Routing from './components/RouterFiles/Routing'; // Adjust path if necessary

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routing />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// App.jsx