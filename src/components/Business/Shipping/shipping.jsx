import React from "react";
import Navbar from "../../Navbar/navbar";
import shipping from "../../Assets/shipping.svg"
import "./shipping.css"
import { useNavigate } from "react-router-dom";

function Shipping (){
    const navigate = useNavigate();
    return <>
        <Navbar />
        <div className="shippingBlock">
            <p className="shippingHead">Welcome <span id="shuttle">Shuttle</span>, choose among the two to ship an order.</p>
            <img src={shipping} className="shipImage" />
            <button className="shipping1" onClick={()=>{
                navigate("/tobusiness")
            }}>Shipped to Business</button>
            <button className="shipping2" onClick={()=>{navigate("/tocustomer")}}>Shipped to Customer</button>
        </div>
    </>
}

export default Shipping