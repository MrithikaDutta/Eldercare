import React from 'react';
import { FaHandsHelping, FaHeart, FaUserFriends, FaShieldAlt } from 'react-icons/fa';

const AboutSection = () => (
  <section
    id="about"
    className="py-5 py-lg-7 section-animated"
    style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg-main)' //background color from CSS variable
    }}
  >
    <div className="container text-center">
      <h2 style={{ fontSize: '2.5rem' }}>
        <FaHandsHelping style={{ marginRight: 8, color: '#2A9D8F' }} />
        About Our Platform
      </h2>
      <p className="mt-3" style={{ fontSize: '1.25rem' }}>
        We connect elders with trusted companions, making daily life easier and more joyful. Our mission is to foster social impact and provide peace of mind for families.
      </p>
      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <FaHeart size={40} color="#F4A261" />
          <h5 className="mt-3">Compassionate Care</h5>
          <p>
            Our companions are selected for their empathy and dedication, ensuring every elder feels valued and respected.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaUserFriends size={40} color="#5B7DB1" />
          <h5 className="mt-3">Building Connections</h5>
          <p>
            We believe in the power of friendship. Our platform helps elders find meaningful companionship and stay socially active.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <FaShieldAlt size={40} color="#2A9D8F" />
          <h5 className="mt-3">Trusted & Secure</h5>
          <p>
            Safety is our top priority. All companions are thoroughly vetted and background-checked for your peace of mind.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;