import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from '../../Pages/Signup/Signup';
import Login from '../../Pages/Login/Login';
import Hero from '../Hero/Hero';
import AboutSec from '../AboutSec/AboutSec';
import Section2 from '../Section2/Section2';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Title from '../Title/Title';
import Products from '../../Pages/Products/Products';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Resources from '../../Pages/Resources/Resources';
import Career from '../../Pages/Career/Career';
import Contact from '../../Pages/Contact/Contact';
import FAQs from '../../Pages/FAQs/FAQs';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Privacy from '../../Pages/Privacy/Privacy';
import Security from '../../Pages/Security/Security';
import Term from '../../Pages/Term/Term';
import Newsletter from '../../Pages/Newsletter/Newsletter';
import Job_Management from '../../Pages/Job_Management/Job_Management';




const Routing = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <div className="container">
              <AboutSec />
              <Section2 />
              <Title subTitle="Our Services" title="What We Offer" />
              <Services />
              <Title subTitle="TESTIMONIALS" title="What Our Customers Say!" />
              <Testimonial />
            </div>
          </>
        }
      />

      {/* Signup and Signin Pages */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/career" element={<Career />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/Security" element={<Security />} />
      <Route path="/term" element={<Term />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/jobmanagement" element={<Job_Management />} />

    </Routes>
  );
};

export default Routing;
