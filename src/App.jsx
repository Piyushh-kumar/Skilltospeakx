import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/AboutPlatform/AboutPlatform';
import Features from './pages/Features/Features';
import EarlyAccess from './pages/EarlyAccess/EarlyAccess';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import FoundersNote from './pages/FoundersNote/FoundersNote';
import KeyFeatures from './pages/KeyFeatures/KeyFeatures';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/early-access" element={<EarlyAccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/foundersnote" element={<FoundersNote />} />
        <Route path="/keyfeatures" element={<KeyFeatures />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;