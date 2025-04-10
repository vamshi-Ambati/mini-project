import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("vendorFirmName");

  return (
    <center>
      <h1>Firm Name:{firmName}</h1>
    </center>
  )
}

export default Welcome