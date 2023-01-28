import BaseUrl from "./BaseUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export  function WarehouseFeed(){
    return async function (dispatch){
        const accesstoken = localStorage.getItem("access token")
        const username = sessionStorage.getItem("name")
        const config = {
            headers: {
                Authorization: `Bearer ${accesstoken}`
            }
        }
        dispatch({
            type:"Feed_started",
            loading:false
        })
        await BaseUrl.get(`/warehouse/list_warehouses/?business=${username}`, config)
        .then((res)=>{
            // toast.success(`${res.data.message[0]}`, {
            //     position: "top-center",
            //     theme: "light",
            // })
            console.log(res)
            dispatch({
                type:"Feed_succeded",
                payload:res
            })
        })
        .catch((Err)=>{
            console.log(Err)
            dispatch({
                type:"Feed_failed",
                payload:Err
            })
        })
    }
}

export const WareHouseFeed2=(data)=>{
    return {
        type:"Feed_fake_add",
        payload:data
    }
}
    export  function WarehouseDelete(id){
        console.log(id)
    return async function (dispatch){
        const accesstoken = localStorage.getItem("access token")
        const config = {
            headers: {
                Authorization: `Bearer ${accesstoken}`
            }
        }
        dispatch({
            type:"Delete_started",
            loading:false
        })
        await BaseUrl.delete(`/warehouse/warehouseRUD/${id}`, config)
        .then((res)=>{
            console.log(res)
            toast.success("Warehouse deleted successfully", {
                position: "top-center",
                theme: "light",
            })
            dispatch({
                type:"Delete_succeded",
                payload:{
                    res, id
                }
            })
        })
        .catch((Err)=>{
            console.log(Err)
            toast.error(`${Err.response.data.message[0]}`, {
                position: "top-center",
                theme: "light",
            })
            dispatch({
                type:"Delete_failed",
                payload:Err
            })
        })
    }
}

export  function WarehouseEdit(id,data){
    return async function (dispatch){
        const accesstoken = localStorage.getItem("access token")
        const config = {
            headers: {
                Authorization: `Bearer ${accesstoken}`
            }
        }
        dispatch({
            type:"Edit_started",
            loading:false
        })
        await BaseUrl.put(`/warehouse/warehouseRUD/${id}`, data, config)
        .then((res)=>{
            console.log(res)
            toast.success("Edition to warehouse added", {
                position: "top-center",
                theme: "light",
            })
            dispatch({
                type:"Edit_succeded",
                payload:res
            })
        })
        .catch((Err)=>{
            console.log(Err)
            toast.error(`${Err.response.data.message[0]}`, {
                position: "top-center",
                theme: "light",
            })
            dispatch({
                type:"Edit_failed",
                payload:Err
            })
        })
    }
}
