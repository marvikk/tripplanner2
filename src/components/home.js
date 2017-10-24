import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  componentWillMount() {
    axios
      .post("http://localhost:3001/destination", {
        name: "cuba" + Math.random()
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/alldestinations")
      .then(res => console.log(res));
  }
  render() {
    return <div>Home!</div>;

  }
}
