import React from 'react';
import './FoundersNote.css';
import Footer from '../../components/Footer/Footer';

function FoundersNote() {
  return (
    <section>
    <section className="founders-note-page">
      <div className="container">
        <div className="founders-note-content">
          <h1 className="page-title">Founder's Note</h1>
          
          <div className="note-card">
            <p className="note-text">
              Too many students hesitate to speak — not because they lack potential, 
              but because they've never had a space to build real communication confidence.
            </p>
            
            <p className="note-text">
              At Skill-to-Speak, we're bridging that gap with a voice-first platform 
              that helps every student practice, progress, and speak with clarity — 
              one level, one task at a time.
            </p>
            
            <div className="signature">
              <p className="signature-name">The Skill-to-Speak Team</p>
            </div>
          </div>
        </div>
      </div>
   
    </section>
    
      <Footer />
    </section>
  );
}

export default FoundersNote;