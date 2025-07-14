import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import '../styles/HeroSection.css'; 

const HeroSection = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [authType, setAuthType] = useState('customer');

  const handleFindCompanion = () => {
    setAuthType('customer');
    setShowRegisterModal(true);
  };

  const handleBecomeCompanion = () => {
    setAuthType('provider');
    setShowRegisterModal(true);
  };

  return (
    <>
      <section
        id="hero"
        className="hero-section d-flex align-items-center section-animated"
        style={{
          backgroundImage: "linear-gradient(rgba(51,62,72,0.45), rgba(51,62,72,0.45)), url('/public/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          color: '#fff'
        }}
      >
        <div className="container text-center" style={{ color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff' }}>
            Connecting Elders with Compassionate Companions
          </h1>
          <p className="lead" style={{ fontSize: '1.5rem', color: '#fff' }}>
            Empowering independence, fostering friendship.
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary mx-2"
              style={{ fontSize: '1.25rem', padding: '0.75rem 2rem' }}
              onClick={handleFindCompanion}
            >
              Find a Companion
            </button>
            <button
              className="btn btn-outline-light mx-2"
              style={{ fontSize: '1.25rem', padding: '0.75rem 2rem' }}
              onClick={handleBecomeCompanion}
            >
              Become a Companion
            </button>
          </div>
        </div>
      </section>
      
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

export default HeroSection;
