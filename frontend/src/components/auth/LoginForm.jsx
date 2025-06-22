import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Google, Facebook, Linkedin } from 'react-bootstrap-icons';
import '../../styles/Auth.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    console.log('Login:', { email, password });
    // navigate('/'); // Uncomment to redirect after login
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Welcome Back!</h2>
                <p className="text-muted">Sign in to continue to ElderCare.</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit} className="auth-form">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Sign In
                  </Button>
                </div>
              </Form>

              <div className="text-center my-4">
                <span className="text-muted">OR</span>
              </div>

              <div className="d-flex justify-content-center">
                <Button variant="outline-danger" className="me-2"><Google /></Button>
                <Button variant="outline-primary" className="me-2"><Facebook /></Button>
                <Button variant="outline-info"><Linkedin /></Button>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted">
                  New here? <Link to="/signup">Create an Account</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;