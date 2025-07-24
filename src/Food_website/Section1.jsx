import React from 'react'
const Section1 = () => {
  return (
     <section id="Home">
    <div className="container-fluid px-0 banner">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 heading">
            <h1>
              Good food choices are good <b> investments.</b>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, assumenda expedita eos, cum
              voluptatem iste nisi quae sapiente eaque odio aperiam adipisci cumque error porro qui laborum omnis iure
              asperiores.
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
