import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-5">
    <div className="container text-center">
      <p className="mb-1">&copy; {new Date().getFullYear()} Eldercare. All rights reserved.</p>
      <small>
        <a href="mailto:support@eldercare.com" className="text-light text-decoration-underline">Contact Support</a>
      </small>
    </div>
  </footer>
);

export default Footer;