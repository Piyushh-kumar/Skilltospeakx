import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.jpg';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validation
    if (!email) {
      setError('Email is required');
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", "38b836b6-b0cb-4788-a1d3-cf6b5f12c094");
      formData.append("email", email);
      formData.append("subject", "New Newsletter Subscription");
      formData.append("from_name", "SkillToSpeak Website");
      formData.append("botcheck", ""); // Important for bot protection

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError(result.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      console.error("Subscription error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="ft-main">
      <div className="ft-container">
        {/* Logo & Description Section */}
        <div className="ft-section ft-logo-section">
          <div className="ft-logo-container">
            <img src={logo} alt="Skill to Speak Logo" className="ft-logo-img" />
            <h2 className="ft-logo-text">SKILL TO SPEAK</h2>
          </div>
          <p className="ft-description">
            Skill to Speak helps students turn hesitation into confidence through daily voice practice, 
            real challenges, and a journey to become respectful communicators.
          </p>
          <div className="ft-social-icons">
            <a href="https://www.instagram.com/skilltospeak?igsh=MjBncmtzdW16MnRv" className="ft-social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/skill-to-speak/" className="ft-social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://x.com/SkilltoSpeak?s=09" className="ft-social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@skilltospeak?feature=shared" className="ft-social-icon" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="ft-section ft-links-section">
          <h3 className="ft-heading">Quick Links</h3>
          <ul className="ft-links-list">
            <li className="ft-link-item"><Link to="/keyfeatures" className="ft-link">Key Features</Link></li>
            <li className="ft-link-item"><Link to="/aboutus" className="ft-link">About us</Link></li>
            <li className="ft-link-item"><Link to="/early-access" className="ft-link">Early Access</Link></li>
            <li className="ft-link-item"><Link to="/contact" className="ft-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="ft-section ft-contact-section">
          <h3 className="ft-heading">Contact Us</h3>
          <address className="ft-contact-info">
            <div className="ft-contact-item">
              <svg className="ft-contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:hello@skilltospeak.com" className="ft-contact-link">hello@skilltospeak.com</a>
            </div>
            <div className="ft-contact-item">
              <svg className="ft-contact-icon" viewBox="0 0 24 24">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <div className="ft-phone-numbers">
                <a href="tel:+919453056048" className="ft-contact-link">+91 9453036048</a>
                <a href="tel:+917897920550" className="ft-contact-link">+91 7897920550</a>
              </div>
            </div>
            <div className="ft-contact-item">
              <svg className="ft-contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="ft-contact-text">Kanpur, Uttar Pradesh, India</span>
            </div>
          </address>
        </div>

        {/* Newsletter Section */}
        <div className="ft-section ft-newsletter-section">
          <h3 className="ft-heading">Stay Updated</h3>
          {isSubscribed ? (
            <div className="ft-newsletter-success">
              <svg className="ft-success-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <p className="ft-success-message">Thank you for subscribing!</p>
              <button 
                className="ft-secondary-btn"
                onClick={() => setIsSubscribed(false)}
              >
                Subscribe Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ft-newsletter-form">
              {error && <div className="ft-newsletter-error">{error}</div>}
              <input 
                type="email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Your email address" 
                className="ft-email-input"
                required
              />
              <label className="ft-checkbox-label">
                <input type="checkbox" className="ft-checkbox-input" required />
                <span className="ft-checkbox-text">I agree to receive updates</span>
              </label>
              <button 
                type="submit" 
                className="ft-subscribe-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
                {!isLoading && (
                  <svg className="ft-send-icon" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="ft-mobile-social">
        <a href="https://www.instagram.com/skilltospeak?igsh=MjBncmtzdW16MnRv" className="ft-mobile-social-icon" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/skill-to-speak/" className="ft-mobile-social-icon" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://x.com/SkilltoSpeak?s=09" className="ft-mobile-social-icon" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://youtube.com/@skilltospeak?feature=shared" className="ft-mobile-social-icon" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.503a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>

      {/* Copyright Section */}
      <div className="ft-bottom">
        <div className="ft-bottom-content">
          <p className="ft-copyright">© {new Date().getFullYear()} Skill to Speak. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;