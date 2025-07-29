import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Heart className="logo-icon" />
              <span>ElderCare Companions</span>
            </div>
            <p className="footer-description">
              Providing compassionate, professional care services for seniors. 
              Your loved ones deserve the best care, and we're here to help.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Personal Care</a></li>
              <li><a href="/services">Companionship</a></li>
              <li><a href="/services">Medical Support</a></li>
              <li><a href="/services">Household Help</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@eldercare.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Care Street, City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ElderCare Companions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;