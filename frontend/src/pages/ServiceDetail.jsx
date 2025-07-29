import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, MapPin, Clock, Phone, Mail, Calendar, 
  CheckCircle, Award, Shield, ArrowLeft, Heart 
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Mock data - in a real app, this would come from an API
  const serviceProviders = {
    1: {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Personal Care Specialist",
      rating: 4.9,
      reviews: 127,
      location: "Downtown Area",
      experience: "8 years",
      hourlyRate: "$25-35",
      services: ["Bathing Assistance", "Medication Management", "Mobility Support", "Personal Hygiene", "Dressing Assistance"],
      availability: "Mon-Fri, 7AM-7PM",
      description: "Certified nursing assistant with extensive experience in personal care and medication management. Sarah is known for her gentle approach and attention to detail.",
      certifications: ["Certified Nursing Assistant", "CPR Certified", "First Aid Certified"],
      languages: ["English", "Spanish"],
      background: "Sarah has been providing compassionate care for seniors for over 8 years. She specializes in personal care assistance and has extensive experience working with clients who have mobility challenges and chronic conditions.",
      reviews: [
        {
          name: "Mary Thompson",
          rating: 5,
          comment: "Sarah has been wonderful with my mother. She's patient, kind, and very professional.",
          date: "2 weeks ago"
        },
        {
          name: "John Davis",
          rating: 5,
          comment: "Excellent caregiver. My father feels comfortable and safe with Sarah.",
          date: "1 month ago"
        }
      ]
    },
    2: {
      id: 2,
      name: "Maria Rodriguez",
      specialty: "Companion Caregiver",
      rating: 4.8,
      reviews: 89,
      location: "Westside",
      experience: "6 years",
      hourlyRate: "$20-30",
      services: ["Social Companionship", "Light Housekeeping", "Meal Preparation", "Grocery Shopping", "Transportation"],
      availability: "7 days a week, flexible hours",
      description: "Warm and caring companion who specializes in providing emotional support and social interaction.",
      certifications: ["Companion Care Certified", "CPR Certified"],
      languages: ["English", "Spanish", "Portuguese"],
      background: "Maria brings warmth and joy to every interaction. She understands the importance of companionship in maintaining mental and emotional well-being for seniors.",
      reviews: [
        {
          name: "Patricia Wilson",
          rating: 5,
          comment: "Maria is like family to us. She brings so much joy to my grandmother's day.",
          date: "1 week ago"
        }
      ]
    }
  };

  const provider = serviceProviders[id];

  if (!provider) {
    return (
      <div className="service-detail">
        <div className="container">
          <div className="not-found">
            <h2>Service Provider Not Found</h2>
            <Link to="/services" className="btn btn-primary">
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
    alert('Booking request submitted! We will contact you shortly to confirm.');
    setShowBookingForm(false);
  };

  return (
    <div className="service-detail">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/services" className="btn btn-secondary">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>

        {/* Provider Header */}
        <div className="provider-header">
          <div className="provider-avatar-large">
            <div className="avatar-large">
              <User size={80} />
            </div>
            <div className="provider-rating-large">
              <Star className="star filled" />
              <span>{provider.rating}</span>
              <small>({provider.reviews} reviews)</small>
            </div>
          </div>
          
          <div className="provider-info-large">
            <h1>{provider.name}</h1>
            <p className="provider-specialty-large">{provider.specialty}</p>
            
            <div className="provider-details">
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <span>{provider.location}</span>
              </div>
              <div className="detail-item">
                <Clock className="detail-icon" />
                <span>{provider.experience} experience</span>
              </div>
              <div className="detail-item">
                <Heart className="detail-icon" />
                <span>{provider.hourlyRate} per hour</span>
              </div>
            </div>
            
            <div className="provider-actions-large">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => setShowBookingForm(true)}
              >
                <Calendar size={16} />
                Book This Provider
              </button>
              <button className="btn btn-secondary btn-large">
                <Phone size={16} />
                Call Provider
              </button>
              <button className="btn btn-secondary btn-large">
                <Mail size={16} />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Provider Details */}
        <div className="provider-details-section">
          <div className="details-grid">
            <div className="details-main">
              {/* About Section */}
              <div className="detail-card">
                <h3>About {provider.name}</h3>
                <p>{provider.description}</p>
                <p>{provider.background}</p>
              </div>

              {/* Services Section */}
              <div className="detail-card">
                <h3>Services Offered</h3>
                <div className="services-list">
                  {provider.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <CheckCircle className="service-icon" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="detail-card">
                <h3>Client Reviews</h3>
                <div className="reviews-list">
                  {provider.reviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <div className="review-header">
                        <div className="review-rating">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="star filled small" />
                          ))}
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-comment">"{review.comment}"</p>
                      <p className="review-author">- {review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-sidebar">
              {/* Quick Info */}
              <div className="sidebar-card">
                <h4>Quick Information</h4>
                <div className="quick-info">
                  <div className="info-row">
                    <span className="info-label">Availability:</span>
                    <span className="info-value">{provider.availability}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Rate:</span>
                    <span className="info-value">{provider.hourlyRate}/hour</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Experience:</span>
                    <span className="info-value">{provider.experience}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Location:</span>
                    <span className="info-value">{provider.location}</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="sidebar-card">
                <h4>Certifications</h4>
                <div className="certifications-list">
                  {provider.certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <Award className="cert-icon" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="sidebar-card">
                <h4>Languages</h4>
                <div className="languages-list">
                  {provider.languages.map((language, index) => (
                    <span key={index} className="language-tag">{language}</span>
                  ))}
                </div>
              </div>

              {/* Safety Badge */}
              <div className="sidebar-card safety-card">
                <div className="safety-badge">
                  <Shield className="safety-icon" />
                  <div>
                    <h4>Verified & Safe</h4>
                    <p>Background checked, licensed & insured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingForm && (
          <div className="booking-modal">
            <div className="booking-modal-content">
              <div className="booking-header">
                <h3>Book {provider.name}</h3>
                <button 
                  className="close-button"
                  onClick={() => setShowBookingForm(false)}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleBooking} className="booking-form">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" required />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" required />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                
                <div className="form-group">
                  <label>Special Requirements (Optional)</label>
                  <textarea rows="3" placeholder="Any specific needs or requirements..."></textarea>
                </div>
                
                <div className="booking-actions">
                  <button type="submit" className="btn btn-primary">
                    Submit Booking Request
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowBookingForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;