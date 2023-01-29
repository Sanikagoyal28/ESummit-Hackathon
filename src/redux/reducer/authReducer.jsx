const initialState ={
    loading:false,
    response:"",
    user:{},
    name2:'',
    username2:'',
    error:"",
    toFgtPwd:false,
    toOtp:false,
    toRstPwd:false,
    toSignOtp:false,
    toSignUpTwo:false,
    toHome:false,
    token:false,
    toHome2:false
}
 const AuthReducer =(state=initialState, action)=>{
    switch(action.type){
        case "REQUEST_STARTED":{
            return {
                ...state, loading:true, toFgtPwd:false
            }
        }
        case "REQUEST_SUCCEDED":{
            console.log(action.payload)
            localStorage.setItem("access token", action.payload.access)
            sessionStorage.setItem("name", action.payload.name)
            return {...state,
                loading:false,
                response:action.payload.message[0],
                user:action.payload.user,
                error:"",
                toFgtPwd:true,
                toHome:true,
                token:true,
            }
        }
        case "REQUEST_FAILED":{
            console.log(action.payload)
            return {
                loading:false,
                response:"",
                error:action.payload.response.data.msg,
                toFgtPwd:false
            }
        }
        case "FGT_EMAIL_STARTED":{
            console.log(action.payload)
            return {
                ...state, loading:true,toOtp:false
            }
        }
        case "FGT_EMAIL_SUCCEDED":{
            console.log(action.payload)
            return {...state,
                loading:false,
                response:action.payload.message[0],
                error:"",
                toOtp:true
            }
        }
        case "FGT_EMAIL_FAILED":{
            console.log(action.payload)
            return {
                loading:false,
                response:"",
                error:action.payload.response.data.msg,
                toOtp:false
            }
        }
        case "OTP_STARTED":{
            console.log(action.payload)
            return {
                ...state, loading:true,toRstPwd:false
            }
        }
        case "OTP_SUCCEDED":{
            console.log(action.payload)
            localStorage.setItem("access token", action.payload.token)
            localStorage.setItem("isToken", "true")
            return {...state,
                loading:false,
                response:action.payload.message[0],
                error:"",
                toRstPwd:true,
                token:true,
            }
        }
        case "OTP_FAILED":{
            console.log(action.payload)
            console.log(action.payload.response.data.msg)
            return {
                loading:false,
                response:"",
                error:action.payload.response.data.msg,
                toRstPwd:false
            }
        }
        case "RESEND_STARTED":{
            console.log(action.payload)
            return {
                ...state, loading:true,toHome:false
            }
        }
        case "RESEND_SUCCEDED":{
            console.log(action.payload)
            return {...state,
                loading:false,
                response:action.payload.message[0],
                error:"",
                toHome:true
            }
        }
        case "RESEND_FAILED":{
            console.log(action.payload)
            console.log(action.payload.response.data.msg)
            return {
                loading:false,
                response:"",
                error:action.payload.response.data.msg,
                toHome:false
            }
        }
        case "RESET_STARTED":{
            console.log(action.payload)
            return {
                ...state, loading:true
            }
        }
        case "RESET_SUCCEDED":{
            console.log(action.payload)
            return {...state,
                loading:false,
                toHome:true,
                // response:action.payload.message[0],
                error:""
            }
        }
        case "RESET_FAILED":{
            console.log(action.payload)
            console.log(action.payload.response.data.msg)
            return {
                loading:false,
                response:"",
                toHome:false,
                error:action.payload.response.data.message[0]
            }
        }
        case "SIGNUP_STARTED":{
        localStorage.setItem("isToken", "false")
            console.log(action.payload)
            return {
                ...state, loading:true, toSignOtp:false
            }
        }
        case "SIGNUP_SUCCEDED":{
            console.log(action.payload)
            return {...state,
                loading:false,
                response:action.payload.message[0],
                error:"",
                toSignOtp:true
            }
        }
        case "SIGNUP_FAILED":{
            console.log(action.payload)
            console.log(action.payload.response.data.msg)
            return {
                loading:false,
                response:"",
                error:action.payload.response.data.msg,
                toSignOtp:false
            }
        }
        case "SIGNUP_TWO_STARTED":{
            console.log(action.payload)
            return {
                ...state, loading:true,
                toHome2:false
            }
        }
        case "SIGNUP_TWO_SUCCEDED":{
            console.log(action.payload)
            localStorage.setItem("access token", action.payload.access)
            sessionStorage.setItem("name", action.payload.name)
            // sessionStorage.setItem("access token", action.payload.token)
            return {...state,
                loading:false,
                // response:action.payload.message[0],
                error:"",
                toHome2:true,
                user:action.payload.user,
            }
        }
        case "SIGNUP_TWO_FAILED":{
            console.log(action.payload)
            return {
                loading:false,
                response:"",
                // error:action.payload.response.data.msg,
                toHome2:false
            }
        }
        case "NAME_VIA_GOOGLE":{
            return {
             ...state , name2:action.payload.name, username2:action.payload.username
            }
        }
        case "INFO_VIA_GOOGLE":{
            console.log(action.payload)
            return {...state, 
            user:action.payload.user
            }
        }
        default: return state;
    }
 }

 export default AuthReducer