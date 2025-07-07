// src/pages/EarlyAccess.jsx
import { useState } from 'react';
import { FaCheckCircle, FaRegClock, FaGift, FaUserShield, FaSpinner } from 'react-icons/fa';
import './EarlyAccess.css';

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState({ 
    submitted: false, 
    submitting: false, 
    error: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus({ submitted: false, submitting: false, error: 'All fields are required' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ submitted: false, submitting: false, error: 'Please enter a valid email' });
      return;
    }

    const form = new FormData();
    form.append("access_key", "38b836b6-b0cb-4788-a1d3-cf6b5f12c094"); // Replace with your actual key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", "Early Access Signup");
    form.append("from_name", "SkillToSpeak Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitted: true, submitting: false, error: '' });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus({ 
          submitted: false, 
          submitting: false, 
          error: result.message || "Something went wrong. Please try again." 
        });
      }
    } catch (err) {
      setStatus({ 
        submitted: false, 
        submitting: false, 
        error: "Network error. Please try again later." 
      });
    }
  };

  return (
    <section>
      <div className="early-access-container">
        <div className="early-access-hero">
          <h1>Get Early Access</h1>
          <p>Be among the first to experience SkillToSpeak with exclusive benefits</p>
        </div>

        <div className="early-access-content">
          <div className="benefits-section">
            <h2>Why Join Early?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaRegClock className="benefit-icon" />
                <h3>First Access</h3>
                <p>Get immediate access before public launch</p>
              </div>
              <div className="benefit-card">
                <FaGift className="benefit-icon" />
                <h3>Exclusive Perks</h3>
                <p>Special bonuses only for early users</p>
              </div>
              <div className="benefit-card">
                <FaUserShield className="benefit-icon" />
                <h3>Lifetime Discount</h3>
                <p>Lock in special pricing forever</p>
              </div>
              <div className="benefit-card">
                <FaCheckCircle className="benefit-icon" />
                <h3>Shape the Product</h3>
                <p>Your feedback helps us build the best features</p>
              </div>
            </div>
          </div>

          <div className="signup-section">
            {status.submitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h2>Thank You for Signing Up!</h2>
                <p>You're now on our early access list. We'll contact you soon with more details.</p>
                <button 
                  className="secondary-btn"
                  onClick={() => setStatus({ submitted: false, submitting: false, error: '' })}
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <>
                <h2>Join the Waitlist</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                  {status.error && (
                    <div className="error-message">{status.error}</div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="primary-btn"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <FaSpinner className="spinner" /> Submitting...
                      </>
                    ) : (
                      'Get Early Access'
                    )}
                  </button>
                </form>
                <p className="privacy-note">
                  We respect your privacy. Your information will only be used for early access updates.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}