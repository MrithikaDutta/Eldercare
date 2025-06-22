import { Container, Button } from 'react-bootstrap'

const Hero = () => {
  const heroStyle = {
    backgroundImage: 'url(/images/hero.jpg)', // Use image from public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '100px 0',
    marginBottom: '0',
  };

  return (
    <div id="home" style={heroStyle}>
      <Container>
        <h1 className="display-3 fw-bold">Caring for Your Elder Ones</h1>
        <p className="lead my-4">
          Professional and compassionate care services for your elderly family members.
          We provide personalized care solutions to ensure comfort and well-being.
        </p>
        <Button variant="primary" size="lg" href="#services">Learn More</Button>
      </Container>
    </div>
  );
};

export default Hero