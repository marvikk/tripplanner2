import React, { Component } from "react";
import { Link } from "react-router";

export default class MainLayout extends Component {
  render() {

    return (
  <div>
          <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">My Trip</div>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">Home!</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </div>
    </nav>

    <div className="container">
         <main>{this.props.children}</main>
    </div>
    </div>
    );
  }
}
