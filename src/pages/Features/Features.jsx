import { useEffect, useRef, useState } from 'react';
import './Features.css';
import { FaMicrophone, FaChartLine, FaGamepad, FaCertificate } from 'react-icons/fa';

function Features() {
  const features = [
    {
      title: "Voice-based Daily Tasks",
      description: "Complete daily speaking tasks, track your voice streaks, and level up your communication like a pro.",
      icon: <FaMicrophone />
    },
    {
      title: "Structured Levels",
      description: "Progress through 50+ communication levels, from basics to real-world simulations, designed to build skill step by step.",
      icon: <FaChartLine />
    },
    {
      title: "Gamified Experience",
      description: "Stay motivated with voice streaks, badges, leaderboards, and unlocks that make skill-building feel like a game.",
      icon: <FaGamepad />
    },
    {
      title: "Real Skills + Certifications",
      description: "Build practical communication skills and earn shareable certificates that strengthen your personal and professional brand.",
      icon: <FaCertificate />
    }
  ];

  const featureRefs = useRef([]);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollInterval = useRef(null);

  // Check mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isMobile) return;

    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % features.length);
      }, 3000); // Change slide every 3 seconds
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };

    startAutoScroll();
    
    // Pause on hover
    const carousel = containerRef.current;
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoScroll);
      carousel.addEventListener('mouseleave', startAutoScroll);
      carousel.addEventListener('touchstart', stopAutoScroll);
      carousel.addEventListener('touchend', startAutoScroll);
    }

    return () => {
      stopAutoScroll();
      if (carousel) {
        carousel.removeEventListener('mouseenter', stopAutoScroll);
        carousel.removeEventListener('mouseleave', startAutoScroll);
        carousel.removeEventListener('touchstart', stopAutoScroll);
        carousel.removeEventListener('touchend', startAutoScroll);
      }
    };
  }, [isMobile, features.length]);

  // Scroll to current index
  useEffect(() => {
    if (!isMobile) return;
    
    const card = featureRefs.current[currentIndex];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentIndex, isMobile]);

  const handleScroll = (direction) => {
    if (!isMobile) return;
    
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % features.length 
      : (currentIndex - 1 + features.length) % features.length;
    
    setCurrentIndex(newIndex);
  };

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="section-title">What We Offer</h2>
        
        <div className="features-wrapper">
          {isMobile && (
            <button 
              className="carousel-arrow left"
              onClick={() => handleScroll('prev')}
              aria-label="Previous feature"
            >
              &lt;
            </button>
          )}
          
          <div 
            className={`features-grid ${isMobile ? 'mobile-carousel' : ''}`}
            ref={containerRef}
          >
            {features.map((feature, index) => (
              <div 
                className="feature-card" 
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
              >
                <div className="card-content">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {isMobile && (
            <button 
              className="carousel-arrow right"
              onClick={() => handleScroll('next')}
              aria-label="Next feature"
            >
              &gt;
            </button>
          )}
        </div>
        
        {isMobile && (
          <div className="carousel-indicators">
            {features.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;