import React, {Component} from 'react';
import axios from "axios";
import markerLogo from "./../markerLogo.png";

export default class Table extends Component{
  constructor(props) {
     super(props);
  this.state = {
      line : [
              {lat : 47.5, lon : -122.3, image : markerLogo, alt : 20000 },
              {lat : 36.2, lon : -115.0, image : markerLogo, alt : 20000 },
              {lat : 39.0, lon : -94.6, image : markerLogo, alt : 20000 },
              {lat : 30.4, lon : -81.6, image : markerLogo, alt : 20000 },
          ],
      routes: []
  }
};
  componentWillMount() {
    axios
      .get("http://localhost:3001/allroutes")
      .then(res =>
        {
          var routes = this.state.routes;
          var result = res.data.routes;
          console.log(result);
          result.map((route, i) =>
          routes.push( route ));
          this.setState({ routes });
          console.log(routes);
        })
      .catch(error=>console.log(error));
    }
addRoute = () =>{
    axios
      .post("http://localhost:3001/markerRoutes", {
        name: "cuba" + Math.random(),
        routes: this.state.line
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
}

  render() {
    const {markerLogo, routes} = this.state;
    return (
      <div className="row">
  						<div className="col-md-12">
                <button
                   onClick={() => {this.addRoute()}}>
                   Create new route</button>
                <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Routes</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {routes.map((route, index) =>
        <tr>
         <td key={index}>{route.name}</td>
         <td key={index}>{route.routes}</td>
         <td key={index}><button className="glyphicon glyphicon-trash"></button></td>
       </tr>)}
    </tbody>
  </table>
  					</div>
          </div>
    )
  }
}
