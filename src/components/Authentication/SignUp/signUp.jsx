import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {SignUpUser} from '../../../redux/actions/authAction';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signUp.css";
import { useNavigate } from 'react-router-dom';
import emailIcon from "../../Assets/email.svg";
import lockIcon from "../../Assets/lock.svg";
import Navbar from '../../Navbar/navbar';
// import arrow from "../../Assets/arrow-back.svg";

function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [checkEmail, setCheckEmail] = useState(false)
    const [checkName, setCheckName] = useState(false)
    const [callApi, setCallApi] = useState(false)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    useEffect(()=>{
        if(rightemail.test(email)){
            document.getElementById('signInvalidEmail').style.display="none";
            setCheckEmail(true)
        }
        else if(email){
            document.getElementById('signInvalidEmail').style.display="block";
            setCheckEmail(false)
        }
    },[email])
    
   const rightname = /^[a-z ,.'-]+$/i;
    useEffect(()=>{
        if(rightname.test(name)){
            document.getElementById('signName').style.display="none";
            setCheckName(true)
        }
        else if(name){
            document.getElementById('signName').style.display="block";
            setCheckName(false)
        }
    },[name])

    const dispatch= useDispatch();
    useEffect(()=>{
        if(checkEmail && checkName) setCallApi(true);
        else setCallApi(false)

    },[checkEmail,checkName])

    const responseApi = useSelector((state)=>state.AuthReducer)
            const {loading, response, error, toSignOtp} = responseApi
            const [toastBool, setToastBool] = useState(false)

            function SIGNUP(){
                dispatch(SignUpUser(email, callApi),sessionStorage.setItem("signupemail",email), sessionStorage.setItem("NameToBeUsed",name))
            }

            useEffect(()=>{
                console.log(toastBool, loading)
                if(error!="" && !loading){
                    console.log(error)
                    setToastBool(true)
                }
            },[responseApi])
            
            useEffect(()=>{
                console.log(toastBool)
                if(toastBool){
                        toast.error(`${error}`, {
                            position: "top-center",
                            theme: "light",
                        });
                        setToastBool(false)
                    }
            },[toastBool])

    useEffect(()=>{
        if(loading===true){
            document.body.style.opacity = 0.5;
        }
        else{
            document.body.style.opacity = 1;
        }
    },[loading])

    const navigate = useNavigate();
   
   
    useEffect(()=>{
        if(response!==""){
            toast.success(`${response}`, {
                position: "top-center",
                theme: "light",
                });
        }
    },[response])

    useEffect(()=>{
        if( toSignOtp){
            navigate("/verifyemail")
        }
    },[ toSignOtp])
  
return <>
<Navbar />
<div className='loginBg'>
    {/* <img src={arrow} id="arrow" onClick={()=>{navigate("/")}}/> */}
    <p className='authHead' id="authHeadTwo">Sign Up</p>
    {/* <p className='authEmail' id="signName1">Name</p>
    <input type="text" className="authEmailInput" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
    <p id="signName" className='invalidEmail'
    >Name should consists of alphabet</p> */}
    <img src={emailIcon} className='emailSignIcon' id="signEmailIcon" />
    <p className='authPwd' id="signEmail">Email Address</p>
    <input type="text" className="authPwdInput" placeholder="Enter your email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <p className='fgtRstPwd' id="signInvalidEmail">Invalid Email Address</p>
    <button type="button" className='authSignIn authFgtPwdBtn' id="loginButton" onClick={()=>{SIGNUP()}}>Sign Up</button>
    </div>
    {loading===true?<Spinner animation="border" variant="light" id="loadSpinner" />:null}
    <ToastContainer />
</>
}

export default SignUp