import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landing = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Optionally, focus the main container for accessibility
    if (bgRef.current) {
      bgRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={bgRef}
      className="app-bg-animated"
      tabIndex={-1}
      aria-label="Main Content"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;