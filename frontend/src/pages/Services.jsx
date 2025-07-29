import React, { useState, useMemo } from 'react';
import ServiceCard from '../components/ServiceCard';
import CategoryFilter from '../components/CategoryFilter';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceProviders = [
    {
      id: 1,
      name: "Sarah Johnson",
      category: "personal-care",
      specialty: "Personal Care Specialist",
      rating: 4.9,
      reviews: 127,
      location: "Downtown Area",
      experience: "8 years",
      hourlyRate: "$25-35",
      services: ["Bathing Assistance", "Medication Management", "Mobility Support"],
      availability: "Mon-Fri, 7AM-7PM",
      description: "Certified nursing assistant with extensive experience in personal care and medication management."
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      category: "companionship",
      specialty: "Companion Caregiver",
      rating: 4.8,
      reviews: 89,
      location: "Westside",
      experience: "6 years",
      hourlyRate: "$20-30",
      services: ["Social Companionship", "Light Housekeeping", "Meal Preparation"],
      availability: "7 days a week, flexible hours",
      description: "Warm and caring companion who specializes in providing emotional support and social interaction."
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      category: "medical",
      specialty: "Medical Care Provider",
      rating: 5.0,
      reviews: 156,
      location: "Medical District",
      experience: "15 years",
      hourlyRate: "$45-65",
      services: ["Health Monitoring", "Medical Appointments", "Chronic Disease Management"],
      availability: "Mon-Fri, 8AM-6PM",
      description: "Licensed physician specializing in geriatric medicine and home healthcare services."
    },
    {
      id: 4,
      name: "Jennifer Williams",
      category: "household",
      specialty: "Household Support",
      rating: 4.7,
      reviews: 73,
      location: "Eastside",
      experience: "5 years",
      hourlyRate: "$18-28",
      services: ["Housekeeping", "Grocery Shopping", "Laundry"],
      availability: "Mon-Sat, 9AM-5PM",
      description: "Reliable household support specialist who helps maintain a clean and organized living environment."
    },
    {
      id: 5,
      name: "Robert Thompson",
      category: "transportation",
      specialty: "Transportation Services",
      rating: 4.9,
      reviews: 94,
      location: "City-wide",
      experience: "10 years",
      hourlyRate: "$22-32",
      services: ["Medical Appointments", "Shopping Trips", "Social Outings"],
      availability: "7 days a week, 6AM-10PM",
      description: "Professional driver with specialized training in senior transportation and mobility assistance."
    },
    {
      id: 6,
      name: "Lisa Anderson",
      category: "personal-care",
      specialty: "Certified Nursing Assistant",
      rating: 4.8,
      reviews: 112,
      location: "Northside",
      experience: "12 years",
      hourlyRate: "$28-38",
      services: ["Personal Hygiene", "Physical Therapy Support", "Wound Care"],
      availability: "24/7 availability",
      description: "Experienced CNA with specialization in post-surgical care and rehabilitation support."
    }
  ];

  const filteredProviders = useMemo(() => {
    return selectedCategory === 'all' 
      ? serviceProviders 
      : serviceProviders.filter(provider => provider.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

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
          <div className="providers-grid">
            {filteredProviders.map(provider => (
              <ServiceCard key={provider.id} provider={provider} />
            ))}
          </div>
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