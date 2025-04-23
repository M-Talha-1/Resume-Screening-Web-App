import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/nevbar/Navbar";
import DashboardNavbar from "./components/DashboardNavbar/DashboardNavbar";
import Footer from "./components/Footer/Footer";
import Routing from "./components/RouterFiles/Routing";

const App = () => {
  const ShouldShowNavbarAndFooter = () => {
    const location = useLocation();
    const dashboardPaths = ["/dashboard"]; // Dashboard-related paths
    const jobManagementPaths = ["/jobmanagement"]; // Job Management paths
    const cvScreeningPaths = ["/cvscreening"]; // CV Screening paths
    const applicantsPaths = ["/applicants"]; // Applicants paths
    const helpSupportPaths = ["/helpsupport"]; // Help & Support paths
    const settingPaths = ["/setting"]; // Setting paths
    return {
      isDashboard: dashboardPaths.includes(location.pathname),
      isJob_Management: jobManagementPaths.includes(location.pathname),
      isCVScreening: cvScreeningPaths.includes(location.pathname),
      isApplicants: applicantsPaths.includes(location.pathname),
      isHelpSupport: helpSupportPaths.includes(location.pathname),
      isSetting: settingPaths.includes(location.pathname),
    };
  };

  return (
    <Router>
      <MainApp ShouldShowNavbarAndFooter={ShouldShowNavbarAndFooter} />
    </Router>
  );
};

const MainApp = ({ ShouldShowNavbarAndFooter }) => {
  const {
    isDashboard,
    isJob_Management,
    isCVScreening,
    isApplicants,
    isHelpSupport,
    isSetting,
  } = ShouldShowNavbarAndFooter();

  return (
    <>
      {/* Show DashboardNavbar for Dashboard, Job Management, CV Screening, Applicants, Help & Support, and Setting */}
      {isDashboard ||
      isJob_Management ||
      isCVScreening ||
      isApplicants ||
      isHelpSupport ||
      isSetting ? (
        <DashboardNavbar />
      ) : (
        <Navbar />
      )}
      
      <div className="main-content">
        <Routing />
      </div>
      
      {/* Render Footer only if not on Dashboard, Job Management, CV Screening, Applicants, Help & Support, or Setting */}
      {!isDashboard &&
        !isJob_Management &&
        !isCVScreening &&
        !isApplicants &&
        !isHelpSupport &&
        !isSetting && <Footer />}
    </>
  );
};

export default App;
