import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    {/* <Sidebar/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <AddFirm/> */}
    <AddProduct/>

    </div>

    </>
  )
}

export default LandingPage