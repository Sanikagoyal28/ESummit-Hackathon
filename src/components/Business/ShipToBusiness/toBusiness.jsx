import React, { useEffect, useState } from "react";
import BaseUrl from "../../../redux/actions/BaseUrl";
import shipImage from "../../Assets/shippingTwo.svg"
import Navbar from "../../Navbar/navbar";
import "./toBusiness.css"

function ToBusiness() {
    const [business, setBusiness] = useState([])
    const [warehouse, setWarehouse] = useState([])
    const [bool, setBool] = useState(false)
    const [businessname, setBusinessname] = useState("")
    const [warehousename, setWarehousename] = useState("")
    const accesstoken = localStorage.getItem("access token")
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    useEffect(() => {
        BaseUrl.get(`/warehouse/list_business/`, config)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setBusiness(res.data)
                setBool(true)
            })
            .catch((err) => {
                console.log(err)
                setBool(false)
            })
    }, [])
    function handleWarehouse(){
    if(bool){
        BaseUrl.get(`/warehouse/list_warehouses/?business=${sessionStorage.getItem("business name")}`, config)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setWarehouse(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

    return <>
        <Navbar />
        <div className="S2BBlock">
            <p className="shippingHead">Welcome <span id="shuttle">Shuttle</span>, enter all the details to proceed further.</p>
            <img src={shipImage} className="shipImage2" />
            <div className="S2B1">
                <p className="S2CAddress">Enter Business Name</p>
                <select className="S2CAddInput" placeholder="Businessname" onChange={(e)=>{setBusinessname(e.target.value); sessionStorage.setItem("business name", e.target.value)}}>
{business.length>0?business.map((b)=>{
    return <option value={b.name}>{b.name}</option>
}):null}
                </select>
                {/* <input type="text" className="S2CAddInput" placeholder="Businessname" /> */}
                <p className="S2CAddress">Select a Warehouse</p>
                <select className="S2CAddInput" onChange={(e)=>{setWarehousename(e.target.value)}} onClick={handleWarehouse}  />
                {/* <input type="text" className="S2CAddInput" placeholder="select a warehouse" /> */}
                <p className="S2CPrice1">Shipping status: </p>
            </div>
        </div>
    </>
}

export default ToBusiness