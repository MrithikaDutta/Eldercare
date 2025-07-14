import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './screens/Landing';
import CustomerLanding from './screens/CustomerLanding';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/customer" element={<CustomerLanding />} />
        
      </Routes>
    </Router>
  );
};

export default App;
