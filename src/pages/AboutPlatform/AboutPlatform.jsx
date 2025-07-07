import './AboutPlatform.css';
import platformImage from '../../assets/imagex.png';

function AboutPlatform() {
  return (
    <section className="about-platform">
      <div className="platform-container">
        <div className="platform-content">
          <h2 className="section-title">About the Platform</h2>
          <p className="platform-description">
           SkillToSpeak is an innovative platform dedicated to transforming the way individuals build and practice communication skills. Whether it's preparing for interviews, mastering group discussions, or overcoming stage fear, we provide engaging, interactive tools to help users gain confidence and clarity in their speech. Through AI-powered analysis, gamified learning experiences, and real-world practice modules, SkillToSpeak empowers students and professionals alike to express themselves with impact and authenticity. We believe that communication is not just a skill—it's a superpower, and we're here to help you unlock it.


          </p>
        </div>
        
        <div className="platform-image">
          <img src={platformImage} alt="Students practicing speaking" />
        </div>
      </div>
    </section>
  );
}

export default AboutPlatform;