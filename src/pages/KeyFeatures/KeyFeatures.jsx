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
import Footer from '../../components/Footer/Footer';

const KeyFeatures = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const features = [
    { id: 1, title: "AI-based Simulators", bgImage: bg1 },
    { id: 2, title: "Live Chatrooms", bgImage: bg2 },
    { id: 3, title: "Voice Tasks", bgImage: bg3 },
    { id: 4, title: "Global Connect", bgImage: bg4 },
    { id: 5, title: "Debate & Interview", bgImage: bg5 },
    { id: 6, title: "Level-wise Growth", bgImage: bg6 },
    { id: 7, title: "Competitions & Events", bgImage: bg7 },
    { id: 8, title: "Leaderboards", bgImage: bg8 }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Reset transition delay when entering viewport
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1) {
            entry.target.style.transitionDelay = `${(index % 3) * 0.1}s`;
          }
        } else {
          // Remove the class when leaving viewport to allow re-animation
          entry.target.classList.remove('visible');
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
    <section ref={sectionRef}>
      <div className="key-features-container">
        <h2 className="section-heading" ref={headingRef}>Key Features</h2>
        
        <div className="Keyfeatures-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`Keyfeature-card ${index < 6 ? (index < 3 ? 'first-row' : 'second-row') : 'third-row'}`}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${feature.bgImage})`
              }}
            >
              <div className="Keyfeature-content">
                <h3 className="Keyfeature-title">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default KeyFeatures;