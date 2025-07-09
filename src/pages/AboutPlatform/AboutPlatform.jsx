import './AboutPlatform.css';
import platformImage from '../../assets/imagex.png';

function AboutPlatform() {
  return (
    <section className="about-platform">
      <div className="platform-container">
        <div className="platform-content">
          <h2 className="section-title">About the Platform</h2>
          <p className="platform-description">
Skill to Speak is a dynamic platform that helps individuals build strong communication skills through interactive tools and AI-powered feedback. From interview prep to group discussions and stage confidence, we offer gamified learning and real-world practice to help users speak with clarity, confidence, and impact. Communication is a superpower—and we’re here to help you unlock it.</p>
        </div>
        
        <div className="platform-image">
          <img src={platformImage} alt="Students practicing speaking" />
        </div>
      </div>
    </section>
  );
}

export default AboutPlatform;