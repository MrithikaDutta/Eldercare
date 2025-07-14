import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Mary S.",
    text: "My companion is like family now. I feel safer and happier every day!",
    role: "Customer"
  },
  {
    name: "John D.",
    text: "Helping elders has given me a sense of purpose. The platform made it easy to connect.",
    role: "Companion"
  },
  {
    name: "Priya K.",
    text: "The matching process was smooth and the support team is wonderful.",
    role: "Customer"
  }
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-5 section-animated"
    style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg-main)' // background color from CSS variable
    }}
  >
    <div className="container text-center">
      <h2>
        <FaQuoteLeft style={{ marginRight: 8, color: '#F4A261' }} />
        What Our Users Say
      </h2>
      <div className="row mt-4">
        {testimonials.map((t, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <p className="card-text">"{t.text}"</p>
                <h6 className="card-subtitle mt-3 text-muted">{t.name} ({t.role})</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;