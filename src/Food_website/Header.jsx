import React, { useState } from 'react';
import logo from "./images/logo.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  function signup() {
    navigate('/Signup');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggle(!toggle)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setToggle(false)}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" onClick={() => setToggle(false)}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Food" className="nav-link" onClick={() => setToggle(false)}>Explore foods</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Review" className="nav-link" onClick={() => setToggle(false)}>Reviews</NavLink>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => {
                    signup();
                    setToggle(false);
                  }}
                  className="btn"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
