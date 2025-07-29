import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerDashboard from '../pages/CustomerDashboard.jsx';
import ProviderDashboard from '../pages/ProviderDashboard.jsx';

const DashboardRouter = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Example: fetch user info from localStorage or API
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserType(user.user_type);
      } catch {
        setUserType(null);
      }
    } else {
      // Optionally, redirect to login if not authenticated
      navigate('/login');
    }
  }, [navigate]);

  if (!userType) return null; // or a loading spinner
  if (userType === 'customer') return <CustomerDashboard />;
  if (userType === 'service_provider') return <ProviderDashboard />;
  return <div>Unknown user type</div>;
};

export default DashboardRouter;
