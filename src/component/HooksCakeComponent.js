import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../redux";
function HooksCakeComponent() {
  const numberOfCakes = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes by hook - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCakes())}>Buy Cakes</button>
    </div>
  );
}

export default HooksCakeComponent;
