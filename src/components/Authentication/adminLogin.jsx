import React, { useEffect, useRef, useState } from 'react'
import emailIcon from "../Assets/email.svg";
import lockIcon from "../Assets/lock.svg";
// import LogInUser from '../../../react-redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import LogInUser from '../../redux/actions/authAction';


function AdminLogin() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAuthEmail, setIsAuthEmail] = useState(false)
    const [show, setShow] = useState(false)
    function handleShow() {
        setShow(!show)
    }
    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (checkEmail.test(email)) {
            document.getElementById("loginInvEmail").style.display = "none";
            setIsAuthEmail(true)
        }
        else if (email) {
            document.getElementById("loginInvEmail").style.display = "block";
            setIsAuthEmail(false)
        }
    }, [email])

    const data = {
        email,
        password
    }

    const loginState = useSelector((state) => state.AuthReducer)
    const { loading, toFgtPwd} = loginState;
    const [toastBool, setToastBool] = useState(false)
    // const {error, response} = loginState
    const navigate = useNavigate();

    function LOGIN(){
        dispatch(LogInUser(data, isAuthEmail)) 
    }

    // useEffect(()=>{
    //     if(toFgtPwd){
    //         navigate("/")
    //     }
    // },[toFgtPwd])

    const isUser = localStorage.getItem("access token") ? true : false;
    console.log(isUser)
    // useEffect(()=>{
    //     if(isUser)
    //     navigate("/")
    // },[isUser])

    return <>
    <Navbar />
    <div className='AUTHENTICATION'>
       
        <div className='loginBg'>
            <p className='authHead'>Sign In</p>
            <p className='authEmail'>Email Address</p>
            <img src={emailIcon} id="emailIcon" />
            <input type="text" className="authEmailInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <p className='invalidEmail' id="loginInvEmail">Invalid Email Address</p>
            <p className='authPwd'>Password</p>
            <img src={lockIcon} id="lockIcon" />
            {show ? (
                <FontAwesomeIcon icon={faEye} id="LEye" onClick={handleShow} />
            ) : (
                <FontAwesomeIcon icon={faEyeSlash} id="LEye" onClick={handleShow} />
            )}
            <input type={show ? "text" : "password"} className="authPwdInput" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <p className='fgtPwd' onClick={()=>{navigate('/forgot')}}>Forgot Password?</p>
            <button className='authSignIn' id="loginButton" style={{marginBottom:"50px"}} onClick={() => {LOGIN()}}>Sign In</button>
        </div>
        {/* {(loading === true) ? <Spinner animation="border" variant="light" id="loadSpinner" /> : null} */}
        <ToastContainer />
        </div>
    </>
}

export default AdminLogin;