import usePagination from "@mui/material/usePagination/usePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { WarehouseEdit } from "../../../redux/actions/warehouse";
import newwarehouse from "../../Assets/newWarehouse.svg";

function EditWarehouse() {
    const {id} = useParams();
    const accesstoken = localStorage.getItem("access token")
const config = {
    headers: {
        Authorization: `Bearer ${accesstoken}`
    }
}
const [waredata, setWaredata] = useState({})
    
useEffect(()=>{
    // BaseUrl.get(`/warehouse/list_warehouses/?business= ${nandan}`, config)
    BaseUrl.get(`/warehouse/warehouseRUD/${id}`, config)
    .then((res)=>{
        console.log(res)
        console.log(res.data)
        setWaredata(res.data)
        sessionStorage.setItem("location", res.data.location)
        sessionStorage.setItem("volume", res.data.volume)
    })
    .catch((err)=>{
        console.log(err)
    })
},[id])
const [country, setCountry] = useState([])
const [bool, setBool] = useState(false)
const [volume, setVolume] = useState(sessionStorage.getItem("volume"))
const [quantity, setQuantity] = useState(waredata.max_quantity)
const [location, setLocation] = useState(sessionStorage.getItem("location"))

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
    document.getElementById("editWarehouse").style.display="none"
document.getElementById("WAREHOUSE").style.opacity=1;
}

const data = {
    location,
    volume:volume,
    business:1,
    id:id
}
console.log(data)
const dispatch = useDispatch();
function handlePut (){
    dispatch(WarehouseEdit(id,data))
    handleCancel();
}

    return <>
        <div className="newWHDiv" id="editWarehouse">
            <div className="newWHTitle">Add new Warehouse</div>
            <div className="newWH1" >
                <p className="newWHLocation">Enter location</p>
                {/* <input type="text" className="newWHLocInput" placeholder="Enter your location" /> */}
                <select name="countryCode" id="input1" className="newWHLocInput" value={location} onChange={(e)=>setLocation(e.target.value)}>
                {bool && country.length >0 ? country.map((c)=>{
                    return <option value={c}>{c}</option>
                }):null}
</select>
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Volume</p>
                <input type="text" className="newWHLocInput" id="input2" value={volume} onChange={(e)=>setVolume(e.target.value)} />
            </div>
            <div className="newWH2">
                {/* <p className="newWHQuantity">Maximum Quantity</p> */}
                {/* <input type="text" className="newWHLocInput" id="input3" value={quantity} onChange={(e)=> setQuantity(e.target.value)} /> */}
            </div>
                <button className="newWHCancel" onClick={handleCancel}>Cancel</button>
                <button className="newWHDone" onClick={handlePut}>Done</button>
                <img src={newwarehouse} className="newWHImage"  />
           </div>
         
    </>
}

export default EditWarehouse