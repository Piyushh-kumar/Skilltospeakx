import React, { useEffect, useRef } from 'react';
import './KeyFeatures.css';
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";
import bg6 from "../../assets/bg6.png";
import bg7 from "../../assets/bg7.png";
import bg8 from "../../assets/bg8.png";

const KeyFeatures = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const features = [
    { 
      id: 1, 
      title: "AI-Based Simulators", 
      bgImage: bg1,
      description: "Practice real-life speaking scenarios like interviews, debates, and group discussions with our smart AI simulators that give instant feedback on clarity, confidence, and tone."
    },
    { 
      id: 2, 
      title: "Live Chatrooms", 
      bgImage: bg2,
      description: "Join real-time chatrooms with learners across the globe to discuss, express, and grow together — build fluency through active peer interaction."
    },
    { 
      id: 3, 
      title: "Voice Tasks", 
      bgImage: bg3,
      description: "Complete daily voice-based challenges designed to improve pronunciation, fluency, and clarity. Speak, record, and get personalized feedback."
    },
    { 
      id: 4, 
      title: "Global Connect", 
      bgImage: bg4,
      description: "Connect with communication partners worldwide. Experience diverse perspectives, cultures, and speaking styles — all in one place."
    },
    { 
      id: 5, 
      title: "Debate & Interview Rooms", 
      bgImage: bg5,
      description: "Step into structured debates and mock interviews to build confidence under pressure, sharpen thinking, and master impactful speaking."
    },
    { 
      id: 6, 
      title: "Leaderboard & Progress", 
      bgImage: bg8,
      description: "Track your progress, earn ranks, and stay motivated. Our leaderboard celebrates consistency, improvement, and real speaking effort."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('kf-visible');
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1) {
            entry.target.style.transitionDelay = `${(index % 3) * 0.1}s`;
          }
        } else {
          entry.target.classList.remove('kf-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    cardRefs.current.forEach((card) => card && observer.observe(card));

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      cardRefs.current.forEach((card) => card && observer.unobserve(card));
    };
  }, []);

  return (
    <section ref={sectionRef} className="kf-section">
      <div className="kf-container">
        <h2 className="kf-heading" ref={headingRef}>Key Features</h2>
        
        <div className="kf-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="kf-card"
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${feature.bgImage})` }}
            >
              <div className="kf-card-content">
                <h3 className="kf-card-title">{feature.title}</h3>
                <p className="kf-card-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;