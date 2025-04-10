import React, { useState, useEffect } from "react";
import "./styles/navbar.css";
import logo from "../components/images/logo.jpeg";
import { API_URL } from "../data/apiPath";

const Navbar = ({
  handleShowLogin,
  handleShowAddFirm,
  handleShowAddProduct,
  handleShowAllProducts,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open", !isMenuOpen); // Corrected toggle logic
  };

  useEffect(() => {
    // Check for a token in local storage on component mount
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("vendorFirmId");
    localStorage.removeItem("vendorFirmName");
    window.location.reload();
  };

  const handleLoginClick = () => {
    handleShowLogin();
    // You might want to close the menu after clicking login on mobile
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };
  const firmName = localStorage.getItem("vendorFirmName")
  return (
    <div className="navSection">
      <div
        className={`company ${isMenuOpen ? "hidden" : ""}`}
        style={{ cursor: "pointer" }}
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
        <h1>Foodie</h1>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </div>
      {/* <div className="firmName">
        <h1>Firm Name:{firmName}</h1>
      </div> */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="list-items">
          <ul>
            <li onClick={handleShowAddFirm}>Add Firm</li>
            <li onClick={handleShowAddProduct}>Add product</li>
            <li onClick={handleShowAllProducts}>All Products</li>
            <li>User Details</li>
          </ul>
        </div>
        <div className="userAuth">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
