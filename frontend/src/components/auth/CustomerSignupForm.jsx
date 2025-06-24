import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../styles/Auth.css';

const CustomerSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    // Handle customer signup logic here
  };

  return (
    <div className="auth-split-card my-5 mx-auto" style={{maxWidth: 900}}>
      <div className="auth-panel signup">
        <h2 className="fw-bold mb-3">Customer Signup</h2>
        <p className="mb-4">Create your account to get started.</p>
        <Button variant="outline-light" size="lg" onClick={() => navigate('/login/customer')}>
          Sign In
        </Button>
      </div>
      <div className="auth-form-section">
        <h3 className="fw-bold mb-4" style={{color: 'var(--text-primary)'}}>Create Your Customer Account</h3>
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
          <div className="d-grid mb-3">
            <Button variant="success" type="submit" size="lg">
              Sign Up
            </Button>
          </div>
          <div className="text-center">
            <Link to="/login/customer" className="text-success">Already have an account? Sign In</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CustomerSignupForm; 