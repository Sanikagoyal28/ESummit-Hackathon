import React, { useEffect, useRef, useState } from 'react'
import "./fgtPwd.css"
import { useDispatch, useSelector } from 'react-redux';
import {FgtPwdAction} from '../../../redux/actions/authAction';
import { Spinner } from 'react-bootstrap';
import emailIcon from "../../Assets/email.svg";
import { useNavigate } from 'react-router-dom';
// import arrow from "../../Assets/arrow-back.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Navbar/navbar';

function ForgotPwd(){

    const [email, setEmail] = useState("")
    const [checkEmail, setCheckEmail] = useState(false)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    useEffect(()=>{
        if(rightemail.test(email)){
            document.getElementById('fgtEmail').style.display="none";
            setCheckEmail(true)
        }
        else if(email){
            document.getElementById('fgtEmail').style.display="block";
            setCheckEmail(false)
        }
    })
    const dispatch= useDispatch();

    const state= useSelector((s)=>s.AuthReducer)
    const {loading, response, error, toOtp} = state;
    const [toastBool, setToastBool] = useState(false)
    const navigate = useNavigate();

    function FORGOTPWD (){
        dispatch(FgtPwdAction(email, checkEmail),sessionStorage.setItem("email",email))
       
    }


    useEffect(()=>{
        if(loading===true){
            document.body.style.opacity = 0.5;
        }
        else{
            document.body.style.opacity = 1;
        }
    },[loading])

    useEffect(()=>{
        if(toOtp){
            navigate("/otp")
        }
    },[toOtp])

return <>
<Navbar />
    <div className='loginBg'>
    {/* <img src={arrow} id="arrow" onClick={()=>{navigate("/")}} /> */}
    <p className='authHead' id="authHeadTwo">Forgot Password</p>
    <p className='authEmail'>We will send you an Otp on {email}</p>
    <img src={emailIcon} id="emailIconFgt" />
    <input type="text" className="authEmailInput" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <p className='invalidEmail' id="fgtEmail">Invalid Email Address</p>
    <button className='authFgtPwdBtn' onClick={()=>{FORGOTPWD()}}>Continue</button>
    </div>
    {loading===true?<Spinner animation="border" variant="light" id="loadSpinner" />:null}
    <ToastContainer />
</>
}

export default ForgotPwd;