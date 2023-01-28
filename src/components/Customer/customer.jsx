import React from 'react'
import Navbar from '../Navbar/navbar'
import './customer.css'
// import logo2 from '../Images/logo2.svg'

const Customer = () => {
  return (
    <div>
    <Navbar />
    <p id="discription">Welcome enter all the details to track your placed shippment.</p>
    {/* <img src={logo2} id="img"/> */}
     <div id="card">
     <div>
      <label className='cust1'>Enter your name:</label>
      <input type="text" className='custInput' placeholder="Enter your name"/>
    </div>
      <p className='custText'>Date:27/01/2023</p>
      <p className='custText'>Time:14:53</p>
      <p className='custText'>Business:Amazon</p>
      <p className='custText'>Object:Electronic Watch</p>
      <p className='custText'>Quantity:10</p>
     </div>
    </div>
  )
}

export default Customer