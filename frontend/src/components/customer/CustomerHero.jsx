import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerHero = () => {
  const navigate = useNavigate();
  return (
    <section
      className="hero-section d-flex align-items-center section-animated"
      style={{
        backgroundImage: "linear-gradient(rgba(51,62,72,0.45), rgba(51,62,72,0.45)), url('/public/images/customer-hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        color: '#fff'
      }}
    >
      <div className="container text-center">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Find Compassionate Caregivers for Your Loved Ones
        </h1>
        <p className="lead" style={{ fontSize: '1.25rem' }}>
          Connecting families with trusted, non-medical companions for elders.
        </p>
        <div className="mt-4">
          <button
            className="btn btn-primary mx-2"
            style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
            onClick={() => navigate('/customer/browse')}
          >
            🔍 Browse Companions
          </button>
          <button
            className="btn btn-outline-light mx-2"
            style={{ fontSize: '1.1rem', padding: '0.75rem 2rem' }}
            onClick={() => navigate('/customer/register')}
          >
            📝 Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerHero;