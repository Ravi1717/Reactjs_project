import React from "react";
import "./sidedraw.css";

const Sidedraw = props => {
  let draweclasses = "sideDraw";
  if (props.show) {
    draweclasses = "sideDraw open";
  }
  return (
    <nav className={draweclasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidedraw;
