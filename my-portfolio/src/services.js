import React, { Component } from "react";
import "./services.css";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>SERVICES</h3>
        <h2>What we offer</h2>
        <div className="row">
          <div>
            <span>
              <ion-icon name="phone-portrait"></ion-icon>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any size</p>
          </div>
          <div>
            <span>
              <ion-icon name="brush"></ion-icon>
            </span>
            <h4>Redesigned</h4>
            <p>Freshly designed for React</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up"></ion-icon>
            </span>
            <h4>Favorite</h4>
            <p>Millions of user start React</p>
          </div>
          <div>
            <span>
              <ion-icon name="help"></ion-icon>
            </span>
            <h4>Queries</h4>
            <p>Your queries here</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
