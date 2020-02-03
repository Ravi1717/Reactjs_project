import React, { Component } from "react";
//import './App.css';
import "./navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "About", "Services", "Portfolio", "Contact"];
    const navLinks = sections.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });
    return (
      <nav>
        <h2 className="logo">My React Portfolio</h2>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}
export default Navigation;
