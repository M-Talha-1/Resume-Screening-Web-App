// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/nevbar/Navbar';
import Footer from './components/Footer/Footer';
import Routing from './components/RouterFiles/Routing'; // Adjust path if necessary

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
