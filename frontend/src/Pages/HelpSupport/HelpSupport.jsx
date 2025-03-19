import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Sidebar from '../Dashboard/Sidebar';
import './HelpSupport.css';

const HelpSupport = () => {
 
  return (
    <div className="applicant-container">
      {/* Sidebar */}
      <Sidebar className="sidebar" />

      {/* Content Section */}
      <div className="content">
        <h2>Applicants</h2>
        <section className="contact-section">
          <h3>Contact Us</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <strong>Email:</strong> <a href="mailto:umarsajjad494686@gmail.com">umarsajjad494686@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +92 323 1232823
            </div>
            <div className="contact-item">
              <strong>Live Chat:</strong> Available 9 AM - 6 PM (Mon-Fri)
            </div>
          </div>
        </section>
      
        <section className="support-ticket-section">
          <h3>Submit a Support Ticket</h3>
          <form className="support-form">
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter subject" required />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="text" placeholder="Enter your phone number" required />
              </div>
            </div>

            <label>Message</label>
            <textarea placeholder="Describe your issue..." rows="2" required></textarea>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </section>
       
      

       
      </div>
    </div>
  );
};

export default HelpSupport;


