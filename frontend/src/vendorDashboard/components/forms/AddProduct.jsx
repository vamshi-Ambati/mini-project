import React from 'react'

const AddProduct = () => {
  return (
    <div className="addProductSection">
        <h1>Add New Product</h1>
        <form action="">
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder=" Price" />
            <input type="text" placeholder='category' />
            <input type="text" placeholder='Best Seller' />
            <input type="text" placeholder='Description' />
            <input type="file" />
            <button className = "add-product-btn" type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct