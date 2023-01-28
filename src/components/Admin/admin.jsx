import React, { useEffect, useState } from 'react'
import './admin.css'

// import logo3 from '../Images/logo3.svg'
import Navbar from '../Navbar/navbar'
import BaseUrl from '../../redux/actions/BaseUrl'
import Cart from './cart'

const AdminPage = () => {

const [adminInfo, setAdminInfo] = useState([])
const accesstoken = localStorage.getItem("access token")
const config = {
    headers: {
        Authorization: `Bearer ${accesstoken}`
    }
}
    useEffect(()=>{
        BaseUrl.get("/warehouse/shipment/", config).
        then((res)=>{
            console.log(res)
            setAdminInfo(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        },[])

  return (
    <div>
       <Navbar />
       <p id="admin_head">Welcome to the admin page!</p> 
  {/* <img src={logo3} id="admin_img"/> */}
  <div className='amdinFlexbox'>
    {adminInfo.length>0? adminInfo.map((a)=>{
<Cart commodity={a.commodity} customer={a.customer} price={a.predicted_price} quantity={a.quantity} userid={a.uuid} sender={a.sender} status={a.status} />
    }):null}
  </div>
 
    </div>
  )
}

export default AdminPage

