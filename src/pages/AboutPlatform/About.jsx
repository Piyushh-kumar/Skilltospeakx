import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTarget, FiUsers, FiTrendingUp, FiGlobe, FiAward, FiZap } from 'react-icons/fi';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    navigate('/contact');
  };

  // Feature data
  const features = [
    {
      id: 1,
      icon: <FiUsers />,
      title: 'Community Driven',
      description: 'Building a vibrant community of learners and speakers committed to personal growth and communication excellence.'
    },
    {
      id: 2,
      icon: <FiTrendingUp />,
      title: 'Continuous Growth',
      description: 'Access comprehensive resources and structured programs designed to help you progress at your own pace.'
    },
    {
      id: 3,
      icon: <FiGlobe />,
      title: 'Global Reach',
      description: 'Connect with professionals and learners worldwide, expanding your network and opportunities.'
    },
    {
      id: 4,
      icon: <FiAward />,
      title: 'Recognized Excellence',
      description: 'Earn credentials and recognition that matter in the professional world and industry standards.'
    },
    {
      id: 5,
      icon: <FiZap />,
      title: 'Proven Results',
      description: 'Join thousands of professionals who have transformed their speaking and leadership abilities.'
    },
    {
      id: 6,
      icon: <FiTarget />,
      title: 'Personalized Approach',
      description: 'Tailored learning paths and coaching designed specifically for your unique goals and challenges.'
    }
  ];

  // Partner data
  const partners = [
    { name: 'Startup India', id: 1 },
    { name: 'NITI Aayog', id: 2 },
    { name: 'AIC-JKLU', id: 3 },
    { name: 'HDFC Parivartan', id: 4 },
    { name: 'Climate Collective', id: 5 },
    { name: 'Venture Centre', id: 6 },
    { name: 'NIOT Chennai', id: 7 }
  ];

  return (
    <div id="about">
      {/* Hero Section */}
      <section className="hero">
        <h1>About SkillToSpeakX</h1>
        <h2>Transform Your Communication, Lead with Confidence</h2>
        <p>
          Empowering professionals and organizations to master the art of public speaking, 
          communication excellence, and thought leadership in the digital age.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p className="mission-tagline">Democratizing excellence in communication for everyone</p>
        <div className="mission-content">
          <p className="mission-text">
            At SkillToSpeakX, our mission is to transform how professionals communicate, 
            present, and lead. We believe that effective communication is the cornerstone of 
            success in any field. Through innovative training methods, personalized coaching, 
            and a supportive community, we help thousands of individuals unlock their potential 
            and become confident speakers, influential leaders, and persuasive communicators.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <div className="vision-content">
          <p className="vision-text">
            We envision a world where anyone, regardless of their background or starting point, 
            can develop exceptional communication skills and lead with impact. We're building a 
            platform that combines cutting-edge technology, expert mentorship, and peer support 
            to create lasting transformation. Our vision extends beyond individual success—we're 
            committed to fostering responsible, ethical leadership that drives positive change 
            in organizations and communities worldwide.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners & Supporters</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <p className="partner-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Transform Your Communication?</h2>
        <p>
          Join thousands of professionals who have already started their journey with SkillToSpeakX. 
          Get in touch with our team to learn how we can help you achieve your communication goals.
        </p>
        <button className="cta-button" onClick={handleContactClick}>
          Get In Touch
        </button>
      </section>
    </div>
  );
};

export default About;
