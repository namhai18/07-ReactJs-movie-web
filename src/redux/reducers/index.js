import {combineReducers} from "redux";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer";

// Khởi tạo reducer cho project
const rootReducer = combineReducers({
    // key
    // value
    userReducer, // userReducer:userReducer (key trùng value)
    movieReducer
});

export default rootReducer;