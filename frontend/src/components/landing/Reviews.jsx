import { Container, Card, Row, Col } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

const reviews = [
  {
    name: 'Jane Doe',
    text: 'ElderCare Companion has been a blessing for our family. The caregivers are attentive and truly care about their clients.',
    stars: 5,
  },
  {
    name: 'Michael Smith',
    text: 'Professional, reliable, and compassionate service. Highly recommended for anyone seeking quality elder care.',
    stars: 5,
  },
  {
    name: 'Priya Patel',
    text: 'My mother feels safe and happy thanks to the wonderful team at ElderCare Companion.',
    stars: 5,
  },
];

const Reviews = () => (
  <section id="reviews" className="py-5 bg-light">
    <Container>
      <div className="text-center mb-5">
        <h2 className="fw-bold">What Our Clients Say</h2>
        <p className="lead text-muted">Real stories from families we've helped.</p>
      </div>
      <Row className="justify-content-center g-4">
        {reviews.map((review, idx) => (
          <Col key={idx} md={4}>
            <Card className="h-100 shadow border-0">
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  {[...Array(review.stars)].map((_, i) => (
                    <StarFill key={i} className="text-warning me-1" />
                  ))}
                </div>
                <blockquote className="blockquote mb-0 flex-grow-1">
                  <p>"{review.text}"</p>
                  <footer className="blockquote-footer mt-3">{review.name}</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Reviews;