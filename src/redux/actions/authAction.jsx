import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import BaseUrl from "./BaseUrl"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogInUser = (data, condition) => {
    return async function (dispatch) {
        if (condition) {
            dispatch({ type: "REQUEST_STARTED" })
            await BaseUrl.post(`/auth/login/`, data)
                .then((res) => {
                    toast.success("Login successful", {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                        type: "REQUEST_SUCCEDED",
                        payload: res.data
                    })
                })
                .catch((err) => {
                    toast.error(`${err.response.data.message[0]}`, {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                        type: "REQUEST_FAILED",
                        payload: err
                    })
                })
        }
    }
}
export default LogInUser

const FgtPwdAction = (email, condition) => {
    return async function (dispatch) {
        if (condition) {
            console.log(email)
            dispatch({ type: "FGT_EMAIL_STARTED" })
            await BaseUrl.post(`/auth/sendemailOTP/`, { email })
                .then((res) => {
                    toast.success("Otp sent on mail", {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                        type: "FGT_EMAIL_SUCCEDED",
                        payload: res.data
                    })
                })
                .catch((err) => {
                    toast.error(`${err.response.data.message[0]}`, {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                        type: "FGT_EMAIL_FAILED",
                        payload: err
                    })
                })
        }
    }
}
export { FgtPwdAction }

const OtpAction = (data) => {
    return async function (dispatch) {
        dispatch({ type: "OTP_STARTED" })
        await BaseUrl.post(`/auth/verifyemailOTP/`, data)
            .then((res) => {
                toast.success("Otp verified", {
                    position: "top-center",
                    theme: "light",
                })
                dispatch({
                    type: "OTP_SUCCEDED",
                    payload: res.data
                })
            })
            .catch((err) => {
                toast.error(`${err.response.data.message[0]}`, {
                    position: "top-center",
                    theme: "light",
                })
                dispatch({
                    type: "OTP_FAILED",
                    payload: err
                })
            })
    }
}
export { OtpAction }

const ResendOtpAction = (email) => {
    return async function (dispatch) {
        dispatch({ type: "RESEND_STARTED" })
        await BaseUrl.post(`/resendotp`, { email })
            .then((res) => {
                toast.success("Otp verified", {
                    position: "top-center",
                    theme: "light",
                })
                dispatch({
                type: "RESEND_SUCCEDED",
                payload: res.data
            })
        })
            // navigate("/reset"))
            .catch((err) => {
                toast.error(`${err.response.data.message[0]}`, {
                    position: "top-center",
                    theme: "light",
                })
                dispatch({
                    type: "RESEND_FAILED",
                    payload: err
                })
            })
    }
}
export { ResendOtpAction }

const SignUpUser = (email) => {
    return async function (dispatch) {
            dispatch({ type: "SIGNUP_STARTED" })
            await BaseUrl.post(`/auth/signup/`, { email })
                .then((res) => {
                    toast.success("Otp sent on mail", {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                    type: "SIGNUP_SUCCEDED",
                    payload: res.data
                })
                    // navigate("/verifyemail")
            })
                .catch((err) => {
                    console.log(err)
                    toast.error(`${err.response.data.message[0]}`, {
                        position: "top-center",
                        theme: "light",
                    })
                    dispatch({
                        type: "SIGNUP_FAILED",
                        payload: err
                    })
                })
    }
}
export { SignUpUser }


const SignUpResend = (email) => {
    return async function (dispatch) {
        dispatch({ type: "SIGNUP_STARTED" })
        await BaseUrl.post(`/email`, { email })
            .then((res) => dispatch({
                type: "SIGNUP_SUCCEDED",
                payload: res.data
            }))
            .catch((err) => {
                dispatch({
                    type: "SIGNUP_FAILED",
                    payload: err
                })
            })
    }
}
export { SignUpResend }



const SignUpTwoUser = (data) => {
    return async function (dispatch) {
        // if(condition){
        dispatch({ type: "SIGNUP_TWO_STARTED" })
        await BaseUrl.post(`/auth/verifysignup/`, data)
            .then((res) => dispatch({
                type: "SIGNUP_TWO_SUCCEDED",
                payload: res.data
            }))
            .catch((err) => {
                // toast.error(`${err.response.data.message[0]}`, {
                //     position: "top-center",
                //     theme: "light",
                // })
                dispatch({
                    type: "SIGNUP_TWO_FAILED",
                    payload: err
                })
            })
        // }
    }
}
export { SignUpTwoUser }

const ResetAction = (data) => {
    return async function (dispatch) {
        dispatch({ type: "RESET_STARTED" })
        await BaseUrl.patch(`/auth/resetpassword/`, data)
        
            .then((res) => {
                toast.success('Password reset successfully', {
                    position: "top-center",
                    theme: "light",
                })
                dispatch({
                type: "RESET_SUCCEDED",
                payload: res.data
            })
        })
            .catch((err) => {
                //  toast.error(`${err.response.data.message[0]}`, {
                //     position: "top-center",
                //     theme: "light",
                // })
                dispatch({
                    type: "RESET_FAILED",
                    payload: err
                })
            })
    }
}
export { ResetAction }


