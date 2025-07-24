import React from 'react'
import { useNavigate } from 'react-router-dom';
const Forgot = () => {
const navigate=useNavigate()

function gotologin() {
    navigate('/login')
}




  return (
    <center>
  <div class="forgot-password-container">
    <form class="forgot-password-form">
      <h2>Forgot Password</h2>
      <p>Enter your registered email to receive a password reset link.</p>
      
      <div class="input-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" required/>
      </div>
      
      <button className='button1' type="submit">Send Reset Link</button>
      
      <p class="back-link">
        Remembered your password? <a href="#" onClick={gotologin}>Back to Login</a>
      </p>
    </form>
  </div>
  </center>
  )
}

export default Forgot
