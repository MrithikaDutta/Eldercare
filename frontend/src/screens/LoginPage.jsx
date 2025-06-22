import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';

const LoginPage = () => {
  return (
    <div className="login-page">
      <AuthHeader active="login" />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;