import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import AuthHeader from '../components/auth/AuthHeader';
import Footer from '../components/landing/Footer';
import '../styles/Auth.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AuthHeader active="login" />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg">
              <Card.Body className="p-5">
                <h2 className="text-center fw-bold mb-4">Choose Your Role</h2>
                <div className="d-grid gap-3">
                  <Button variant="primary" size="lg" onClick={() => navigate('/login/customer')}>
                    Login as Customer
                  </Button>
                  <Button variant="success" size="lg" onClick={() => navigate('/login/provider')}>
                    Login as Service Provider
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

export default LoginPage;