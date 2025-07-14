import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: "Priya S.", text: "Working as a companion has been incredibly rewarding. The flexible schedule fits perfectly with my life." },
  { name: "Rajesh K.", text: "The platform makes it easy to connect with families. I love the meaningful work I do every day." },
  { name: "Meera T.", text: "Great support from the team and fair compensation. Highly recommend joining!" }
];

const ProviderTestimonials = () => (
  <section id="testimonials" className="py-5 section-animated" style={{ background: 'var(--bg-main)' }}>
    <div className="container text-center">
      <h2>
        <FaQuoteLeft style={{ marginRight: 8, color: '#F4A261' }} />
        What Our Providers Say
      </h2>
      <div className="row mt-4">
        {testimonials.map((t, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <p className="card-text">"{t.text}"</p>
                <h6 className="card-subtitle mt-3 text-muted">{t.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProviderTestimonials;