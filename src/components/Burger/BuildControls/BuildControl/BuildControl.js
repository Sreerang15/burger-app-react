import React from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.added}>
      (+) Add
    </button>
    <button className={classes.Less} onClick={props.deleted}>
      (-) Delete
    </button>
    <p>{`$${props.prices}`}</p>
  </div>
);

export default buildControl;
