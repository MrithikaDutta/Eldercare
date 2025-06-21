import React from 'react';

const reviews = [
  {
    name: 'Jane Doe',
    text: 'ElderCare Companion has been a blessing for our family. The caregivers are attentive and truly care about their clients.',
  },
  {
    name: 'Michael Smith',
    text: 'Professional, reliable, and compassionate service. Highly recommended for anyone seeking quality elder care.',
  },
  {
    name: 'Priya Patel',
    text: 'My mother feels safe and happy thanks to the wonderful team at ElderCare Companion.',
  },
];

const Reviews = () => (
  <section id="reviews" className="py-5">
    <div className="container">
      <h2 className="mb-4 text-center">What Our Clients Say</h2>
      <div className="row justify-content-center">
        {reviews.map((review, idx) => (
          <div key={idx} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text">"{review.text}"</p>
                <h6 className="card-subtitle mt-3 text-muted text-end">- {review.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;