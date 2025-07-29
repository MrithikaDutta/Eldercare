import { useState } from 'react';
import { 
  Calendar, Heart, Star, Clock, MessageSquare, Bell, Settings, 
  User, Shield, CheckCircle, AlertCircle, Phone, Mail, MapPin, Users,
  Search, Filter, Plus, CreditCard, Award
} from 'lucide-react';

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    activeServices: 2,
    totalBookings: 15,
    favoriteProviders: 3,
    monthlySpent: 1250
  };

  const activeServices = [
    {
      id: 1,
      provider: "Sarah Johnson",
      service: "Personal Care",
      nextAppointment: "2025-01-15",
      time: "10:00 AM",
      rating: 4.9,
    },
    {
      id: 2,
      provider: "Maria Rodriguez",
      service: "Companionship",
      nextAppointment: "2025-01-16",
      time: "2:00 PM",
      rating: 4.8,
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up and tell us about your care needs",
      icon: <User />,
      status: "completed"
    },
    {
      step: 2,
      title: "Browse Care Providers",
      description: "Search and filter providers based on your requirements",
      icon: <Search />,
      status: "completed"
    },
    {
      step: 3,
      title: "Review Profiles",
      description: "Check ratings, reviews, and qualifications",
      icon: <Star />,
      status: "completed"
    },
    {
      step: 4,
      title: "Book Services",
      description: "Schedule appointments with your chosen providers",
      icon: <Calendar />,
      status: "active"
    },
    {
      step: 5,
      title: "Receive Care",
      description: "Enjoy professional care services at home",
      icon: <Heart />,
      status: "active"
    },
    {
      step: 6,
      title: "Rate & Review",
      description: "Share your experience to help other families",
      icon: <MessageSquare />,
      status: "active"
    }
  ];

  const benefits = [
    {
      title: "Vetted Professionals",
      description: "All caregivers are background checked and certified",
      icon: <Shield />
    },
    {
      title: "Flexible Scheduling",
      description: "Book services when you need them, 24/7 availability",
      icon: <Clock />
    },
    {
      title: "Personalized Care",
      description: "Customized care plans tailored to individual needs",
      icon: <Heart />
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees",
      icon: <CreditCard />
    },
    {
      title: "Family Communication",
      description: "Regular updates and direct communication with caregivers",
      icon: <MessageSquare />
    },
    {
      title: "Quality Assurance",
      description: "Continuous monitoring and quality improvement",
      icon: <Award />
    }
  ];

  const recentActivity = [
    {
      type: "booking",
      message: "Appointment confirmed with Sarah Johnson",
      time: "2 hours ago",
      icon: <CheckCircle />
    },
    {
      type: "message",
      message: "New message from Maria Rodriguez",
      time: "5 hours ago",
      icon: <MessageSquare />
    },
    {
      type: "review",
      message: "Please review your recent service",
      time: "1 day ago",
      icon: <Star />
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <div className="dashboard-welcome">
              <h1>Welcome back, John!</h1>
              <p>Managing care for your loved ones made simple</p>
            </div>
            <div className="dashboard-actions">
              <button className="btn btn-secondary">
                <Settings size={16} />
                Settings
              </button>
              <button className="btn btn-primary">
                <Plus size={16} />
                Book New Service
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
              className={`nav-tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              My Services
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
                      <Heart />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.activeServices}</h3>
                      <p>Active Services</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Calendar />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.totalBookings}</h3>
                      <p>Total Bookings</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <Star />
                    </div>
                    <div className="stat-info">
                      <h3>{stats.favoriteProviders}</h3>
                      <p>Favorite Providers</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">
                      <CreditCard />
                    </div>
                    <div className="stat-info">
                      <h3>${stats.monthlySpent}</h3>
                      <p>This Month</p>
                    </div>
                  </div>
                </div>

                {/* Active Services */}
                <div className="dashboard-section">
                  <h2>Active Services</h2>
                  <div className="services-grid">
                    {activeServices.map(service => (
                      <div key={service.id} className="service-card">
                        <div className="service-provider">
                          <div className="provider-avatar-small">
                            <div className="provider-avatar-small">
                              <User size={30} />
                            </div>
                          </div>
                          <div className="provider-info">
                            <h4>{service.provider}</h4>
                            <p>{service.service}</p>
                            <div className="rating">
                              <Star className="star filled" />
                              <span>{service.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="service-details">
                          <div className="next-appointment">
                            <Calendar size={16} />
                            <span>Next: {service.nextAppointment} at {service.time}</span>
                          </div>
                          <div className="service-actions">
                            <button className="btn btn-secondary">
                              <MessageSquare size={16} />
                              Message
                            </button>
                            <button className="btn btn-primary">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="dashboard-section">
                  <h2>Recent Activity</h2>
                  <div className="activity-list">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="activity-item">
                        <div className="activity-icon">{activity.icon}</div>
                        <div className="activity-content">
                          <p>{activity.message}</p>
                          <span className="activity-time">{activity.time}</span>
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
                  <h2>How ElderCare Companions Works for Families</h2>
                  <p>Getting quality care for your loved ones is simple and straightforward</p>
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
                  <h3>Need Help Getting Started?</h3>
                  <p>Our care coordinators are here to help you find the perfect caregiver</p>
                  <button className="btn btn-primary btn-large">
                    Speak with Care Coordinator
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="benefits-section">
                <div className="section-header">
                  <h2>Why Families Choose ElderCare Companions</h2>
                  <p>Discover the peace of mind that comes with professional elder care</p>
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
                  <h3>What Families Say</h3>
                  <div className="testimonials-grid">
                    <div className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="star filled" />
                        ))}
                      </div>
                      <p>"ElderCare Companions gave us peace of mind knowing mom was in good hands. The caregivers are professional and caring."</p>
                      <div className="testimonial-author">
                        <strong>Patricia Wilson</strong>
                        <span>Daughter of care recipient</span>
                      </div>
                    </div>
                    <div className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="star filled" />
                        ))}
                      </div>
                      <p>"The platform made it so easy to find qualified caregivers. We couldn't be happier with the service."</p>
                      <div className="testimonial-author">
                        <strong>Michael Chen</strong>
                        <span>Son of care recipient</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="services-section">
                <div className="section-header">
                  <h2>My Care Services</h2>
                  <p>Manage your current and past care arrangements</p>
                </div>
                
                <div className="services-filters">
                  <button className="filter-btn active">All Services</button>
                  <button className="filter-btn">Active</button>
                  <button className="filter-btn">Scheduled</button>
                  <button className="filter-btn">Completed</button>
                </div>

                <div className="services-list">
                  {activeServices.map(service => (
                    <div key={service.id} className="service-detail-card">
                      <div className="service-header">
                        <div className="provider-profile">
                          <img src={service.image} alt={service.provider} />
                          <div>
                            <h4>{service.provider}</h4>
                            <p>{service.service}</p>
                            <div className="rating">
                              <Star className="star filled" />
                              <span>{service.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="service-status">
                          <span className="status-badge active">Active</span>
                        </div>
                      </div>
                      <div className="service-details">
                        <div className="detail-item">
                          <Calendar size={16} />
                          <span>Next appointment: {service.nextAppointment}</span>
                        </div>
                        <div className="detail-item">
                          <Clock size={16} />
                          <span>Time: {service.time}</span>
                        </div>
                      </div>
                      <div className="service-actions">
                        <button className="btn btn-secondary">
                          <MessageSquare size={16} />
                          Message Provider
                        </button>
                        <button className="btn btn-secondary">
                          <Calendar size={16} />
                          Reschedule
                        </button>
                        <button className="btn btn-primary">
                          View Full Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="add-service-cta">
                  <h3>Need Additional Care Services?</h3>
                  <p>Browse our network of qualified care providers</p>
                  <button className="btn btn-primary btn-large">
                    <Plus size={16} />
                    Find Care Providers
                  </button>
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