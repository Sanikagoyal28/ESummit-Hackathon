import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseUrl from "../../../redux/actions/BaseUrl";
import Navbar from "../../Navbar/navbar";
import WHItem from "./Item";
import "./wareHouse.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditWarehouse from "./editWH";

function WareHouse (){
    const {id} = useParams();
    console.log(id)
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
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function showPopup() {
        document.getElementById("editWarehouse").style.display = "flex"
        document.getElementById("WAREHOUSE").style.opacity = 0.2;
    }
    const navigate = useNavigate()

    return <>
<Navbar />
<div className="whDetails" id="WAREHOUSE">
    <div className="whCart">
    <p className="whHeading">Details of the workspace</p>
    <p className="whCountry">Business : <span className="whText2">{waredata.business}</span></p>
        <p className="whCountry">Country : <span className="whText2">{waredata.location}</span></p>
        <p className="whCountry">Volume : <span className="whText2">{waredata.volume}</span></p>
        <p className="whCountry">Occupied : <span className="whText2">{waredata.occupied}</span> </p>
    </div>
    <button className="whAddBtn" onClick={()=>{
showPopup()
    }}>Add new commodity</button>
    <button className="whShipOrder" onClick={()=>{
navigate("/shipping")
    }}>Ship Order</button>
     <button className="whEditBtn" onClick={()=>{
showPopup()
    }}>Edit warehouse</button>
    <WHItem />
</div>
<ToastContainer />
<EditWarehouse />
    </>
}

export default WareHouse