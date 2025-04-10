import React, { useEffect, useState } from "react";
import { API_URL } from "../data/apiPath";
import "./styles/allProducts.css";

const AllProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const firmId = localStorage.getItem("vendorFirmId");
      if (!firmId) {
        console.error("No firmId found in local storage");
        // setError("No firm ID found.");
        // setProducts([]);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/products/${firmId}/products`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(
            Array.isArray(data) ? data : (data && data.products) || []
          );
          setError(null);
        } 
      } catch (err) {
        setError("Failed to fetch products due to a network error.");
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const response = await fetch(
      `${API_URL}/products/delete-product/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (response.ok) {
      const updatedProducts = products.filter(
        (product) => product._id !== productId
      );
      setProducts(updatedProducts);
      confirm("Are you sure");
      alert("Product deleted successfully");
    }
  };

  return (
    <div className="all-products">
      {products === null ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error loading products: {error}</p>
      ) : products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Best Seller</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category ? product.category.join(", ") : ""}</td>
                <td>{product.description}</td>
                <td>{product.bestSeller ? "Yes" : "No"}</td>
                <td>
                  {product.image && (
                    <img
                      src={`${API_URL}/uploads/${product.image}`}
                      alt={product.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="pro-deleteBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllProducts;
