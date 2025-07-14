import React from 'react';
import { FaShieldAlt, FaUserCheck, FaCalendarAlt, FaStar } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt size={32} color="#2A9D8F" />, title: "Safety & Background Checks", desc: "All companions are thoroughly vetted." },
  { icon: <FaUserCheck size={32} color="#5B7DB1" />, title: "Verified Companions", desc: "Profiles are verified for your peace of mind." },
  { icon: <FaCalendarAlt size={32} color="#F4A261" />, title: "Flexible Scheduling", desc: "Book visits that fit your family's needs." },
  { icon: <FaStar size={32} color="#FFD700" />, title: "Transparent Ratings", desc: "See honest reviews from other families." }
];

const CustomerWhyChooseUs = () => (
  <section className="py-5 section-animated" style={{ background: 'var(--bg-main)' }}>
    <div className="container text-center">
      <h2>Why Choose Us?</h2>
      <div className="row mt-4">
        {features.map((f, idx) => (
          <div className="col-md-3 mb-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="mb-2">{f.icon}</div>
                <h5 className="card-title">{f.title}</h5>
                <p className="card-text">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerWhyChooseUs;