import React from 'react';
import { FaWpforms, FaUserFriends, FaCalendarCheck } from 'react-icons/fa';

const steps = [
  {
    icon: <FaWpforms size={36} color="#5B7DB1" />,
    title: "Tell Us Your Needs",
    desc: "Fill out a quick form about your loved one's care requirements."
  },
  {
    icon: <FaUserFriends size={36} color="#2A9D8F" />,
    title: "Browse Companions",
    desc: "See matching, verified companions in your area."
  },
  {
    icon: <FaCalendarCheck size={36} color="#F4A261" />,
    title: "Book & Relax",
    desc: "Book a visit and let us handle the rest!"
  }
];

const CustomerHowItWorks = () => (
  <section id="how" className="py-5 section-animated" style={{ background: 'var(--bg-main)' }}>
    <div className="container text-center">
      <h2>How It Works</h2>
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

export default CustomerHowItWorks;