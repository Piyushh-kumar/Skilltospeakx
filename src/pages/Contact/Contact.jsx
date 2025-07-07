import { useState } from 'react';
import './Contact.css'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, submitting: false, error: '' });

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

    const form = new FormData();
    form.append("access_key", "38b836b6-b0cb-4788-a1d3-cf6b5f12c094"); // 🔑 Replace with your actual key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitted: true, submitting: false, error: '' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitted: false, submitting: false, error: result.message || "Something went wrong" });
      }
    } catch (err) {
      setStatus({ submitted: false, submitting: false, error: "Network error. Please try again later." });
    }
  };

  return (
    <section>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>hello@skilltospeak.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 9453036048</p>
                <p>+91 7897920550</p>
              </div>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Address</h3>
                <p>Kanpur, Uttar Pradesh</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {status.submitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status.error && (
              <div className="error-message">{status.error}</div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
