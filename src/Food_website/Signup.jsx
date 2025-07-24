import React from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {

const navigate=useNavigate()

function log_in() {
  navigate('/login')
}



  return (
    <center>
    <div>
      <div className="signup-container">
    <form className="signup-form">
      <h2>Create Account</h2>
      <div className="input-group">
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Enter your full name" required />
      </div>
      <div className="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div className="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Create a password" required />
      </div>
      <div className="input-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Confirm your password" required />
      </div>
      <button type="submit">Sign Up</button>
      <p className="login-link">Already have an account? <a onClick={log_in} href="#">Login</a></p>
    </form>
  </div>
    </div>
    </center>
  )
}

export default Signup
