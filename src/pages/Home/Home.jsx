import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImage from '../../assets/Background.png';
import About from '../AboutPlatform/AboutPlatform';
import Features from '../Features/Features';
import Footer from '../../components/Footer/Footer';
import KeyFeatures from '../KeyFeatures/KeyFeatures';
import OurVision from '../OurVision/OurVision';
import QuotePage from '../QuotePagex/QuotePagex';

function Hero() {
  return (
    <div className="home-container">
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <div className="text-container">
            <h2 className="hero-tagline">LEARN TO SPEAK.<br/>LEAD THE WORLD</h2>
            <p className="hero-subtext">Where students transform hesitation into expression</p>
            <Link to="/early-access" style={{ textDecoration: 'none' }}>
              <button className="cssbuttons-io-button">
                Register for Early Access
                <div className="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <About />
      <Features />
      <KeyFeatures />
      <QuotePage />
      
      
    </div>
  );
}

export default Hero;