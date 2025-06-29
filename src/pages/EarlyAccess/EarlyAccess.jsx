// src/pages/EarlyAccess.jsx
import { useState } from 'react';
import { FaCheckCircle, FaRegClock, FaGift, FaUserShield } from 'react-icons/fa';
import './EarlyAccess.css';
import Footer from '../../components/Footer/Footer';

export default function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Here you would typically send to your backend
    console.log('Early access signup:', email);
    setIsSubscribed(true);
    setEmail('');
    setError('');
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
          {isSubscribed ? (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>You're now on our early access list. We'll contact you soon with next steps.</p>
              <button 
                className="secondary-btn"
                onClick={() => setIsSubscribed(false)}
              >
                Back to Form
              </button>
            </div>
          ) : (
            <>
              <h2>Join the Waitlist</h2>
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    placeholder="your@email.com"
                    className={error ? 'error' : ''}
                  />
                  {error && <span className="error-message">{error}</span>}
                </div>
                <button type="submit" className="primary-btn">
                  Get Early Access
                </button>
              </form>
              <p className="privacy-note">
                We respect your privacy. Your email will only be used for early access updates.
              </p>
            </>
          )}
        </div>
      </div>

    </div>
    <Footer />
    </section>
  );
}