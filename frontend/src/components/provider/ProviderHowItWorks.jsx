import React from 'react';
import { FaUserPlus, FaClipboardCheck, FaDollarSign } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus size={36} color="#5B7DB1" />,
    title: "Create Your Profile",
    desc: "Sign up and complete your caregiver profile with your skills and availability."
  },
  {
    icon: <FaClipboardCheck size={36} color="#2A9D8F" />,
    title: "Get Verified",
    desc: "Complete our verification process to build trust with families."
  },
  {
    icon: <FaDollarSign size={36} color="#F4A261" />,
    title: "Start Earning",
    desc: "Accept bookings and provide compassionate care while earning good money."
  }
];

const ProviderHowItWorks = () => (
  <section id="howitworks" className="py-5 section-animated" style={{ background: 'var(--bg-main)' }}>
    <div className="container text-center">
      <h2>How It Works for Providers</h2>
      <div className="row mt-4">
        {steps.map((step, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="mb-2">{step.icon}</div>
                <h5 className="card-title">{step.title}</h5>
                <p className="card-text">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProviderHowItWorks;