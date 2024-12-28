import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div>  <section className="hero-section small_banner">
    <h1 className="hero-title">Privacy Policy</h1>
    <p className="hero-description">
    Your trust is our priority. Learn how we safeguard your data and ensure your privacy.
    </p>
</section>
    <div className="privacy-page">
    
    
      <div className="privacy-content">
        <h2>Data Protection Commitment</h2>
        <p>
          At HireMe, we are committed to protecting your privacy and ensuring the safety of
          any data you share with us. This includes, but is not limited to, your personal
          details, uploaded resumes, and other information you provide.
        </p>

        <h2>How We Use Your Data</h2>
        <p>
          Any data you upload, such as resumes or application details, is used solely for
          recruitment purposes. We do not sell, share, or distribute your information
          without your explicit consent.
        </p>

        <h2>Security Measures</h2>
        <p>
          To ensure the safety of your data, we employ state-of-the-art encryption and
          secure storage systems. Our systems are regularly monitored and updated to protect
          against unauthorized access or breaches.
        </p>

        <h2>Your Control Over Your Data</h2>
        <p>
          You have full control over your data. At any time, you can request to view,
          update, or delete the information you’ve shared with us. Simply contact our
          support team, and we’ll assist you promptly.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy practices, feel free to
          contact us at:
        </p>
        <ul>
          <li><strong>Email:</strong> privacy@hireme.com</li>
          <li><strong>Phone:</strong> +92 302 638 9868</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Privacy;
