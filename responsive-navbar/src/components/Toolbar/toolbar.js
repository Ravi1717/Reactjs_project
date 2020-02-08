import React from "react";
import Togglebutton from "../sidedrawer/drawertogglebutton";
import "./toolbar.css";
const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar-toggle-button">
        <Togglebutton click={props.drawToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">Home</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Toolbar;
