import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';

const ProviderNavbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/provider');
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-sm"
        style={{
          backgroundColor: 'var(--primary)',
          color: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div className="container">
          <span
            className="navbar-brand fw-bold"
            style={{ cursor: 'pointer', color: '#fff', fontSize: '1.5rem' }}
            onClick={() => navigate('/provider')}
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
              <li className="nav-item">
                <span
                  className="nav-link nav-animated-link"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/provider')}
                >
                  Home
                </span>
              </li>
              {!user && (
                <>
                  <li className="nav-item">
                    <span
                      className="nav-link nav-animated-link"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        const el = document.getElementById('howitworks');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      How it Works
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link nav-animated-link"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        const el = document.getElementById('whychooseus');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Why Choose Us
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link nav-animated-link"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        const el = document.getElementById('testimonials');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Testimonials
                    </span>
                  </li>
                </>
              )}
              {user && (
                <li className="nav-item">
                  <span
                    className="nav-link nav-animated-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/provider/dashboard')}
                  >
                    Dashboard
                  </span>
                </li>
              )}
            </ul>
            <div className="d-flex ms-lg-4 mt-3 mt-lg-0">
              {!user ? (
                <>
                  <button
                    className="btn portal-btn mx-2"
                    onClick={() => setShowRegister(true)}
                  >
                    Sign Up
                  </button>
                  <button
                    className="btn portal-btn mx-2"
                    onClick={() => setShowLogin(true)}
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  <span className="navbar-text me-3" style={{ color: '#fff' }}>
                    Welcome, {user.email}
                  </span>
                  <button
                    className="btn portal-btn mx-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {showLogin && (
        <LoginForm 
          userType="provider" 
          onClose={() => setShowLogin(false)} 
        />
      )}
      
      {showRegister && (
        <RegisterForm 
          userType="provider" 
          onClose={() => setShowRegister(false)} 
        />
      )}
    </>
  );
};

export default ProviderNavbar;