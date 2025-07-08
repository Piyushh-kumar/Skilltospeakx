import React from "react";
import "./OurVision.css";
import globe from '../../assets/globe.png';

const OurVision = () => {
  return (
    <div class="our-vision">
    <div className="vision-container">
      <div className="vision-content">
        <h1 className="vision-title">Our <span>Vision</span></h1>
        <p className="vision-text">
          To build a scalable, student-first platform that makes real communication skill-building an integral part of education across India, and sets the foundation to take this model global.
        </p>
      </div>
      <img src={globe} alt="Decorative globe" className="vision-globe" />
    </div>
    </div>
  );
};

export default OurVision;