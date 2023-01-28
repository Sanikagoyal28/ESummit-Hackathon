import React, { useEffect, useState } from "react";
import BaseUrl from "../../../redux/actions/BaseUrl";
import shipImage from "../../Assets/shippingTwo.svg"
import Navbar from "../../Navbar/navbar";
import "./toBusiness.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToBusiness() {
    const [business, setBusiness] = useState([])
    const [warehouse, setWarehouse] = useState([])
    const commodity = sessionStorage.getItem("commodity")
    const quantity = sessionStorage.getItem("quantity")
    const sender = sessionStorage.getItem("sender")
    const [bool, setBool] = useState(false)
    const [businessname, setBusinessname] = useState("")
    const [warehousename, setWarehousename] = useState("")
    const accesstoken = localStorage.getItem("access token")
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const data = {
        commodity,
        quantity,
        sender,
        reciever: warehousename
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
    function handleWarehouse() {
        if (bool) {
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
    function handleShipping2() {
        BaseUrl.post('/warehouse/shipment/', data, config)
            .then((res) => {
                console.log(res)
                if (res.status === 201) {

                    toast.success("Shipment placed", {
                        position: "top-center",
                        theme: "light",
                    })
                    toast.info(`ShipmentID:${res.data.uuid}
                    Predicted Price:${res.data.predicted_price}`, {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <>
        <Navbar />
        <div className="S2BBlock">
            <p className="shippingHead">Welcome <span id="shuttle">Shuttle</span>, enter all the details to proceed further.</p>
            <img src={shipImage} className="shipImage2" />
            <div className="S2B1">
                <p className="S2CAddress">Enter Business Name</p>
                <select className="S2CAddInput" placeholder="Businessname" onClick={handleWarehouse} onChange={(e) => { setBusinessname(e.target.value); sessionStorage.setItem("business name", e.target.value) }}>
                    <option value="">Choose a business</option>
                    {business.length > 0 ? business.map((b) => {
                        return <option value={b.name}>{b.name}</option>
                    }) : null}
                </select>
                {/* <input type="text" className="S2CAddInput" placeholder="Businessname" /> */}
                <p className="S2CAddress">Select a Warehouse</p>
                <select className="S2CAddInput" onChange={(e) => { setWarehousename(e.target.value) }}>
                    <option value="">Choose a Warehouse</option>
                    {warehouse.length > 0 ? warehouse.map((b) => {
                        return <option value={b.id}>{b.location}</option>
                    }) : null}
                </select>
                {/* <input type="text" className="S2CAddInput" placeholder="select a warehouse" /> */}
                <p className="S2CPrice1">Shipping status: </p>
                <button className="shippingCust" onClick={() => { handleShipping2() }}>Shipped to Business</button>
            </div>
        </div>
    </>
}

export default ToBusiness