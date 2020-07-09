import { BUY_ICECREAM } from "./iceCreamTypes";

const initialAppState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer
