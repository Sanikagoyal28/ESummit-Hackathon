import React from 'react'
import './admin.css'
import Header from '../Components/Header'
import logo3 from '../Images/logo3.svg'

const Admin = () => {
  return (
    <div>
       <Header />
       <p id="admin_head">Welcome to the admin page!</p> 
  <img src={logo3} id="admin_img"/>
  <div id="new_card">
     <div id="card1"> 
        <p id="ware">Sender's Name:India</p>
        <p id="send">Sender's Warehouse: Amazon</p>
        <p id="send_ware">Reciever's Name: India</p>
        <p id="recieve">Reciever's Warehouse: Amazon</p>
        <p id="pre_price">Predicted Price: Rs. 300</p>
        <p id="comm">Commodity:Amazon</p>
        <p id="quan">Quantity: 200</p>
         <p id="act_price">Actual Price:</p>
        <input placeholder="Enter actual price" id="inp"/>
        
        <button id="acc_btn">Accept</button>
        <button id="den_btn">Deny</button>  
     </div>
    
  </div>
    </div>
  )
}

export default Admin

