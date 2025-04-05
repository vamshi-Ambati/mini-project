import React, { useState } from "react";
import "./styles/addFirm.css";
import { API_URL } from "../data/apiPath";

const AddFirm = ({handleShowAddProduct}) => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offerPercentage, setOfferPercentage] = useState("");
  const [file, setFile] = useState(null);
  // const [selectedFileName, setSelectedFileName] = useState(""); // To display selected file name

  const handleCategoryChange = (e) => {
    const newCategory = [...category];
    newCategory.push(e.target.value);
    setCategory(newCategory);
  };
  const handleRegionChange = (e) => {
    const newRegion = [...region];
    newRegion.push(e.target.value);
    setRegion(newRegion);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
    setFile(selectedFile);
    // setSelectedFileName(selectedFile ? selectedFile.name : ""); // Update displayed file name
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Getting token from local storage
    const loginToken = localStorage.getItem("token");
    if (!loginToken) {
      console.log("Please login to add a firm");
      return;
    }
    const formData = new FormData();
    formData.append("firmName", firmName);
    formData.append("area", area);
    formData.append("offerPercentage", offerPercentage);
    if (file) {
      formData.append("image", file); // Key name must be 'image'
      console.log("Image file appended to formData:", file.name);
    } else {
      console.log("Image file not found (formData not appended)");
    }

    category.forEach((value) => {
      formData.append("category", value);
    });
    region.forEach((value) => {
      formData.append("region", value);
    });

    // Add API_URL and token
    const response = await fetch(`${API_URL}/firms/add-firm`, {
      method: "POST",
      headers: {
        token: `${loginToken}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      alert("Firm added successfully");
      setFirmName("");
      setArea("");
      setCategory([]);
      setRegion([]);
      setOfferPercentage("");
      setFile(null);
      // setSelectedFileName("");
      handleShowAddProduct()
    } else {
      console.error("Error adding firm:", data);
      alert("Failed to add firm");
    }
    const firmId = data.firmId;
    localStorage.setItem("firmId",firmId);    
    
  };
  return (
    <div className="addFirmSection">
      <h1>Add New Firm</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firm Name"
          name="firmName"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Area"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        {/* <input type="text" placeholder='Category' /> */}
        <div className="check-inputs">
          <label htmlFor="" className="category-headign">
            Category{" "}
          </label>
          <div className="inputs-container">
            <div className="checkbox-container">
              <label htmlFor="veg">veg</label>
              <input
                id="veg"
                type="checkbox"
                value="veg"
                checked={category.includes("veg")}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="non-veg">non-veg</label>
              <input
                id="non-veg"
                type="checkbox"
                value="non-veg"
                checked={category.includes("non-veg")}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>
        {/* <input type="text" placeholder='Region' /> */}
        <div className="check-inputs">
          <label htmlFor="">Region</label>
          <div className="inputs-container">
            <div className="checkbox-container">
              <label htmlFor="south-indian">south-indian</label>
              <input
                type="checkbox"
                id="south-indian"
                checked={region.includes("south-indian")}
                value="south-indian"
                onChange={handleRegionChange}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="north-indian">north-indian</label>
              <input
                type="checkbox"
                id="north-indian"
                checked={region.includes("north-indian")}
                value="north-indian"
                onChange={handleRegionChange}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="chinese">chinese</label>
              <input
                type="checkbox"
                id="chinese"
                checked={region.includes("chinese")}
                value="chinese"
                onChange={handleRegionChange}
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="bakery">bakery</label>
              <input
                type="checkbox"
                id="bakery"
                checked={region.includes("bakery")}
                value="bakery"
                onChange={handleRegionChange}
              />
            </div>
          </div>
        </div>
        {/* <input type="text" placeholder='Offer' /> */}
        <div className="percentage-input">
          {/* <label for="offerPercentage">Offer :</label> */}
          <input
            type="number"
            id="offerPercentage"
            name="offerPercentage"
            min="0"
            max="100"
            step="1"
            placeholder="Offer % "
            value={offerPercentage}
            onChange={(e) => setOfferPercentage(e.target.value)}
          />
          {/* <span class="percentage-symbol">%</span> */}
        </div>
        <div>
          <input type="file" onChange={handleFileChange} />
          {/* {selectedFileName && <p>Selected File: {selectedFileName}</p>} */}
        </div>
        <button type="submit" className="Add-firm-btn">
          Add Firm
        </button>
      </form>
    </div>
  );
};

export default AddFirm;