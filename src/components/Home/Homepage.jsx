import React from "react";
import logo from "../Assets/logo.svg"
import "./homepage.css"
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";

function Landingpage (){
  const navigate = useNavigate();
    return <>
  <Navbar />
   <div>
   <p id="discription">Welcome to <span id="shuttle">Shuttle</span>, get your journey started here!</p>
       <button className="text1" onClick={()=>{
        navigate("/login")
       }}>Enter as Business</button>
       <button className="text2" onClick={()=>{
        navigate("/customer")
       }}>Enter as Customer</button>
       <button className="text3" onClick={()=>{
        navigate("/admin")
       }}>Enter as Admin</button>
       <img src={logo} id="logo_img"/>
    </div>
    </>
}

export default Landingpage