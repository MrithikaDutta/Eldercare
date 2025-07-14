import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaHeart, FaSearch, FaStar, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ApiService from '../services/api';

const CustomerDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('browse');

  useEffect(() => {
    if (!user || user.user_type !== 'customer') {
      navigate('/customer');
      return;
    }
    fetchProviders();
  }, [user, navigate]);

  const fetchProviders = async () => {
    try {
      const data = await ApiService.getProviders();
      setProviders(data);
    } catch (error) {
      console.error('Error fetching providers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/customer');
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Header */}
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <span className="navbar-brand fw-bold text-white">
            <FaHeart className="me-2" />
            Eldercare Dashboard
          </span>
          <div className="d-flex align-items-center">
            <span className="text-white me-3">Welcome, {user?.email}</span>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 p-0">
            <div className="bg-white shadow-sm" style={{ minHeight: 'calc(100vh - 76px)' }}>
              <div className="list-group list-group-flush">
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'browse' ? 'active' : ''}`}
                  onClick={() => setActiveTab('browse')}
                  style={{ backgroundColor: activeTab === 'browse' ? 'var(--primary)' : '', color: activeTab === 'browse' ? '#fff' : '' }}
                >
                  <FaSearch className="me-2" />
                  Browse Companions
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'bookings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bookings')}
                  style={{ backgroundColor: activeTab === 'bookings' ? 'var(--primary)' : '', color: activeTab === 'bookings' ? '#fff' : '' }}
                >
                  <FaCalendarAlt className="me-2" />
                  My Bookings
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                  style={{ backgroundColor: activeTab === 'profile' ? 'var(--primary)' : '', color: activeTab === 'profile' ? '#fff' : '' }}
                >
                  <FaUser className="me-2" />
                  My Profile
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4">
            {activeTab === 'browse' && (
              <div>
                <h2 className="mb-4">
                  <FaSearch className="me-2 text-primary" />
                  Browse Companions
                </h2>
                
                {/* Search Filters */}
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Search by location..." 
                        />
                      </div>
                      <div className="col-md-4">
                        <select className="form-select">
                          <option>All Services</option>
                          <option>Companionship</option>
                          <option>Light Housekeeping</option>
                          <option>Meal Preparation</option>
                          <option>Transportation</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-primary w-100">
                          <FaSearch className="me-2" />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Providers Grid */}
                <div className="row">
                  {providers.length > 0 ? (
                    providers.map((provider) => (
                      <div className="col-md-6 col-lg-4 mb-4" key={provider.provider_id}>
                        <div className="card h-100 shadow-sm">
                          <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                                   style={{ width: '50px', height: '50px' }}>
                                <FaUser className="text-white" />
                              </div>
                              <div>
                                <h5 className="card-title mb-1">{provider.user?.username || 'Provider'}</h5>
                                <div className="text-muted small">
                                  <FaMapMarkerAlt className="me-1" />
                                  {provider.address}
                                </div>
                              </div>
                            </div>
                            
                            <p className="card-text small text-muted mb-2">
                              {provider.services_offered}
                            </p>
                            
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <span className="fw-bold text-success">
                                ₹{provider.rate_per_hour}/hour
                              </span>
                              <div className="text-warning">
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                <small className="text-muted ms-1">(4.8)</small>
                              </div>
                            </div>
                            
                            {provider.verified && (
                              <span className="badge bg-success mb-2">✓ Verified</span>
                            )}
                            
                            <div className="d-grid gap-2">
                              <button className="btn btn-primary btn-sm">
                                View Profile
                              </button>
                              <button className="btn btn-outline-primary btn-sm">
                                <FaPhone className="me-1" />
                                Contact
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <div className="text-center py-5">
                        <FaSearch size={48} className="text-muted mb-3" />
                        <h4 className="text-muted">No companions found</h4>
                        <p className="text-muted">Try adjusting your search criteria</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div>
                <h2 className="mb-4">
                  <FaCalendarAlt className="me-2 text-primary" />
                  My Bookings
                </h2>
                <div className="card">
                  <div className="card-body text-center py-5">
                    <FaCalendarAlt size={48} className="text-muted mb-3" />
                    <h4 className="text-muted">No bookings yet</h4>
                    <p className="text-muted">Start by browsing companions and making your first booking</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setActiveTab('browse')}
                    >
                      Browse Companions
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="mb-4">
                  <FaUser className="me-2 text-primary" />
                  My Profile
                </h2>
                <div className="row">
                  <div className="col-md-8">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Account Information</h5>
                        <form>
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                              type="email" 
                              className="form-control" 
                              value={user?.email || ''} 
                              readOnly 
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Enter your full name" 
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input 
                              type="tel" 
                              className="form-control" 
                              placeholder="Enter your phone number" 
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea 
                              className="form-control" 
                              rows="3" 
                              placeholder="Enter your address"
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Update Profile
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body text-center">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                             style={{ width: '80px', height: '80px' }}>
                          <FaUser className="text-white" size={32} />
                        </div>
                        <h5>{user?.email}</h5>
                        <p className="text-muted">Customer</p>
                        <span className="badge bg-success">Active Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;