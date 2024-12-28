import React from "react";
import "./Term.css";

const Term = () => {
  return (
    <div>
         <section className="hero-section small_banner">
    <h1 className="hero-title">Terms and Conditions</h1>
    <p className="hero-description">
    Please read these terms and conditions carefully before using our platform.
    </p>
</section>
    
    <div className="terms-page">
    
      <div className="terms-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the HireMe platform, you agree to comply with
          and be bound by these Terms and Conditions. If you do not agree with
          any part of these terms, you must discontinue use of the platform.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>
          As a user of our platform, you are responsible for ensuring that any
          information or data you upload, including resumes, is accurate,
          lawful, and does not violate any third-party rights. You agree not to
          misuse the platform in any way, including attempting unauthorized
          access or disrupting services.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content, designs, logos, and intellectual property on the HireMe
          platform are the exclusive property of HireMe and are protected under
          copyright and trademark laws. You may not reproduce, distribute, or
          use any materials without prior written consent from HireMe.
        </p>

        <h2>4. Limitation of Liability</h2>
        <p>
          HireMe is not liable for any direct, indirect, incidental, or
          consequential damages resulting from your use of the platform. We
          provide the platform "as is" and do not guarantee error-free or
          uninterrupted operation.
        </p>

        <h2>5. Termination of Access</h2>
        <p>
          HireMe reserves the right to suspend or terminate your access to the
          platform at our discretion, without notice, if we believe you have
          violated these terms or engaged in unlawful activity.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of [Your Jurisdiction]. Any disputes arising from these
          terms will be resolved exclusively in the courts of [Your Jurisdiction].
        </p>

        <h2>7. Updates to Terms</h2>
        <p>
          HireMe reserves the right to modify these Terms and Conditions at any
          time. Users will be notified of significant changes, and continued
          use of the platform signifies your acceptance of the updated terms.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at:
        </p>
        <ul>
          <li><strong>Email:</strong> terms@hireme.com</li>
          <li><strong>Phone:</strong> +92 302 638 9868</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Term;
