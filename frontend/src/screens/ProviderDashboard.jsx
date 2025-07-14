import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaHeart, FaDollarSign, FaStar, FaEdit, FaEye, FaCheck, FaClock } from 'react-icons/fa';

const ProviderDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalBookings: 12,
    totalEarnings: 15600,
    averageRating: 4.8,
    completedJobs: 10
  });

  useEffect(() => {
    if (!user || user.user_type !== 'provider') {
      navigate('/');
      return;
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const mockBookings = [
    { id: 1, client: 'Mrs. Sharma', date: '2024-01-15', time: '10:00 AM', status: 'confirmed', amount: 800 },
    { id: 2, client: 'Mr. Gupta', date: '2024-01-16', time: '2:00 PM', status: 'pending', amount: 1200 },
    { id: 3, client: 'Mrs. Patel', date: '2024-01-17', time: '11:00 AM', status: 'completed', amount: 600 },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Header */}
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="container">
          <span className="navbar-brand fw-bold text-white">
            <FaHeart className="me-2" />
            Provider Dashboard
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
                  className={`list-group-item list-group-item-action ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                  style={{ backgroundColor: activeTab === 'overview' ? 'var(--primary)' : '', color: activeTab === 'overview' ? '#fff' : '' }}
                >
                  <FaEye className="me-2" />
                  Overview
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'bookings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bookings')}
                  style={{ backgroundColor: activeTab === 'bookings' ? 'var(--primary)' : '', color: activeTab === 'bookings' ? '#fff' : '' }}
                >
                  <FaCalendarAlt className="me-2" />
                  Bookings
                </button>
                <button
                  className={`list-group-item list-group-item-action ${activeTab === 'earnings' ? 'active' : ''}`}
                  onClick={() => setActiveTab('earnings')}
                  style={{ backgroundColor: activeTab === 'earnings' ? 'var(--primary)' : '', color: activeTab === 'earnings' ? '#fff' : '' }}
                >
                  <FaDollarSign className="me-2" />
                  Earnings
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
            {activeTab === 'overview' && (
              <div>
                <h2 className="mb-4">
                  <FaEye className="me-2 text-primary" />
                  Dashboard Overview
                </h2>
                
                {/* Stats Cards */}
                <div className="row mb-4">
                  <div className="col-md-3 mb-3">
                    <div className="card text-center" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
                      <div className="card-body">
                        <FaCalendarAlt size={32} className="mb-2" />
                        <h4>{stats.totalBookings}</h4>
                        <p className="mb-0">Total Bookings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card text-center" style={{ backgroundColor: 'var(--secondary)', color: '#fff' }}>
                      <div className="card-body">
                        <FaDollarSign size={32} className="mb-2" />
                        <h4>₹{stats.totalEarnings}</h4>
                        <p className="mb-0">Total Earnings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card text-center" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
                      <div className="card-body">
                        <FaStar size={32} className="mb-2" />
                        <h4>{stats.averageRating}</h4>
                        <p className="mb-0">Average Rating</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="card text-center" style={{ backgroundColor: 'var(--success)', color: '#fff' }}>
                      <div className="card-body">
                        <FaCheck size={32} className="mb-2" />
                        <h4>{stats.completedJobs}</h4>
                        <p className="mb-0">Completed Jobs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Recent Bookings</h5>
                  </div>
                  <div className="card-body">
                    {mockBookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div>
                          <strong>{booking.client}</strong>
                          <div className="text-muted small">{booking.date} at {booking.time}</div>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold">₹{booking.amount}</div>
                          <span className={`badge ${
                            booking.status === 'completed' ? 'bg-success' :
                            booking.status === 'confirmed' ? 'bg-primary' : 'bg-warning'
                          }`}>
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Client</th>
                            <th>Date & Time</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockBookings.map((booking) => (
                            <tr key={booking.id}>
                              <td>{booking.client}</td>
                              <td>
                                {booking.date}<br />
                                <small className="text-muted">{booking.time}</small>
                              </td>
                              <td className="fw-bold">₹{booking.amount}</td>
                              <td>
                                <span className={`badge ${
                                  booking.status === 'completed' ? 'bg-success' :
                                  booking.status === 'confirmed' ? 'bg-primary' : 'bg-warning'
                                }`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td>
                                <button className="btn btn-sm btn-outline-primary me-2">
                                  View Details
                                </button>
                                {booking.status === 'pending' && (
                                  <button className="btn btn-sm btn-success">
                                    Accept
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div>
                <h2 className="mb-4">
                  <FaDollarSign className="me-2 text-primary" />
                  Earnings
                </h2>
                
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h3 className="text-success">₹{stats.totalEarnings}</h3>
                        <p className="text-muted">Total Earnings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h3 className="text-primary">₹2,400</h3>
                        <p className="text-muted">This Month</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card text-center">
                      <div className="card-body">
                        <h3 className="text-info">₹800</h3>
                        <p className="text-muted">This Week</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">Payment History</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Client</th>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024-01-10</td>
                            <td>Mrs. Sharma</td>
                            <td>Companionship</td>
                            <td className="text-success fw-bold">₹800</td>
                            <td><span className="badge bg-success">Paid</span></td>
                          </tr>
                          <tr>
                            <td>2024-01-08</td>
                            <td>Mr. Gupta</td>
                            <td>Meal Preparation</td>
                            <td className="text-success fw-bold">₹1,200</td>
                            <td><span className="badge bg-success">Paid</span></td>
                          </tr>
                          <tr>
                            <td>2024-01-05</td>
                            <td>Mrs. Patel</td>
                            <td>Light Housekeeping</td>
                            <td className="text-warning fw-bold">₹600</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Provider Information</h5>
                        <button className="btn btn-outline-primary btn-sm">
                          <FaEdit className="me-1" />
                          Edit Profile
                        </button>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Email</label>
                              <input 
                                type="email" 
                                className="form-control" 
                                value={user?.email || ''} 
                                readOnly 
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Phone Number</label>
                              <input 
                                type="tel" 
                                className="form-control" 
                                placeholder="Enter phone number" 
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea 
                              className="form-control" 
                              rows="3" 
                              placeholder="Enter your service address"
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Services Offered</label>
                            <textarea 
                              className="form-control" 
                              rows="3" 
                              placeholder="Describe the services you provide"
                            ></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Rate per Hour (₹)</label>
                              <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Enter your hourly rate" 
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label className="form-label">Experience (Years)</label>
                              <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Years of experience" 
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">About Me</label>
                            <textarea 
                              className="form-control" 
                              rows="4" 
                              placeholder="Tell clients about yourself and your experience"
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
                    <div className="card mb-3">
                      <div className="card-body text-center">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                             style={{ width: '80px', height: '80px' }}>
                          <FaUser className="text-white" size={32} />
                        </div>
                        <h5>{user?.email}</h5>
                        <p className="text-muted">Service Provider</p>
                        <div className="mb-2">
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <span className="ms-2">4.8 (24 reviews)</span>
                        </div>
                        <span className="badge bg-success">Verified Provider</span>
                      </div>
                    </div>
                    
                    <div className="card">
                      <div className="card-header">
                        <h6 className="mb-0">Quick Stats</h6>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Profile Completion:</span>
                          <span className="fw-bold">85%</span>
                        </div>
                        <div className="progress mb-3" style={{ height: '8px' }}>
                          <div className="progress-bar" style={{ width: '85%', backgroundColor: 'var(--primary)' }}></div>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                          <span>Response Rate:</span>
                          <span className="fw-bold">98%</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>On-time Rate:</span>
                          <span className="fw-bold">95%</span>
                        </div>
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

export default ProviderDashboard;