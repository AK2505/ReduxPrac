import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number Of IceCream : {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProp, mapDispatchToProps)(IceCreamContainer);
