import React from 'react';
import CustomerLoginForm from '../components/auth/CustomerLoginForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const CustomerLoginPage = () => {
  return (
    <div className="login-page">
      <AuthHeader active="login" />
      <CustomerLoginForm />
      <Footer />
    </div>
  );
};

export default CustomerLoginPage; 