import React from 'react'
import "./styles/register.css"

const Register = () => {
  return (
    <>
    <div className="registerSection">
        <h1>Signup</h1>
        <form action="">
            <input type="text" id="username" name="username" required placeholder='Username'/>
            <input type="email" id="email" name="email" required placeholder='Email'/>
            <input type="password" id="password" name="password" required placeholder='Password'/>
            <button type="submit">Signup</button>
            <h6 className="login-signup">
            Already have an account? <span>Login</span>
          </h6> 
        </form>
    </div>
    </>
  )
}

export default Register