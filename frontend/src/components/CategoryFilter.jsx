import React from 'react';
import { Heart, Shield, Users, Home, Stethoscope, Car } from 'lucide-react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All Services', icon: <Heart /> },
    { id: 'personal-care', name: 'Personal Care', icon: <Shield /> },
    { id: 'companionship', name: 'Companionship', icon: <Users /> },
    { id: 'medical', name: 'Medical Care', icon: <Stethoscope /> },
    { id: 'household', name: 'Household Help', icon: <Home /> },
    { id: 'transportation', name: 'Transportation', icon: <Car /> }
  ];

  return (
    <section className="filter-section">
      <div className="container">
        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;