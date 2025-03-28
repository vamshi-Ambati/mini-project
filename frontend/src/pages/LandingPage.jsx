import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import Register from '../components/Register'
import AddFirm from '../components/AddFirm'
import AddProduct from '../components/AddProduct'

const LandingPage = () => {
  const [showLogin, setShowLogin] =useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showAddFirm, setShowAddFirm] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)

  const handleShowLogin=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
  }
  const handleShowRegister=()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
  }
  const handleShowAddFirm=()=>{
    setShowAddFirm(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddProduct(false)
  }
  const handleShowAddProduct=()=>{
    setShowAddProduct(true)
    setShowLogin(false)
    setShowRegister(false)
    setShowAddFirm(false)
  }
  return (
    <>
      <Navbar handleShowLogin={handleShowLogin} handleShowRegister={handleShowRegister} />
    <div className="container">
    <Sidebar handleShowAddFirm={handleShowAddFirm} handleShowAddProduct={handleShowAddProduct}/>
      {showLogin && <Login />}
      {showRegister && <Register />}
      {showAddFirm && <AddFirm />}
      {showAddProduct && <AddProduct />}
    </div>

    </>
  )
}

export default LandingPage