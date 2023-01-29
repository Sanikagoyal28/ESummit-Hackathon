import React from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../Assets/logout.svg"
import "./logout.css"

function LogOut() {
    const naavigate = useNavigate()
    function handleLogOut() {
        localStorage.clear();
        sessionStorage.clear();
        naavigate("/");
        document.getElementsByClassName("logoutDiv")[0].style.display="none";

    }

    function handleCancelLog() {
        document.getElementsByClassName("logoutDiv")[0].style.display="none";
        // setOPacity()
    }

    return <>
        <div className="logoutDiv" id="LOGOUT">
            <div className="lOut1">
                <p className="logoutText1">Log Out?</p>
                <p className="logoutText2">Are you sure you want to log out?</p>
                <button className="logoutbtn1" onClick={handleLogOut}>Yes</button>
                <button className="logoutbtn2" onClick={handleCancelLog}>No</button>
            </div>
            <div className="lOut2">
                <img src={logout} className="logoutImage" />
            </div>
        </div>

    </>
}

export default LogOut;