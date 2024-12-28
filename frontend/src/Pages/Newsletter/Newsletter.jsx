import React from "react";
import Title from "../../components/Title/Title";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
        <section className="hero-section small_banner">
    <h1 className="hero-title">Stay Updated</h1>
    <p className="hero-description">
    Subscribe to our newsletter and never miss an update on the latest hiring trends, AI solutions, and company news.
    </p>
</section>
<Title title="Subscribe to our newsletter for the latest updates and insights!" />

    <div className="newsletter-page">
      
      <div className="newsletter-content">
        <form className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Newsletter;
