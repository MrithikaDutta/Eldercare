import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for the landing page */}
        <Route path="/" element={<Landing />} />
        
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route for the signup page */}
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
