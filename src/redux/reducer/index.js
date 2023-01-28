import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import { Warehouse } from "./warehouse";

const rootReducer = combineReducers({
  AuthReducer,
  Warehouse
})

export default rootReducer