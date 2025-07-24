import React from 'react'
import review1 from "./images/review/review-1.jpg";
import review2 from "./images/review/review-2.jpg";
const Review = () => {
  return (
   <section id="Reviews">
 <div className="container-fluid">
    <h2 className="reviews-title">What Our Customers Say</h2>
    <div className="row">
      {/* <!-- Review 1 --> */}
      <div className="col-md-6">
        <div className="review-card h-100">
          <img src={review1} alt="Customer 1" className="review-img" />
          <h4 className="review-name">Amit Sharma</h4>
          <p className="review-text">“The food was absolutely delicious, and the staff were super friendly!”</p>
        </div>
      </div>
      {/* <!-- Review 2 --> */}
      <div className="col-md-6">
        <div className="review-card h-100">
          <img src={review2} alt="Customer 2" className="review-img" />
          <h4 className="review-name">Priya Verma</h4>
          <p className="review-text">“A fantastic dining experience! Highly recommend the pasta dishes.”</p>
        </div>
      </div>
    </div>
  </div>

</section>
  )
}

export default Review
