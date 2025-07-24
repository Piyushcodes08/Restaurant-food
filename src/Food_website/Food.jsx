import React from 'react'
import img3 from "./images/img/img-3.jpg";
import img4 from "./images/img/img-4.jpg";
import img5 from "./images/img/img-5.jpg";
const Food = () => {
  return (
     <section id="foods">

    <div className="container">
      <h2 className="explore-title">Explore Our Delicious Foods</h2>
      <div className="row g-4">
        {/* <!-- Food 1 --/> */}
        <div className="col-md-4">
          <img src={img3} alt="Food 1" className="explore-img" />
          <p className="food-caption">Spicy Thai</p>
        </div>
        {/* <!-- Food 2 --/> */}
        <div className="col-md-4">
          <img src={img4} alt="Food 2" className="explore-img" />
          <p className="food-caption">Classic Italian</p>
        </div>
        {/* <!-- Food 3 --> */}
        <div className="col-md-4">
          <img src={img5} alt="Food 3" className="explore-img" />
          <p className="food-caption">Fresh Summer</p>
        </div>
      </div>
    </div>


  </section>

  )
}

export default Food
