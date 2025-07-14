import React from 'react';
import ProviderHero from '../components/provider/ProviderHero';
import ProviderHowItWorks from '../components/provider/ProviderHowItWorks';
import ProviderWhyChooseUs from '../components/provider/ProviderWhyChooseUs';
import ProviderTestimonials from '../components/provider/ProviderTestimonials';
import ProviderNavbar from '../components/provider/ProviderNavbar';

const ProviderLanding = () => (
  <div className="app-bg-animated" aria-label="Provider Main Content">
    <ProviderNavbar />
    <ProviderHero />
    <ProviderHowItWorks />
    <ProviderWhyChooseUs />
    <ProviderTestimonials />
  </div>
);

export default ProviderLanding;