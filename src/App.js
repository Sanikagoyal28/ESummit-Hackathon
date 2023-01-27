import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmailVerify from "./components/Authentication/EmailVerify/emailVerify";
import ForgotPwd from "./components/Authentication/ForgotPassword/forgotPwd";
import Login from "./components/Authentication/Login/login";
import AuthOtp from "./components/Authentication/OTP/otp";
import ResetPwd from "./components/Authentication/ResetPassword/resetPwd";
import SignUp from "./components/Authentication/SignUp/signUp";
import SignUpTwo from "./components/Authentication/SignUpTwo/SignUpTwo";
import Homepage from "./components/Home/Homepage";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
     
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot" element={<ForgotPwd />} />
    <Route exact path="/otp" element={<AuthOtp />} />
    <Route exact path="/reset" element={<ResetPwd />} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route exact path="/signuptwo" element={<SignUpTwo />} />
    <Route exact path="/verifyemail" element={<EmailVerify />} />
    <Route exact path="/" element={<Homepage/>} />
    
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
