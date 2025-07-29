import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, Calendar, User } from 'lucide-react';

const ServiceCard = ({ provider }) => {
  return (
    <div className="provider-card">
      <div className="provider-avatar">
        <div className="avatar-circle">
          <User size={40} />
        </div>
        <div className="provider-rating">
          <Star className="star filled" />
          <span>{provider.rating}</span>
        </div>
      </div>
      
      <div className="provider-content">
        <div className="provider-header">
          <h3>{provider.name}</h3>
          <p className="provider-specialty">{provider.specialty}</p>
        </div>
        
        <div className="provider-info">
          <div className="info-item">
            <MapPin size={16} />
            <span>{provider.location}</span>
          </div>
          <div className="info-item">
            <Clock size={16} />
            <span>{provider.experience} experience</span>
          </div>
        </div>
        
        <div className="provider-services">
          {provider.services.slice(0, 3).map((service, index) => (
            <span key={index} className="service-tag">{service}</span>
          ))}
        </div>
        
        <div className="provider-stats">
          <div className="stat">
            <span className="stat-value">{provider.reviews}</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-value">{provider.hourlyRate}</span>
            <span className="stat-label">Per Hour</span>
          </div>
        </div>
        
        <div className="provider-actions">
          <Link 
            to={`/service/${provider.id}`} 
            className="btn btn-primary"
          >
            <Calendar size={16} />
            View & Book Provider
          </Link>
          <button className="btn btn-secondary">
            <Phone size={16} />
            Quick Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;