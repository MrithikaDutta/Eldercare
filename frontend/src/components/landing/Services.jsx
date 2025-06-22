import { Container, Card, Row, Col } from 'react-bootstrap';
import { Person, Heart, JournalMedical } from 'react-bootstrap-icons';

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="lead text-muted">A range of services to meet the needs of your loved ones.</p>
        </div>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <div className="mb-3">
                  <Person size={50} className="text-primary" />
                </div>
                <Card.Title className="h5">Personal Care</Card.Title>
                <Card.Text>
                  Assistance with daily activities and personal hygiene needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <div className="mb-3">
                  <Heart size={50} className="text-primary" />
                </div>
                <Card.Title className="h5">Companionship</Card.Title>
                <Card.Text>
                  Meaningful social interaction and emotional support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Body>
                <div className="mb-3">
                  <JournalMedical size={50} className="text-primary" />
                </div>
                <Card.Title className="h5">Medical Support</Card.Title>
                <Card.Text>
                  Medication reminders and basic health monitoring.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services; 