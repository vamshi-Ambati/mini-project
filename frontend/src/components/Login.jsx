import React, { useState } from "react";
import "./styles/login.css";
// import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { API_URL } from "../data/apiPath";

const Login = ({handleShowWelcome}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendors/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        // alert("Login Successful");
        // setEmail("");
        // setPassword("");
        localStorage.setItem("token", data.token);
        handleShowWelcome();
      }
    } catch (error) {
      console.error("login failed", error);
    }
  };
  return (
    <div className="loginSection">
      <h1 className="login-heading">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-links">
          <h6 className="login-link">
            <span>Forgot password</span>
          </h6>
          {/* <h6 className="login-link">Don't have an account? <span>Signup</span></h6> */}
        </div>
        <button type="submit">Login</button>
        <h6 className="login-signup">
          Already have an account? <span>Login</span>
        </h6>
      </form>
    </div>
  );
};

export default Login;


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JJZCI6IjY3ZTk1ZTQxOGMyZjE3ZjQ5Y2M0YTFlZCIsImlhdCI6MTc0MzM0Nzk3NywiZXhwIjoxNzQzMzUxNTc3fQ.iFNIWXBOHBqYFGMCoH4hoz81K1-i0zIY8BIhorBB8qc
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JJZCI6IjY3ZTk1ZTQxOGMyZjE3ZjQ5Y2M0YTFlZCIsImlhdCI6MTc0MzM0ODA2OSwiZXhwIjoxNzQzMzUxNjY5fQ.18dIO56wG_ClXWClhooHP-DX_ex4XuAwPJze1XeLV-0