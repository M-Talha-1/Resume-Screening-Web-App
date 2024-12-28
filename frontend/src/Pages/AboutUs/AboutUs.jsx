import React from "react";
import "./AboutUs.css";
import CEO from '../../assets/CEO.jpg'

const AboutUs = () => {
  return (
    <div>  <section className="hero-section small_banner">
    <h1 className="hero-title">About Us</h1>
    <p className="hero-description">
    Empowering businesses to hire smarter with innovative AI-driven solutions.                    </p>
</section>
    <div className="about-us-page">
      {/* About Company Section */}
      <section className="about-company">
        <h1>About Our Company</h1>
        <p>
          At HireMe, we are dedicated to revolutionizing the hiring process with
          cutting-edge AI solutions. Our mission is to empower businesses to
          find top talent effortlessly, enabling them to grow and thrive in
          today’s competitive landscape. With innovation, integrity, and
          collaboration at the heart of everything we do, we strive to deliver
          exceptional value to our clients and partners worldwide.
        </p>
      </section>

      {/* CEO Section */}
      <section className="about-ceo">
        <h2 >Meet Our CEO</h2>
        <div className="ceo-content">
          <img
            src={CEO}
            alt="Muhammad Umar"
            className="ceo-image"
          />
          <div className="ceo-description">
            <h3>Muhammad Umar</h3>
            <p>
              Muhammad Umar, the visionary behind HireMe, is passionate about
              leveraging technology to solve real-world challenges. With years
              of expertise in AI and business innovation, he has been at the
              forefront of transforming recruitment processes to help companies
              achieve success through smarter hiring.
            </p>
          </div>
        </div>
      </section>

      {/* About Products Section */}
      <section className="about-products">
        <h2>Our Products</h2>
        <p>
          HireMe offers a range of AI-powered tools that streamline and enhance
          the hiring journey. From automated resume screening to detailed
          analytics and candidate evaluation, our solutions are designed to
          save time, reduce costs, and improve hiring accuracy. Discover how
          HireMe can help your business build a stronger, more capable team.
        </p>
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
