import React from 'react';
import { FaDollarSign, FaClock, FaHeart, FaShieldAlt } from 'react-icons/fa';

const features = [
  { icon: <FaDollarSign size={32} color="#2A9D8F" />, title: "Competitive Pay", desc: "Earn ₹500-₹1500 per hour based on your experience." },
  { icon: <FaClock size={32} color="#5B7DB1" />, title: "Flexible Schedule", desc: "Work when you want, choose your own hours." },
  { icon: <FaHeart size={32} color="#F4A261" />, title: "Meaningful Work", desc: "Make a real difference in someone's life every day." },
  { icon: <FaShieldAlt size={32} color="#FFD700" />, title: "Support & Training", desc: "Get ongoing support and training opportunities." }
];

const ProviderWhyChooseUs = () => (
  <section id="whychooseus" className="py-5 section-animated" style={{ background: '#fff' }}>
    <div className="container text-center">
      <h2>Why Become a Provider?</h2>
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

export default ProviderWhyChooseUs;