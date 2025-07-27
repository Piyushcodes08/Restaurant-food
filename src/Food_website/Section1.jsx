import React from 'react'
const Section1 = () => {
  return (
     <section id="Home">
    <div className="container-fluid px-0 banner">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 heading">
            <h1>
              Good food choices are good investments.
            </h1>
            <p>
             Eat healthy without compromising on taste! At [Your Brand Name], we specialize in freshly prepared, balanced meals made with all-natural ingredients. Our nutritionist-approved menus are perfect for fitness lovers, weight-watchers, or anyone seeking a clean-eating lifestyle. Because your body deserves the best.
            </p>
            <button className="order_btn">Order Now</button>

          </div>

        </div>

      </div>

    </div>
    <div className="container-fluid px-0 banner2">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 heading_2">
            <h2>Welcome to Our Food Website!
            </h2>
            <p>
              Here, you’ll discover mouthwatering dishes and flavors that bring people together.
            </p>
            <button className="order_btn">Learn more</button>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}

export default Section1
