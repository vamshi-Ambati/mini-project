import React from 'react'
import "./styles/login.css"
// import { FaUser, FaLock } from 'react-icons/fa'; // Import icons


const Login = () => {
  return (
    <div className='loginSection'>
        <h1 className='login-heading'>Login</h1>
        <form action="">

            <input type="text" id="username" name="username" required placeholder='Username'/>

            <input type="password" id="password" name="password" required placeholder='Password'/>
            
            <div className="login-links">
              <h6 className="login-link"><span>Forgot password</span></h6>
              {/* <h6 className="login-link">Don't have an account? <span>Signup</span></h6> */}
           </div>
            <button type="submit">Login</button>
            <h6 className="login-signup">
            Already have an account? <span>Login</span>
          </h6>           
        </form>
    </div>
  )
}

export default Login

