import React from 'react';

const Footer = () => {
  return (
    <section id="more">
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* About */}
            <div className="col-md-4 mb-4 contain">
              <h5>About Us</h5>
              <p className="foot">
                We’re passionate about bringing you the best flavors from around the world, using fresh ingredients and a dash of love in every dish.
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4 contain">
              <h5>Contact</h5>
              <p className="foot">
                <i className="fas fa-map-marker-alt"></i> 123 Foodie Street, Flavor City<br />
                <i className="fas fa-phone"></i> +91 6371149273<br />
                <i className="fas fa-envelope"></i>Piyushkoirax@gmail.com
              </p>
            </div>

            {/* Social */}
            <div className="col-md-4 mb-4 contain">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
          <b>  Piyush.codes </b>&copy; 2025 Foodies Heaven. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
