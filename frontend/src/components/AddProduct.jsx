import React from 'react'
import "./styles/addProduct.css"
const AddProduct = () => {
  return (
    <div className="addProductSection">
        <h1>Add New Product</h1>
        <form action="">
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder=" Price" />
            {/* <input type="text" placeholder='category' /> */}
            <div className="check-inputs">
                  <label htmlFor="">Category</label>
                  <div className="inputs-container">
                    <div className="checkbox-container">
                      <label htmlFor="veg">veg</label>
                      <input type="checkbox"  id = "veg"/>
                    </div>
                    <div className="checkbox-container">
                      <label htmlFor="non-veg">non-veg</label>
                      <input type="checkbox"  id = "non-veg"/>
                    </div>
                  </div>
                </div>
            <input type="text" placeholder='Best Seller' />
            <input type="text" placeholder='Description' />
            <input type="file" />
            <button className = "add-product-btn" type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct