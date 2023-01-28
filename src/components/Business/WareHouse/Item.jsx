import React from "react";

function WHItem (props){
    return <>
<div className="whItem">
    <p className="whTitlename">Commodity</p>
    <p className="whItemname">Commodity : <span className="whItemname2">{props.name}</span></p>
    <p className="whItemname">Category : <span className="whItemname2">{props.category}</span></p>
    <p className="whItemname">Volume: <span className="whItemname2">{props.volume}</span></p>
    <p className="whItemname">Quantity: <span className="whItemname2">{props.quantity}</span></p>
    {/* <p className="whItemname">Price:</p> */}
</div>
    </>

}

export default WHItem