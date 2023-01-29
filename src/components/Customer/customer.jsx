import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import './customer.css'
import customerimage from "../Assets/customerImage.svg"
import BaseUrl from '../../redux/actions/BaseUrl'

const Customer = () => {

    const [adminInfo, setAdminInfo] = useState([])
    const [custId, setCustId] = useState("")
    
    function showCustomerDetail(id){
        BaseUrl.get(`/warehouse/shipdetails/?sid=${id}`).
        then((res)=>{
            console.log(res)
            setAdminInfo(res.data[0])
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
    <Navbar />
    <p id="discription">Welcome enter all the details to track your placed shippment.</p>
    <img src={customerimage} id="img"/>
     <div id="card">
     <div>
      <label className='cust1'>Enter Customer ID:</label>
      <input type="text" value={custId} onChange={(e)=>setCustId(e.target.value)} className='custInput' placeholder="Enter customer id" />
      <button className='customerbutton' onClick={()=>{showCustomerDetail(custId)}}>Enter</button>
    </div>
    {console.log(adminInfo)}
    <p className="whCountryCart" id="cartLast">Shipment ID : <span className="whTextCart">{adminInfo.uuid}</span></p>
    <p className="whCountryCart">Commodity : <span className="whTextCart">{adminInfo.commodity}</span></p>
    <p className="whCountryCart"> Predicted Price : <span className="whTextCart">{adminInfo.price}</span></p>
    <p className="whCountryCart"> Quantity : <span className="whTextCart">{adminInfo.quantity}</span></p>
    <p className="whCountryCart"> Status : <span className="whTextCart">{adminInfo.status}</span></p>
     <p className="whCountryCart">Customer : <span className="whTextCart">{adminInfo.customer}</span></p>
     <p className="whCountryCart"> Sender : <span className="whTextCart">{adminInfo.sender}</span></p>
    
      {/* <p className='custText'>Shipment ID:27/01/2023</p> */}
     </div>
    </div>
  )
}

export default Customer


