import './AboutPlatform.css';
import platformImage from '../../assets/imagex.png';
import visionIcon from '../../assets/ic1.svg';
import missionIcon from '../../assets/ic2.svg';
import goalIcon from '../../assets/ic3.svg';

function AboutPlatform() {
  return (
    <section className="about-platform">
      <div className="platform-container">
        <div className="platform-content">
          <h2 className="section-title">About the Platform</h2>
          <p className="platform-description">
            Most students never get a chance to practice<br />
            speaking in a structured way—we're<br />
            changing that.
          </p>
          
          <div className="platform-features">
            <div className="feature">
              <img src={visionIcon} alt="Vision" className="feature-icon" />
              <h3>Vision</h3>
            </div>
            <div className="feature">
              <img src={missionIcon} alt="Missions" className="feature-icon" />
              <h3>Missions</h3>
            </div>
            <div className="feature">
              <img src={goalIcon} alt="Goals" className="feature-icon" />
              <h3>Goals</h3>
            </div>
          </div>
        </div>
        
        <div className="platform-image">
          <img src={platformImage} alt="Students practicing speaking" />
        </div>
      </div>
    </section>
  );
}

export default AboutPlatform;