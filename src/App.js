import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//routing
import { Router, Route, hashHistory, IndexRoute } from "react-router";

//import Users from "./containers/users";
import WidgetList from "./components/widgets";
import MainLayout from "./components/main_layout";
import SearchLayout from "./components/search_layout";
import UserList from "./components/userlist";
import Home from "./components/home";
import Table from "./components/table.js";
import Map from "./components/map.js";

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={Home} />
          <Route component={SearchLayout}>
            <Route path="table" component={Table} />
            <Route path="map" component={Map} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
