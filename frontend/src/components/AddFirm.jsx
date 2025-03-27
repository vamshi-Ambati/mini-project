import React from 'react'
import "./styles/addFirm.css"

const AddFirm = () => {
  return (
        <div className="addFirmSection">
            <h1>Add New Firm</h1>
            <form action="">
                <input type="text" placeholder='Firm Name' />
                <input type="text"placeholder='Area' />
                {/* <input type="text" placeholder='Category' /> */}
                <div className="check-inputs">
                  <label htmlFor="" className='category-headign'>Category</label>
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
                {/* <input type="text" placeholder='Region' /> */}
                <div className="check-inputs">
                  <label htmlFor="">Region</label>
                  <div className="inputs-container">
                    <div className="checkbox-container">
                      <label htmlFor="south-indian">south-indian</label>
                      <input type="checkbox"  id = "south-indian"/>
                    </div>
                    <div className="checkbox-container">
                      <label htmlFor="north-indian">north-indian</label>
                      <input type="checkbox"  id = "north-indian"/>
                    </div>
                    <div className="checkbox-container">
                      <label htmlFor="chinese">chinese</label>
                      <input type="checkbox"  id = "chinese"/>
                    </div>
                    <div className="checkbox-container">
                      <label htmlFor="bakery">bakery</label>
                      <input type="checkbox"  id = "bakery"/>
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
                      placeholder= "Offer % "
                    />
                    {/* <span class="percentage-symbol">%</span> */}
                  </div>
                <input type="file" />
                <button className='Add-firm-btn'>Submit</button>
             </form>
        </div>
  )
}

export default AddFirm