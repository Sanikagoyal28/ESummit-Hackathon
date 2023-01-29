import React from "react";

function Cart (props){

    console.log(props);
    return  <>
 <div id="new_card">
     <div id="card1"> 
     <p className="cartTitle">Shipment History</p>
     <p className="whCountryCart">Commodity : <span className="whTextCart">{props.commodity}</span></p>
     <p className="whCountryCart">Customer : <span className="whTextCart">{props.customer}</span></p>
     <p className="whCountryCart"> Predicted Price : <span className="whTextCart">{props.price}</span></p>
     <p className="whCountryCart"> Status : <span className="whTextCart">{props.status}</span></p>
     <p className="whCountryCart"> Quantity : <span className="whTextCart">{props.quantity}</span></p>
     <p className="whCountryCart"> Sender : <span className="whTextCart">{props.sender}</span></p>
     <p className="whCountryCart" id="cartLast">UserID : <span className="whTextCart">{props.userid}</span></p>
        {/* <button id="acc_btn">Accept</button> */}
        {/* <button id="den_btn">Deny</button>   */}
     </div>
     </div>
    </>
}

export default Cart