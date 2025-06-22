import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Services from '../components/landing/Services';
import AboutUs from '../components/landing/AboutUs';
import Reviews from '../components/landing/Reviews';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

const Landing = () => (
  <div>
    <Header />
    <Hero />
    <Services />
    <AboutUs />
    <Reviews />
    <Contact />
    <Footer />
  </div>
);

export default Landing;