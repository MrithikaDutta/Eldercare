import React from 'react';
import { FaRegListAlt, FaUserCheck, FaStar } from 'react-icons/fa';

const steps = [
  { 
    title: "Submit Needs", 
    desc: "Tell us what kind of help or companionship you need.",
    icon: <FaRegListAlt size={36} color="#5B7DB1" />,
    badge: "Step 1"
  },
  { 
    title: "Match with Caregiver", 
    desc: "We connect you with a suitable, vetted companion.",
    icon: <FaUserCheck size={36} color="#2A9D8F" />,
    badge: "Step 2"
  },
  { 
    title: "Book and Review", 
    desc: "Schedule visits and share your experience.",
    icon: <FaStar size={36} color="#F4A261" />,
    badge: "Step 3"
  }
];

const HowItWorks = () => (
  <section id="howitworks" className="py-5 section-animated"
  style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
    <div className="container text-center">
      <h2>
        <FaRegListAlt style={{marginRight:8, color:'#5B7DB1'}} />
        How It Works
      </h2>
      <div className="row mt-4">
        {steps.map((step, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="mb-2">{step.icon}</div>
                <span className="badge rounded-pill" style={{background:'#6D8DC5', color:'#fff', marginBottom:8}}>
                  {step.badge}
                </span>
                <h5 className="card-title mt-2">{step.title}</h5>
                <p className="card-text">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;