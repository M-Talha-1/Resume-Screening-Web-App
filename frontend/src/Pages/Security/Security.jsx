import React from "react";
import "./Security.css";

const Security = () => {
  return (
    <div> 
  <section className="hero-section small_banner">
    <h1 className="hero-title">Our Commitment to Security</h1>
    <p className="hero-description">
    Learn how we protect your data with advanced security measures.
    </p>
</section>
    <div className="security-page">
     
      <div className="security-content">
        <h2>End-to-End Encryption</h2>
        <p>
          All data you share with us, including resumes and personal details, is encrypted
          using the latest SSL/TLS protocols. This ensures your information remains secure
          during transmission between your device and our servers.
        </p>

        <h2>Secure Data Storage</h2>
        <p>
          Your data is stored in highly secure servers that use multi-layered protection,
          including firewalls and intrusion detection systems. Regular audits are performed
          to maintain the highest standards of data safety.
        </p>

        <h2>Access Control</h2>
        <p>
          We enforce strict access control policies, ensuring that only authorized
          personnel with a legitimate need can access your data. All access is monitored
          and logged to prevent unauthorized activity.
        </p>

        <h2>Regular Security Updates</h2>
        <p>
          Our systems are regularly updated with the latest security patches to guard
          against emerging threats. We work tirelessly to stay ahead of potential risks
          and vulnerabilities.
        </p>

        <h2>Transparency and User Control</h2>
        <p>
          We believe in full transparency when it comes to security. You have complete
          control over your data, with the ability to view, update, or delete your
          information at any time.
        </p>

        <h2>Contact Our Security Team</h2>
        <p>
          If you have any questions or concerns about our security practices, please
          contact our dedicated security team:
        </p>
        <ul>
          <li><strong>Email:</strong> security@hireme.com</li>
          <li><strong>Phone:</strong> +92 302 638 9868</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Security;
