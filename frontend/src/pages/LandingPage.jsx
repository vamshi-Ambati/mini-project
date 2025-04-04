import React, { useState } from 'react'
import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'/
import Login from '../components/Login'
import Register from '../components/Register'
import AddFirm from '../components/AddFirm'
import AddProduct from '../components/AddProduct'
import Welcome from "../components/Welcome"
import AllProducts from "../components/AllProducts";

const LandingPage = () => {
  const [showLogin, setShowLogin] =useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showAddFirm, setShowAddFirm] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleShowLogin=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false);
  }
  const handleShowRegister=()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false);
  }
  const handleShowAddFirm=()=>{
    setShowAddFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false);
  }
  const handleShowAddProduct=()=>{
    setShowAddProduct(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowWelcome(false)
    setShowAllProducts(false);
  }
  const handleShowWelcome = () => {
    setShowWelcome(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowAllProducts(false);
  };

  const handleShowAllProducts = () => {
    setShowAllProducts(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
  };
  return (
    <>
      <Navbar
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
        handleShowAddFirm={handleShowAddFirm}
        handleShowAddProduct={handleShowAddProduct}
        handleShowAllProducts={handleShowAllProducts}
      />
      <div className="container">
        {/* <Sidebar
          handleShowAddFirm={handleShowAddFirm}
          handleShowAddProduct={handleShowAddProduct}
        /> */}
        {showLogin && (
          <Login
            handleShowWelcome={handleShowWelcome}
            handleShowRegister={handleShowRegister}
            handleShowAddFirm={handleShowAddFirm}
          />
        )}
        {showRegister && <Register handleShowLogin={handleShowLogin} />}
        {showAddFirm && <AddFirm handleShowAddProduct={handleShowAddProduct} />}
        {showAddProduct && <AddProduct />}
        {showWelcome && <Welcome />}
        {showAllProducts && <AllProducts handleShowAllproducts={handleShowAllProducts}/>}
        {/* <AllProducts /> */}
      </div>
    </>
  );
}

export default LandingPage