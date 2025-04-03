import React, { useState } from "react";
import "./styles/navbar.css";
import logo from "../components/images/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  handleShowLogin,
  handleShowAddFirm,
  handleShowAddProduct,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open", isMenuOpen);
  };


  return (
    <div className="navSection">
      <div
        className={`company ${isMenuOpen ? "hidden" : ""}`}
        // Add onClick handler
        style={{ cursor: "pointer" }} // Make it look clickable
      >
        <img
          src={logo}
          alt=""
          style={{
            background: "white",
            height: "50px",
            marginRight: "5px",
          }}
        />
        <h1  >Foodie</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="list-items">
          <ul>
            <li onClick={handleShowAddFirm}>Add Firm</li>
            <li onClick={handleShowAddProduct}>Add product</li>
            <li>All Products</li>
            <li>User Details</li>
          </ul>
        </div>
        <div className="userAuth">
          <button onClick={handleShowLogin}>Login</button>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
