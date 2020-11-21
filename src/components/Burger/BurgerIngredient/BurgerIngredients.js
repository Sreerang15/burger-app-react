import React from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";
import { render } from "react-dom";
let ingredient = null;

const burgerIngredient = (props) => {
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

/*burgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired,
};
*/
export default burgerIngredient;
