import { BUY_CAKE } from "./cake-constants";

const initialState = {
  numberOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: --state.numberOfCakes
      };
    default:
      return state;
  }
};

export default cakeReducer;
