import React, { Component } from "react";
import Background from "./photo.jpg";
import "./header.css";

const mystyles = {
  backgroundImage: `url(${Background})`,
  height: "40vh",
  backgroundSize: "cover"
};
class Header extends Component {
  render() {
    return (
      <header style={mystyles}>
        <h1>{this.props.title}</h1>
        <p>A free react theme by Ravi Verma</p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
}
export default Header;
