import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';
import '../styles/Auth.css';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeader active="signup" />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg">
              <Card.Body className="p-5">
                <h2 className="text-center fw-bold mb-4">Join As</h2>
                <div className="d-grid gap-3">
                  <Button variant="primary" size="lg" onClick={() => navigate('/signup/customer')}>
                    Sign up as a Customer
                  </Button>
                  <Button variant="success" size="lg" onClick={() => navigate('/signup/provider')}>
                    Sign up as a Service Provider
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SignupPage;