import React from 'react'
import img1 from "./images/img/img-1.png";
import img2 from "./images/img/img-2.png";
const About = () => {
  return (
     <section id="About">

    <div className="container first_about">
      <div className="row">
        <div className="col-md-6">
          <img src={img1} className="img-fluid about_img" alt=""/>
        </div>
        <div className="col-md-6 about_section">
          <h1>About us</h1>
          <p>
            Welcome to Foodies Heaven! We are passionate about creating delicious and healthy meals
            that bring joy and comfort to every bite. Our chefs use only the freshest ingredients,
            blending flavors and cultures to bring you a culinary experience like no other.
            <br/><br/>
            At Foodies Heaven, we believe that food is not just about sustenance, but about creating
            memories and sharing love. Join us on this delightful journey and savor every moment!
          </p>
          <button>Learn more</button>
        </div>
      </div>

    </div>
    <div className="container sec_about">
      <div className="row">
        <div className="col-md-6 sec_heading">
          <h4 className="about-text">
            At Foodies Heaven, we’re dedicated to bringing you the best in culinary delights.
            Here’s what sets us apart:
          </h4>
          <ul class="about-list">
            <li><i className="fa-solid fa-check"></i> Passionate chefs with years of experience</li>
            <li><i className="fa-solid fa-check"></i> A cozy and welcoming atmosphere</li>
            <li><i className="fa-solid fa-check"></i> Delightful dishes for every taste</li>
            <li><i className="fa-solid fa-check"></i> Friendly and attentive service</li>
          </ul>
        </div>
        <div className="col-md-6 second_img" >
          <img src={img2} alt="" className="img-fluid sec_img"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
