import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AuthHeader = ({ active }) => (
  <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
    <Container>
      <Navbar.Brand as={Link} to="/" className="fw-bold" style={{ color: 'white' }}>
        ElderCare
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/login" className="me-2">
          <Button variant={active === 'login' ? 'light' : 'outline-light'} size="sm">
            Login
          </Button>
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          <Button variant={active === 'signup' ? 'light' : 'outline-light'} size="sm">
            Sign Up
          </Button>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default AuthHeader; 