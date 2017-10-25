import React, { Component } from "react";
import axios from "axios";
import markerLogo from "./../markerLogo.png";
import Map from "./map";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: [
        { lat: 47.5, lon: -122.3, image: markerLogo, alt: 20000 },
        { lat: 36.2, lon: -115.0, image: markerLogo, alt: 20000 },
        { lat: 39.0, lon: -94.6, image: markerLogo, alt: 20000 },
        { lat: 30.4, lon: -81.6, image: markerLogo, alt: 20000 }
      ],
      routes: [],
      markerAdding: false,
      selectedRouteName: ""
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:3001/allroutes")
      .then(res => {
        console.log(res.data.routes);
        this.setState({ routes: res.data.routes });
        // var routes = this.state.routes;
        // var result = res.data.routes;
        // console.log(result);
        // result.map((route, i) =>
        // routes.push( route ));
        // this.setState({ routes });
        // console.log(routes);
        console.log(this.state.routes);
      })
      .catch(error => console.log(error));
  }

  routeSelectHandler(routes, routeName) {
    this.setState({ markerAdding: false });
    console.log(routes);
    console.log(routeName);
    axios
      .post("http://localhost:3001/markerRoutes", {
        name: routeName,
        routes: routes
      })
      .then(response => {
        console.log(response);
        var routes = this.state.routes;
        routes.push(response.data);
        this.setState({ routes });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addRoute = () => {
    var selectedRouteName = prompt("Please enter rout name", "El Camino");
    this.setState({ selectedRouteName });

    this.setState({ markerAdding: true });

    // axios
    //   .post("http://localhost:3001/markerRoutes", {
    //     name: "cuba" + Math.random(),
    //     routes: this.state.line
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    const { markerLogo, routes } = this.state;

    if (!this.state.markerAdding) {
      return (
        <div className="row">
          <div className="col-md-12">
            <button
              onClick={() => {
                this.addRoute();
              }}
            >
              Create new route
            </button>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Routes</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.routes.map((route, index) => (
                  <tr>
                    <td key={index}>{route.name}</td>
                    <td key={index + 1}>
                      {route.routes.map(route => {
                        return (
                          <ul>
                            <div>rout coords:</div>
                            <li>lat:{route[0].lat}</li>
                            <li>lon:{route[0].lon}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td key={index + 2}>
                      <button className="glyphicon glyphicon-trash" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else
      return (
        <Map
          selectView
          name={this.state.selectedRouteName}
          routeSelectHandler={this.routeSelectHandler.bind(this)}
        />
      );
  }
}
