import React, { useState } from "react";
import "./styles/addFirm.css";

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offerPercentage, setOfferPercentage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("firmName", firmName);
    // formData.append("area", area);
    // formData.append("category", category);
    // formData.append("region", region);
    // formData.append("offerPercentage", offerPercentage);
    // formData.append("file", file);

    // API call to add firm with form data

    const loginToken = localStorage.getItem("token");
    fetch(`${API_URL}/vendors/addFirm`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
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
              <input type="checkbox" id="veg" checked="" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="non-veg">non-veg</label>
              <input type="checkbox" id="non-veg" checked="" />
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
                checked=""
                value="south-indian"
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="north-indian">north-indian</label>
              <input
                type="checkbox"
                id="north-indian"
                checked=""
                value="north-indian"
              />
            </div>
            <div className="checkbox-container">
              <label htmlFor="chinese">chinese</label>
              <input type="checkbox" id="chinese" checked="" value="chinese" />
            </div>
            <div className="checkbox-container">
              <label htmlFor="bakery">bakery</label>
              <input type="checkbox" id="bakery" checked="" value="bakery" />
            </div>
          </div>
        </div>
        {/* <input type="text" placeholder='Offer' /> */}
        <div class="percentage-input">
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
        <input type="file" />
        <button className="Add-firm-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddFirm;
