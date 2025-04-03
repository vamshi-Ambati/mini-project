import React, { useState } from "react";
import "./styles/register.css";
import { API_URL } from "../data/apiPath";
import {Link} from "react-router-dom"

const Register = ({handleShowLogin}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error,setEmailError] = useState(null)
  // const [loading, setLoading] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendors/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername("");
        setEmail("");
        setPassword("");
        // alert("Registration Successful");
        handleShowLogin();
      }
    } catch (error) {
      console.error("registration failed", error);
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // setUsername("")
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // setEmail("")
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // setPassword("")
  };
  return (
    <>
      <div className="registerSection">
        <h1>Signup to Foodie !!</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            value={username}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleUsernameChange}
            name="username"
            required
            placeholder="Username"
          />
          <input
            type="email"
            id="email"
            value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            onChange={handleEmailChange}
            name="email"
            required
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handlePasswordChange}
            name="password"
            required
            placeholder="Password"
          />
          <button type="submit">Signup</button>
          <h6 className="login-signup">
            Already have an account? 
            <span onClick={handleShowLogin}>
              {/* <Link to = "/login">Login</Link> */}
              Login
            </span>
          </h6>
        </form>
      </div>
    </>
  );
};

export default Register;
