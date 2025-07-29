import HeroSlider from '../components/HeroSlider';
import { Heart, Shield, Clock, Users, Star, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Heart />,
      title: "Personal Care",
      description: "Assistance with daily activities, bathing, grooming, and medication management."
    },
    {
      icon: <Users />,
      title: "Companionship",
      description: "Social interaction, conversation, and emotional support for your loved ones."
    },
    {
      icon: <Shield />,
      title: "Medical Support",
      description: "Professional medical care and health monitoring by qualified staff."
    },
    {
      icon: <Clock />,
      title: "24/7 Availability",
      description: "Round-the-clock care services available whenever you need them."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "50+", label: "Care Professionals" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="home">
      <HeroSlider />
      
      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About ElderCare Companions</h2>
              <p className="lead">
                We are dedicated to providing exceptional care services for seniors, 
                ensuring they maintain their independence, dignity, and quality of life 
                in the comfort of their own homes.
              </p>
              <p>
                Our team of compassionate professionals is committed to delivering 
                personalized care that meets the unique needs of each individual. 
                With years of experience and a deep understanding of elder care, 
                we provide peace of mind for families while ensuring the highest 
                quality of life for their loved ones.
              </p>
              <div className="about-features">
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>Background Checked Staff</span>
                </div>
                <div className="feature">
                  <CheckCircle className="feature-icon" />
                  <span>Personalized Care Plans</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="visual-card">
                <div className="card-icon">
                  <Heart size={60} />
                </div>
                <h3>Compassionate Care</h3>
                <p>Dedicated to providing loving, professional care</p>
              </div>
              <div className="visual-card">
                <div className="card-icon">
                  <Shield size={60} />
                </div>
                <h3>Trusted Service</h3>
                <p>Licensed, insured, and background-checked professionals</p>
              </div>
              <div className="visual-card">
                <div className="card-icon">
                  <Users size={60} />
                </div>
                <h3>Family Focused</h3>
                <p>Supporting families with personalized care solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive care solutions tailored to your family's needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Families Say</h2>
            <p>Hear from the families we've had the privilege to serve</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>
                "The care team has been absolutely wonderful with my mother. 
                They treat her with such kindness and respect. I couldn't ask for better care."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Daughter of care recipient</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>
                "Professional, caring, and reliable. ElderCare Companions has given 
                our family peace of mind knowing dad is in good hands."
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Son of care recipient</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star filled" />
                ))}
              </div>
              <p>
                "The companionship service has made such a difference in my grandmother's 
                life. She looks forward to their visits every day."
              </p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>Granddaughter of care recipient</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;