import React, { useState } from 'react';
 // Import the CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2 className="auth-title">Login to Your Account</h2>
        <p className="auth-subtitle">Login using social networks</p>
        <div className="social-buttons">
          <button className="social-btn facebook">F</button>
          <button className="social-btn google">G+</button>
          <button className="social-btn linkedin">in</button>
        </div>
        <p className="auth-divider">OR</p>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary auth-btn">Sign In</button>
        </form>
      </div>
      <div className="auth-right">
        <h2 className="auth-title">New Here?</h2>
        <p className="auth-subtitle">Sign up and discover a great amount of new opportunities!</p>
        <button className="btn btn-secondary auth-btn">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginForm;