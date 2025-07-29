import React, { useState, useMemo, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import CategoryFilter from '../components/CategoryFilter';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/service-providers/');
        if (!response.ok) {
          throw new Error('Failed to fetch service providers');
        }
        const data = await response.json();
        console.log('Service providers:', data);
        setServiceProviders(data);
      } catch (err) {
        console.error('Error fetching service providers:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceProviders();
  }, []);

  const filteredProviders = useMemo(() => {
    return selectedCategory === 'all' 
      ? serviceProviders 
      : serviceProviders.filter(provider => provider.category === selectedCategory);
  }, [selectedCategory, serviceProviders]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading-spinner">Loading service providers...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="error-message">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Care Providers</h1>
            <p className="hero-subtitle">
              Connect with qualified, compassionate caregivers who are ready to provide 
              exceptional care for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Service Providers Grid */}
      <section className="providers-section">
        <div className="container">
          {serviceProviders.length === 0 ? (
            <div className="no-providers">
              <p>No service providers available at the moment.</p>
            </div>
          ) : (
            <div className="providers-grid">
              {filteredProviders.map(provider => (
                <ServiceCard key={provider.id} provider={provider} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Help Finding the Right Caregiver?</h2>
            <p>
              Our care coordinators are here to help you find the perfect match 
              for your family's specific needs and preferences.
            </p>
            <button className="btn btn-primary btn-large">
              Speak with a Care Coordinator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;