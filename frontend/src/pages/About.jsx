import { Heart, Award, Users, Clock, Shield, CheckCircle } from 'lucide-react';
import { User } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart />,
      title: "Compassion",
      description: "We approach every interaction with empathy, kindness, and genuine care for our clients and their families."
    },
    {
      icon: <Shield />,
      title: "Trust",
      description: "We build lasting relationships based on reliability, transparency, and consistent quality care."
    },
    {
      icon: <Award />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, continuously improving our services."
    },
    {
      icon: <Users />,
      title: "Family-Centered",
      description: "We treat every client as part of our extended family, providing personalized care with dignity."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Medical Director",
      bio: "25+ years in geriatric medicine"
    },
    {
      name: "Maria Rodriguez",
      role: "Care Coordinator",
      bio: "15+ years in elder care management"
    },
    {
      name: "James Thompson",
      role: "Senior Caregiver",
      bio: "Certified nursing assistant with 12+ years experience"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About ElderCare Companions</h1>
            <p className="hero-subtitle">
              Dedicated to providing exceptional care and companionship for seniors 
              in the comfort of their own homes since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p className="lead">
                To enhance the quality of life for seniors by providing compassionate, 
                professional care services that promote independence, dignity, and well-being.
              </p>
              <p>
                We believe that every senior deserves to age gracefully in familiar surroundings, 
                surrounded by the comfort of home and the support of caring professionals. 
                Our mission is to make this possible through personalized care plans, 
                skilled caregivers, and unwavering commitment to excellence.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Families Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years of Service</span>
                </div>
                <div className="stat">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-stats-visual">
                <div className="stat-visual">
                  <div className="stat-icon">
                    <Heart size={40} />
                  </div>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Families Served</span>
                </div>
                <div className="stat-visual">
                  <div className="stat-icon">
                    <Shield size={40} />
                  </div>
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years of Service</span>
                </div>
                <div className="stat-visual">
                  <div className="stat-icon">
                    <Users size={40} />
                  </div>
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to exceptional care</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  <div className="avatar-icon">
                    <User size={60} />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose ElderCare Companions?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Licensed & Insured</h4>
                    <p>Fully licensed and insured for your peace of mind</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Background Checked</h4>
                    <p>All caregivers undergo thorough background checks</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Personalized Care</h4>
                    <p>Custom care plans tailored to individual needs</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock availability for emergencies</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Family Communication</h4>
                    <p>Regular updates and open communication with families</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h4>Affordable Rates</h4>
                    <p>Competitive pricing with flexible payment options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-visual">
              <div className="feature-showcase">
                <div className="showcase-item">
                  <div className="showcase-icon">
                    <Shield size={50} />
                  </div>
                  <h4>Verified Professionals</h4>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon">
                    <Heart size={50} />
                  </div>
                  <h4>Compassionate Care</h4>
                </div>
                <div className="showcase-item">
                  <div className="showcase-icon">
                    <Clock size={50} />
                  </div>
                  <h4>24/7 Support</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;