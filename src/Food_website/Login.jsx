import React from 'react'
import { useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';


const Login = () => {
const navigate=useNavigate()


useEffect(() => {
const timeid=setTimeout(() => {
  navigate('/forgot')

},3000 );

}, [])







function forgotpswd() {
  navigate('/forgot')
}


  return (
    <center>
    <div>
       <div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>
      <div class="actions">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" onClick={forgotpswd}>Forgot password?</a>
      </div>
      <button className='button1' type="submit">Login</button>
      
    </form>
  </div>
    </div>
    </center>
  )
}

export default Login
