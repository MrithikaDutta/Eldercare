import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="fw-bold">ElderCare</h5>
            <p className="text-muted">
              Providing quality care for your loved ones with compassion and professionalism.
            </p>
            <div>
              <a href="#" className="text-white me-3"><Facebook size={20} /></a>
              <a href="#" className="text-white me-3"><Twitter size={20} /></a>
              <a href="#" className="text-white"><Linkedin size={20} /></a>
            </div>
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li><a href="#services" className="text-decoration-none text-muted">Services</a></li>
              <li><a href="#about" className="text-decoration-none text-muted">About Us</a></li>
              <li><a href="#reviews" className="text-decoration-none text-muted">Reviews</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold">Contact Us</h5>
            <p className="text-muted">
              123 Care Street, Suite 456<br />
              City, State, 12345<br />
              Email: <a href="mailto:info@eldercare.com" className="text-decoration-none text-muted">info@eldercare.com</a><br />
              Phone: (123) 456-7890
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; {new Date().getFullYear()} ElderCare. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 