import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import session from "redux-persist/es/storage/session";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { CommodityFeed, WareHouseFeed2 } from "../../../redux/actions/warehouse";
import newwarehouse from "../../Assets/newWarehouse.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";

function ShipOrder() {
const [country, setCountry] = useState([])
const {id} = useParams()
const [bool, setBool] = useState(false)
const [volume, setVolume] = useState("")
const [quantity, setQuantity] = useState("")
const [comm, setCom] = useState("")
const name = sessionStorage.getItem("name")

function handleCancel(){
    document.getElementById("shipOrder").style.display="none"
document.getElementById("WAREHOUSE").style.opacity=1;
}
const accesstoken = localStorage.getItem("access token")
const config = {
    headers: {
        Authorization: `Bearer ${accesstoken}`
    }
}

const dispatch = useDispatch()
const ware = useSelector((w)=>w.Warehouse)

const {setWare, warehouse, setComm, commodity} = ware;
const navigate = useNavigate();
const [commodityL, setCommodityL] = useState({})
const [commodityQuant, setCommodityQuant] = useState("")

function handleCommodityQuant(){
    dispatch(CommodityFeed(id))
    if(setComm){
     
        commodity.filter((c)=>{
            if(c.name === comm){
                console.log(c.quantity)
                setCommodityQuant(c.quantity)
                return c.name
            }
        })
        setCommodityL(commodity)
    }
}

function PlaceOrderCust (){
   
    sessionStorage.setItem("sender", id)
    sessionStorage.setItem("commodity", comm)
    sessionStorage.setItem("quantity", quantity)
    navigate("/tocustomer")
   
}
function PlaceOrderRecie(){
    sessionStorage.setItem("sender", id)
    sessionStorage.setItem("commodity", comm)
    sessionStorage.setItem("quantity", quantity)
    navigate("/tobusiness")
   
}

    return <>
        <div className="newWHDiv" id="shipOrder">
            <div className="newWHTitle">Ship an order</div>
            <div className="newWH1" >
                <p className="newWHLocation">Add Commodity</p>
                <select name="countryCode" id="inputNew" className="newWHLocInput"  onClick={()=>{handleCommodityQuant()}}  value={comm} onChange={(e) =>{console.warn(e.target.value) ;setCom(e.target.value)}}>
                <option value="">Choose option</option>
                    {commodityL.length > 0 ? commodityL.map((c) => {
                      
                        return <>
                            <option value={c.name}>{c.name}</option>
                </>
                    }) : null}
                </select>
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Add Quantity</p>
                <input type="text" className="newWHLocInput" id="inputShip" value={quantity} onChange={(e)=> setQuantity(e.target.value)} placeholder={`Maximum quantity: ${commodityQuant}`} />
            </div>
            {/* <button className="newWHCancel">Customer</button> */}
                {/* <button className="newWHDone">Done</button> */}
                <button className="newWHCancel" onClick={handleCancel}>Cancel</button>
                <button className="newWHDone1" onClick={PlaceOrderCust}>Customer</button>
                <button className="newWHDone" onClick={PlaceOrderRecie}>Reciever</button>
                <img src={newwarehouse} className="newWHImage"  />
           </div>
         <ToastContainer />
    </>
}

export default ShipOrder