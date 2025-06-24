import React from 'react';
import CustomerSignupForm from '../components/auth/CustomerSignupForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const CustomerSignupPage = () => {
  return (
    <div className="signup-page">
      <AuthHeader active="signup" />
      <CustomerSignupForm />
      <Footer />
    </div>
  );
};

export default CustomerSignupPage; 