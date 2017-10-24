import React, {Component} from 'react'

export default class Table extends Component{
  render() {
    return (
      <div className="row">
  						<div className="col-md-12">
                <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Routes</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Home</td>
        <td>Marker 1, Marker 1, Marker 1</td>
          <td><button className="glyphicon glyphicon-trash"></button></td>
      </tr>
      <tr>
        <td>Work</td>
        <td>Marker 1, Marker 1, Marker 1, Marker 1, Marker 1, Marker 1</td>
          <td><button className="glyphicon glyphicon-trash"></button></td>
      </tr>
      <tr>
        <td>Club</td>
        <td>Marker 1, Marker 1, Marker 1, Marker 1</td>
          <td><button className="glyphicon glyphicon-trash"></button></td>
      </tr>
    </tbody>
  </table>
  					</div>
          </div>
    )
  }
}
