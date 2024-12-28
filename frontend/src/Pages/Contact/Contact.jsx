import React from "react";
import "./Contact.css";

const Contact = () => {
    return (

        <div> <section className="hero-section small_banner">
            <h1 className="hero-title">We’d Love to Hear from You</h1>
            <p className="hero-description">
            Have questions or need assistance? Reach out to us, and we’ll get back to you promptly!
            </p>
        </section>
        <div className="contact-us-page">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" id="companyName" name="companyName" placeholder="Enter your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +92 302 638 9868
          </p>
          <p>
            <strong>Email:</strong> HireMe@gmail.com
          </p>
          <p>Feel free to reach out to us for any inquiries or support!</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;
