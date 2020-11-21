import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredients";

const burger = (props) => {
  const keys = Object.keys(props.ingredients);
  const quantity = [];

  keys.forEach((el) => {
    for (let j = 0; j < props.ingredients[el]; j++) {
      quantity.push(el);
    }
  });
  let arr = [];
  if (quantity.length === 0) {
    arr.push(<p>Please start adding ingredients</p>);
  } else {
    arr = quantity.map((el, i) => {
      return <BurgerIngredient key={el + i} type={el} />;
    });
  }
  const transFormedIngredients = [...arr];

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transFormedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
