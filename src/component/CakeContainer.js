import React, { useState } from "react";
import { buyCakes } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  // UI State
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number Of Cakes : {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCakes(number)}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfCakes: state.cakes.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: (number) => dispatch(buyCakes(number)),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(CakeContainer);
