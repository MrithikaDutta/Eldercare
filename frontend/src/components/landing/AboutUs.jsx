import { Container, Row, Col, Image } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

const AboutUs = () => (
  <section id="about" className="py-5">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <Image 
            src="/images/images.jpg" 
            rounded 
            fluid 
            className="shadow-lg"
          />
        </Col>
        <Col md={6}>
          <div className="ps-md-5">
            <h2 className="fw-bold">About ElderCare</h2>
            <p className="lead text-muted">Your trusted partner in senior care.</p>
            <p>
              ElderCare Companion is dedicated to providing compassionate and professional care for seniors. 
              Our mission is to ensure your loved ones receive the support, respect, and companionship they deserve, 
              helping them live with dignity and comfort.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2"><CheckCircle className="text-primary me-2" /> Compassionate Support</li>
              <li className="mb-2"><CheckCircle className="text-primary me-2" /> Professional Staff</li>
              <li className="mb-2"><CheckCircle className="text-primary me-2" /> Personalized Care Plans</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutUs;