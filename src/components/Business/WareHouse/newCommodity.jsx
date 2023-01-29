import usePagination from "@mui/material/usePagination/usePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BaseUrl from "../../../redux/actions/BaseUrl";
import { CommodityFeed, CommodityFeed2, WarehouseEdit } from "../../../redux/actions/warehouse";
import newwarehouse from "../../Assets/newWarehouse.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import session from "redux-persist/es/storage/session";

function Commodity() {
    const { id } = useParams();
    const accesstoken = localStorage.getItem("access token")
    const config = {
        headers: {
            Authorization: `Bearer ${accesstoken}`
        }
    }
    const [category, setCategory] = useState({})
    const [categoryname, setCategoryname] = useState("")

    useEffect(() => {
        // BaseUrl.get(`/warehouse/list_warehouses/?business= ${nandan}`, config)
        BaseUrl.get('/warehouse/category/', config)
            .then((res) => {
                setCategory(res.data)
            })
            .catch((err) => {
               
            })
    }, [])
    const [country, setCountry] = useState([])
    const [bool, setBool] = useState(false)
    const [volume, setVolume] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [catName, setCatName] = useState("")

    useEffect(() => {
        BaseUrl.get(`/warehouse/countrylist/`)
            .then((res) => {
                setCountry(res.data)
                setBool(true)
            })
            .catch((err) => {
              
            })
    }, [])

    function handleCancel() {
        document.getElementById("newCommodity").style.display = "none"
        document.getElementById("WAREHOUSE").style.opacity = 1;
    }

    const data = {
        category: catName,
        name,
        volume: volume,
        quantity,
        warehouse: id
    }
    console.log(data)
    const dispatch = useDispatch();
    function handleCommodity() {
        console.log(data)
        BaseUrl.post(`/warehouse/commodities/?warehouse=${id}`, data, config)
            .then((res) => {
                console.log(res)
                dispatch(CommodityFeed2(data))
                if (res.status === 201) {
                    handleCancel()
                    toast.success("New Commodity addded", {
                        position: "top-center",
                        theme: "light",
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [commodityList, setCommodityList] = useState([])
    const [waredata, setWaredata] = useState({})

    // useEffect(()=>{
    //     // BaseUrl.get(`/warehouse/list_warehouses/?business= ${nandan}`, config)
    //     BaseUrl.get(`/warehouse/warehouseRUD/${id}`, config)
    //     .then((res)=>{
    //         console.log(res)
    //         console.log(res.data)
    //         setWaredata(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //     dispatch(CommodityFeed(id))
    // },[])


    function makeCategory(category) {
        BaseUrl.post('/warehouse/category/', { name: category }, config)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return <>
        <div className="newWHDiv" id="newCommodity">
            <div className="newWHTitle">Add new Commodity</div>
            <div className="newWH1" >
                <p className="newWHLocation">Commodity Name</p>
                <input type="text" className="newWHLocInput" value={name} onChange={(e) => setName(e.target.value)} id="input12" placeholder="Enter commodity name" />
            </div>
            <div className="newWH1">
                <p className="newWHLocation">Category Name</p>
                {/* <input type="text" list="categories" className="newWHLocInput" id="inputNew" />
                <datalist id="categories" onChange={(e) => { setCatName(e.target.dataset.value) }}>
                    <option>Choose Option</option>
                    {category.length > 0 ? category.map((c) => {
                        console.log(c);
                        return <option data-value={c.id} value={c.name}></option>
                    }) : null}
                </datalist> */}

                <select name="countryCode" id="inputNew" className="newWHLocInput" onChange={(e) =>{ setCatName(e.target.value)
                    sessionStorage.setItem("commodityId", e.target.value)}}>
                <option>Choose Option</option>
                    {category.length > 0 ? category.map((c) => {
                        console.log(c);
                        return <option value={c.id}>{c.name}</option>
                    }) : null}
                </select>
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Volume</p>
                <input type="text" className="newWHLocInput" id="input2" value={volume} onChange={(e) => setVolume(e.target.value)} />
            </div>
            <div className="newWH2">
                <p className="newWHQuantity">Maximum Quantity</p>
                <input type="text" className="newWHLocInput" id="input3" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <button className="newWHCancel" onClick={handleCancel}>Cancel</button>
            <button className="newWHDone" onClick={handleCommodity}>Done</button>
            <img src={newwarehouse} className="newWHImage" />
        </div>
        <ToastContainer />
    </>
}

export default Commodity