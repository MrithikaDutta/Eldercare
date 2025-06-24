import React from 'react';
import ServiceProviderLoginForm from '../components/auth/ServiceProviderLoginForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const ServiceProviderLoginPage = () => {
  return (
    <div className="login-page">
      <AuthHeader active="login" />
      <ServiceProviderLoginForm />
      <Footer />
    </div>
  );
};

export default ServiceProviderLoginPage; 