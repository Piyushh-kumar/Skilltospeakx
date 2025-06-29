import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';

export default function Contact() {
  const [state, handleSubmit] = useForm("xeokvvqq"); // Your Formspree form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                <p>contact@skilltospeak.com</p>
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
            {state.succeeded && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="error-message"
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
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="error-message"
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
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="error-message"
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}