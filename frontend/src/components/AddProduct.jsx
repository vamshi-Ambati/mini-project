import React, { useState } from "react";
import "./styles/addProduct.css";
import { API_URL } from "../data/apiPath";

const AddProduct = () => {
  const [name, setName] = useState(""); // Changed productName to name
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const [bestSeller, setBestSeller] = useState("");
  const [description, setDescription] = useState("");

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((item) => item !== value));
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("token");
      const firmId = localStorage.getItem("firmId");
      if (!loginToken || !firmId) {
        console.log("Please login to add a product");
        alert("Please log in to add a product.");
        return;
      }
      const formData = new FormData();
      formData.append("name", name); // Using 'name' here
      formData.append("price", price);
      category.forEach((value) => {
        formData.append("category", value);
      });
      if (file) {
        formData.append("image", file);
        console.log("Image file appended to formData:", file.name);
      } else {
        console.log("Image file not found (formData not appended)");
      }
      formData.append("bestSeller", bestSeller);
      formData.append("description", description);

      const response = await fetch(
        `${API_URL}/products/add-product/${firmId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert("Product added successfully");
        setName(""); // Clearing name state
        setPrice("");
        setCategory([]);
        setFile(null);
        setBestSeller("");
        setDescription("");
      } else {
        console.error("Error adding product:", data);
        alert(`Failed to add product: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product due to a network error.");
    }
  };

  return (
    <div className="addProductSection">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name} // Using name state
          onChange={(e) => setName(e.target.value)} // Setting name state
          name="name" // Added name attribute
          required
        />
        <input
          type="number"
          placeholder=" Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
          required
        />
        <div className="check-inputs">
          <label htmlFor="">Category</label>
          <div className="inputs-container">
            <div className="checkbox-container">
              <label htmlFor="veg">veg</label>
              <input
                type="checkbox"
                id="veg"
                value="veg"
                onChange={handleCategoryChange}
                checked={category.includes("veg")}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="non-veg">non-veg</label>
              <input
                type="checkbox"
                id="non-veg"
                value="non-veg"
                onChange={handleCategoryChange}
                checked={category.includes("non-veg")}
              />
            </div>
          </div>
        </div>
        <select
          value={bestSeller}
          onChange={(e) => setBestSeller(e.target.value)}
          name="bestSeller"
          required
        >
          <option value="">Is it a Best Seller?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
        />
        <input type="file" onChange={handleFileChange} name="image" />
        <button className="add-product-btn" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
