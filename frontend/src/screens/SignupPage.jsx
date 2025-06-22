import React from 'react';
import SignupForm from '../components/auth/SignupForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <AuthHeader active="signup" />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default SignupPage;