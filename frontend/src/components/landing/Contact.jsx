import { Container, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-primary text-white">
      <Container className="text-center">
        <h2 className="display-5 fw-bold mb-3">Ready to Get Started?</h2>
        <p className="lead mb-4">
          Contact us today to discuss your care needs and learn how we can provide the best support for your family.
        </p>
        <Button variant="light" size="lg" href="#">
          Get in Touch
        </Button>
      </Container>
    </section>
  )
}

export default Contact 