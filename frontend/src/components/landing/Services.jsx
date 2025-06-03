import { Container } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="features-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">Personal Care</h3>
                <p className="card-text">
                  Assistance with daily activities and personal hygiene needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">Companionship</h3>
                <p className="card-text">
                  Meaningful social interaction and emotional support.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">Medical Support</h3>
                <p className="card-text">
                  Medication reminders and basic health monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services 