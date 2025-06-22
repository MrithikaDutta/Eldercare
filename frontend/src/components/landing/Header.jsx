import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'services', 'about', 'reviews'];
      const scrollOffset = 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= window.scrollY + scrollOffset) {
          setActiveLink(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className="shadow-sm custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          ElderCare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link me-3 ${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={`nav-link me-3 ${activeLink === 'services' ? 'active' : ''}`}
              onClick={() => setActiveLink('services')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link me-3 ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => setActiveLink('about')}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#reviews"
              className={`nav-link me-3 ${activeLink === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveLink('reviews')}
            >
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="me-3">
              <Button variant="outline-light" size="sm">Login</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <Button variant="light" size="sm">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;