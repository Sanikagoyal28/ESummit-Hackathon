import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import arrow from "../../Assets/arrow-back.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import lockIcon from "../../Assets/lock.svg";
import { useState, useEffect } from "react";
import "./SignUpTwo.css";
import { useDispatch, useSelector } from "react-redux";
import { SignUpTwoUser } from "../../../redux/actions/authAction";
import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import LoginNavbar from "../../loginNavbar/loginNav";

function SignUpTwo() {
  const [nameN, setNameN] = useState("")
  const [pass, setPass] = useState("")
  const [checkName, setCheckName] = useState(false);
  const [checkPass, setCheckPass] = useState(false)
  const [show1, setShow1] = useState(false)
  const [callApi, setCallApi] = useState(false)
  const [otp, setOtp] = useState("")
  const email = sessionStorage.getItem("email")

  function handleShow1() {
    setShow1(!show1)
  }

  const name = sessionStorage.getItem("NameToBeUsed")

  const rightname = /^[a-z ,.'-]+$/i;
  useEffect(() => {
    if (rightname.test(nameN)) {
      document.getElementById('signNameWrong').style.display = "none";
      setCheckName(true)
    }
    else if (nameN) {
      document.getElementById('signNameWrong').style.display = "block";
      setCheckName(false)
    }
  }, [nameN])

  const rightpass =
    /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&#])[A-Za-z\d@$!%?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("signInvalidPwdWrong").style.display = "none";
      setCheckPass(true)
      console.log("true");
    } else if (pass) {
      document.getElementById("signInvalidPwdWrong").style.display = "block";
      setCheckPass(false)
    }
  }, [pass]);

  useEffect(() => {
    if (checkName && checkPass)
      setCallApi(true);
    else
      setCallApi(false)
  }, [checkName, checkPass])

  const data = {
    email,
    otp:otp,
    name:nameN,
    password:pass
  }
 
  const signUp = useSelector((s) => s.AuthReducer)
  const { loading, error, response, toHome2 } = signUp;
  const [toastBool, setToastBool] = useState(false)

  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === true) {
      document.body.style.opacity = 0.5;
    }
    else {
      document.body.style.opacity = 1;
    }
  }, [loading])

  function SIGNUPTWO() {
    dispatch(SignUpTwoUser(data))
  }
//   useEffect(()=>{
//     console.log(toastBool, loading)
//     if(error!="" && !loading){
//         console.log(error)
//         setToastBool(true)
//     }
// },[signUp])

// useEffect(()=>{
//     console.log(toastBool)
//     if(toastBool){
//             toast.error(`${error}`, {
//                 position: "top-center",
//                 theme: "light",
//             });
//             setToastBool(false)
//         }
// },[toastBool])

  const navigate = useNavigate();

  useEffect(() => {
    if (toHome2) {
      navigate("/homepage")
    }
  }, [toHome2])

  return <>
  <LoginNavbar />
    <div className='loginBg'>
      {/* <img src={arrow} id="arrow" onClick={() => { navigate("/verifyemail") }} /> */}
      <p className='authHead' id="authHeadTwo">Sign Up</p>
      <p className='authEmail' id="signInput">Business Name</p>
      <input type="text" className="authEmailInput" placeholder="Enter your name" value={nameN} onChange={(e) => setNameN(e.target.value)} />
      <p id="signNameWrong" className="invalidEmail" >Name should consists of alphabet</p>
      <p className='authEmail'>Enter Otp sent to {email}</p>
    <input type="text" className="authEmailInput" id="otpInput" placeholder="0  0  0  0" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
      <img src={lockIcon} id="lockIconS" />
      <p className='authPwd' id="signPwd">Password</p>
      {show1 ? (
        <FontAwesomeIcon icon={faEye} id="SEye" onClick={handleShow1} />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} id="SEye" onClick={handleShow1} />
      )}
      <input type={show1 ? "text" : "password"} className="authPwdInput" id="signInput2" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
      {/* <p className='fgtRstPwd' id="signInvalidPwdWrong">Password must be 1 uppercase 1 lowercase 1 number 1 special digit character and 8 or more characters</p> */}
      <button type="button" className='authFgtPwdBtn' onClick={() => { SIGNUPTWO() }}>Sign Up</button>
    </div>
    {loading === true ? <Spinner animation="border" variant="light" id="loadSpinner" /> : null}
    <ToastContainer />
  </>
}
export default SignUpTwo;