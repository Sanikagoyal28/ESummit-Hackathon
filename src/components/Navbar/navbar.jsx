import React from "react";
import "./navbar.css"
import logout from "../Assets/logoutIcon.svg"
import { useAsyncValue, useNavigate } from "react-router-dom";
import LogOut from "../Authentication/logOut/logOut";

function Navbar (){
    const navigate=useNavigate();

    function showLogout(){
        document.getElementById("LOGOUT").style.display="flex"
    }
    return <>
 <div className="navbarH">
        <p className="titleH">Shuttle</p>
        <p className="navbarName2" onClick={()=>{navigate("/")}}>Landing Page</p>

        <p className="navbarName1" onClick={()=>{navigate("/homepage")}}>Home</p>

        {/* <p className="navbarName2">Home</p> */}

        {/* <p className="navbarName3">Businessname</p> */}
        <img src={logout} onClick={()=>{showLogout()}} className="navbarProfile" />
        {/* <button className="loginH">Login</button> */}
    </div>
    <LogOut />
    </>
   
}
 export default Navbar