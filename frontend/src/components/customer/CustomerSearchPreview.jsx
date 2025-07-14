import React from 'react';

const companions = [
  { name: "Amit S.", location: "Delhi", rating: 4.9, img: "/public/images/companion1.jpg" },
  { name: "Sara T.", location: "Mumbai", rating: 4.8, img: "/public/images/companion2.jpg" },
  { name: "Ravi K.", location: "Bangalore", rating: 4.7, img: "/public/images/companion3.jpg" }
];

const CustomerSearchPreview = () => (
  <section className="py-5 section-animated" style={{ background: '#fff' }}>
    <div className="container">
      <h3 className="text-center mb-4">Preview Companions Near You</h3>
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">
          <input className="form-control" placeholder="Location (e.g. Mumbai)" />
        </div>
        <div className="col-md-4">
          <input className="form-control" placeholder="Availability (e.g. Weekends)" />
        </div>
      </div>
      <div className="row">
        {companions.map((c, idx) => (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card h-100 shadow-sm">
              <img src={c.img} alt={c.name} className="card-img-top" style={{ height: 180, objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text">{c.location} <span className="ms-2">⭐ {c.rating}</span></p>
                <button className="btn btn-secondary" style={{ filter: 'blur(2px)', pointerEvents: 'none' }}>
                  Book Now (Login Required)
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <span className="text-muted">Login to see full details and book a companion.</span>
      </div>
    </div>
  </section>
);

export default CustomerSearchPreview;