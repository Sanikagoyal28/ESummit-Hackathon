import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/admin";
import AdminLogin from "./components/Authentication/adminLogin";
import EmailVerify from "./components/Authentication/EmailVerify/emailVerify";
import ForgotPwd from "./components/Authentication/ForgotPassword/forgotPwd";
import Login from "./components/Authentication/Login/login";
import AuthOtp from "./components/Authentication/OTP/otp";
import ResetPwd from "./components/Authentication/ResetPassword/resetPwd";
import SignUp from "./components/Authentication/SignUp/signUp";
import SignUpTwo from "./components/Authentication/SignUpTwo/SignUpTwo";
import HomePage from "./components/Business/Home/Homepage";
import NewWarehouse from "./components/Business/Home/newWH";
import Shipping from "./components/Business/Shipping/shipping";
import ToBusiness from "./components/Business/ShipToBusiness/toBusiness";
import ToCustomer from "./components/Business/ShipToCust/ToCustomer";
import WareHouse from "./components/Business/WareHouse/wareHouse";
import Customer from "./components/Customer/customer";
import Landingpage from "./components/Home/Homepage";

function App() {
  const isUser= localStorage.getItem("access token")?true:false;
  return <>
  {/* <NewWarehouse /> */}
  <BrowserRouter>
    <Routes>
     <Route path="/" exact element={<Landingpage />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot" element={<ForgotPwd />} />
    <Route exact path="/otp" element={<AuthOtp />} />
    <Route exact path="/reset" element={<ResetPwd />} />
    <Route exact path="/signup" element={<SignUp />} />
    <Route exact path="/signuptwo" element={<SignUpTwo />} />
    <Route exact path="/verifyemail" element={<EmailVerify />} />
    <Route exact path="/adminlogin" element={<AdminLogin />} />
    <Route exact path="/homepage" element={<HomePage/>} />
    <Route path="/shipping" element={<Shipping />} />
    <Route path="/tocustomer" element={<ToCustomer /> } />
    <Route path="/tobusiness" element={<ToBusiness />} />
    <Route path="/warehouse/:id" exact element={<WareHouse />} />
    <Route path="/admin" exact element={<Admin /> } />
    <Route path="/customer" exact element={<Customer /> } />
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
