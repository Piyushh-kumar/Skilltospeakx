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
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <Link to="/" className="logo-link">
              <img
                src={logoImage}
                alt="Skill to Speak logo"
                className="logo-image" 
              />
              <h1 className={`brand-name ${scrolled ? '' : 'light-text'}`}>SKILL TO SPEAK</h1>
            </Link>
          </div>
          
          <nav className="nav-links">
            <Link to="/" className={scrolled ? '' : 'light-text'}>Home</Link>
            <Link to="/aboutUs" className={scrolled ? '' : 'light-text'}>About Us</Link>
            <Link to="/keyfeatures" className={scrolled ? '' : 'light-text'}>Features</Link>
            <Link to="/early-access" className={scrolled ? '' : 'light-text'}>Early Access</Link>
            <Link to="/contact" className={scrolled ? '' : 'light-text'}>Contact</Link>
          </nav>
          
          <button 
            className={`hamburger ${sidebarOpen ? 'active' : ''} ${scrolled ? '' : 'light-hamburger'}`} 
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

export default Header;