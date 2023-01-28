import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/navbar";
import warehouseImage from "../../Assets/warehouse.svg"
import "./homepage.css"
import Warehouse from "./warehouse";
import NewWarehouse from "./newWH";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import {WarehouseFeed} from "../../../redux/actions/warehouse.jsx"
import session from "redux-persist/lib/storage/session";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
    const dispatch = useDispatch();
    const ware = useSelector((w)=>w.Warehouse)
    console.log(ware)
    const {setWare, warehouse} = ware;
    const [warehousee, setWarehousee] = useState([])
    const username = sessionStorage.getItem("name")
    useEffect(() => {
        console.log(username)
        dispatch(WarehouseFeed(username))
      
    }, [])
    useEffect(()=>{
        if(setWare){
            setWarehousee(warehouse)
        }
    },[setWare, warehouse])

    function showPopup() {
        document.getElementById("newWarehouse").style.display = "flex"
        document.getElementById("HOME").style.opacity = 0.5;
    }

    return <>
        <Navbar />
        <div id="HOME">
            <p className="BusTitle">Welcome to <span id="shuttle">Shuttle</span>, choose your desired warehouse from the below mentioned workspace.</p>
            <p className="BusCreateWH">or <span id="createWH" onClick={() => { showPopup() }}>create a new</span></p>
            <img src={warehouseImage} className="BusWHImage" />
            <div className="BusWHFlexbox">
                {warehousee.length > 0 ? warehousee.map((wh) => {
                    return <Warehouse location={wh.location} volume={wh.volume} business={wh.business} whId={wh.id} occupy={wh.occupied}/>
                }) : null}
            </div>
        </div>
        <NewWarehouse />
        <ToastContainer />
    </>
}

export default HomePage