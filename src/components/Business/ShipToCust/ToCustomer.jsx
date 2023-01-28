import React from "react";
import shipImage from "../../Assets/shippingTwo.svg"
import Navbar from "../../Navbar/navbar";
import "./toCustomer.css"
 
function ToCustomer (){
    return <>
    <Navbar />
        <div className="S2CBlock">
        <p className="shippingHead">Welcome <span id="shuttle">Shuttle</span>, enter all the details to proceed further.</p>
            <img src={shipImage} className="shipImage2" />
            <div className="S2C1">
                <p className="S2CAddress">Enter Address</p>
                <input type="text" className="S2CAddInput" />
                <p className="S2CPrice1">Shipping Status</p>
                {/* <p className="S2CPrice2">Actual Price: </p> */}
            </div>
        </div>
    </>
}

export default ToCustomer