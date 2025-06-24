import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../styles/Auth.css';

const ServiceProviderSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [providerCode, setProviderCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !providerCode) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    // Handle provider signup logic here
  };

  return (
    <div className="auth-split-card my-5 mx-auto" style={{maxWidth: 900}}>
      <div className="auth-panel signup">
        <h2 className="fw-bold mb-3">Service Provider Signup</h2>
        <p className="mb-4">Register your service.</p>
        <Button variant="outline-light" size="lg" onClick={() => navigate('/login/provider')}>
          Sign In
        </Button>
      </div>
      <div className="auth-form-section">
        <h3 className="fw-bold mb-4" style={{color: 'var(--text-primary)'}}>Create Your Provider Account</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="auth-form">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
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
          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="providerCode">
            <Form.Label>Provider Code<span style={{color: 'red'}}>*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your provider code"
              value={providerCode}
              onChange={(e) => setProviderCode(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-grid mb-3">
            <Button variant="success" type="submit" size="lg">
              Sign Up
            </Button>
          </div>
          <div className="text-center">
            <Link to="/login/provider" className="text-success">Already have an account? Sign In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ServiceProviderSignupForm; 