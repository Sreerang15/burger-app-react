import React from "react";
import Aux from "../../hoc/Auxi";

const orderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((el) => {
    return (
      <li>
        {el} : {props.ingredients[el]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>{summary}</ul>
    </Aux>
  );
};

export default orderSummary;
