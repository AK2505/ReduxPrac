import { BUY_CAKE } from "./cakeTypes";
export const buyCakes = (number=1) => {
  return {
    type: BUY_CAKE,
    payload : number
  };
};
