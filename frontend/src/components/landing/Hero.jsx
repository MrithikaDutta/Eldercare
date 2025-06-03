import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <Container>
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 className="display-4 mb-4">Caring for Your Loved Ones</h2>
            <p className="lead mb-4">
              Professional and compassionate care services for your elderly family members.
              We provide personalized care solutions to ensure comfort and well-being.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero 