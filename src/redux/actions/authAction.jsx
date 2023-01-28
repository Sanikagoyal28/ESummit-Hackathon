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
                    // toast.success(`${res.data.message[0]}`, {
                    //     position: "top-center",
                    //     theme: "light",
                    // })
                    dispatch({
                        type: "REQUEST_SUCCEDED",
                        payload: res.data
                    })
                })
                .catch((err) => {
                    // toast.error(`${err.response.data.message[0]}`, {
                    //     position: "top-center",
                    //     theme: "light",
                    // })
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
                    // toast.success(`${res.data.message[0]}`, {
                    //     position: "top-center",
                    //     theme: "light",
                    // })
                    dispatch({
                        type: "FGT_EMAIL_SUCCEDED",
                        payload: res.data
                    })
                })
                .catch((err) => {
                    // toast.error(`${err.response.data.message[0]}`, {
                    //     position: "top-center",
                    //     theme: "light",
                    // })
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
                // toast.success(`${res.data.message[0]}`, {
                //     position: "top-center",
                //     theme: "light",
                // })
                dispatch({
                    type: "OTP_SUCCEDED",
                    payload: res.data
                })
            })
            .catch((err) => {
                // toast.error(`${err.response.data.message[0]}`, {
                //     position: "top-center",
                //     theme: "light",
                // })
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
            .then((res) => dispatch({
                type: "RESEND_SUCCEDED",
                payload: res.data
            }))
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
                .then((res) => dispatch({
                    type: "SIGNUP_SUCCEDED",
                    payload: res.data
                })
                    // navigate("/verifyemail")
                )
                .catch((err) => {
                    console.log(err)
                    // toast.error(`${err.response.data.message[0]}`, {
                    //     position: "top-center",
                    //     theme: "light",
                    // })
                    dispatch({
                        type: "SIGNUP_FAILED",
                        payload: err
                    })
                })
    }
}
export { SignUpUser }

const EmailAction = (data) => {
    return async function (dispatch) {
        dispatch({ type: "EMAIL_VERIFY_STARTED" })
        await BaseUrl.post(`/email/verify`, data)
            .then((res) => dispatch({
                type: "EMAIL_VERIFY_SUCCEDED",
                payload: res.data
            })
            )
            .catch((err) => {
                dispatch({
                    type: "EMAIL_VERIFY_FAILED",
                    payload: err
                })
            })
    }
}
export { EmailAction }

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

const GoogleAction = () => {
    return async function (dispatch) {
        dispatch({ type: "GOOGLE_STARTED" })
        await BaseUrl.get(`/auth/google/url`)
            .then((res) => dispatch({
                type: "GOOGLE_SUCCEDED",
                payload: res.data
            }))
            .catch((err) => {
                console.log(err)
            })

    }
}
export { GoogleAction }

const GoogleTwoAction = (url) => {
    return async function (dispatch) {
        dispatch({ type: "GOOGLE_TWO_STARTED" })
        await BaseUrl.get(`/auth/google?code=${url}`)
            .then((res) => dispatch({
                type: "GOOGLE_TWO_SUCCEDED",
                payload: res
            }))
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: "GOOGLE_TWO_FAILED",
                    payload: err
                })
            })

    }
}
export { GoogleTwoAction }

export const nameViaGoogle = (name, username) => {
    return {
        type: "NAME_VIA_GOOGLE",
        payload: {
            name, username
        }
    }
}

export const infoViaGoogle = (user) => {
    return {
        type: "INFO_VIA_GOOGLE",
        payload: {
            user
        }
    }
}