import { Link } from 'react-router-dom';
import './Sidebar.css';
import logoImage from '../../assets/logo.jpg';

function Sidebar({ isOpen, toggle }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" onClick={toggle} style={{ textDecoration: 'none' }}>
          <img src={logoImage} alt="Skill to Speak logo" className="sidebar-logo" />
          <h1 className="sidebar-brand">SKILL TO SPEAK</h1>
        </Link>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" onClick={toggle}>Home</Link>
        <Link to="/aboutUs" onClick={toggle}>About Us</Link>
        <Link to="/keyfeatures" onClick={toggle}>Features</Link>
        <Link to="/early-access" onClick={toggle}>Early Access</Link>
        <Link to="/contact" onClick={toggle}>Contact</Link>
      </nav>
    </div>
  );
}

export default Sidebar;