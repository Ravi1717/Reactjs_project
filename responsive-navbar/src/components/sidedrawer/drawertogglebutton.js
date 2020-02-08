import React from "react";
import "./togglebutton.css";

const Drawertogglebutton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default Drawertogglebutton;
