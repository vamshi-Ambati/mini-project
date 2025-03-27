import React from 'react'
import "./styles/login.css"
const Login = () => {
  return (
    <div className='loginSection'>
        <h1 className='login-heading'>Vendor Login</h1>
        <form action="">
            <input type="text" id="username" name="username" required placeholder='Username'/>

            <input type="password" id="password" name="password" required placeholder='Password'/>

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login