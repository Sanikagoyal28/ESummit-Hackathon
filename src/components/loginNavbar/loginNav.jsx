import React from "react";
// import "./navbar.css"
// import logout from "../Assets/logoutIcon.svg"
import { useAsyncValue, useNavigate } from "react-router-dom";
import LogOut from "../Authentication/logOut/logOut";

function LoginNavbar (){
    const navigate=useNavigate();

    function showLogout(){
        document.getElementById("LOGOUT").style.display="flex"
    }
    return <>
 <div className="navbarH">
        <p className="titleH">Shuttle</p>
       
    </div>
    <LogOut />
    </>
   
}
 export default LoginNavbar