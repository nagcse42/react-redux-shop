import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const roorReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default roorReducer;
