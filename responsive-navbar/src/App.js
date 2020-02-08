import React, { Component } from "react";
import Toolbar from "./components/Toolbar/toolbar";
import Sidedraw from "./components/sidedrawer/sidedrawer";
import Backdrop from "./components/backdrop/backdrop";

class App extends Component {
  state = {
    sideDrawOpen: false
  };

  drawToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawOpen: !prevState.sideDrawOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawToggleClickHandler={this.drawToggleClickHandler} />
        <Sidedraw show={this.state.sideDrawOpen} />
        {backdrop}
        <main style={{ marginTop: "80px" }}>
          <p>This is a page content</p>
        </main>
      </div>
    );
  }
}
export default App;
