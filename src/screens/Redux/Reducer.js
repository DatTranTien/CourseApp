import { Alert } from "react-native";
import { CHANGE_LESSION, CHANGE_PAUSE } from "./Constans";

const initialState = {
Lession: "https://www.youtube.com/watch?v=XPXVVuGJDBY&list=PLfYC8O62g9LNgic6OQ7-3jM2s1YDNASbK",
pause:"0"
};
const changeReducer = (state = initialState, action) => {
switch(action.type) {
case CHANGE_LESSION:
return {
...state, 
Lession:action.payload,
};
case CHANGE_PAUSE:
    return{
        ...state,
        pause:action.payload
    }
default:
return state;
}
}
export default changeReducer;