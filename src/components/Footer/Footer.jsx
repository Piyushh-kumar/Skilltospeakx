import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg'; // Make sure to have logo.jpg in your src folder

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="logo-container">
            <img src={logo} alt="Skill to Speak Logo" className="footer-logo-img" />
            <h2 className="footer-logo">SKILL TO SPEAK</h2>
          </div>
          <p className="footer-description">
            Skill to Speak helps students turn hesitation into confidence through daily voice practice, 
            real challenges, and a journey to become respectful communicators.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="/keyfeatures">Features</a></li>
            <li><a href="/aboutus">Our Team</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="footer-contact">
            <a href="mailto:hello@skilltospeak.com">hello@skilltospeak.com</a><br />
            <a href="tel:+919453056048">+91 9453056048</a><br />
            <a href="tel:+917897920550">+91 7897920550</a><br />
            Kanpur, Uttar Pradesh, India
          </address>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Subscribe newsletter</h3>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Email address" 
              className="email-input"
              required
            />
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span>I'm okay with getting emails</span>
            </label>
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Skill to Speak. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;