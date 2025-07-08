import React from 'react';
import './FoundersNote.css';


function FoundersNote() {
  return (
    <section>
    <section className="founders-note-wrapper">
      <div className="founders-note-hero">
        <div className="heron-overlay"></div>
        <div className="heron-content">
          <h1 className="heron-title">Founder's Vision</h1>
          <p className="heron-subtitle">Our journey to empower voices</p>
        </div>
      </div>

      <div className="founders-note-container">
        <div className="founders-note-card">
          <div className="quote-mark top">“</div>
          
          <div className="note-content">
            <p className="note-text">
              Too many students hesitate to speak — not because they lack potential, 
              but because they've never had a space to build real communication confidence.
            </p>
            
            <p className="note-text">
              At Skill-to-Speak, we're bridging that gap with a voice-first platform 
              that helps every student practice, progress, and speak with clarity — 
              one level, one task at a time.
            </p>
          </div>
          
          <div className="signature-block">
            <div className="signature-line"></div>
            <p className="signature-name">The Skill-to-Speak Team</p>
            <p className="signature-title">Founders</p>
          </div>
          
          <div className="quote-mark bottom">”</div>
        </div>
      </div>
      </section>
    
    </section>
  );
}

export default FoundersNote;