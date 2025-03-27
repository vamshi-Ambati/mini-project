import React from 'react';
import "./styles/navbar.css"

const Navbar = ({handleShowLogin,handleShowRegister}) => {
  return (
    <>
      <div className="navSection">
        <div className="company">
         <h1>Vendor Dashboard</h1>
        </div>
        <div className="userAuth">
          <span onClick={handleShowLogin}>Login</span>
          <span onClick={handleShowRegister}>Register</span>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;