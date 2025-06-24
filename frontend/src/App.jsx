import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import CustomerLoginPage from './screens/CustomerLoginPage';
import ServiceProviderLoginPage from './screens/ServiceProviderLoginPage';
import CustomerSignupPage from './screens/CustomerSignupPage';
import ServiceProviderSignupPage from './screens/ServiceProviderSignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for the landing page */}
        <Route path="/" element={<Landing />} />
        
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/customer" element={<CustomerLoginPage />} />
        <Route path="/login/provider" element={<ServiceProviderLoginPage />} />
        
        {/* Route for the signup page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/customer" element={<CustomerSignupPage />} />
        <Route path="/signup/provider" element={<ServiceProviderSignupPage />} />
        
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
