import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Landing from './screens/Landing';
import CustomerLanding from './screens/CustomerLanding';
import CustomerDashboard from './screens/CustomerDashboard';
import ProviderDashboard from './screens/ProviderDashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customer" element={<CustomerLanding />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
