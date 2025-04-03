import React, { useState } from "react";
import "./styles/login.css";
import { API_URL } from "../data/apiPath";
import { Link } from "react-router-dom";

const Login = ({ handleShowWelcome, handleShowRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state

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
        localStorage.setItem("token", data.token);
        handleShowWelcome();
      }
    } catch (error) {
      console.error("login failed", error);
    }
  };

  return (
    <div className="loginSection">
      <h1 className="login-heading">Login to Foodie !!</h1>
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
          <div className="remember-forgot"> {/* Container for remember me and forgot password */}
            <label>
              <input
                type="checkbox"
                // checked={rememberMe}
                // onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <h6 className="login-link">
              <span>Forgot password?</span>
            </h6>
          </div>
        </div>
        <button type="submit">Login</button>
        <h6 className="login-signup">
          Don't have an account?
          <span onClick={handleShowRegister}>
            {/* <Link to="/register">Create one</Link> */}
            Create one
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Login;