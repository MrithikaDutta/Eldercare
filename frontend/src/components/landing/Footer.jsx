import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div className="row">
          <div className="col-md-6">
            <h5>ElderCare Companion</h5>
            <p>Providing quality care for your loved ones.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p>Contact: </p>
            <p>Email: </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer 