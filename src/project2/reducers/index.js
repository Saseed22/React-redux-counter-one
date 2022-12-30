import counterReducer from './counter';
import loggedReducer from "./islogged";
import { combineReducers } from 'redux';


const allReducer = combineReducers({
    counter: counterReducer,
    login: loggedReducer,
})


export default allReducer;