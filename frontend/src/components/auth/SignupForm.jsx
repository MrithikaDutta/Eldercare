import React, { useState } from 'react';
// Import the CSS file for styling

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', { name, email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-subtitle">Create an account to explore new opportunities</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Sign Up</button>
        </form>
      </div>
      <div className="auth-right">
        <h2 className="auth-title">Already Have an Account?</h2>
        <p className="auth-subtitle">Login to access your account</p>
        <button className="btn btn-secondary auth-btn">Login</button>
      </div>
    </div>
  );
};

export default SignupForm;