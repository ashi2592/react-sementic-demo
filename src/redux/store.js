import { createStore } from "redux";
import AppReducer from './reducer';


const configStore = () =>{
    return createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

}

export default configStore;