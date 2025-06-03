import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="lead mb-4">
              Contact us today to discuss your care needs and how we can help.
            </p>
            <button className="btn btn-primary btn-lg">Contact Us</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact 