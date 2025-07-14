import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import RegisterForm from '../auth/RegisterForm';

const ProviderHero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleStartEarning = () => {
    if (user && user.user_type === 'provider') {
      navigate('/provider/dashboard');
    } else {
      navigate('/provider/dashboard');
    }
  };

  const handleGetStarted = () => {
    if (user && user.user_type === 'provider') {
      navigate('/provider/dashboard');
    } else {
      setShowRegisterModal(true);
    }
  };

  return (
    <>
      <section
        className="hero-section d-flex align-items-center section-animated"
        style={{
          backgroundImage: "linear-gradient(rgba(51,62,72,0.45), rgba(51,62,72,0.45)), url('/public/images/provider-hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          color: '#fff'
        }}
      >
        <div className="container text-center">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Make a Difference in Elders' Lives
          </h1>
          <p className="lead" style={{ fontSize: '1.25rem' }}>
            Join our community of compassionate caregivers and earn while helping others.
          </p>
          <div className="mt-4">
            <button
              className="btn btn-primary mx-2"
              style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
              onClick={handleStartEarning}
            >
              💰 Start Earning
            </button>
            <button
              className="btn btn-outline-light mx-2"
              style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
              onClick={handleGetStarted}
            >
              📝 Join Today
            </button>
          </div>
        </div>
      </section>
      
      {showRegisterModal && (
        <RegisterForm 
          userType="provider" 
          onClose={() => setShowRegisterModal(false)} 
        />
      )}
    </>
  );
};

export default ProviderHero;