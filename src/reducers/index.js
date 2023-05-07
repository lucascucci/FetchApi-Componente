import {combineReducers} from "redux";
import contadorReducer from "./contadorReducer";




const rootReducer = combineReducers({


    counter: contadorReducer,


    
})


export default rootReducer;