import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'howitworks', label: 'How it Works' },
  { id: 'testimonials', label: 'Testimonials' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('hero');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [authType, setAuthType] = useState('customer');

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Listen to scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePortalClick = (type) => {
    setAuthType(type);
    setShowLoginModal(true);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          backgroundColor: 'var(--primary)',
          color: '#005acd',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container">
          <span
            className="navbar-brand fw-bold"
            style={{ cursor: 'pointer', color: '#fff', fontSize: '1.5rem' }}
            onClick={() => navigate('/')}
          >
            Eldercare
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: '#fff' }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {sections.map((section) => (
                <li className="nav-item" key={section.id}>
                  <span
                    className={`nav-link nav-animated-link${activeSection === section.id ? ' active' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </span>
                </li>
              ))}
            </ul>
            {/* Add spacing between navlinks and buttons */}
            <div className="d-flex ms-lg-4 mt-3 mt-lg-0">
              <button
                className="btn portal-btn mx-2"
                onClick={() => handlePortalClick('customer')}
              >
                Customer Portal
              </button>
              <button
                className="btn portal-btn mx-2"
                onClick={() => handlePortalClick('provider')}
              >
                Provider Portal
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {showLoginModal && (
        <LoginForm 
          userType={authType} 
          onClose={() => setShowLoginModal(false)} 
        />
      )}
      
      {showRegisterModal && (
        <RegisterForm 
          userType={authType} 
          onClose={() => setShowRegisterModal(false)} 
        />
      )}
    </>
  );
};

export default Navbar;