import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceCard from './components/ServiceCard.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import DashboardRouter from "./components/DashboardRouter.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<DashboardRouter />} />
            <Route path="/customer-dashboard" element={<DashboardRouter />} />
            <Route path="/provider-dashboard" element={<DashboardRouter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;