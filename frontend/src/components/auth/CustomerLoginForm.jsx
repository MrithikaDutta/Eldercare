import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import '../../styles/Auth.css';

const CustomerLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    // Handle customer login logic here
  };

  return (
    <div className="auth-split-card my-5 mx-auto" style={{maxWidth: 900}}>
      <div className="auth-panel login">
        <h2 className="fw-bold mb-3">Customer Login</h2>
        <p className="mb-4">Welcome back!</p>
        <Button variant="outline-light" size="lg" onClick={() => navigate('/signup/customer')}>
          Sign Up
        </Button>
      </div>
      <div className="auth-form-section">
        <h3 className="fw-bold mb-4" style={{color: 'var(--text-primary)'}}>Sign In to Your Customer Account</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="auth-form">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Username/Email address<span style={{color: 'red'}}>*</span></Form.Label>
            <Form.Control
              type="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Password<span style={{color: 'red'}}>*</span></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="d-grid mb-3">
            <Button variant="primary" type="submit" size="lg">
              Sign In
            </Button>
          </div>
          <div className="text-center">
            <Link to="/forgot-password" className="text-primary">Forgot password?</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CustomerLoginForm; 