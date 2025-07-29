import { useState, useEffect } from 'react';
import { 
  Calendar, Users, Star, DollarSign, Clock, MessageSquare, 
  Bell, Settings, TrendingUp, CheckCircle, AlertCircle, 
  Phone, Mail, MapPin, Award, Heart, Shield, User
} from 'lucide-react';

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [bookingsError, setBookingsError] = useState(null);

  useEffect(() => {
    setLoadingBookings(true);
    setBookingsError(null);
    const access = localStorage.getItem('access');
    fetch('http://localhost:8000/api/bookings/provider/', {
      headers: {
        'Authorization': access ? `Bearer ${access}` : undefined,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch bookings');
        return res.json();
      })
      .then(data => setBookings(data))
      .catch(err => setBookingsError(err.message))
      .finally(() => setLoadingBookings(false));
  }, []);

  // Calculate stats from bookings
  const stats = {
    totalClients: [...new Set(bookings.map(b => b.customer?.id))].length,
    activeBookings: bookings.length,
    monthlyEarnings: 0, // Not available from API
    rating: 0, // Not available from API
    completedServices: 0, // Not available from API
    responseRate: 0 // Not available from API
  };

  const processSteps = [
    {
      step: 1,
      title: "Complete Your Profile",
      description: "Add your qualifications, certifications, and experience",
      icon: <User />,
      status: "completed"
    },
    {
      step: 2,
      title: "Get Verified",
      description: "Background check and credential verification",
      icon: <Shield />,
      status: "completed"
    },
    {
      step: 3,
      title: "Set Your Availability",
      description: "Define your working hours and service areas",
      icon: <Calendar />,
      status: "completed"
    },
    {
      step: 4,
      title: "Receive Bookings",
      description: "Get matched with clients who need your services",
      icon: <Bell />,
      status: "active"
    },
    {
      step: 5,
      title: "Provide Care",
      description: "Deliver exceptional care services to your clients",
      icon: <Heart />,
      status: "active"
    },
    {
      step: 6,
      title: "Get Paid",
      description: "Receive payments directly to your account",
      icon: <DollarSign />,
      status: "active"
    }
  ];

  const benefits = [
    {
      title: "Flexible Schedule",
      description: "Work when you want, set your own hours",
      icon: <Clock />
    },
    {
      title: "Competitive Pay",
      description: "Earn $20-65 per hour based on your expertise",
      icon: <DollarSign />
    },
    {
      title: "Verified Clients",
      description: "All clients are background checked for your safety",
      icon: <Shield />
    },
    {
      title: "Professional Growth",
      description: "Build your reputation and expand your client base",
      icon: <TrendingUp />
    },
    {
      title: "Direct Communication",
      description: "Connect directly with families who need your help",
      icon: <MessageSquare />
    },
    {
      title: "Insurance Coverage",
      description: "Protected by our comprehensive insurance policy",
      icon: <Award />
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div className="dashboard-welcome">
              <h1>Welcome back, Sarah!</h1>
              <p>Here's what's happening with your care services today</p>
            </div>
            <div className="dashboard-actions">
              <button className="btn btn-secondary">
                <Settings size={16} />
                Settings
              </button>
              <button className="btn btn-primary">
                <Calendar size={16} />
                View Schedule
              </button>
            </div>
          </div>

          {/* Dashboard Navigation */}
          <div className="dashboard-nav">
            <button 
              className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`nav-tab ${activeTab === 'process' ? 'active' : ''}`}
              onClick={() => setActiveTab('process')}
            >
              How It Works
            </button>
            <button 
              className={`nav-tab ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
            <button 
              className={`nav-tab ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              My Bookings
            </button>
          </div>

          {/* Dashboard Content */}
          <div className="dashboard-content">
            {activeTab === 'overview' && (
              <>
                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Users />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.totalClients}</h3>
                      <p>Total Clients</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Calendar />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.activeBookings}</h3>
                      <p>Active Bookings</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <DollarSign />
                    </div>
                    <div className="stat-info">
                      <h3>${stats.monthlyEarnings}</h3>
                      <p>This Month</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Star />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.rating}</h3>
                      <p>Average Rating</p>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="dashboard-section">
                  <h2>Recent Bookings</h2>
                  <div className="bookings-list">
                    {loadingBookings && <div>Loading bookings...</div>}
                    {bookingsError && <div className="error-message">{bookingsError}</div>}
                    {!loadingBookings && !bookingsError && bookings.length === 0 && (
                      <div>No bookings found.</div>
                    )}
                    {!loadingBookings && !bookingsError && bookings.slice(0, 3).map(booking => (
                      <div key={booking.id} className="booking-item">
                        <div className="booking-info">
                          <h4>{booking.customer?.username}</h4>
                          <p>{booking.message}</p>
                          <div className="booking-details">
                            <span>{booking.date} at {booking.time}</span>
                          </div>
                        </div>
                        <div className="booking-status">
                          <span className="status-badge confirmed">Confirmed</span>
                          <div className="booking-actions">
                            <button className="btn-icon">
                              <Phone size={16} />
                            </button>
                            <button className="btn-icon">
                              <MessageSquare size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'process' && (
              <div className="process-section">
                <div className="section-header">
                  <h2>How ElderCare Companions Works for Providers</h2>
                  <p>Follow these simple steps to start earning as a care provider</p>
                </div>
                
                <div className="process-steps">
                  {processSteps.map((step, index) => (
                    <div key={index} className={`process-step ${step.status}`}>
                      <div className="step-number">{step.step}</div>
                      <div className="step-icon">{step.icon}</div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                        {step.status === 'completed' && (
                          <div className="step-status">
                            <CheckCircle size={16} />
                            <span>Completed</span>
                          </div>
                        )}
                        {step.status === 'active' && (
                          <div className="step-status active">
                            <AlertCircle size={16} />
                            <span>In Progress</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="process-cta">
                  <h3>Ready to Get Started?</h3>
                  <p>Complete your profile and start receiving booking requests today</p>
                  <button className="btn btn-primary btn-large">
                    Complete Profile Setup
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="benefits-section">
                <div className="section-header">
                  <h2>Why Choose ElderCare Companions?</h2>
                  <p>Discover the advantages of being part of our care provider network</p>
                </div>
                
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="testimonial-section">
                  <h3>What Our Providers Say</h3>
                  <div className="testimonials-grid">
                    <div className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="star filled" />
                        ))}
                      </div>
                      <p>"ElderCare Companions has given me the flexibility to work on my own terms while making a real difference in people's lives."</p>
                      <div className="testimonial-author">
                        <strong>Maria Rodriguez</strong>
                        <span>Companion Caregiver</span>
                      </div>
                    </div>
                    <div className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="star filled" />
                        ))}
                      </div>
                      <p>"The platform connects me with families who truly value quality care. It's rewarding both personally and financially."</p>
                      <div className="testimonial-author">
                        <strong>Dr. Michael Chen</strong>
                        <span>Medical Care Provider</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bookings-section">
                <div className="section-header">
                  <h2>My Bookings</h2>
                  <p>Manage your current and upcoming appointments</p>
                </div>
                
                <div className="bookings-filters">
                  <button className="filter-btn active">All</button>
                  <button className="filter-btn">Pending</button>
                  <button className="filter-btn">Confirmed</button>
                  <button className="filter-btn">Completed</button>
                </div>

                <div className="bookings-list detailed">
                  {loadingBookings && <div>Loading bookings...</div>}
                  {bookingsError && <div className="error-message">{bookingsError}</div>}
                  {!loadingBookings && !bookingsError && bookings.length === 0 && (
                    <div>No bookings found.</div>
                  )}
                  {!loadingBookings && !bookingsError && bookings.map(booking => (
                    <div key={booking.id} className="booking-card">
                      <div className="booking-header">
                        <h4>{booking.customer?.username}</h4>
                        <span className="status-badge confirmed">Confirmed</span>
                      </div>
                      <div className="booking-details">
                        <div className="detail-item">
                          <Calendar size={16} />
                          <span>{booking.date}</span>
                        </div>
                        <div className="detail-item">
                          <Clock size={16} />
                          <span>{booking.time}</span>
                        </div>
                        <div className="detail-item">
                          <Heart size={16} />
                          <span>{booking.message}</span>
                        </div>
                      </div>
                      <div className="booking-actions">
                        <button className="btn btn-secondary">
                          <MessageSquare size={16} />
                          Message Client
                        </button>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
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