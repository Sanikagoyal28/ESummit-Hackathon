import React, { useEffect, useState } from "react";
import BaseUrl from "../../../redux/actions/BaseUrl";
import shipImage from "../../Assets/shippingTwo.svg"
import Navbar from "../../Navbar/navbar";
import "./toCustomer.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function ToCustomer (){

const commodity= sessionStorage.getItem("commodity")
const quantity = sessionStorage.getItem("quantity")
const sender = sessionStorage.getItem("sender")
const [country, setCountry] = useState([])
const [bool, setBool] = useState(false)
const [volume, setVolume] = useState("")
const [address, setAddress] = useState("")
const name = sessionStorage.getItem("name")
useEffect(()=>{
BaseUrl.get(`/warehouse/countrylist/`)
.then((res)=>{
    console.log(res)
    console.log(res.data)
    setCountry(res.data)
    setBool(true)
})
.catch((err)=>{
    console.log(err)
})
},[])
const data ={
    commodity,
    quantity,
sender,
customer:address
}
const accesstoken = localStorage.getItem("access token")
const config = {
    headers: {
        Authorization: `Bearer ${accesstoken}`
    }
}
function handleShipping(){
    BaseUrl.post('/warehouse/shipment/',  data, config)
    .then((res)=>{
        console.log(res)
        if(res.status === 201){
            toast.success("Shipment placed", {
                position: "top-center",
                theme: "light",
            })
            toast.info(`Shipping status: ${res.data.status}
            ShipmentID:${res.data.uuid}
            Predicted Price:${res.data.predicted_price}`, {
                position: "bottom-right",
                autoClose: 30000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

    return <>
    <Navbar />
        <div className="S2CBlock">
        <p className="shippingHead">Welcome <span id="shuttle">Shuttle</span>, enter all the details to proceed further.</p>
            <img src={shipImage} className="shipImage2" />
            <div className="S2C1">
                <p className="S2CAddress">Enter Address</p>
                <select name="countryCode"  className="S2CAddInput" onChange={(e)=>setAddress(e.target.value)}>
                {bool && country.length >0 ? country.map((c)=>{
                    return <option value={c}>{c}</option>
                }):null}
</select>
                {/* <p className="S2CPrice1">Shipping Status</p> */}
                <button className="shippingCust" onClick={()=>{handleShipping()}}>Shipped to Customer</button>
            </div>
        </div>
        <ToastContainer />
    </>
}

export default ToCustomer