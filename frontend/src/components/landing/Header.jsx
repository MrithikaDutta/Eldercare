import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            ElderCare
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as="a" href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link as="a" href="#services" className="nav-link">Services</Nav.Link>
              <Nav.Link as="a" href="#about" className="nav-link">About Us</Nav.Link>
              <Nav.Link as="a" href="#reviews" className="nav-link">Reviews</Nav.Link>
              <Link to="/login" className="nav-link login-btn">Login</Link>
              <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;