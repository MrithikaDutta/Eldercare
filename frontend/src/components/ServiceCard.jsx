import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, Calendar, User, Mail, X } from 'lucide-react';

const ServiceCard = ({ provider }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setBookingError('');

    try {
      const accessToken = localStorage.getItem('access');
      if (!accessToken) {
        throw new Error('Please login to book a service provider');
      }

      const payload = {
        date: bookingData.date,
        time: bookingData.time,
        message: bookingData.message,
        service_provider: provider.id
      };

      console.log('Booking payload:', payload);

      const response = await fetch('http://localhost:8000/api/bookings/customer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('Booking response:', data);

      if (!response.ok) {
        throw new Error(data?.detail || 'Booking failed');
      }

      setBookingSuccess(true);
      setTimeout(() => {
        setShowBookingModal(false);
        setBookingSuccess(false);
        setBookingData({ date: '', time: '', message: '' });
      }, 2000);

    } catch (error) {
      console.error('Booking error:', error);
      setBookingError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="provider-card">
        <div className="provider-avatar">
          <div className="avatar-circle">
            <User size={40} />
          </div>
          <div className="provider-rating">
            <Star className="star filled" />
            <span>4.5</span>
          </div>
        </div>
        
        <div className="provider-content">
          <div className="provider-header">
            <h3>{provider.username}</h3>
            <p className="provider-specialty">Service Provider</p>
          </div>
          
          <div className="provider-info">
            <div className="info-item">
              <Mail size={16} />
              <span>{provider.email}</span>
            </div>
            {provider.phone && (
              <div className="info-item">
                <Phone size={16} />
                <span>{provider.phone}</span>
              </div>
            )}
            {provider.city && (
              <div className="info-item">
                <MapPin size={16} />
                <span>{provider.city}</span>
              </div>
            )}
          </div>
          
          <div className="provider-services">
            <span className="service-tag">Personal Care</span>
            <span className="service-tag">Companionship</span>
            <span className="service-tag">Household Support</span>
          </div>
          
          <div className="provider-stats">
            <div className="stat">
              <span className="stat-value">{provider.is_available ? 'Available' : 'Unavailable'}</span>
              <span className="stat-label">Status</span>
            </div>
            <div className="stat">
              <span className="stat-value">$25-35</span>
              <span className="stat-label">Per Hour</span>
            </div>
          </div>
          
          <div className="provider-actions">
            <button 
              onClick={() => setShowBookingModal(true)}
              className="btn btn-primary"
              disabled={!provider.is_available}
            >
              <Calendar size={16} />
              Book Now
            </button>
            <button className="btn btn-secondary">
              <Phone size={16} />
              Quick Contact
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="modal-overlay" onClick={() => setShowBookingModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Book {provider.username}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowBookingModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="booking-form">
              {bookingError && (
                <div className="error-message">
                  {bookingError}
                </div>
              )}
              
              {bookingSuccess && (
                <div className="success-message">
                  Booking successful! Redirecting...
                </div>
              )}

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleBookingChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleBookingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={bookingData.message}
                  onChange={handleBookingChange}
                  placeholder="Any special requirements or notes..."
                  rows="3"
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowBookingModal(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Booking...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;