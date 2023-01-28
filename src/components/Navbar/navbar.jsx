import React from "react";
import "./navbar.css"
import logout from "../Assets/logout.svg"
import { useAsyncValue, useNavigate } from "react-router-dom";

function Navbar (){
    const navigate=useNavigate();
    return <>
 <div className="navbarH">
        <p className="titleH">Shuttle</p>
        <p className="navbarName1" onClick={()=>{navigate("/homepage")}}>Home</p>
        <p className="navbarName2" onClick={()=>{navigate("/shipping")}}>Shipment</p>

        {/* <p className="navbarName2">Home</p> */}

        {/* <p className="navbarName3">Businessname</p> */}
        <img src={logout} className="navbarProfile" />
        {/* <button className="loginH">Login</button> */}
    </div>
    </>
}
 export default Navbar