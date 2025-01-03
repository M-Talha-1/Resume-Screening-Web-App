// App.jsx
import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/nevbar/Navbar";
import DashboardNavbar from "./components/DashboardNavbar/DashboardNavbar";
import Footer from "./components/Footer/Footer";
import Routing from "./components/RouterFiles/Routing";

const App = () => {
  const ShouldShowNavbarAndFooter = () => {
    const location = useLocation();
    const dashboardPaths = ["/dashboard"]; // Add dashboard-related paths here
    return { isDashboard: dashboardPaths.includes(location.pathname) };
  };

  return (
    <Router>
      <MainApp ShouldShowNavbarAndFooter={ShouldShowNavbarAndFooter} />
    </Router>
  );
};

const MainApp = ({ ShouldShowNavbarAndFooter }) => {
  const { isDashboard } = ShouldShowNavbarAndFooter();

  return (
    <>
      {/* Render Navbar based on route */}
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <Routing />
      {/* Render Footer only if not on the dashboard */}
      {!isDashboard && <Footer />}
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