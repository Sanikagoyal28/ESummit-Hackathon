import React from "react";
import editIcon from "../../Assets/edit.svg"
import deleteIcon from "../../Assets/delete.svg"
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { useDispatch } from "react-redux";
import {WarehouseDelete} from "../../../redux/actions/warehouse.jsx"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import delete from  "../../Assets/delete.svg";

function Warehouse (props){
    const navigate= useNavigate()
    const dispatch = useDispatch();
    function handleDltWh(e,id){
        e.stopPropagation();
        console.log(id)
       dispatch(WarehouseDelete(id))
    }
    
    return <>
<div className="warehouse" onClick={()=>{
    navigate(`/warehouse/${props.whId}`)
}}>
<div className="wh1">
<p className="whCurQuant">Business Name: {props.business} </p>
<p className="whLocation">Location: {props.location} </p>
    <p className="whCurQuant">Volume: {props.volume} </p>
    <p className="whMaxQuant">Occupied: {props.occupy} </p>
</div>
    <img src={deleteIcon} className="deleteIcon" onClick={(e)=>{
handleDltWh(e, props.whId)
    }}/>
</div>
<ToastContainer />
    </>
}

export default Warehouse