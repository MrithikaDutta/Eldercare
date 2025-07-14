import React from 'react';
import CustomerHero from '../components/customer/CustomerHero';
import CustomerHowItWorks from '../components/customer/CustomerHowItWorks';
import CustomerSearchPreview from '../components/customer/CustomerSearchPreview';
import CustomerWhyChooseUs from '../components/customer/CustomerWhyChooseUs';
import CustomerTestimonials from '../components/customer/CustomerTestimonials';
import CustomerNavbar from '../components/customer/CustomerNavbar';

const CustomerLanding = () => (
  <div className="app-bg-animated" aria-label="Customer Main Content">
    <CustomerNavbar />
    <CustomerHero />
    <CustomerHowItWorks />
    <CustomerSearchPreview />
    <CustomerWhyChooseUs />
    <CustomerTestimonials />
  </div>
);

export default CustomerLanding;