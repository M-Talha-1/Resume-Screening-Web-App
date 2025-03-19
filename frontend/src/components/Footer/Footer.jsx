import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">       
        <div className='footer-logo'> 
                <span className='Hire'><Link to="/">Hire</Link></span> 
                <span className='Mee'> <Link to="/">Me</Link></span>
                </div> 
          <p className="footer-description footertext">
            Our platform is designed to streamline and simplify your hiring journey, allowing you to recruit with ease.
          </p>
          <p className="footer-address footertext">
            21/25 Broad Street, Lagos Island, Lagos <br />
            <a href="mailto:comms@hireme.net">comms@hireme.net</a>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className='footertext' >Our Company</h3>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/term">Term</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className='footertext'>Resources</h3>
            <ul>
              <li><Link to="#">Blog</Link></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className='footertext'> Support</h3>
            <ul>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/newsletter">Newsletter</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='footertext'>© 2024 HireMe. All Rights Reserved</p>
      </div>
    </footer>
    )
}

export default Footer