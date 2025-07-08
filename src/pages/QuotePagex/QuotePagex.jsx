import React from 'react';
import './Quote.css';
import quoteImage from '../../assets/quote.jpg'; 

function QuotePage() {
  return (
    <div className="quote-page">
      <div className="quote-card">
        <div className="quote-content">
          <div className="quote-text">
            <svg className="quote-icon" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="quote">The art of communication is the language of leadership.</p>
            <p className="author">— James Humes</p>
          </div>
          <div className="quote-image-container">
            <img src={quoteImage} alt="Communication illustration" className="quote-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotePage;