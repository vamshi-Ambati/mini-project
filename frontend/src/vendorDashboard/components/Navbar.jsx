import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="company">
         <h1>Vendor Dashboard</h1>
        </div>
        <div className="userAuth">
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;