import React from 'react';
import ServiceProviderSignupForm from '../components/auth/ServiceProviderSignupForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const ServiceProviderSignupPage = () => {
  return (
    <div className="signup-page">
      <AuthHeader active="signup" />
      <ServiceProviderSignupForm />
      <Footer />
    </div>
  );
};

export default ServiceProviderSignupPage; 