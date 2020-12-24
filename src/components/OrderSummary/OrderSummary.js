import React from "react";
import Aux from "../../hoc/Auxi";
import Button from "../UI/Button/Button";

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
      <p>A delicious burger with following ingredients :</p>
      <ul>{summary}</ul>
      <p>Total : {props.total} </p>
      <h4>Continue to Checkout ?</h4>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
