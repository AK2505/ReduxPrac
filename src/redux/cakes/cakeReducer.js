import { BUY_CAKE } from "./cakeTypes";

//Application State
const initialApplicationState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialApplicationState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer