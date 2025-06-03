import { Container, Navbar, Nav } from 'react-bootstrap'

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
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#services" className="nav-link">Services</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About Us</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">Reviews</Nav.Link>
              <Nav.Link href="#login" className="nav-link login-btn">Login/Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header 