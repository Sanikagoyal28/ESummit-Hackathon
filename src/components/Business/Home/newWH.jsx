import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import session from "redux-persist/es/storage/session";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { WareHouseFeed2 } from "../../../redux/actions/warehouse";
import newwarehouse from "../../Assets/newWarehouse.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewWarehouse() {
const [country, setCountry] = useState([])
const [bool, setBool] = useState(false)
const [volume, setVolume] = useState("")
const [quantity, setQuantity] = useState("")
const [location, setLocation] = useState("")
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

function handleCancel(){
    document.getElementById("newWarehouse").style.display="none"
document.getElementById("HOME").style.opacity=1;
}
const accesstoken = localStorage.getItem("access token")
const config = {
    headers: {
        Authorization: `Bearer ${accesstoken}`
    }
}
const data = {
    location,
    volume:volume,
    business:1
}
const data2 = {
    location,
    volume:volume,
    business:name
}
console.log(data)
const dispatch = useDispatch();
function handlePost (){
    BaseUrl.post('/warehouse/warehouseCREATE/',  data, config)
    .then((res)=>{
        console.log(res)
        if(res.status === 201){
            handleCancel()
            toast.success("New warehouse created", {
                position: "top-center",
                theme: "light",
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    dispatch(WareHouseFeed2(data2))
}

    return <>
        <div className="newWHDiv" id="newWarehouse">
            <div className="newWHTitle">Add new Warehouse</div>
            <div className="newWH1" >
                <p className="newWHLocation">Enter location</p>
                {/* <input type="text" className="newWHLocInput" placeholder="Enter your location" /> */}
                <select name="countryCode" id="input1" className="newWHLocInput" onChange={(e)=>setLocation(e.target.value)}>
                {bool && country.length >0 ? country.map((c)=>{
                    return <option value={c}>{c}</option>
                }):null}
</select>
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Volume</p>
                <input type="text" className="newWHLocInput" id="input2" value={volume} onChange={(e)=>setVolume(e.target.value)} placeholder="Set volume" />
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Maximum Quantity</p>
                <input type="text" className="newWHLocInput" id="input3" value={quantity} onChange={(e)=> setQuantity(e.target.value)} placeholder="Set maximum volume" />
            </div>
                <button className="newWHCancel" onClick={handleCancel}>Cancel</button>
                <button className="newWHDone" onClick={handlePost}>Done</button>
                <img src={newwarehouse} className="newWHImage"  />
           </div>
         <ToastContainer />
    </>
}

export default NewWarehouse