import { BUY_ICECREAM } from "./iceCeam-constants";

const initialState = {
  numberOfIceCreams: 10
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: --state.numberOfIceCreams
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
