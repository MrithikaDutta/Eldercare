import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: "Anita P.", text: "We found the perfect companion for my mother. The process was easy and reassuring." },
  { name: "Ramesh V.", text: "The background checks gave us peace of mind. Highly recommend!" },
  { name: "Sonal G.", text: "Flexible scheduling made it easy to get help when we needed it most." }
];

const CustomerTestimonials = () => (
  <section className="py-5 section-animated" style={{ background: '#fff' }}>
    <div className="container text-center">
      <h2>
        <FaQuoteLeft style={{ marginRight: 8, color: '#F4A261' }} />
        What Families Say
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

export default CustomerTestimonials;