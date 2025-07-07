import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../../assets/logo.jpg';
import Sidebar from '../Sidebar/Sidebar';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 100); // 100px buffer
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`hdx-header ${scrolled ? 'hdx-scrolled' : ''}`}>
        <div className="hdx-container">
          <div className="hdx-logo-container">
            <Link to="/" className="hdx-logo-link">
              <img
                src={logoImage}
                alt="Skill to Speak logo"
                className="hdx-logo-image" 
              />
              <h1 className={`hdx-brand-name ${scrolled ? '' : 'hdx-light-text'}`}>SKILL TO SPEAK</h1>
            </Link>
          </div>
          
          <nav className="hdx-nav-links">
            <Link to="/" className={`hdx-nav-link ${scrolled ? '' : 'hdx-light-text'}`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
            <Link to="/aboutUs" className={`hdx-nav-link ${scrolled ? '' : 'hdx-light-text'}`} onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            <Link to="/keyfeatures" className={`hdx-nav-link ${scrolled ? '' : 'hdx-light-text'}`} onClick={() => window.scrollTo(0, 0)}>Features</Link>
            <Link to="/early-access" className={`hdx-nav-link ${scrolled ? '' : 'hdx-light-text'}`} onClick={() => window.scrollTo(0, 0)}>Early Access</Link>
            <Link to="/contact" className={`hdx-nav-link ${scrolled ? '' : 'hdx-light-text'}`} onClick={() => window.scrollTo(0, 0)}>Contact</Link>
          </nav>
          
          <button 
            className={`hdx-hamburger ${sidebarOpen ? 'hdx-active' : ''} ${scrolled ? '' : 'hdx-light-hamburger'}`} 
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <span className="hdx-hamburger-line"></span>
            <span className="hdx-hamburger-line"></span>
            <span className="hdx-hamburger-line"></span>
          </button>
        </div>
      </header>
      
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      {sidebarOpen && (
        <div className="hdx-sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Header;