import React from 'react'

const AddFirm = () => {
  return (
        <div className="addFirmSection">
            <h1>Add New Firm</h1>
            <form action="">
                <input type="text" placeholder='Firm Name' />
                <input type="text"placeholder='Area' />
                <input type="text" placeholder='Category' />
                <input type="text" placeholder='Region' />
                <input type="text" placeholder='Offer' />
                <input type="file" />
                <button className='Add-firm-btn'>Submit</button>
             </form>
        </div>
  )
}

export default AddFirm