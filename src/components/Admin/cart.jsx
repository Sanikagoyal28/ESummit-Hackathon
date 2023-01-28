import React from "react";

function Cart (props){
    return  <>
 <div id="new_card">
     <div id="card1"> 
     <p className="whCountry">Commodity : <span className="whText2">{props.commodity}</span></p>
     <p className="whCountry">Customer : <span className="whText2">{props.customer}</span></p>
     <p className="whCountry"> Predicted Price : <span className="whText2">{props.price}</span></p>
     <p className="whCountry"> Status : <span className="whText2">{props.status}</span></p>
     <p className="whCountry"> Quantity : <span className="whText2">{props.quantity}</span></p>
     <p className="whCountry"> Sender : <span className="whText2">{props.sender}</span></p>
     <p className="whCountry">UserID : <span className="whText2">{props.userid}</span></p>
        <button id="acc_btn">Accept</button>
        <button id="den_btn">Deny</button>  
     </div>
     </div>
    </>
}

export default Cart